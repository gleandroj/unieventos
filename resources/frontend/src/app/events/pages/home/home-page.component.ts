import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CheckInDialogComponent, FeedbackDialogComponent} from '../../dialogs';
import {ProgrammingService} from "../../../core/services";
import {EditionCollection} from "../../../core/entities/edition-collection";
import {ProgrammingEntity} from "../../../core/entities/programming-entity";


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: [
        './home-page.component.less'
    ],
})
export class HomePageComponent {
    public editions: EditionCollection[];

    constructor(
        private dialog: MatDialog,
        private programmingService: ProgrammingService
    ) {
        this.programmingService.editionCollection()
            .subscribe((editions) => this.editions = editions);
    }

    feedback(programming: ProgrammingEntity, event: Event) {
        event.stopPropagation();
        this.dialog.open(
            FeedbackDialogComponent,
            {}
        ).afterClosed()
            .subscribe((data) => console.log(data));
    }

    checkIn(programming: ProgrammingEntity, event: Event) {
        event.stopPropagation();
        this.dialog.open(
            CheckInDialogComponent,
            {}
        ).afterClosed()
            .subscribe((data) => console.log(data));
    }
}

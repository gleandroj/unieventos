import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CheckInDialogComponent, FeedbackDialogComponent} from '../../dialogs';
import {ProgrammingService, RequestCheckInService} from '../../../core/services';
import {EditionCollection} from '../../../core/entities/edition-collection';
import {ProgrammingEntity} from '../../../core/entities/programming-entity';
import {switchMap} from "rxjs/operators";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: [
        './home-page.component.less'
    ],
})
export class HomePageComponent {
    public editions: EditionCollection[];
    public loading: boolean;

    constructor(
        private dialog: MatDialog,
        private programmingService: ProgrammingService,
        private requestCheckInService: RequestCheckInService
    ) {
        this.refreshData();
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
        this.requestCheckInService.requestCheckIn(
            programming
        ).pipe(
            switchMap(data => this.dialog.open(
                CheckInDialogComponent,
                {
                    data: {
                        ...data,
                        programming: programming
                    },
                }
            ).afterClosed())
        ).subscribe();
    }

    private refreshData() {
        this.loading = true;
        this.programmingService.editionCollection()
            .subscribe((editions) => {
                this.editions = editions;
                this.loading = false;
            });
    }
}

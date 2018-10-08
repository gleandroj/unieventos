import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CheckInDialogComponent, FeedbackDialogComponent} from '../../dialogs';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: [
        './home-page.component.less'
    ],
})
export class HomePageComponent {

    constructor(public dialog: MatDialog) {
    }

    feedback(event: Event) {
        event.stopPropagation();
        this.dialog.open(
            FeedbackDialogComponent,
            {}
        ).afterClosed()
            .subscribe((data) => console.log(data));
    }

    checkIn(event: Event) {
        event.stopPropagation();
        this.dialog.open(
            CheckInDialogComponent,
            {}
        ).afterClosed()
            .subscribe((data) => console.log(data));
    }
}

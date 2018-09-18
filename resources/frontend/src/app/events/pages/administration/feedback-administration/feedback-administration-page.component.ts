import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FeedbackFormDialogComponent } from '../../../dialogs';

@Component({
    selector: 'app-feedback-administration-page',
    templateUrl: './feedback-administration-page.component.html',
    styleUrls: [
        './feedback-administration-page.component.less'
    ],
})
export class FeedbackAdministrationPageComponent {

    constructor(private matDialogService: MatDialog) {
    }

    add() {
        this.matDialogService
            .open(FeedbackFormDialogComponent)
            .afterClosed()
            .subscribe(() => {
                console.log('ok');
            });
    }
}

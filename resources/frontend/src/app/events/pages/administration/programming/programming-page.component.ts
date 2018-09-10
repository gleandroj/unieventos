import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProgrammingFormDialogComponent } from '../programming-form-dialog/programming-form-dialog.component';

@Component({
    selector: 'app-programming-page',
    templateUrl: './programming-page.component.html',
    styleUrls: [
        './programming-page.component.less'
    ],
})
export class ProgrammingPageComponent {

    constructor(private matDialogService: MatDialog) {

    }

    stop(event: Event) {
        event.stopPropagation();
    }

    add() {
        this.matDialogService
            .open(ProgrammingFormDialogComponent)
            .afterClosed()
            .subscribe(() => {
                console.log('ok');
            });
    }
}

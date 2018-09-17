import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProgrammingFormDialogComponent, ConfirmDialogComponent } from '../../../dialogs';

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

    delete(event: Event) {
        event.stopPropagation();
        this.matDialogService
            .open(ConfirmDialogComponent, {
                data: {
                    message: 'Tem certeza que deseja deletar a programação?'
                }
            })
            .afterClosed()
            .subscribe(() => {
                console.log('ok');
            });
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

import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProgrammingFormDialogComponent, ConfirmDialogComponent} from '../../../dialogs';

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
            .subscribe((resp) => {
                console.log(resp);
            });
    }

    edit(item, readOnly?: boolean, $event?: Event, title?: string) {
        if ($event) {
            $event.stopPropagation();
        }
        this.matDialogService
            .open(ProgrammingFormDialogComponent, {
                data: {
                    title: title ? title : 'Editar Programação',
                    readOnly: readOnly
                }
            })
            .afterClosed()
            .subscribe(() => {
                console.log('ok');
            });
    }
}

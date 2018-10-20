import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProgrammingFormDialogComponent, ConfirmDialogComponent} from '../../../dialogs';
import {ProgrammingService} from '../../../../core/services';
import {EditionCollection} from '../../../../core/entities/edition-collection';
import {ProgrammingEntity} from '../../../../core/entities/programming-entity';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ToastService} from '../../../../support/services';

@Component({
    selector: 'app-programming-page',
    templateUrl: './programming-page.component.html',
    styleUrls: [
        './programming-page.component.less'
    ],
})
export class ProgrammingPageComponent implements OnInit {
    public editions: EditionCollection[];
    public loading: boolean;

    constructor(
        private matDialogService: MatDialog,
        private programmingService: ProgrammingService,
        private toastr: ToastService
    ) {
        this.refreshData();
    }

    ngOnInit(): void {

    }

    delete(programming: ProgrammingEntity, event: Event) {
        event.stopPropagation();
        this.matDialogService
            .open(ConfirmDialogComponent, {
                data: {
                    message: 'Tem certeza que deseja deletar a programação?'
                }
            })
            .afterClosed()
            .pipe(switchMap((resp) => {
                if (resp) {
                    return this.programmingService.delete(programming.id);
                } else {
                    return of(false);
                }
            }))
            .subscribe((resp: any) => {
                if (resp) {
                    this.refreshData();
                    this.toastr.open(
                        resp.message
                    );
                }
            });
    }

    edit(programming: ProgrammingEntity, readOnly?: boolean, $event?: Event, title?: string) {
        if ($event) {
            $event.stopPropagation();
        }
        this.matDialogService
            .open(ProgrammingFormDialogComponent, {
                data: {
                    title: title ? title : 'Editar Programação',
                    readOnly: readOnly,
                    programming: programming
                },
                panelClass: 'dialog-fullscreen'
            })
            .afterClosed()
            .subscribe((resp) => {
                if (resp) {
                    this.refreshData();
                }
            });
    }

    private refreshData() {
        this.loading = true;
        this.programmingService.editionCollection().subscribe((data) => {
            this.editions = data;
            this.loading = false;
        });
    }
}

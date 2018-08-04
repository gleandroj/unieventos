import {Injectable, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EMPTY, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {
    AlertDialogComponent
} from '../components/alert-dialog/alert-dialog.component';
import {
    ConfirmDialogComponent
} from '../components/confirm-dialog/confirm-dialog.component';
import {
    InputDialogComponent
} from '../components/input-dialog/input-dialog.component';

import {AbstractDialogComponent} from '../components/abstract-dialog/abstract-dialog.component';

@Injectable()
export class DialogService {

    protected instances: BsModalRef[] = [];

    public constructor(private modalService: BsModalService) {
        this.modalService.onHide.subscribe((ref) => {
            this.instances.pop();
        });
    }

    protected openModal(view: TemplateRef<any> | any, options?: any) {
        const ref = this.modalService.show(view, options);
        this.instances.push(ref);
        return ref;
    }

    public alert(title: string, body: string): Observable<any> {
        return this.openDialogComponent(AlertDialogComponent, {
            initialState: {
                title: title,
                body: body
            }
        }, true);
    }

    public confirm(message = 'Realmente deseja alterar as informações?', catch_error = true): Observable<any> {
        return this.openDialogComponent(ConfirmDialogComponent, {
            initialState: {
                message: message
            },
            class: 'modal-sm'
        }, catch_error);
    }

    public input(
        label,
        type = 'text',
        autoHide = true,
        confirmButtonText = 'Salvar',
        cancelButtonText = 'Cancelar',
        catch_error = true,
        rows?: number,
        classSize?: string
    ): Observable<any> {
        return this.openDialogComponent(InputDialogComponent, {
            initialState: {
                label: label,
                type: type,
                autoHide: autoHide,
                confirmButtonText: confirmButtonText,
                cancelButtonText: cancelButtonText,
                rows: rows
            },
            class: classSize ? classSize : 'modal-sm'
        }, catch_error);
    }

    public openDialogComponent(
        component: any,
        config?: any,
        catch_error = false,
    ): Observable<any> {
        const ref = this.openModal(component, config);

        const model = (<AbstractDialogComponent>ref.content);

        if (catch_error) {
            return model.observable.pipe(catchError(() => {
                return EMPTY;
            }));
        }

        return model.observable;
    }

    public hideAll() {
        this.instances.forEach((ref) => ref.hide());
    }
}

import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {AbstractDialogComponent} from '../abstract-dialog/abstract-dialog.component';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent extends AbstractDialogComponent {

    message: string;

    public constructor(public bsModalRef: BsModalRef) {
        super(bsModalRef);
    }

}

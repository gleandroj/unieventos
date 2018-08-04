import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {AbstractDialogComponent} from '../abstract-dialog/abstract-dialog.component';

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert-dialog.component.html',
})
export class AlertDialogComponent extends AbstractDialogComponent {

    title: string;
    body: string;

    public constructor(bsModalRef: BsModalRef) {
        super(bsModalRef);
    }
}

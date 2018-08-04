import {Component, Input, OnDestroy} from '@angular/core';
import {AbstractDialogComponent} from '../abstract-dialog/abstract-dialog.component';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
    selector: 'app-input-dialog',
    templateUrl: './input-dialog.component.html',
})
export class InputDialogComponent extends AbstractDialogComponent implements OnDestroy {

    @Input() public label: string;
    @Input() public type: string;
    @Input() public rows: number = null;
    @Input() public autoHide = true;
    @Input() public confirmButtonText;
    @Input() public cancelButtonText;
    @Input() public disabled;

    public input;

    public constructor(public bsModalRef: BsModalRef) {
        super(bsModalRef);
    }

    protected confirm() {
        this.observer.next({
            value: this.input,
            instance: this,
            modalRef: this.bsModalRef
        });
        if (this.autoHide) {
            this.observer.complete();
            this.bsModalRef.hide();
        }
    }
}

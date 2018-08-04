import {OnDestroy} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Observable, Subject} from 'rxjs';

export abstract class AbstractDialogComponent implements OnDestroy {

    protected observer: Subject<any>;
    public readonly observable: Observable<any>;

    public constructor(public bsModalRef: BsModalRef) {
        this.observer = new Subject();
        this.observable = this.observer;
    }

    protected confirm() {
        this.observer.next('confirm');
        this.observer.complete();
        this.bsModalRef.hide();
    }

    protected decline() {
        this.observer.error('decline');
        this.bsModalRef.hide();
    }

    ngOnDestroy(): void {
        this.observer.error('decline');
    }
}

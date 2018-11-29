import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProgrammingEntity} from '../../../core/entities/programming-entity';
import * as moment from 'moment';
import {interval, Subscription, timer} from 'rxjs';
import {RequestCheckInService} from '../../../core/services';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {ToastService} from '../../../support/services';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-check-in-dialog',
    templateUrl: 'check-in-dialog.component.html',
    styleUrls: ['./check-in-dialog.component.less']
})
export class CheckInDialogComponent implements OnInit, OnDestroy {

    error: any = null;
    imageUrl: any = null;
    expiresValue = 100;
    private programming: ProgrammingEntity;
    private expires_in: number;
    private progressInterval: Subscription;
    private duration: moment.Duration;
    private timerSub: Subscription;

    constructor(
        public dialogRef: MatDialogRef<CheckInDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {
            base64: string,
            id: number,
            expires_in: number;
            programming: ProgrammingEntity
        },
        private requestCheckInService: RequestCheckInService,
        private toastr: ToastService
    ) {
        this.programming = data.programming;
        this.imageUrl = data.base64;
        this.expires_in = data.expires_in;
    }

    ngOnInit() {
        this.initialize();
        this.verifyPooling();
    }

    ngOnDestroy(): void {
        this.progressInterval.unsubscribe();
        this.timerSub.unsubscribe();
    }

    verifyPooling() {
        this.timerSub = timer(0, 5000).pipe(
            switchMap(() => this.requestCheckInService
                .verifyCheckIn(
                    this.programming
                )
            ))
            .subscribe((data: any) => {
                if (data.confirmed) {
                    this.toastr.open('Check-in confirmado com sucesso, bom evento!');
                    this.timerSub.unsubscribe();
                    this.dialogRef.close(true);
                }
            });
    }

    initialize() {
        const diff = moment.unix(this.expires_in).diff(moment());
        this.duration = moment.duration(diff);
        const seconds = this.duration.asSeconds();
        this.expiresValue = (seconds * 100) / 60;
        this.progressInterval = interval(this.duration.asMilliseconds() / this.expiresValue).subscribe(() => {
            this.expiresValue--;
            if (this.expiresValue <= 0) {
                this.progressInterval.unsubscribe();
                this.refreshData();
            }
        });
    }

    refreshData() {
        this.imageUrl = null;
        this.progressInterval.unsubscribe();
        this.requestCheckInService
            .requestCheckIn(
                this.programming
            ).subscribe((data: any) => {
            this.imageUrl = data.base64;
            this.expires_in = data.expires_in;
            this.initialize();
        });
    }

    onCancelClick() {
        this.dialogRef.close();
    }
}

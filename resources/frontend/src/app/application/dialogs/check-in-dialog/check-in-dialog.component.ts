import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProgrammingEntity} from '../../../core/entities/programming-entity';
import * as moment from 'moment';
import {interval, Subscription, timer} from 'rxjs';
import {RequestCheckInService} from '../../../core/services';
import {ToastService} from '../../../support/services';
import Echo from 'laravel-echo';  // Included with Angular CLI.

@Component({
    selector: 'app-check-in-dialog',
    templateUrl: 'check-in-dialog.component.html',
    styleUrls: ['./check-in-dialog.component.less']
})
export class CheckInDialogComponent implements OnInit, OnDestroy {

    error: any = null;
    imageUrl: any = null;
    expiresValue = 100;

    private echoService: Echo;
    private programming: ProgrammingEntity;
    private expires_in: number;
    private progressInterval: Subscription;
    private duration: moment.Duration;
    private id: number;

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
        this.echoService = new Echo({
            broadcaster: 'pusher',
            key: 'c852a0d0332e6896c3cc',
            cluster: 'mt1',
            encrypted: true,
            namespace: 'UniEventos.Events'
        });
        this.programming = data.programming;
        this.imageUrl = data.base64;
        this.expires_in = data.expires_in;
        this.id = data.id;
    }

    ngOnInit() {
        this.initialize();
        this.listenCheckIn();
    }

    ngOnDestroy(): void {
        this.progressInterval.unsubscribe();
        this.echoService.disconnect();
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

    listenCheckIn() {
        this.echoService.listen('user-check-in', 'CheckInConfirmed', (e) => {
            if (e.id === this.id) {
                this.toastr.open('Check-in confirmado com sucesso, bom evento!');
                this.dialogRef.close(true);
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
            this.id = data.id;
            this.imageUrl = data.base64;
            this.expires_in = data.expires_in;
            this.initialize();
        });
    }

    onCancelClick() {
        this.dialogRef.close();
    }
}

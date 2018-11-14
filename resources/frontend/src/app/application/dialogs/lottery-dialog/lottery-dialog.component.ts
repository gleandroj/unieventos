import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthorizeCheckInService} from '../../../core/services';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastService} from '../../../support/services';
import {ApiException} from '../../../support/interfaces/api-exception';

@Component({
    selector: 'app-lottery-dialog',
    templateUrl: 'lottery-dialog.component.html',
    styleUrls: ['./lottery-dialog.component.less']
})
export class LotteryDialogComponent implements OnInit {

    loading: boolean;
    checkIn: any;

    constructor(
        private dialogRef: MatDialogRef<LotteryDialogComponent>,
        private authorizeCheckInService: AuthorizeCheckInService,
        private toastService: ToastService,
        @Inject(MAT_DIALOG_DATA) public data
    ) {
    }

    ngOnInit() {
    }

    lottery() {
        this.loading = true;
        this.authorizeCheckInService.lottery()
            .subscribe((data) => {
                this.loading = false;
                this.checkIn = data;
            }, (resp: HttpErrorResponse) => {
                const err = resp.error as ApiException<any>;
                this.toastService.open(err.message);
                this.loading = false;
                this.dialogRef.close();
            });
    }
}

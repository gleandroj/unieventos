import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AuthorizeCheckInService} from '../../../core/services';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-check-in-confirm-dialog',
    templateUrl: 'check-in-confirm-dialog.component.html',
    styleUrls: ['./check-in-confirm-dialog.component.less']
})
export class CheckInConfirmDialogComponent {
    checkIn: any;

    constructor(
        private dialogRef: MatDialogRef<CheckInConfirmDialogComponent>,
        private authorizeCheckInService: AuthorizeCheckInService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.checkIn = data;
    }

    confirm() {
        this.authorizeCheckInService.confirm(
            this.checkIn.token
        ).subscribe((data) => {
            this.dialogRef.close(data);
        }, (err: HttpErrorResponse) => {
            this.dialogRef.close({
                success: false,
                error: err.error
            });
        });
    }

    close() {
        this.dialogRef.close({
            success: false,
            error: null
        });
    }
}

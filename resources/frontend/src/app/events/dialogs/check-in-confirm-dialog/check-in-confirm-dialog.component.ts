import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { CheckInService } from "../services/check-in.service";
// import { CheckInModel } from "../interfaces/check-in-model";
// import { environment } from "../../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-check-in-confirm-dialog',
    templateUrl: 'check-in-confirm-dialog.component.html',
    styleUrls: ['./check-in-confirm-dialog.component.scss']
})
export class CheckInConfirmDialogComponent implements OnInit {

    // error: any;
    // imageUrl: SafeUrl = null;
    // // checkIn: CheckInModel;
    // checkInToken: any;

    // // fallbackImg: string = environment.fallbackImg;

    // constructor(
    //     public dialogRef: MatDialogRef<CheckInConfirmDialogComponent>,
    //     // @Inject(MAT_DIALOG_DATA) public data: { token: any, checkIn: CheckInModel },
    //     // private checkInService: CheckInService,
    //     private http: HttpClient,
    //     private _sanitizer: DomSanitizer, public snackBar: MatSnackBar) {
    //     // this.checkInToken = data.token;
    //     // this.checkIn = data.checkIn;
    //     // this.getUserImage(this.checkIn.user.image);
    // }

    ngOnInit() {
    }

    // onCancelClick() {
    //     // this.dialogRef.close();
    // }

    // confirm() {
    //     // this.checkInService.confirmByToken(this.checkInToken).subscribe((checkIn) => {
    //     //     this.showToats('Check-in confirmado com sucesso.');
    //     //     this.dialogRef.close();
    //     // });
    // }


    // /**
    //  * @param url
    //  */
    // getUserImage(url: string) {
    //     return this.http
    //         .get(url, {
    //             responseType: 'blob'
    //         })
    //         .subscribe((value: Blob) => {
    //             this.imageUrl = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(value));
    //         }, (err) => {
    //             // this.imageUrl = this.fallbackImg;
    //         });
    // }

    // /**
    //  * @param msg
    //  */
    // showToats(msg) {
    //     this.snackBar.open(msg ? msg : 'Ops, algo deu errado.', null, {
    //         duration: 3000
    //     });
    // }
}

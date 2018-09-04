import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
    selector: 'app-check-in-dialog',
    templateUrl: 'check-in-dialog.component.html',
    styleUrls: ['./check-in-dialog.component.scss']
})
export class CheckInDialogComponent implements OnInit {
    error: any = null;
    imageUrl: any = null;

    /**
     * @param dialogRef 
     * @param data 
     * @param http 
     */
    constructor(
        public dialogRef: MatDialogRef<CheckInDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, 
        private http: HttpClient, 
        private _sanitizer: DomSanitizer) {
        this.getQrCode(data);
    }

    /**
     */
    ngOnInit() { }

    /**
     */
    onCancelClick() {
        this.dialogRef.close();
    }

    /**
     * @param url 
     */
    getQrCode(url: string) {
        return this.http
            .get(url, {
                responseType: 'blob'
            })
            .subscribe((value: Blob) => {
                this.imageUrl = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(value))
            }, (err) => {
                let reader = new FileReader();
                reader.addEventListener("load", ()=>{
                   //this.error = JSON.parse(reader.result); 
                });
                reader.readAsText(err.error);
            });
    }
}
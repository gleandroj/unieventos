import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-feedback-form-dialog',
    templateUrl: './feedback-form-dialog.component.html',
    styleUrls: [
        './feedback-form-dialog.component.less'
    ],
})
export class FeedbackFormDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<FeedbackFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        fb: FormBuilder
    ) {
       
    }

    ngOnInit(): void {
     
    }
}

import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-feedback-form-dialog',
    templateUrl: './feedback-form-dialog.component.html',
    styleUrls: [
        './feedback-form-dialog.component.less'
    ],
})
export class FeedbackFormDialogComponent implements OnInit {

    questions = [];
    questionForm: FormGroup;
    feedbackForm: FormGroup;

    @ViewChild('input') inputElement: ElementRef<HTMLInputElement>;
    @ViewChild('content') contentElement: ElementRef<HTMLDivElement>;

    constructor(
        public dialogRef: MatDialogRef<FeedbackFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        fb: FormBuilder
    ) {
        this.feedbackForm = fb.group({
            title: null
        });
        this.questionForm = fb.group({
            type: null,
            question: ''
        });
    }

    ngOnInit(): void {

    }

    delete(question) {
        this.questions = this.questions.filter(q => q != question);
    }

    push() {
        this.questions.push(
            this.questionForm.value
        );
        this.questionForm.reset();
        setTimeout(() => {
            this.inputElement.nativeElement.focus();
        }, 50);
    }
}

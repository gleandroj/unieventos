import {Component, Inject, ViewChild, ElementRef} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ProgrammingFeedbackEntity} from '../../../core/entities/programming-feedback-entity';
import {ProgrammingFeedbackQuestionEntity} from '../../../core/entities/programming-feedback-question-entity';
import {ProgrammingFeedbackService} from '../../../core/services/programming-feedback.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastService} from '../../../support/services';
import {ApiException} from '../../../support/interfaces/api-exception';

@Component({
    selector: 'app-feedback-form-dialog',
    templateUrl: './feedback-form-dialog.component.html',
    styleUrls: [
        './feedback-form-dialog.component.less'
    ],
})
export class FeedbackFormDialogComponent {

    title = 'Formulário';
    feedback: ProgrammingFeedbackEntity = {
        questions: []
    };
    questionForm: FormGroup;
    feedbackForm: FormGroup;
    programmingFeedbackService: ProgrammingFeedbackService;

    @ViewChild('input') inputElement: ElementRef<HTMLInputElement>;
    @ViewChild('content') contentElement: ElementRef<HTMLDivElement>;

    constructor(
        private dialogRef: MatDialogRef<FeedbackFormDialogComponent>,
        private toastr: ToastService,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private fb: FormBuilder
    ) {
        this.title = data.title;
        this.feedback = data.feedback ? data.feedback : this.feedback;
        this.programmingFeedbackService = data.programmingFeedbackService as ProgrammingFeedbackService;
        this.feedbackForm = fb.group({
            id: this.feedback.id,
            title: this.feedback.title,
            questions: fb.array(this.feedback.questions.map((question: ProgrammingFeedbackQuestionEntity) => {
                return fb.group({
                    id: question.id,
                    type: question.type,
                    question: question.question
                });
            }))
        });
        this.questionForm = fb.group({
            type: null,
            question: ''
        });
    }

    delete(question, index: number) {
        (<FormArray>this.feedbackForm.get('questions')).removeAt(
            index
        );
    }

    push() {
        const newItem = this.questionForm.value as any;
        (<FormArray>this.feedbackForm.get('questions')).push(
            this.fb.group({
                question: newItem.question,
                type: newItem.type,
                id: null
            })
        );
        this.questionForm.reset();
        setTimeout(() => {
            this.inputElement.nativeElement.focus();
        }, 50);
    }

    save() {
        this.programmingFeedbackService.save(
            this.feedbackForm.value
        ).subscribe((data) => this.dialogRef.close(data),
            (response: HttpErrorResponse) => {
                const error = response.error as ApiException<any>;
                this.toastr.open(error.message);
            });
    }
}

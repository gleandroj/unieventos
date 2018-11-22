import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProgrammingService} from '../../../core/services';
import {ProgrammingEntity} from '../../../core/entities/programming-entity';
import {ProgrammingFeedbackEntity} from '../../../core/entities/programming-feedback-entity';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastService} from '../../../support/services';

@Component({
    selector: 'app-feedback-dialog',
    templateUrl: 'feedback-dialog.component.html',
    styleUrls: ['./feedback-dialog.component.less']
})
export class FeedbackDialogComponent {

    public selected = 0;
    public loading = false;
    public programming: ProgrammingEntity;
    public feedbacks: ProgrammingFeedbackEntity[] = [];
    public forms: FormGroup[];

    constructor(
        public dialogRef: MatDialogRef<FeedbackDialogComponent>,
        private programmingService: ProgrammingService,
        private toastr: ToastService,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: {
            programming: ProgrammingEntity,
            feedbacks: ProgrammingFeedbackEntity[]
        }
    ) {
        this.feedbacks = data.feedbacks;
        this.programming = data.programming;
        this.forms = this.feedbacks.map(
            (feedback) => this.fb.group({
                answers: this.fb.array(
                    feedback.questions.map((question) => this.fb.group({
                        programming_feedback_question_id: question.id,
                        answer: null,
                        suggestion: null
                    }))
                )
            })
        );
    }

    next() {
        this.selected++;
    }

    prev() {
        this.selected--;
    }

    onCancelClick() {
        this.dialogRef.close();
    }

    onOkClick() {
        this.loading = true;
        this.forms[this.selected].disable();
        this.programmingService
            .storeFeedback(this.programming, this.forms.map((f) => f.value.answers))
            .subscribe((resp) => {
                this.toastr.open('Avaliação realizada, obrigado!');
                this.dialogRef.close();
                this.forms[this.selected].enable();
                this.loading = false;
            }, () => {
                this.toastr.open('Ops! Algo deu errado, tente novamente.');
                this.forms[this.selected].enable();
                this.loading = false;
            });
    }
}

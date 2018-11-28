import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProgrammingFeedbackService} from '../../../../../core/services';
import {ProgrammingEntity} from '../../../../../core/entities/programming-entity';
import {ActivatedRoute} from '@angular/router';
import {ProgrammingFeedbackEntity} from '../../../../../core/entities/programming-feedback-entity';
import {BehaviorSubject, of} from 'rxjs';
import {ConfirmDialogComponent, FeedbackFormDialogComponent} from '../../../../dialogs';
import {switchMap} from 'rxjs/operators';
import {ToastService} from '../../../../../support/services';

@Component({
    selector: 'app-feedback-administration-page',
    templateUrl: './feedback-administration-page.component.html',
    styleUrls: [
        './feedback-administration-page.component.less'
    ],
})
export class FeedbackAdministrationPageComponent implements OnInit {
    public searchSubject = new BehaviorSubject(null);
    public displayedColumns = ['title', 'created_by', 'questions_count', 'answers_count', 'actions'];
    protected programming: ProgrammingEntity;
    public data: ProgrammingEntity[] = [];
    public loading = false;

    constructor(
        protected activatedRoute: ActivatedRoute,
        private dialogService: MatDialog,
        protected feedbackService: ProgrammingFeedbackService,
        private toastr: ToastService
    ) {
        this.activatedRoute.data.subscribe((data) => {
            this.programming = data.programming as ProgrammingEntity;
            this.feedbackService.setProgramming(this.programming);
        });
    }

    ngOnInit(): void {
        this.feedbackService.all().subscribe((data: ProgrammingEntity[]) => {
            this.data = data;
        });
    }

    edit(feedback?: ProgrammingFeedbackEntity, title?: string) {
        this.dialogService.open(
            FeedbackFormDialogComponent,
            {
                data: {
                    feedback: feedback,
                    title: title,
                    programmingFeedbackService: this.feedbackService
                },
                panelClass: 'dialog-fullscreen'
            }
        ).afterClosed().subscribe((response) => {
            if (feedback && response) {
                delete feedback.questions;
                Object.assign(feedback, response);
                this.toastr.open('Formulário de Avaliação atualizado com sucesso!');
            } else if (response) {
                this.data = [response].concat(this.data);
                this.toastr.open('Formulário de Avaliação cadastrado com sucesso!');
            }
        });
    }

    delete(feedback: ProgrammingFeedbackEntity, event: Event) {
        event.stopPropagation();
        this.dialogService
            .open(ConfirmDialogComponent, {
                data: {
                    message: 'Tem certeza que deseja deletar o formulário de avaliação?'
                }
            })
            .afterClosed()
            .pipe(switchMap((resp) => {
                if (resp) {
                    return this.feedbackService.delete(feedback.id);
                } else {
                    return of(false);
                }
            }))
            .subscribe((resp: any) => {
                if (resp) {
                    this.data = this.data.filter(d => d.id !== feedback.id);
                    this.toastr.open(
                        'Formulário de Avaliação deletado com sucesso!'
                    );
                }
            });
    }
}

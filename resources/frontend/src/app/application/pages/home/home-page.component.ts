import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CheckInDialogComponent, FeedbackDialogComponent } from '../../dialogs';
import { ProgrammingFeedbackService, ProgrammingService, RequestCheckInService } from '../../../core/services';
import { EditionCollection } from '../../../core/entities/edition-collection';
import { ProgrammingEntity } from '../../../core/entities/programming-entity';
import { switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../../../support/services';
import { ProgrammingFeedbackEntity } from '../../../core/entities/programming-feedback-entity';
import { of } from 'rxjs';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: [
        './home-page.component.less'
    ]
})
export class HomePageComponent {
    public editions: EditionCollection[];
    public loading: boolean;

    constructor(
        private dialog: MatDialog,
        private programmingService: ProgrammingService,
        private programmingFeedbackService: ProgrammingFeedbackService,
        private requestCheckInService: RequestCheckInService,
        private toastr: ToastService
    ) {
        this.refreshData();
    }

    feedback(programming: ProgrammingEntity, event: Event) {
        event.stopPropagation();
        this.programmingFeedbackService.setProgramming(programming);
        this.programmingFeedbackService
            .feedbackQuestions()
            .pipe(
                switchMap(
                    (feedbacks: ProgrammingFeedbackEntity[]) => {
                        if (feedbacks.length > 0) {
                            return this.dialog.open(
                                FeedbackDialogComponent,
                                {
                                    data: {
                                        feedbacks: feedbacks.filter(f => f.questions && f.questions.length > 0),
                                        programming: programming
                                    },
                                    panelClass: 'dialog-fullscreen'
                                }
                            ).afterClosed();
                        }
                        this.toastr.open('Nenhum formulário de avaliação disponível.');
                        return of({});
                    }
                )
            ).subscribe();
    }

    checkIn(programming: ProgrammingEntity, event: Event) {
        event.stopPropagation();
        this.requestCheckInService.requestCheckIn(
            programming
        ).pipe(
            switchMap(data => this.dialog.open(
                CheckInDialogComponent,
                {
                    data: {
                        ...data,
                        programming: programming
                    },
                }
            ).afterClosed())
        ).subscribe(() => {}, (err: HttpErrorResponse) => {
            if (err.status === 400) {
                this.apiException(err.error);
            }
        });
    }

    private refreshData() {
        this.loading = true;
        this.programmingService.programmings()
            .subscribe((editions) => {
                this.editions = editions;
                this.loading = false;
            });
    }

    private apiException(error: { error: string; message: string; data: any }) {
        this.toastr.open(error.message);
    }
}

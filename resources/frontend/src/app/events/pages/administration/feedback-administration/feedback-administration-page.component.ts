import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProgrammingFeedbackService} from '../../../../core/services/programming-feedback.service';
import {HttpClient} from '@angular/common/http';
import {ProgrammingEntity} from '../../../../core/entities/programming-entity';
import {ActivatedRoute} from '@angular/router';
import {ProgrammingFeedbackEntity} from '../../../../core/entities/programming-feedback-entity';
import {BehaviorSubject} from 'rxjs';
import {FeedbackFormDialogComponent} from "../../../dialogs";

@Component({
    selector: 'app-feedback-administration-page',
    templateUrl: './feedback-administration-page.component.html',
    styleUrls: [
        './feedback-administration-page.component.less'
    ],
})
export class FeedbackAdministrationPageComponent implements OnInit {
    public searchSubject = new BehaviorSubject(null);
    public displayedColumns = ['title', 'created_by', 'questions_count', 'actions'];
    protected feedbackService: ProgrammingFeedbackService;
    protected programming: ProgrammingEntity;
    public data: ProgrammingEntity[] = [];
    public loading = false;

    constructor(
        protected activatedRoute: ActivatedRoute,
        private httpClient: HttpClient,
        private dialogService: MatDialog
    ) {
        this.activatedRoute.data.subscribe((data) => {
            this.programming = data.programming as ProgrammingEntity;
            this.feedbackService = new ProgrammingFeedbackService(
                this.programming,
                this.httpClient
            );
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
                }
            }
        ).afterClosed().subscribe((response) => {
            if (feedback && response) {
                delete feedback.questions;
                Object.assign(feedback, response);
                console.log(feedback);
            } else if (response) {
                this.data = [response].concat(this.data);
            }
        });
    }
}

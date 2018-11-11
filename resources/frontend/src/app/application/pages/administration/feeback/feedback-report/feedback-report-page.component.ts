import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProgrammingEntity} from '../../../../../core/entities/programming-entity';
import {ProgrammingFeedbackService} from '../../../../../core/services';
import {switchMap} from 'rxjs/operators';
import {ProgrammingFeedbackEntity} from '../../../../../core/entities/programming-feedback-entity';
import {AbstractTableComponent} from '../../../../components';

@Component({
    selector: 'app-feedback-report-page',
    templateUrl: './feedback-report-page.component.html',
    styleUrls: [
        './feedback-report-page.component.less'
    ]
})
export class FeedbackReportPageComponent extends AbstractTableComponent<any> {

    public displayedColumns = [
        'user_name',
        'user_gender',
        'user_email',
        'user_type',
        'user_registration',
        'question',
        'type',
        'answer',
        'answer_at'
    ];
    public programming: ProgrammingEntity;
    public feedback: ProgrammingFeedbackEntity;

    constructor(
        public activatedRoute: ActivatedRoute,
        public programmingFeedbackService: ProgrammingFeedbackService
    ) {
        super();
        this.activatedRoute.data.subscribe((data) => {
            this.programming = data.programming;
            this.programmingFeedbackService.setProgramming(this.programming);
            this.initialize();
        });
    }

    private initialize() {
        this.activatedRoute
            .params
            .pipe(
                switchMap(
                    (params: any) => this.programmingFeedbackService.find(params.feedback)
                )
            )
            .subscribe((feedback) => {
                this.feedback = feedback;
            });
    }

    paginate(page?, perPage?, sortable?, filter?) {
        return this.programmingFeedbackService.report(
            this.feedback,
            page,
            perPage,
            sortable,
            filter
        );
    }

    public exportToXls() {
        this.programmingFeedbackService.exportReport(
            this.feedback
        ).subscribe((data) => {
            const date = this.programming.date.replace(/\//g, '-');
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(data);
            link.download = `${this.feedback.title}-${date}-questionario.xlsx`;
            link.target = '_blank';
            link.click();
            link.remove();
        });
    }
}

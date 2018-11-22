import {AbstractService} from '../../support/services';
import {ProgrammingEntity} from '../entities/programming-entity';
import {Observable} from 'rxjs';
import {PaginatorData} from '../../support/interfaces';
import {ParticipantEntity} from '../entities/participant-entity';
import {ProgrammingFeedbackEntity} from '../entities/programming-feedback-entity';
import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import { ApiResponse } from '../../support/interfaces/api-response';

@Injectable()
export class ProgrammingFeedbackService extends AbstractService<any> {

    private programming: ProgrammingEntity;

    protected get resourceURL() {
        return `programmings/${this.programming.id}/feedback`;
    }

    public setProgramming(programming: ProgrammingEntity) {
        this.programming = programming;
    }

    onlyWithQuetions(): Observable<any[]>{
        return this.http.get<ApiResponse<any[]>>(
            `${this.baseURL}/${this.resourceURL}?onlyWithQuestions=true`
        ).pipe(map((r) => r.data));
    }

    report(
        feedback: ProgrammingFeedbackEntity,
        page?,
        perPage?,
        sortable?: { key?: string, direction: 'asc' | 'desc' },
        filter?: any
    ): Observable<PaginatorData<ParticipantEntity>> {
        const defaultParameters = {
            order_by: sortable ? sortable.key : null,
            direction: sortable ? sortable.direction : null,
            page: page ? page : 0,
            per_page: perPage,
        };
        const filterParameters = this.formatFilter(filter);
        const parameters = this.buildParameter({
            ...defaultParameters,
            ...filterParameters
        });
        return this.http.get<PaginatorData<ParticipantEntity>>(
            `${this.baseURL}/${this.resourceURL}/${feedback.id}/report?${parameters}`
        );
    }

    exportReport(feedback: ProgrammingFeedbackEntity) {
        return this.http.post(
            `${this.baseURL}/${this.resourceURL}/${feedback.id}/report/export`,
            {},
            {responseType: 'blob'}
        ).pipe(map((resp: any) => resp));
    }
}

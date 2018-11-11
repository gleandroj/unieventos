import {ProgrammingEntity} from '../entities/programming-entity';
import {AbstractService} from '../../support/services';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../support/interfaces/api-response';
import {map} from 'rxjs/operators';
import {EditionCollection} from '../entities/edition-collection';
import {PaginatorData} from '../../support/interfaces';
import {ParticipantEntity} from '../entities/participant-entity';

@Injectable()
export class ProgrammingService extends AbstractService<ProgrammingEntity> {
    protected resourceURL = 'programmings';

    editionCollection(): Observable<EditionCollection[]> {
        return this.http.get<ApiResponse<EditionCollection[]>>(
            `${this.baseURL}/${this.resourceURL}/`
        ).pipe(map((r) => r.data));
    }

    editions() {
        return this.http.get<string[]>(
            `${this.baseURL}/${this.resourceURL}/editions`
        ).pipe(map((r) => r));
    }

    participants(
        programming: ProgrammingEntity,
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
            `${this.baseURL}/${this.resourceURL}/${programming.id}/participants?${parameters}`
        );
    }

    exportParticipants(programming: ProgrammingEntity) {
        return this.http.post(
            `${this.baseURL}/${this.resourceURL}/${programming.id}/participants/export`,
            {},
            {responseType: 'blob'}
        ).pipe(map((resp: any) => resp));
    }

    programmings() {
        return this.http.get<ApiResponse<EditionCollection[]>>(
            `${this.baseURL}/${this.resourceURL}`
        ).pipe(map((r) => r.data));
    }

    storeFeedback(
        programming: ProgrammingEntity,
        feedbacks: any[]
    ) {
        return this.http.post(
            `${this.baseURL}/programmings/${programming.id}/user-feedback`,
            feedbacks
        );
    }
}

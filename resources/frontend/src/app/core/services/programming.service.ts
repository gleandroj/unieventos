import {ProgrammingEntity} from '../entities/programming-entity';
import {AbstractService} from '../../support/services';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../support/interfaces/api-response';
import {map} from 'rxjs/operators';
import {EditionCollection} from '../entities/edition-collection';

@Injectable()
export class ProgrammingService extends AbstractService<ProgrammingEntity> {
    protected resourceURL = 'programming';

    constructor(http: HttpClient) {
        super(http);
    }

    public editionCollection(): Observable<EditionCollection[]> {
        return this.http.get<ApiResponse<EditionCollection[]>>(
            `${this.baseURL}/${this.resourceURL}/`
        ).pipe(map((r) => r.data));
    }

    editions() {
        return this.http.get<string[]>(
            `${this.baseURL}/${this.resourceURL}/editions`
        ).pipe(map((r) => r));
    }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '../../support/interfaces/api-response';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthorizeCheckInService {
    private baseURL = 'api';
    private resourceURL = 'check-in';

    constructor(private http: HttpClient) {
    }

    public data(token: string) {
        return this.http.get<ApiResponse<any>>(`${this.baseURL}/${this.resourceURL}/${token}`)
            .pipe(map((d) => d.data));
    }

    public confirm(token: string) {
        return this.http.post(`${this.baseURL}/${this.resourceURL}/${token}`, {});
    }
}

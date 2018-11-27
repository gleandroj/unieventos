import {HttpClient} from '@angular/common/http';
import {ProgrammingEntity} from '../entities/programming-entity';
import {Injectable} from '@angular/core';

@Injectable()
export class RequestCheckInService {
    private baseURL = 'api';
    private resourceURL = 'programmings';

    constructor(private http: HttpClient) {
    }

    public requestCheckIn(programming: ProgrammingEntity) {
        return this.http.get(`${this.baseURL}/${this.resourceURL}/${programming.id}/check-in`);
    }

    public verifyCheckIn(programming: ProgrammingEntity) {
        return this.http.post(`${this.baseURL}/${this.resourceURL}/${programming.id}/check-in`, []);
    }
}

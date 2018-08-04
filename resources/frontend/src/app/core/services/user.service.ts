import {Injectable} from '@angular/core';
import {AbstractService} from '../../support/services';
import {UserEntity} from '../entities/user-entity';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ApiResponse} from '../../support/interfaces/api-response';

@Injectable()
export class UserService extends AbstractService<UserEntity> {

    protected resourceURL = 'users';

    constructor(http: HttpClient) {
        super(http);
    }

    public checkEmailNotTaken(email: string, userID?: any) {
        return this.http
            .post(`${this.baseURL}/${this.resourceURL}/check-email`, {
                email: email,
                user_id: userID
            });
    }

    public restoreByEmail(email: string) {
        return this.http
            .post<ApiResponse<UserEntity>>(`${this.baseURL}/${this.resourceURL}/restore`, {
                email: email
            }).pipe(map((resp: ApiResponse<UserEntity>) => resp.data));
    }
}

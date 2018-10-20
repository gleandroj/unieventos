import {Injectable} from '@angular/core';
import {AbstractService} from '../../support/services';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService extends AbstractService<any> {

    protected resourceURL = 'users';

    constructor(http: HttpClient) {
        super(http);
    }
}

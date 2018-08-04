import {UserEntity} from '../entities/user-entity';
import {Injectable} from '@angular/core';
import {AbstractDataSource} from './abstract-data-source';
import {UserService} from '../services';

@Injectable()
export class UserDataSource extends AbstractDataSource<UserEntity> {
    constructor(userService: UserService) {
        super(userService);
    }
}

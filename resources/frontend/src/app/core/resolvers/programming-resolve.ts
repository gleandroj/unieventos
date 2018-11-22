import {ProgrammingEntity} from '../entities/programming-entity';
import {ProgrammingService} from '../services';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ProgrammingResolve implements Resolve<ProgrammingEntity> {

    constructor(protected service: ProgrammingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<ProgrammingEntity> | Promise<ProgrammingEntity> | ProgrammingEntity {
        return this.service.find(route.params.programming);
    }
}

import {ProgrammingEntity} from '../entities/programming-entity';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProgrammingFeedbackService} from '../services/programming-feedback.service';

@Injectable()
export class FeedbackResolve implements Resolve<ProgrammingEntity> {

    constructor(protected service: ProgrammingFeedbackService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<ProgrammingEntity> | Promise<ProgrammingEntity> | ProgrammingEntity {
        return this.service.find(route.params.feedback);
    }
}

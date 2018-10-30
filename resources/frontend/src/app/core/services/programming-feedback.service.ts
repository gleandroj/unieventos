import {AbstractService} from '../../support/services';
import {HttpClient} from '@angular/common/http';
import {ProgrammingEntity} from '../entities/programming-entity';

export class ProgrammingFeedbackService extends AbstractService<any> {

    protected resourceURL = '';

    constructor(private programming: ProgrammingEntity, http: HttpClient) {
        super(http);
        this.resourceURL = `programming/${programming.id}/feedback`;
    }
}

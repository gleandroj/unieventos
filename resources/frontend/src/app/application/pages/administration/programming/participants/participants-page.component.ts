import {Component} from '@angular/core';
import {ProgrammingService} from '../../../../../core/services';
import {ActivatedRoute} from '@angular/router';
import {ProgrammingEntity} from '../../../../../core/entities/programming-entity';
import {ParticipantEntity} from '../../../../../core/entities/participant-entity';
import {AbstractTableComponent} from '../../../../components';

@Component({
    selector: 'app-participants-page',
    templateUrl: './participants-page.component.html',
    styleUrls: [
        './participants-page.component.less'
    ],
})
export class ParticipantsPageComponent extends AbstractTableComponent<ParticipantEntity> {

    public displayedColumns: string[] = [
        'registration',
        'name',
        'email',
        'type',
        'gender',
        'check_in_at',
        'confirmed_by'
    ];

    private programming: ProgrammingEntity;

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected programmingService: ProgrammingService
    ) {
        super();
        this.activatedRoute.data.subscribe((data) => {
            this.programming = data.programming as ProgrammingEntity;
        });
    }

    public paginate(page?, perPage?, sortable?, filter?) {
        this.loading = true;
        return this.programmingService.participants(
            this.programming,
            page,
            perPage,
            sortable,
            filter
        );
    }

    public exportToXls() {
        this.programmingService.exportParticipants(
            this.programming
        ).subscribe((data) => {
            const date = this.programming.date.replace(/\//g, '-');
            const edition = this.programming.edition;
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(data);
            link.download = `${edition}-${date}-participantes.xlsx`;
            link.target = '_blank';
            link.click();
            link.remove();
        });
    }
}

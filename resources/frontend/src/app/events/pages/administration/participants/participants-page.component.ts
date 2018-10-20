import {Component, OnInit} from '@angular/core';
import {ProgrammingService} from '../../../../core/services';
import {ActivatedRoute} from '@angular/router';
import {ProgrammingEntity} from '../../../../core/entities/programming-entity';
import {PaginatorData} from '../../../../support/interfaces';
import {ParticipantEntity} from '../../../../core/entities/participant-entity';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';

@Component({
    selector: 'app-participants-page',
    templateUrl: './participants-page.component.html',
    styleUrls: [
        './participants-page.component.less'
    ],
})
export class ParticipantsPageComponent implements OnInit {
    searchSubject = new BehaviorSubject(null);
    loading = false;
    displayedColumns: string[] = [
        'registration',
        'name',
        'type',
        'gender',
        'check_in_at',
        'confirmed_by'
    ];
    paginator: PaginatorData<ParticipantEntity> = {
        meta: {
            total: 0,
            current_page: 0,
            per_page: 10
        },
        data: []
    };
    sortable: { key: string; direction: 'asc' | 'desc' } = null;

    private programming: ProgrammingEntity;

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected programmingService: ProgrammingService
    ) {
        this.activatedRoute.data.subscribe((data) => {
            this.programming = data.programming as ProgrammingEntity;
        });
    }

    ngOnInit(): void {
        this.searchSubject.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe((input) => this.paginate(
            this.paginator.meta.current_page,
            this.paginator.meta.per_page,
            this.sortable,
            {
                query: input
            }
        ));
    }

    paginate(page?, perPage?, sortable?, filter?) {
        this.loading = true;
        this.programmingService.participants(
            this.programming,
            page,
            perPage,
            sortable,
            filter
        ).pipe(tap(() => this.loading = false))
            .subscribe((data) => this.paginator = data);
    }

    sortData($event) {
        this.sortable = null;
        if ($event.direction && $event.direction.length > 0) {
            this.sortable = {
                key: $event.active,
                direction: $event.direction
            };
        }
        this.paginate(
            this.paginator.meta.current_page,
            this.paginator.meta.per_page,
            this.sortable,
            {
                query: this.searchSubject.getValue()
            }
        );
    }

    exportToXls() {
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

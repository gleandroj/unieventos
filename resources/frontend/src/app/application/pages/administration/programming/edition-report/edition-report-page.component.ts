import {Component} from '@angular/core';
import {ProgrammingService} from '../../../../../core/services';
import {ActivatedRoute} from '@angular/router';
import {AbstractTableComponent} from '../../../../components';
import { of } from 'rxjs';
import { PaginatorData } from 'resources/frontend/src/app/support/interfaces';

@Component({
    selector: 'app-edition-report-page',
    templateUrl: './edition-report-page.component.html',
    styleUrls: [
        './edition-report-page.component.less'
    ],
})
export class EditionReportPageComponent extends AbstractTableComponent<any> {

    public displayedColumns: string[] = [];
    public edition: any;

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected programmingService: ProgrammingService
    ) {
        super();
        this.activatedRoute.data.subscribe((data) => {
            this.edition = data.edition;
        });
    }

    public paginate(page?, perPage?, sortable?, filter?) {
        this.loading = true;
        const p: PaginatorData<any> = {
            data: [],
            meta: {
                current_page: 1,
                from: 0,
                to: 0,
                per_page: 0,
                total: 0
            }
        };
        return of(p);
    }

    public exportToXls() {
        // this.programmingService.exportParticipants(
        //     this.programming
        // ).subscribe((data) => {
        //     const date = this.programming.date.replace(/\//g, '-');
        //     const edition = this.programming.edition;
        //     const link = document.createElement('a');
        //     link.href = window.URL.createObjectURL(data);
        //     link.download = `${edition}-${date}-participantes.xlsx`;
        //     link.target = '_blank';
        //     link.click();
        //     link.remove();
        // });
    }
}

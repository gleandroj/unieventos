import DataSource from '../../support/data/data-source';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {DataTableConfig, PaginatorData} from '../../support/interfaces';
import {AbstractService} from '../../support/services';
import {switchMap, tap} from 'rxjs/operators';

export abstract class AbstractDataSource<T> implements DataSource<T> {

    /**
     * @type {BehaviorSubject<boolean>}
     */
    public isLoading = new BehaviorSubject(false);

    /**
     * @param {AbstractService<T>} service
     */
    protected constructor(protected service: AbstractService<T>) {
    }

    /**
     * @param {DataTableConfig} c
     * @returns {Observable<PaginatorData<ProductEntity>>}
     */
    protected getData(c: DataTableConfig): Observable<PaginatorData<T>> {
        this.isLoading.next(true);
        return this.service.paginate(
            c.currentPage,
            c.itemsPerPage,
            c.sortable,
            c.filter
        );
    }

    /**
     * @param {Subject<DataTableConfig>} config
     * @returns {Observable<PaginatorData<T>>}
     */
    connect(config: Subject<DataTableConfig>): Observable<PaginatorData<T>> {
        return config.pipe(
            switchMap((c) => this.getData(c)),
            tap(() => this.isLoading.next(false), () => this.isLoading.next(false))
        );
    }
}

import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {PaginatorData, DataTableConfig} from '../interfaces';

export default interface DataSource<T> {
    isLoading: BehaviorSubject<boolean>;

    connect(config: Subject<DataTableConfig>): Observable<PaginatorData<T>>;
}

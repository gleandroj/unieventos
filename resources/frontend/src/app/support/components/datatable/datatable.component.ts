import {
    Component,
    OnInit,
    Input,
    Directive,
    ElementRef,
    TemplateRef,
    AfterViewInit,
    ContentChild,
    QueryList,
    ContentChildren,
    HostListener,
    Renderer2,
    ViewChild, OnDestroy
} from '@angular/core';
import {Subject, BehaviorSubject, Subscription, of} from 'rxjs';
import {PaginatorData, DataTableConfig, SortableData} from '../../interfaces';
import DataSource from '../../data/data-source';
import {catchError, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {ToastService} from '../../services';
import {HttpErrorResponse} from '@angular/common/http';

@Directive({
    selector: '[appSortable]'
})
export class SortHeaderDirective implements OnInit {

    private listener: (sortHeader: SortHeaderDirective) => void = null;
    @Input('appSortable') sortBy: string;

    public set direction(direction) {
        this.renderer.removeClass(this.el.nativeElement, 'asc');
        this.renderer.removeClass(this.el.nativeElement, 'desc');
        if (direction) {
            this.renderer.addClass(this.el.nativeElement, direction);
        }
    }

    constructor(private renderer: Renderer2, private el: ElementRef) {
    }

    ngOnInit(): void {
        this.renderer.addClass(this.el.nativeElement, 'sorting');
    }

    setOnClickListener(listener) {
        this.listener = listener;
    }

    @HostListener('click')
    private onclick() {
        if (this.listener != null) {
            this.listener(this);
        }
    }
}

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.less']
})
export class DatatableComponent implements AfterViewInit, OnDestroy, OnInit {

    @ContentChild('header') header: TemplateRef<any>;
    @ContentChild('template') template: TemplateRef<any>;
    @ContentChild('filterHeader') filterHeader: TemplateRef<any>;
    @ContentChildren(SortHeaderDirective) headers;
    @ViewChild('searchableEl') searchableEl: ElementRef;
    @Input() dataSource: DataSource<any>;
    @Input() searchable = true;
    @Input() hideOptions = false;
    @Input() minTableWidth = null;
    @Input() minHeight = null;

    maxSize = 5;
    loading: boolean;

    paginatorData: PaginatorData<any> = {
        meta: {
            current_page: 1,
            total: 0,
            per_page: 5
        },
        data: [],
    };

    inputValue = '';
    inputSubject = new Subject();

    get currentConfig(): DataTableConfig {
        return this.config.getValue();
    }

    config: BehaviorSubject<DataTableConfig>
        = new BehaviorSubject<DataTableConfig>({
        sortable: {direction: null, key: null, el: null},
        currentPage: 1,
        itemsPerPage: 5,
        filter: {}
    });

    itemsPerPageData = [
        5,
        10,
        15,
        20
    ];

    private connector: Subscription;
    private headersConnector: Subscription;
    private inputConnector: Subscription;
    private loadingSubscribe: Subscription;
    private routerSubscribe: Subscription;

    constructor(private router: Router, private toastr: ToastService) {
    }

    ngAfterViewInit() {
        this.inputConnector = this.inputSubject.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe((value) => this.searchableChanged(value));

        this.headersConnector = this.headers.changes.subscribe(
            (headers: QueryList<SortHeaderDirective>) =>
                headers.forEach((h: SortHeaderDirective) => h.setOnClickListener((s) => this.sortHeaderClick(s)))
        );
    }

    ngOnInit(): void {
        if (!this.dataSource) {
            throw new Error('Datasource Not Initialized');
        }

        this.loadingSubscribe = this.dataSource.isLoading.subscribe((loading) =>
            this.loading = loading
        );

        this.routerSubscribe = this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.loading = true;
                } else if (
                    event instanceof NavigationError ||
                    event instanceof NavigationEnd ||
                    event instanceof NavigationCancel
                ) {
                    this.loading = false;
                }
            });

        this.initializeConnector();

        this.config.subscribe(() => {
            if (this.connector.closed) {
                this.initializeConnector();
            }
        });
    }

    initializeConnector() {
        if (this.connector) {
            this.connector.unsubscribe();
        }
        this.connector = this.dataSource.connect(this.config)
            .subscribe(
                (pd) => this.paginatorData = pd,
                (error) => this.catchError(error)
            );
    }

    catchError(err: HttpErrorResponse) {
        if (err.status !== 401 && err.status !== 403) {
            this.toastr.serverResponseFail();
        }
        return of({
            meta: {
                current_page: 1,
                total: 0,
                per_page: 5
            },
            data: [],
        });
    }

    ngOnDestroy(): void {
        this.headersConnector.unsubscribe();
        this.inputConnector.unsubscribe();
        this.loadingSubscribe.unsubscribe();
        this.routerSubscribe.unsubscribe();
        this.connector.unsubscribe();
    }

    refresh() {
        this.config.next(this.config.getValue());
    }

    pageChanged($event) {
        const current = this.currentConfig;

        this.config.next({
            sortable: current.sortable,
            filter: current.filter,
            itemsPerPage: current.itemsPerPage,
            currentPage: $event.page
        });
    }

    filterChanged(filter) {
        const current = this.currentConfig;

        if (filter && filter.query && this.inputValue !== filter.query) {
            this.inputValue = filter.query;
        }

        this.config.next({
            sortable: current.sortable,
            filter: Object.assign(current.filter, filter),
            itemsPerPage: current.itemsPerPage,
            currentPage: current.currentPage
        });
    }

    searchableChanged(value) {
        this.filterChanged({
            query: value
        });
    }

    itemsPerPageChanged(value) {
        const current = this.currentConfig;

        this.config.next({
            sortable: current.sortable,
            filter: current.filter,
            itemsPerPage: (<number>value),
            currentPage: current.currentPage
        });
    }

    sortHeaderClick(sortHeader: SortHeaderDirective) {
        const current = this.currentConfig;

        const old = current.sortable;
        const sortable: SortableData = {direction: 'asc', key: sortHeader.sortBy, el: sortHeader};

        if (old && old.key === sortHeader.sortBy && old.direction === 'desc') {
            sortable.direction = sortable.key = null;
        } else if (old && old.key === sortHeader.sortBy && old.direction === 'asc') {
            sortable.direction = 'desc';
        } else if (old.el && old.key !== sortHeader.sortBy) {
            old.el.direction = null;
        }

        sortHeader.direction = sortable.direction;

        this.config.next({
            sortable: sortable,
            filter: current.filter,
            itemsPerPage: current.itemsPerPage,
            currentPage: current.currentPage
        });
    }
}


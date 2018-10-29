import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/services';
import {BehaviorSubject} from 'rxjs';
import {PaginatorData} from '../../../../support/interfaces';
import {UserEntity} from '../../../../core/entities/user-entity';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {UserFormDialogComponent} from '../../../dialogs';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: [
        './users-page.component.less'
    ],
})
export class UsersPageComponent implements OnInit {

    searchSubject = new BehaviorSubject(null);
    loading = false;
    paginator: PaginatorData<UserEntity> = {
        meta: {
            total: 0,
            current_page: 0,
            per_page: 10
        },
        data: []
    };
    displayedColumns: string[] = [
        'name',
        'email',
        'birthday',
        'type',
        'cellphone',
        'registration',
        'gender',
        'role',
        'actions'
    ];
    dataSource = [];
    search = '';
    sortable: { key: string; direction: 'asc' | 'desc' } = null;

    constructor(
        private userService: UserService,
        private dialogService: MatDialog
    ) {
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
        this.userService.paginate(
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

    edit(user?: UserEntity, title?: string) {
        this.dialogService.open(
            UserFormDialogComponent,
            {
                data: {
                    user: user,
                    title: title
                }
            }
        ).afterClosed().subscribe((data) => {
            if (data && user) {
                Object.assign(user, data);
            } else if (data) {
                this.paginator.data = [data].concat(this.paginator.data);
            }
        });
    }
}

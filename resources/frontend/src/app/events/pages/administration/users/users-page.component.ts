import { Component } from '@angular/core';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: [
        './users-page.component.less'
    ],
})
export class UsersPageComponent {
    displayedColumns: string[] = [
        'avatar',
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
}

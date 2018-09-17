import { Component } from '@angular/core';

@Component({
    selector: 'app-participants-page',
    templateUrl: './participants-page.component.html',
    styleUrls: [
        './participants-page.component.less'
    ],
})
export class ParticipantsPageComponent {
    search = null;
    displayedColumns: string[] = ['name'];
    dataSource = [
        {
            name: 'Gabriel Leandro J Siqueira'
        }
    ];
}

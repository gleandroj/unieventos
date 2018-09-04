import { Component } from '@angular/core';

@Component({
    selector: 'app-administration-page',
    templateUrl: './administration-page.component.html',
    styleUrls: [
        './administration-page.component.less'
    ],
})
export class AdministrationPageComponent {
    stop(event: Event) {
        event.stopPropagation();
    }
}

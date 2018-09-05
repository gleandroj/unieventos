import { Component } from '@angular/core';

@Component({
    selector: 'app-programming-page',
    templateUrl: './programming-page.component.html',
    styleUrls: [
        './programming-page.component.less'
    ],
})
export class ProgrammingPageComponent {
    stop(event: Event) {
        event.stopPropagation();
    }
}

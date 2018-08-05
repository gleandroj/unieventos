import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: [
        './home-page.component.less'
    ]
})
export class HomePageComponent {
    images = [
        'dist/assets/img/photos/photo29.jpg',
        'dist/assets/img/photos/photo30.jpg',
        'dist/assets/img/photos/photo31.jpg',
        'dist/assets/img/photos/photo32.jpg',
        'dist/assets/img/photos/photo33.jpg',
        'dist/assets/img/photos/photo34.jpg',
        'dist/assets/img/photos/photo35.jpg',
        'dist/assets/img/photos/photo21.jpg',
        'dist/assets/img/photos/photo36.jpg'
    ];
}

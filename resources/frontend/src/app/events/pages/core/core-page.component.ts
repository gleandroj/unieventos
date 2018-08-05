import {Component} from '@angular/core';
import { AuthService } from '../../../core/services';

@Component({
    selector: 'app-core-page',
    templateUrl: './core-page.component.html',
    styleUrls: [
        './core-page.component.less'
    ]
})
export class CorePageComponent {

    isCollapsed = true;

    public constructor(protected authService: AuthService){}

    get isAuthenticated(){
        return this.authService.isAuthenticated();
    }
}

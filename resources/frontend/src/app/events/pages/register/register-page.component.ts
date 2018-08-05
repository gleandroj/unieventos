import {Component} from '@angular/core';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: [
        './register-page.component.less'
    ]
})
export class RegisterPageComponent {
    register = {
        name: '',
        email: '',
        birthday: '',
        gender: '',
        password:'',
        password_confirmation: '',
        registration: '',
        type: ''
    };
}

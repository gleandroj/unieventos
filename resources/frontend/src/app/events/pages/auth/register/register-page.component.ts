import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
//import { AuthModel } from "../models/auth-model";
//import emailMask from 'text-mask-addons/dist/emailMask';
//import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
//import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import {AuthService} from '../../../../core/services';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: [
        './register-page.component.less'
    ]
})
export class RegisterPageComponent {
    public signupForm: FormGroup;
    public loading = false;
    public sexos = [
        {label: 'Masculino', value: 'M'},
        {label: 'Feminino', value: 'F'}
    ];
    public vinculos = [
        {label: 'Aluno', value: 0},
        {label: 'Servidor', value: 1},
        {label: 'Comunidade', value: 2}
    ];

    // public phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    // public emailMask = emailMask;
    // public dateMask = { mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/], pipe: createAutoCorrectedDatePipe('dd/mm/yyyy') };
    // public registrationMask = { mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] };

    constructor(
        activatedRroute: ActivatedRoute,
        private route: Router,
        fb: FormBuilder,
        private auth:
            AuthService,
        public snackBar: MatSnackBar
    ) {
        if (this.auth.isAuthenticated()) {
            this.auth.logout().subscribe();
        }
        this.signupForm = fb.group({
            avatar: null,
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
            birthday: '',
            gender: '',
            cellphone: '',
            type: '',
            registration: ''
        });
    }

    onSubmit(value: any) {
        this.loading = true;
        const data = value as any;
        // this.auth.register(data).subscribe((user) => {
        //     this.auth.login(data.email, data.password).subscribe((t)=>{
        //         this.loading = false;
        //         this.route.navigate(['/core/events']);
        //     });
        // }, (error: HttpErrorResponse) => {
        //     this.loading = false;
        //     let _error = error.error;
        //     let message = 'Ops! Algo deu errado, tente novamente.';
        //     if (error.status == 422 && _error.errors['email']) {
        //         message = _error.errors['email'][0];
        //     }
        //     this.snackBar.open(message, null, {
        //         duration: 3000
        //     });
        // });
    }
}

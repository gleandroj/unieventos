import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../../../core/services';
import {HttpErrorResponse} from '@angular/common/http';

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
            email: null,
            password: null,
            password_confirmation: null,
            name: null,
            birthday: null,
            gender: null,
            cellphone: null,
            type: null,
            registration: null
        });
    }

    onSubmit(value: any) {
        if (!this.signupForm.valid) {
            return;
        }

        this.loading = true;
        this.signupForm.disable();
        const data = value as any;

        this.auth.register(data).subscribe((response) => {
            this.auth.login(data.email, data.password)
                .subscribe((t) => {
                    this.loading = false;
                    this.route.navigate(['/sites']);
                    this.snackBar.open(response.data.message);
                });
        }, (error: HttpErrorResponse) => {
            this.loading = false;
            const _error = error.error;
            let message = 'Ops! Algo deu errado, tente novamente.';
            if (error.status === 422 && _error.data['email']) {
                message = _error.data['email'][0];
            }
            this.snackBar.open(message, null, {
                duration: 3000
            });
            this.signupForm.enable();
        });
    }
}

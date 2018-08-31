import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../../core/services';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.component.html',
    styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

    public loginForm: FormGroup;
    public redirectUrl: String;
    public defaultRedirectUrl: String = '/core';
    public loading: boolean = false;

    constructor(
        activatedRroute: ActivatedRoute,
        private route: Router, fb: FormBuilder,
        private auth: AuthService,
        public snackBar: MatSnackBar
    ) {
        if (this.auth.isAuthenticated()) this.auth.logout().subscribe(() => { });
        activatedRroute.queryParams.subscribe(
            (queryParam: any) => this.redirectUrl = queryParam['url']
        );
        this.loginForm = fb.group({
            username: null,
            password: null
        });
    }

    ngOnInit() { }

    onSubmit(value: any) {
        this.loading = true;
        this.auth.login(value.username, value.password).subscribe((token) => {
            this.route.navigate([this.redirectUrl || this.defaultRedirectUrl]);
        }, (error: HttpErrorResponse) => {
            this.loading = false;
            let _error = error.error;
            this.snackBar.open(_error.error === 'invalid_credentials' ? 'Ops! Usuário ou senha incorretos.' : (_error.message ? _error.message : 'Ops, algo deu errado.'), null, {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        });
    }

    login() { }
}

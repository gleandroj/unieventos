import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {authConfig, AuthService} from '../../../../core/services';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-forget-password-page',
    templateUrl: 'forget-password-page.component.html',
    styleUrls: ['./forget-password-page.component.less']
})
export class ForgetPasswordPageComponent {

    public recoveryForm: FormGroup;
    public loading = false;

    constructor(
        private route: Router,
        fb: FormBuilder,
        private auth: AuthService,
        public snackBar: MatSnackBar
    ) {
        this.recoveryForm = fb.group({
            username: null
        });
    }

    onSubmit(value: any) {
        this.loading = true;
        this.recoveryForm.disable();
        this.auth.passwordRecovery(value.username).subscribe((response) => {
            this.snackBar.open(response.status, null, {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
            this.route.navigate(authConfig.loginRoute);
        }, (response: HttpErrorResponse) => {
            this.loading = false;
            this.recoveryForm.enable();
            this.snackBar.open(response.error.message, null, {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        });
    }

}

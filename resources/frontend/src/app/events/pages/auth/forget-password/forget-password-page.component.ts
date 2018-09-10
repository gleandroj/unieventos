import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../../core/services';

@Component({
    selector: 'forget-password-page',
    templateUrl: 'forget-password-page.component.html',
    styleUrls: ['./forget-password-page.component.less']
})
export class ForgetPasswordPageComponent implements OnInit {

    public recoveryForm: FormGroup;
    public loading: boolean = false;

    constructor(
        activatedRroute: ActivatedRoute,
        private route: Router,
        fb: FormBuilder,
        private auth: AuthService,
        public snackBar: MatSnackBar
    ) {
        this.recoveryForm = fb.group({
            username: null
        });
    }

    ngOnInit() { }

    onSubmit(value: any) {
        this.loading = true;
        // this.auth.recoveryPassword(value.username).subscribe((response) => {
        //     this.snackBar.open(response.status);
        //     this.route.navigate(['/auth/login']);
        // }, (error: HttpErrorResponse) => {
        //     this.loading = false;
        //     this.snackBar.open(error.error.email || 'Ops! Algo deu errado, tente novamente.', null, {
        //         duration: 3000,
        //         horizontalPosition: 'end',
        //         verticalPosition: 'top'
        //     });
        // });
    }

}

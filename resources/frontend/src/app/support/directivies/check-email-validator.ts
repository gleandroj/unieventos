import {Directive, forwardRef, Input} from '@angular/core';
import {Validator, AbstractControl, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {UserService} from '../../core/services';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {DialogService} from '../services';
import {ToastService} from '../services';
import {HttpErrorResponse} from '@angular/common/http';

@Directive({
    selector: `[appCheckEmail][formControlName],[appCheckEmail][formControl],[appCheckEmail][ngModel]`,
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => CheckEmailValidator),
            multi: true
        }
    ]
})
export class CheckEmailValidator implements Validator {
    @Input() appCheckEmail: string;
    @Input() model: any = null;
    @Input() parent: any = null;

    private emailTimeout;

    constructor(protected userService: UserService,
                protected dialogService: DialogService,
                protected toastr: ToastService) {
    }

    public validate(c: AbstractControl): { [key: string]: any } {
        const v = c.value;
        if (v && c.dirty) {
            clearTimeout(this.emailTimeout);
            return new Promise((resolve, reject) => {
                this.emailTimeout = setTimeout(() => {
                    this.userService.checkEmailNotTaken(v, this.appCheckEmail)
                        .pipe(
                            map((a) => a),
                            catchError((err: HttpErrorResponse) => {
                                return of(err.error.data || {});
                            })
                        )
                        .subscribe(
                            response => resolve(response),
                            error => resolve(error));
                }, 600);
            });
        }
        return of({});
    }
}

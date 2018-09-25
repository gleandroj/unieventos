import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
} from '@angular/router';
import {AuthService, authConfig} from '../services';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router,
                private auth: AuthService,
                private toastr: MatSnackBar) {
    }

    check(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const authUser = this.auth.currentUser;
        const redirectUrl = `${state.url}`;
        const authPath = authConfig.loginRoute;
        const isLoggedIn = this.auth.isAuthenticated();
        const authorized = route.data['authorized'];
        if (isLoggedIn) {
            return true;
        } else if (isLoggedIn) {
            this.toastr.open('Usuário sem permissão para acessar o recurso.');
            return false;
        } else {
            this.router.navigate(authPath, {queryParams: {url: redirectUrl}});
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.check(childRoute, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.check(route, state);
    }
}

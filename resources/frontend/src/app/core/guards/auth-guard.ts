import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {AuthService} from '../services';
import {ToastService} from '../../support/services';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router,
                private auth: AuthService,
                private toastr: ToastService) {
    }

    check(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const authUser = this.auth.currentUser;
        const redirectUrl = `${state.url}`;
        const authConfig = this.auth.getAuthConfigFor(state.url);

        const authPath = authConfig.loginRoute;
        const isLoggedIn = this.auth.isAuthenticated(authConfig.provider);
        const authorized = route.data['authorized'];
        if (isLoggedIn) {
            return true;
        } else if (isLoggedIn) {
            this.toastr.error('Usuário sem permissão para acessar o recurso.');
            return false;
        } else {
            this.router.navigate(authPath, {queryParams: {url: redirectUrl}});
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.check(childRoute, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.check(route, state);
    }
}

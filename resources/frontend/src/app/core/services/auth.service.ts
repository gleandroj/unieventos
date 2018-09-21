import {Injectable, InjectionToken, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {AuthEntity, AuthTokenEntity} from '../entities/auth-entity';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {DialogService} from '../../support/services';
import {ApiResponse} from "../../support/interfaces/api-response";

export const authConfig = {
    loginEndPoint: '/api/auth/token',
    logoutEndPoint: '/api/auth/logout',
    currentUserEndPoint: '/api/auth/current',
    resetPasswordEndPoint: '/api/auth/password/reset',
    recoveryPasswordEndPoint: '/api/auth/password/email',
    registerUserEndPoint: '/api/auth/register',
    checkPasswordTokenEndPoint: '/api/auth/password/token',
    clientId: environment.authClientID,
    clientSecret: environment.authClientSecret,
    grantType: 'password',
    loginRoute: ['/sites/login']
}

@Injectable()
export class AuthService {

    @LocalStorage('current-user')
    protected _currentUser: AuthEntity;

    public currentUserSubject: BehaviorSubject<AuthEntity> = new BehaviorSubject<AuthEntity>(null);

    public authToken(): AuthTokenEntity {
        return this.localStorage.retrieve('auth-token');
    }

    public set currentUser(token: AuthEntity) {
        this._currentUser = token;
        this.currentUserSubject.next(token);
    }

    public get currentUser(): AuthEntity {
        return this._currentUser;
    }

    protected setAuthToken(token: AuthTokenEntity) {
        this.localStorage.store('auth-token', token);
    }

    constructor(
        private injector: Injector,
        private localStorage: LocalStorageService,
        private dialogService: DialogService,
        private http: HttpClient
    ) {
        this.initialize();
    }

    private initialize() {
        this.currentUserSubject.next(this._currentUser);
    }

    /**
     * @param {AuthTokenEntity} token
     * @returns {Observable<AuthEntity>}
     */
    private getCurrentUser(token: AuthTokenEntity): Observable<AuthEntity> {
        return this.http.get<AuthEntity>(authConfig.currentUserEndPoint)
            .pipe(tap(user => this.currentUser = user));
    }

    /**
     * @param email
     * @param password
     */
    public login(email: string, password: string): Observable<AuthEntity> {
        // return this.http.post<AuthTokenEntity>(authConfig.loginEndPoint, {
        //     username: email,
        //     password: password,
        //     'grant_type': authConfig.grantType,
        //     'client_id': authConfig.clientId,
        //     'client_secret': authConfig.clientSecret
        // }).pipe(
        //     tap((token: AuthTokenEntity) => this.setAuthToken(token)),
        //     switchMap(value => this.getCurrentUser(value))
        // );
        return of(new AuthEntity());
    }

    /**
     * @returns {Observable<AuthTokenEntity>}
     */
    public refresh(): Observable<AuthTokenEntity> {
        const authToken = this.authToken();
        return this.http.post<AuthTokenEntity>(authConfig.loginEndPoint, {
            'refresh_token': authToken ? authToken.refresh_token : '',
            'grant_type': 'refresh_token',
            'client_id': authConfig.clientId,
            'client_secret': authConfig.clientSecret
        }).pipe(
            tap((token: AuthTokenEntity) => this.setAuthToken(token))
        );
    }

    /**
     * @returns {boolean}
     */
    public isAuthenticated() {
        return this.authToken() != null;
    }

    /**
     * @returns {Observable<any>}
     */
    public logout(ignore?: boolean): Observable<any> {
        this.setAuthToken(null);
        this.currentUser = null;
        // this.dialogService.hideAll();
        return ignore ? of({success: true}) : this.http.get(authConfig.logoutEndPoint)
            .pipe(catchError(() => of({success: true})));
    }

    /**
     * @param {string} email
     * @returns {Observable<any>}
     */
    public passwordRecovery(email: string) {
        return this.http.post<any>(authConfig.recoveryPasswordEndPoint, {
            email: email
        });
    }

    /**
     * @param {string} token
     * @param {string} email
     * @returns {Observable<any>}
     */
    public checkResetToken(token: string, email: string) {
        return this.http.post<any>(authConfig.checkPasswordTokenEndPoint, {
            token: token,
            email: email
        });
    }

    /**
     * @param {string} email
     * @param {string} password
     * @param {string} passwordConfirmation
     * @param {string} token
     * @returns {Observable<any>}
     */
    public passwordReset(email: string, password: string, passwordConfirmation: string, token: string) {
        return this.http.post<any>(authConfig.resetPasswordEndPoint, {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            token: token
        }).pipe(switchMap((value) => {
                return this.login(email, password)
                    .pipe(switchMap(() => of(value)));
            })
        );
    }

    public register(data: any): Observable<ApiResponse<any>> {
        return this.http.post<ApiResponse<any>>(authConfig.registerUserEndPoint, data);
    }
}

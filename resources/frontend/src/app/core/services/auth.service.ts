import {Injectable, InjectionToken, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {AuthEntity, AuthTokenEntity} from '../entities/auth-entity';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {DialogService} from '../../support/services';

export interface AuthConfig {
    urlMatch: string;
    loginEndPoint: string;
    logoutEndPoint: string;
    currentUserEndPoint: string;
    resetPasswordEndPoint: string;
    recoveryPasswordEndPoint: string;
    checkPasswordTokenEndPoint: string;
    loginRoute: string[];
    clientId: string | number;
    clientSecret: string;
    grantType: string;
    provider?: string;
}

export class AuthConfigDefault implements AuthConfig {

    constructor(
        public urlMatch: string,
        public loginRoute: string[],
        public provider?: string
    ) {
    }

    loginEndPoint = '/api/auth/token';
    logoutEndPoint = '/api/auth/logout';
    currentUserEndPoint = '/api/auth/current';
    resetPasswordEndPoint = '/api/auth/password/reset';
    recoveryPasswordEndPoint = '/api/auth/password/email';
    checkPasswordTokenEndPoint = '/api/auth/password/token';
    clientId = environment.authClientID;
    clientSecret = environment.authClientSecret;
    grantType = 'password';
}

export const authConfigToken = new InjectionToken<AuthConfig>('authConfigToken');

@Injectable()
export class AuthService {

    @LocalStorage('current-user')
    protected _currentUser: AuthEntity;

    public currentUserSubject: BehaviorSubject<AuthEntity> = new BehaviorSubject<AuthEntity>(null);

    public tokenKey(provider?: string) {
        provider = provider ? provider : this.authConfig.provider;
        return 'auth-token' + (provider ? '-' + provider : '');
    }

    public authToken(provider?: string): AuthTokenEntity {
        return this.localStorage.retrieve(this.tokenKey(provider));
    }

    public set currentUser(token: AuthEntity) {
        this._currentUser = token;
        this.currentUserSubject.next(token);
    }

    public get currentUser(): AuthEntity {
        return this._currentUser;
    }

    protected setAuthToken(token: AuthTokenEntity) {
        this.localStorage.store(this.tokenKey(), token);
    }

    public getAuthConfigFor(url): AuthConfig {
        const configs = this.injector.get<AuthConfig[]>(authConfigToken);
        const conf = configs.filter((c) => url.match(c.urlMatch))[0];
        return conf ? conf : configs[0];
    }

    public get authConfig(): AuthConfig {
        return this.getAuthConfigFor(window.location.hash.substr(1));
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
        return this.http.get<AuthEntity>(this.authConfig.currentUserEndPoint)
            .pipe(tap(user => this.currentUser = user));
    }

    /**
     * @param email
     * @param password
     */
    public login(email: string, password: string): Observable<AuthEntity> {
        return this.http.post<AuthTokenEntity>(this.authConfig.loginEndPoint, {
            username: email,
            password: password,
            'grant_type': this.authConfig.grantType,
            'client_id': this.authConfig.clientId,
            'client_secret': this.authConfig.clientSecret,
            'provider': this.authConfig.provider
        }).pipe(
            tap((token: AuthTokenEntity) => this.setAuthToken(token)),
            switchMap(value => this.getCurrentUser(value))
        );
    }

    /**
     * @returns {Observable<AuthTokenEntity>}
     */
    public refresh(): Observable<AuthTokenEntity> {
        const authToken = this.authToken();
        return this.http.post<AuthTokenEntity>(this.authConfig.loginEndPoint, {
            'refresh_token': authToken ? authToken.refresh_token : '',
            'grant_type': 'refresh_token',
            'client_id': this.authConfig.clientId,
            'client_secret': this.authConfig.clientSecret,
            'provider': this.authConfig.provider
        }).pipe(
            tap((token: AuthTokenEntity) => this.setAuthToken(token))
        );
    }

    /**
     * @returns {boolean}
     */
    public isAuthenticated(provider?: string) {
        return this.authToken(provider) != null;
    }

    /**
     * @returns {Observable<any>}
     */
    public logout(ignore?: boolean): Observable<any> {
        this.setAuthToken(null);
        this.currentUser = null;
        this.dialogService.hideAll();
        return ignore ? of({success: true}) : this.http.get(this.authConfig.logoutEndPoint)
            .pipe(catchError(() => of({success: true})));
    }

    /**
     * @returns {Observable<any>}
     */
    public notifications(all = false): Observable<any> {
        return this.http.get<{ unread: any[]; read: any[] }>(
            `${this.authConfig.currentUserEndPoint}/notifications?all=${all ? 1 : 0}`
        )
            .pipe(map((r) => r));
    }

    /**
     * @returns {Observable<any>}
     */
    public deleteNotification(id): Observable<any> {
        return this.http.delete<any>(`${this.authConfig.currentUserEndPoint}/notifications/${id}`);
    }

    /**
     * @param {string} email
     * @returns {Observable<any>}
     */
    public passwordRecovery(email: string) {
        return this.http.post<any>(this.authConfig.recoveryPasswordEndPoint, {
            email: email
        });
    }

    /**
     * @param {string} token
     * @param {string} email
     * @returns {Observable<any>}
     */
    public checkResetToken(token: string, email: string) {
        return this.http.post<any>(this.authConfig.checkPasswordTokenEndPoint, {
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
        return this.http.post<any>(this.authConfig.resetPasswordEndPoint, {
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
}

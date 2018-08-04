import {NgModule, Provider} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SupportModule} from '../support/support.module';
import * as Resolvers from './resolvers';
import {Interceptor} from './http/interceptor';
import {AuthGuard} from './guards/auth-guard';
import * as AppServices from './services';
import * as DataSources from './data';

const Services: Provider[] = [
    {provide: AppServices.UserService, useClass: AppServices.UserService},
    {provide: DataSources.UserDataSource, useClass: DataSources.UserDataSource},
    {provide: Resolvers.PasswordCheckResolve, useClass: Resolvers.PasswordCheckResolve},
    {provide: AppServices.AuthService, useClass: AppServices.AuthService},
    {provide: AuthGuard, useClass: AuthGuard},
    {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
    }
];

const components = [];

/**
 * Contem Serviços e Entidades genéricas Reutilizáveis
 */
@NgModule({
    imports: [
        SupportModule,
    ],
    exports: [
        SupportModule,
        components
    ],
    declarations: [
        components
    ],
    entryComponents: []
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: Services
        };
    }
}

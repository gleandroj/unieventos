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
    {provide: Resolvers.PasswordCheckResolve, useClass: Resolvers.PasswordCheckResolve},
    {provide: Resolvers.ProgrammingResolve, useClass: Resolvers.ProgrammingResolve},
    {provide: AppServices.AuthService, useClass: AppServices.AuthService},
    {provide: AppServices.ProgrammingService, useClass: AppServices.ProgrammingService},
    {provide: AppServices.RequestCheckInService, useClass: AppServices.RequestCheckInService},
    {provide: AppServices.AuthorizeCheckInService, useClass: AppServices.AuthorizeCheckInService},
    {provide: AppServices.UserService, useClass: AppServices.UserService},
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

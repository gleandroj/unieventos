import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
    HomePageComponent,
    CorePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent,
    ProgrammingPageComponent,
    CheckInControlComponent,
    UsersPageComponent,
    ParticipantsPageComponent,
    FeedbackAdministrationPageComponent,
    ForgetPasswordPageComponent,
    ResetPasswordPageComponent
} from './pages';
import {AuthGuard} from '../core/guards/auth-guard';
import {ProgrammingResolve} from '../core/resolvers';

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginPageComponent,
                data: {
                    title: 'Login'
                }
            },
            {
                path: 'cadastro',
                component: RegisterPageComponent,
                data: {
                    title: 'Cadastro'
                }
            },
            {
                path: 'recuperar',
                component: ForgetPasswordPageComponent,
                data: {
                    title: 'Recuperar Senha'
                }
            },
            {
                path: 'senha',
                component: ResetPasswordPageComponent,
                data: {
                    title: 'Alterar Senha'
                }
            }
        ]
    },
    {
        path: 'sites',
        component: CorePageComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'inicio'
            },
            {
                path: 'inicio',
                component: HomePageComponent,
                data: {
                    title: 'Programação'
                }
            },
            {
                path: 'administracao',
                component: ProgrammingPageComponent,
                data: {
                    title: 'Gerenciar Programação',
                    authorization: [
                        'administrator'
                    ]
                }
            },
            {
                path: 'administracao/:id/participantes',
                component: ParticipantsPageComponent,
                resolve: {
                    programming: ProgrammingResolve
                },
                data: {
                    title: 'Participantes',
                    authorization: [
                        'administrator'
                    ]
                }
            },
            {
                path: 'administracao/feedback',
                component: FeedbackAdministrationPageComponent,
                data: {
                    title: 'Formulário de Avaliação',
                    authorization: [
                        'administrator'
                    ]
                }
            },
            {
                path: 'usuarios',
                component: UsersPageComponent,
                data: {
                    title: 'Gerenciar Usuários',
                    authorization: [
                        'administrator'
                    ]
                }
            },
            {
                path: 'autorizar-check-in',
                component: CheckInControlComponent,
                data: {
                    title: 'Autorizar de Check-in',
                    authorization: [
                        'administrator',
                        'auxiliary'
                    ]
                }
            },
            {
                path: '**',
                component: ErrorPageComponent,
                pathMatch: 'full',
                data: {
                    title: 'Página não encontrada'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule {
}

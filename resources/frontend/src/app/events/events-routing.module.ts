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
                    title: 'Gerenciar Programação'
                }
            },
            {
                path: 'administracao/participantes',
                component: ParticipantsPageComponent,
                data: {
                    title: 'Participantes'
                }
            },
            {
                path: 'administracao/feedback',
                component: FeedbackAdministrationPageComponent,
                data: {
                    title: 'Formulário de Avaliação'
                }
            },
            {
                path: 'usuarios',
                component: UsersPageComponent,
                data: {
                    title: 'Gerenciar Usuários'
                }
            },
            {
                path: 'check-in-controle',
                component: CheckInControlComponent,
                data: {
                    title: 'Controle de Check-in'
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

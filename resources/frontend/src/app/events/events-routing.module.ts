import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    ForgetPasswordPageComponent
} from './pages';

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
            }
        ]
    },
    {
        path: 'sites',
        component: CorePageComponent,
        children: [
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
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }

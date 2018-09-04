import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomePageComponent,
    CorePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent,
    AdministrationPageComponent,
    CheckInControlComponent,
    UsersPageComponent
} from './pages';

const routes: Routes = [
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
                path: 'administracao',
                component: AdministrationPageComponent,
                data: {
                    title: 'Gerenciar Agenda'
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

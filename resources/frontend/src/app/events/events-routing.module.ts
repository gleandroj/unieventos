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
import {BaseEntity} from '../core/entities/base-entity';

const generateBreadTitleForEntity = (prefix) => {
    return (entity: BaseEntity) => {
        return `${entity.id} - ${prefix}`;
    };
};

const routes: Routes = [
    {
        path: 'auth',
        data: {
            breadcrumb: 'SITES'
        },
        children: [
            {
                path: 'login',
                component: LoginPageComponent,
                data: {
                    breadcrumb: 'Login'
                }
            },
            {
                path: 'cadastro',
                component: RegisterPageComponent,
                data: {
                    breadcrumb: 'Cadastro'
                }
            },
            {
                path: 'recuperar',
                component: ForgetPasswordPageComponent,
                data: {
                    breadcrumb: 'Recuperar Senha'
                }
            },
            {
                path: 'senha',
                component: ResetPasswordPageComponent,
                data: {
                    breadcrumb: 'Alterar Senha'
                }
            }
        ]
    },
    {
        path: 'sites',
        component: CorePageComponent,
        canActivateChild: [AuthGuard],
        data: {breadcrumb: 'SITES'},
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
                    breadcrumb: 'Programação'
                }
            },
            {
                path: 'administracao',
                data: {
                    authorization: [
                        'administrator'
                    ],
                    breadcrumb: 'Gerenciar Programação'
                },
                children: [
                    {
                        path: '',
                        component: ProgrammingPageComponent,
                        data: {
                            authorization: [
                                'administrator'
                            ]
                        },
                    },
                    {
                        path: ':id/participantes',
                        component: ParticipantsPageComponent,
                        resolve: {
                            programming: ProgrammingResolve
                        },
                        data: {
                            authorization: [
                                'administrator'
                            ],
                            breadcrumb: generateBreadTitleForEntity('Participantes')
                        }
                    },
                    {
                        path: ':id/feedback',
                        component: FeedbackAdministrationPageComponent,
                        resolve: {
                            programming: ProgrammingResolve
                        },
                        data: {
                            authorization: [
                                'administrator'
                            ],
                            breadcrumb: generateBreadTitleForEntity('Formulário de Avaliação')
                        }
                    }
                ]
            },
            {
                path: 'usuarios',
                component: UsersPageComponent,
                data: {
                    authorization: [
                        'administrator'
                    ],
                    breadcrumb: 'Gerenciar Usuários'
                }
            },
            {
                path: 'autorizar-check-in',
                component: CheckInControlComponent,
                data: {
                    authorization: [
                        'administrator',
                        'auxiliary'
                    ],
                    breadcrumb: 'Autorizar de Check-in'
                }
            },
            {
                path: '**',
                component: ErrorPageComponent,
                pathMatch: 'full',
                data: {
                    breadcrumb: 'Página não encontrada'
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

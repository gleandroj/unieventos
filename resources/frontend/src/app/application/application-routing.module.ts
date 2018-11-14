import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
    HomePageComponent,
    CorePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent,
    ProgrammingAdministrationPageComponent,
    CheckInControlComponent,
    UsersPageComponent,
    ParticipantsPageComponent,
    FeedbackAdministrationPageComponent,
    ForgetPasswordPageComponent,
    ResetPasswordPageComponent, FeedbackReportPageComponent
} from './pages';
import {AuthGuard} from '../core/guards/auth-guard';
import {ProgrammingResolve} from '../core/resolvers';

const generateBreadTitleForEntity = (prefix, field) => {
    return (params) => {
        return `${params[field]} - ${prefix}`;
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
                        component: ProgrammingAdministrationPageComponent,
                        data: {
                            authorization: [
                                'administrator'
                            ]
                        },
                    },
                    {
                        path: ':programming/participantes',
                        component: ParticipantsPageComponent,
                        resolve: {
                            programming: ProgrammingResolve
                        },
                        data: {
                            authorization: [
                                'administrator'
                            ],
                            breadcrumb: generateBreadTitleForEntity('Participantes', 'programming')
                        }
                    },
                    {
                        path: ':programming/feedback',
                        data: {
                            breadcrumb: generateBreadTitleForEntity('Formulário de Avaliação', 'programming')
                        },
                        children: [
                            {
                                path: '',
                                component: FeedbackAdministrationPageComponent,
                                resolve: {
                                    programming: ProgrammingResolve
                                },
                                data: {
                                    authorization: [
                                        'administrator'
                                    ]
                                }
                            },
                            {
                                path: ':feedback/report',
                                component: FeedbackReportPageComponent,
                                resolve: {
                                    programming: ProgrammingResolve
                                },
                                data: {
                                    authorization: [
                                        'administrator'
                                    ],
                                    breadcrumb: generateBreadTitleForEntity('Relatório', 'feedback')
                                }
                            }
                        ]
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
export class ApplicationRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomePageComponent,
    CorePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent
} from './pages';

const routes: Routes = [
    {
        path: 'sites',
        component: CorePageComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'login',
                component: LoginPageComponent
            },
            {
                path: 'register',
                component: RegisterPageComponent
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

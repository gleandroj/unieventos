import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomePageComponent,
    CorePageComponent,
    LoginPageComponent,
    RegisterPageComponent
} from './pages';

const routes: Routes = [
    {
        path: 'events',
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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }

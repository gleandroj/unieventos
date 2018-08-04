import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent, CorePageComponent } from './pages';

const routes: Routes = [
    {
        path: 'home',
        component: CorePageComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }

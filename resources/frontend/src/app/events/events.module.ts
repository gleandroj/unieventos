import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';
import { SupportModule } from '../support/support.module';
import { CoreModule } from '../core/core.module';

import * as Pages from './pages';
import * as Dialogs from './dialogs';

const Components = [
    Pages.HomePageComponent,
    Pages.CorePageComponent,
    Pages.LoginPageComponent,
    Pages.RegisterPageComponent,
    Pages.ForgetPasswordPageComponent,
    Pages.ErrorPageComponent,
    Pages.ProgrammingPageComponent,
    Pages.CheckInControlComponent,
    Pages.UsersPageComponent,
    Pages.ParticipantsPageComponent,
    Pages.FeedbackAdministrationPageComponent,
    Dialogs.ProgrammingFormDialogComponent,
    Dialogs.SelectCanDialogComponent,
    Dialogs.CheckInDialogComponent,
    Dialogs.FeedbackDialogComponent,
    Dialogs.ConfirmDialogComponent,
    Dialogs.FeedbackFormDialogComponent
];

@NgModule({
    declarations: [
        Components
    ],
    imports: [
        BrowserModule,
        EventsRoutingModule,
        SupportModule,
        CoreModule
    ],
    providers: [],
    entryComponents: [
        Dialogs.ProgrammingFormDialogComponent,
        Dialogs.SelectCanDialogComponent,
        Dialogs.CheckInDialogComponent,
        Dialogs.FeedbackDialogComponent,
        Dialogs.ConfirmDialogComponent,
        Dialogs.FeedbackFormDialogComponent
    ]
})
export class EventsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EventsModule,
            providers: []
        };
    }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {EventsRoutingModule} from './events-routing.module';
import {SupportModule} from '../support/support.module';
import {CoreModule} from '../core/core.module';

import * as Pages from './pages';
import * as Dialogs from './dialogs';
import * as AppComponents from './components';


const Components = [
    Pages.HomePageComponent,
    Pages.CorePageComponent,
    Pages.LoginPageComponent,
    Pages.RegisterPageComponent,
    Pages.ForgetPasswordPageComponent,
    Pages.ResetPasswordPageComponent,
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
    Dialogs.FeedbackFormDialogComponent,
    Dialogs.LoterryDialogComponent,
    AppComponents.ImgInputComponent
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
        Dialogs.FeedbackFormDialogComponent,
        Dialogs.LoterryDialogComponent
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

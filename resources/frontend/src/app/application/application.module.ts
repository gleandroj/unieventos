import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ApplicationRoutingModule } from './application-routing.module';
import { SupportModule } from '../support/support.module';
import { CoreModule } from '../core/core.module';

import * as Pages from './pages';
import * as Dialogs from './dialogs';
import * as AppComponents from './components';
import { MaskPipe } from 'ngx-mask';


const PagesComponents = [
    Pages.HomePageComponent,
    Pages.CorePageComponent,
    Pages.LoginPageComponent,
    Pages.RegisterPageComponent,
    Pages.ForgetPasswordPageComponent,
    Pages.ResetPasswordPageComponent,
    Pages.ErrorPageComponent,
    Pages.ProgrammingAdministrationPageComponent,
    Pages.CheckInControlComponent,
    Pages.UsersPageComponent,
    Pages.ParticipantsPageComponent,
    Pages.FeedbackAdministrationPageComponent,
    Pages.FeedbackReportPageComponent,
    Pages.EditionReportPageComponent
];

const DialogComponents = [
    Dialogs.ProgrammingFormDialogComponent,
    Dialogs.SelectCanDialogComponent,
    Dialogs.CheckInDialogComponent,
    Dialogs.FeedbackDialogComponent,
    Dialogs.ConfirmDialogComponent,
    Dialogs.FeedbackFormDialogComponent,
    Dialogs.LotteryDialogComponent,
    Dialogs.CheckInConfirmDialogComponent,
    Dialogs.UserFormDialogComponent
];

const Components = [
    ...PagesComponents,
    ...DialogComponents,
    AppComponents.ImgInputComponent
];

@NgModule({
    declarations: [
        Components
    ],
    imports: [
        BrowserModule,
        ApplicationRoutingModule,
        SupportModule,
        CoreModule
    ],
    providers: [
        MaskPipe
    ],
    entryComponents: [
        ...DialogComponents
    ]
})
export class ApplicationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ApplicationModule,
            providers: []
        };
    }
}

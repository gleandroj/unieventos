import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMaskModule } from 'ngx-mask';
import { Ng2Webstorage } from 'ngx-webstorage';

import { FlexLayoutModule } from "@angular/flex-layout";

// import * as Components from './components';
import * as SupportServices from './services';
import * as Directives from './directivies';
import * as Pipes from './pipes';

import {
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatTabsModule,
    MatBadgeModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatStepperModule
} from '@angular/material';

const materialModules = [
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatTabsModule,
    MatBadgeModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatStepperModule
];

import {
    FroalaEditorModule,
    FroalaViewModule
} from 'angular-froala-wysiwyg';

import "froala-editor/js/froala_editor.pkgd.min.js";

const exportShared = [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxMaskModule,
    Ng2Webstorage,
    ...materialModules,
    FlexLayoutModule,
    FroalaEditorModule,
    FroalaViewModule
];

const importShared = [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ...materialModules,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    Ng2Webstorage.forRoot({ prefix: 'unieventos' })
];

const declarations = [
    Directives.EqualValidator,
    Directives.CheckEmailValidator,
    Pipes.Safe
];

const entryComponents = [
];

/**
 * Contém a base para todos os módulos
 */
@NgModule({
    imports: [
        ...importShared
    ],
    exports: [
        ...exportShared,
        ...declarations
    ],
    declarations: [
        ...declarations
    ],
    entryComponents: [
        ...entryComponents
    ]
})
export class SupportModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SupportModule,
            providers: [
                { provide: SupportServices.ToastService, useClass: SupportServices.ToastService },
                { provide: SupportServices.DialogService, useClass: SupportServices.DialogService }
            ]
        };
    }

}

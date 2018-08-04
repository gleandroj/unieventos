import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    BsDropdownModule,
    ModalModule,
    PopoverModule,
    TooltipModule,
    PaginationModule,
    TabsModule,
    CollapseModule
} from 'ngx-bootstrap';

import {NgxMaskModule} from 'ngx-mask';
import {Ng2Webstorage} from 'ngx-webstorage';

import * as Components from './components';
import * as SupportServices from './services';
import * as Directives from './directivies';
import * as Pipes from './pipes';

const exportShared = [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PopoverModule,
    TooltipModule,
    BrowserAnimationsModule,
    NgxMaskModule,
    BsDropdownModule,
    Ng2Webstorage,
    PaginationModule,
    TabsModule,
    CollapseModule
];

const importShared = [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    PaginationModule.forRoot(),
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    Ng2Webstorage.forRoot({prefix: 'unieventos'})
];

const declarations = [
    Components.DatatableComponent,
    Components.SortHeaderDirective,
    Components.InputControlComponent,
    Components.InputDialogComponent,
    Components.ConfirmDialogComponent,
    Components.AlertDialogComponent,
    Directives.EqualValidator,
    Directives.CheckEmailValidator,
    Pipes.Safe
];

const entryComponents = [
    Components.ConfirmDialogComponent,
    Components.AlertDialogComponent,
    Components.InputDialogComponent,
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
                {provide: SupportServices.ToastService, useClass: SupportServices.ToastService},
                {provide: SupportServices.DialogService, useClass: SupportServices.DialogService}
            ]
        };
    }

}

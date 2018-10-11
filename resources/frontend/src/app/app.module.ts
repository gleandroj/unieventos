import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SupportModule } from './support/support.module';
import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SupportModule.forRoot(),
        CoreModule.forRoot(),
        EventsModule.forRoot()
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

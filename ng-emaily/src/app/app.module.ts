import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StripeCheckoutModule } from 'ng-stripe-checkout';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpService } from './services/http.service';
import { DateDisplayComponent } from './date-display/date-display.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NotFoundComponent,
        DateDisplayComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StripeCheckoutModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }

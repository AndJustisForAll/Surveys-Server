import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpService } from './services/http.service';
import { DateDisplayComponent } from './date-display/date-display.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NotFoundComponent,
        DateDisplayComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }

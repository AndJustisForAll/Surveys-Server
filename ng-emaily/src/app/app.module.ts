import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { StripeCheckoutModule } from 'ng-stripe-checkout';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpService } from './services/http.service';
import { DateDisplayComponent } from './date-display/date-display.component';
import { HeaderComponent } from './header/header.component';
import { NewSurveyFormComponent } from './new-survey-form/new-survey-form.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyFormReviewComponent } from './survey-form-review/survey-form-review.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NotFoundComponent,
        DateDisplayComponent,
        HeaderComponent,
        NewSurveyFormComponent,
        SurveyFormComponent,
        SurveyFormReviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StripeCheckoutModule,
        FormsModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IUser } from './../classes/user';
import * as actions from './../actions';
import { IAppState } from './../store';
import { SurveyService } from './../services/survey.service';
import { ISurvey } from './../classes/survey';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [SurveyService]
})
export class DashboardComponent implements OnInit {
    @select() surveys: ISurvey[];
    @select() auth: IUser;
    constructor(private surveyService: SurveyService, private ngRedux: NgRedux<IAppState>) {
    }

    async getSurveys() {
        const surveys = await this.surveyService.getSurveys();
        this.ngRedux.dispatch({ type: actions.FETCH_SURVEYS, surveys });
    }

    ngOnInit() {
        this.getSurveys();
    }

}

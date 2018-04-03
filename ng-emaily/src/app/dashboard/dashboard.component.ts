import { Component, OnInit } from '@angular/core';
import { SurveyService } from './../services/survey.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [SurveyService]
})
export class DashboardComponent implements OnInit {
    private surveys;
    constructor(private surveyService: SurveyService) {
        this.surveys = [];
    }

    async getSurveys() {
        this.surveys = await this.surveyService.getSurveys();
    }

    ngOnInit() {
        this.getSurveys();
    }

}

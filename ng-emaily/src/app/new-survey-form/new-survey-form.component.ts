import { Component, OnInit } from '@angular/core';
import { SurveyForm } from './../classes/surveyForm';

@Component({
    selector: 'new-survey-form',
    templateUrl: './new-survey-form.component.html',
    styleUrls: ['./new-survey-form.component.css']
})
export class NewSurveyFormComponent implements OnInit {
    private showSurveyForm: boolean = true;
    private surveyForm: SurveyForm;
    
    constructor() { }

    ngOnInit() { }

    onFormReview(props: any): void {
        this.surveyForm = props.form;
        this.showSurveyForm = props.showReview;
    }
}

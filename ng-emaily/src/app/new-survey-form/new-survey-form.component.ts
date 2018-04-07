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
        const { title, subject, emailBody, recipients } = props.form;
        this.surveyForm = new SurveyForm(title, subject, emailBody, recipients);
        //TODO:AMUNOZ value doesn't reflect in the form binding
        this.showSurveyForm = props.showReview;
    }
}

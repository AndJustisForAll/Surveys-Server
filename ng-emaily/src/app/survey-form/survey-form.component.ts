import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SurveyForm } from './../classes/surveyForm';
import { Survey } from './../classes/survey';

@Component({
    selector: 'survey-form',
    templateUrl: './survey-form.component.html',
    styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
    @Output() onFormReview = new EventEmitter<any>();
    private form: SurveyForm;
    constructor() {
        this.form = {
            title: '',
            subject: '',
            emailBody: '',
            recipients: ''
        };
    }

    ngOnInit() { }

    reviewFormFields(showReview: boolean): void {
        //TODO:AMUNOZ  gather fields

        this.onFormReview.emit({ form: this.form, showReview });
    }

}

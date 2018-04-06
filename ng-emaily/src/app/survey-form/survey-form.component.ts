import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SurveyForm } from './../classes/surveyForm';

@Component({
    selector: 'survey-form',
    templateUrl: './survey-form.component.html',
    styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
    @Output() onFormReview = new EventEmitter<any>();
    private form: SurveyForm;
    constructor() { }

    ngOnInit() { }

    reviewFormFields(showReview: boolean) {
        //TODO:AMUNOZ  gather fields
        this.form = {
            title: 'some title',
            subject: 'subj',
            emailBody: 'emailysdjfl',
            recipients: 'sdkfj@sdkfj.com'
        };
        this.onFormReview.emit({ form: this.form, showReview });
    }

}

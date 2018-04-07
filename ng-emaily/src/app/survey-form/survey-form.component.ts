import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SurveyForm } from './../classes/surveyForm';

@Component({
    selector: 'survey-form',
    templateUrl: './survey-form.component.html',
    styleUrls: ['./survey-form.component.css'],
    
})
export class SurveyFormComponent implements OnInit {
    @Output() onFormReview = new EventEmitter<any>();
    private form: SurveyForm;
    constructor() {
        if (!this.form) {
            this.form = {
                title: '',
                subject: '',
                emailBody: '',
                recipients: ''
            };
        }
    }

    ngOnInit() { }

    reviewFormFields(showReview: boolean): void {
        const { title, subject, emailBody, recipients } = this.form;
        const form = new SurveyForm(title, subject, emailBody, recipients);
        this.onFormReview.emit({ form, showReview });
    }

}

import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { SurveyForm } from './../classes/surveyForm';

@Component({
    selector: 'survey-form-review',
    templateUrl: './survey-form-review.component.html',
    styleUrls: ['./survey-form-review.component.css']
})
export class SurveyFormReviewComponent implements OnInit {
    @Output() onFormReview = new EventEmitter<any>();
    @Input() private surveyForm: SurveyForm;

    constructor() { }

    ngOnInit() { }

    reviewFormFields(showReview: boolean) {
      const { title, subject, emailBody, recipients } = this.surveyForm;
      const form = new SurveyForm(title, subject, emailBody, recipients);
      this.onFormReview.emit({ form, showReview });
    }
}

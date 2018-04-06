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
        this.onFormReview.emit({surveyForm:this.surveyForm, showReview});
    }
}

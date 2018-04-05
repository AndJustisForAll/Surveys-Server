import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'new-survey-form',
    templateUrl: './new-survey-form.component.html',
    styleUrls: ['./new-survey-form.component.css']
})
export class NewSurveyFormComponent implements OnInit {
    private showSurveyForm: boolean = true;
    constructor() { }

    ngOnInit() {
    }

    onReviewForm(showReview: boolean) {
        this.showSurveyForm = showReview;
    }
}

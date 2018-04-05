import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'survey-form-review',
    templateUrl: './survey-form-review.component.html',
    styleUrls: ['./survey-form-review.component.css']
})
export class SurveyFormReviewComponent implements OnInit {
    @Output() onReviewForm = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() { }

    toggleShowReviewForm(showReview: boolean) {
        this.onReviewForm.emit(showReview);
    }
}

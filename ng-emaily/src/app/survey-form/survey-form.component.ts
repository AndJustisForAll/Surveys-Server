import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'survey-form',
    templateUrl: './survey-form.component.html',
    styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
    @Output() onReviewForm = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() { }

    toggleShowReviewForm(showReview: boolean) {
        this.onReviewForm.emit(showReview);
    }

}

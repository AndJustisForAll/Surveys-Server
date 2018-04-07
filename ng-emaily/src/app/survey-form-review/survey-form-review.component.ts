import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../store';
import * as actions from './../actions';
import { Router } from '@angular/router';
import { SurveyForm } from './../classes/surveyForm';
import { SurveyService } from './../services/survey.service';

@Component({
    selector: 'survey-form-review',
    templateUrl: './survey-form-review.component.html',
    styleUrls: ['./survey-form-review.component.css'],
    providers: [SurveyService]
})
export class SurveyFormReviewComponent implements OnInit {
    @Output() onFormReview = new EventEmitter<any>();
    @Input() private surveyForm: SurveyForm;

    constructor(private surveyService: SurveyService, private router: Router, private ngRedux: NgRedux<IAppState>) { }

    ngOnInit() { }

    reviewFormFields(showReview: boolean): void {
        const { title, subject, emailBody, recipients } = this.surveyForm;
        const form = new SurveyForm(title, subject, emailBody, recipients);
        this.onFormReview.emit({ form, showReview });
    }

    async submit() {
        const user = await this.surveyService.saveSurvey(this.surveyForm);
        this.ngRedux.dispatch({ type: actions.FETCH_USER, auth: user });
        this.router.navigate(['/surveys']);
    }
}

import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import{ Router} from '@angular/router';
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

    constructor(private surveyService: SurveyService, private router: Router) { }

    ngOnInit() { }

    reviewFormFields(showReview: boolean): void {
        const { title, subject, emailBody, recipients } = this.surveyForm;
        const form = new SurveyForm(title, subject, emailBody, recipients);
        this.onFormReview.emit({ form, showReview });
    }

    async submit(): void {
        const user = await this.surveyService.saveSurvey(this.surveyForm);
        // return user;
        this.router.navigate(['/surveys']);
    }
}

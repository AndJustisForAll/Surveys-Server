import { Injectable } from '@angular/core';
import { SurveyForm } from './../classes/surveyForm';
import { HttpService } from './http.service';

@Injectable()
export class SurveyService {

    constructor(private httpService: HttpService) { }

    async getSurveys(): any {
        return await this.httpService.get('api/surveys');
    }

    async saveSurvey(surveyForm: SurveyForm): any {
        return await this.httpService.post('api/surveys', surveyForm);
    }
}

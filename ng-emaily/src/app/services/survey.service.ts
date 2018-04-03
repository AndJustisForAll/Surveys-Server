import { Injectable } from '@angular/core';
import { Survey } from './../classes/survey';
import { HttpService } from './http.service';

@Injectable()
export class SurveyService {

    constructor(private httpService: HttpService) { }

    async getSurveys() {
        let surveys = await this.httpService.get('api/surveys');
        return surveys || [];
    }
}

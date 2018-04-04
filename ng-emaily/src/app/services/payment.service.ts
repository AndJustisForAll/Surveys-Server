import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class PaymentService {

    constructor(private httpService: HttpService) { }

    async handleToken(token) {
        return await this.httpService.post('/api/stripe', token)
    }
}

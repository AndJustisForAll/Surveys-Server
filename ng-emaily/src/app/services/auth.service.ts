import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class AuthService {

    constructor(private httpService: HttpService) { }

    async fetchUser() {
        return await this.httpService.get('/api/current_user');
    }
}

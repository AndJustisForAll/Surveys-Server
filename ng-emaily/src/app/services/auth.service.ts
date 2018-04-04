import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User} from './../classes/user';

@Injectable()
export class AuthService {

    constructor(private httpService: HttpService) { }

    async fetchUser() {
        return await this.httpService.get('/api/current_user');
    }
}

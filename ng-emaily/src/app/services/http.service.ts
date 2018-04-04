import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class HttpService {

    constructor() { }

    async get(url: string, params = {}) {
        const response = await axios.get(url, params);
        return response.data;
    }

    async post(url: string, params = {}) {
      const response = await axios.post(url, params);
      return response.data;
    }
}

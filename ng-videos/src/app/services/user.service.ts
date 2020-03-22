import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from './config.service';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public apiUrl: string;
    public identity: object;
    public token: string;

    constructor(public _http: HttpClient) {
        this.apiUrl = config.url;
    }

    register(user: User): Observable<any> {
        const json = JSON.stringify(user);
        const params = 'json=' + json;

        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.apiUrl + 'register', params, { headers });
    }

    login(user: User, token: boolean = false): Observable<any> {
        if (token) {
            user.token = true;
        } else {
            user.token = false;
        }
        const json = JSON.stringify(user);
        const params = 'json=' + json;

        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.apiUrl + 'login', params, { headers });
    }

    getIdentity(): object {
        const identity = JSON.parse(localStorage.getItem('identity'));
        if (identity) {
            this.identity = identity;
        } else {
            this.identity = null;

        }

        return this.identity;
    }

    getToken(): string {
        const token = localStorage.getItem('token');
        if (token) {
            this.token = token;
        } else {
            this.token = null;

        }
        return this.token;

    }
}

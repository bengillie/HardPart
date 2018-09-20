import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../model/user.model';

@Injectable()
export class UserService {
    private url = 'api/user';

    constructor(private http: HttpClient) { }

    getUserById(userId: number) : Observable<User> {
        const url = `${this.url}/${userId}`;
        return this.http.get<User>(url);
    }
}
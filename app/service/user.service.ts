import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user.model';

@Injectable()
export class UserService {
    private url = 'api/user';

    constructor(private http: HttpClient) { }

    getUserByEmailAddress(emailAddress: string): Observable<User> {
        let params = new HttpParams();
        params = params.append('email', emailAddress);

        return this.http.get<User[]>(this.url, {params: params})
            .pipe(
                map(x => x[0])
            );
    }

    getUserById(userId: number) : Observable<User> {
        const url = `${this.url}/${userId}`;
        return this.http.get<User>(url);
    }
}
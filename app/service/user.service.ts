import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    private url = 'api/user';

    constructor(private http: HttpClient) { }

    getUserByEmailAddress(emailAddress: string): Observable<User> {
        let params = new HttpParams();
        params = params.append('email', encodeURIComponent(emailAddress));

        return this.http.get<User[]>(this.url, {params: params})
            .pipe(
                map(x => x[0])
            );
    }

    getUserById(userId: number) : Observable<User> {
        const url = `${this.url}/${userId}`;
        return this.http.get<User>(url);
    }

    updateUser (user: User): Observable<any> {
        return this.http.put(this.url, user, httpOptions);
    }
}
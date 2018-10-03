import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class UserService {
    private url = 'user';

    constructor(private httpService: HttpService) { }

    getUserByPrimaryEmail(emailAddress: string): Observable<User> {
        let params = new HttpParams();
        params = params.append('emailprimary', encodeURIComponent(emailAddress));

        return this.httpService.get<User[]>(this.url, params)
            .pipe(
                map(x => x[0])
            );
    }

    getUserBySecondaryEmail(emailAddress: string): Observable<User> {
        let params = new HttpParams();
        params = params.append('emailsecondary', encodeURIComponent(emailAddress));

        return this.httpService.get<User[]>(this.url, params)
            .pipe(
                map(x => x[0])
            );
    }

    getUserById(userId: number) : Observable<User> {
        const newUrl = `${this.url}/${userId}`;
        return this.httpService.get<User>(newUrl);
    }

    updateUser (user: User): Observable<any> {
        return this.httpService.put(this.url, user);
    }
}
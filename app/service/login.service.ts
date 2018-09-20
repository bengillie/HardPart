import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 

import { User } from '../model/user.model';

import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

@Injectable()
export class LoginService {
    login: User;

    private loginUrl = 'api/user';

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private logService: LoggingService
    ) { }


    getUser(login: User): Observable<User> {
        let params = new HttpParams();
        params = params.append('username', login.username);
        params = params.append('password', login.password);
        params = params.append('birthdate', login.birthdate.toString());

        return this.http.get<User[]>(this.loginUrl, {params: params})
        .pipe(
            map(users => users[0]),
            tap(_ => this.logService.log(`fetched username = ${login.username}`)),
            catchError(this.errorService.handleError<User>(`getUser username = ${login.username}`))
        );
    }

}

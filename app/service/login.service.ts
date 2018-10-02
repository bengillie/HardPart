import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';

import { ErrorService } from '../service/error.service';
import { HttpService } from '../service/httpservice.service';
import { LoggingService } from '../service/logging.service';

@Injectable()
export class LoginService {
    url = "user";

    constructor(private errorService: ErrorService,
        private httpService: HttpService,
        private logService: LoggingService) { }

    getUser(login: User): Observable<User> {
        let params = new HttpParams();
        params = params.append('username', login.username);
        params = params.append('password', login.password);
        params = params.append('birthdate', login.birthdate.toString());

        return this.httpService.get<User[]>(this.url, params)
        .pipe(
            map(users => users[0]),
            tap(_ => this.logService.log(`fetched username = ${login.username}`)),
            catchError(this.errorService.handleError<User>(`getUser username = ${login.username}`))
        );
    }
}

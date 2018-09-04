import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators'; 

import { UserModel, UserType } from '../model/user.model';

import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

@Injectable()
export class LoginService {
    user: UserModel;
    userType: UserType;

    private userUrl = 'api/users';

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private logService: LoggingService
    ) { }

    getLoggedInUser(): UserModel {
        return this.user;
    }

    getUser(user: UserModel): Observable<UserModel> {

        let params = new HttpParams();
        params = params.append('username', user.username);
        params = params.append('password', user.password);
        params = params.append('birthdate', user.birthdate.toString());

        return this.http.get<UserModel[]>(this.userUrl, {params: params})
        .pipe(
            map(users => users[0]),
            tap(_ => this.logService.log(`fetched username = ${user.username}`)),
            catchError(this.errorService.handleError<UserModel>(`getUser username = ${user.username}`))
        );
    }

    setLoggedInUser(user: UserModel) {
        this.user = user;
    }

}

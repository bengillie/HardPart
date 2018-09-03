import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RouterExtensions } from 'nativescript-angular/router'
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators'; 

import { UserModel, UserType } from '../model/user.model';

import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

@Injectable()
export class LoginService {
    user = UserModel;
    userType = UserType;

    private userUrl = 'api/users';

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private logService: LoggingService
    ) { }

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

    getLoggedUser(id: number): Observable<UserModel> {
        const url = `${this.userUrl}/${id}`;

        return this.http.get<UserModel[]>(url)
        .pipe(
            map(users => users[0]),
            tap(_ => this.logService.log(`fetched user id = ${id}`)),
            catchError(this.errorService.handleError<UserModel>(`getUser id = ${id}`))
        );
    }
}

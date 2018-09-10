import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 

import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

import { Lesson, Period } from '../model/timetable.model';
import { LoginService } from '~/service/login.service';
import { UserModel } from '~/model/user.model';

@Injectable()
export class TimetableService {
    private url = 'api/';

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private logService: LoggingService,
        private loginService: LoginService
    ) { }
    
    getLessons(): Observable<Lesson[]> {
        const loggedInUser: UserModel = this.loginService.getLoggedInUser();
        let params = new HttpParams();
        params = params.append('userId', loggedInUser.id.toString());
        
        return this.http.get<Lesson[]>(this.url + "lessons", {params: params})
        .pipe(
            map(lesson => lesson),
            tap(_ => this.logService.log(`fetched lessons for user id = ${loggedInUser.id.toString()}`)),
            catchError(this.errorService.handleError<Lesson[]>(`getLesson user id = ${loggedInUser.id.toString()}`))
        );
    }

    getPeriods(startDate: Date, endDate: Date): Observable<Period[]> {
        let params = new HttpParams();
        params = params.append('startDate', startDate.toString());
        params = params.append('endDate', endDate.toString());

        // TODO - only get periods between a set of dates by passing in params.
        return this.http.get<Period[]>(this.url + "periods")
        .pipe(
            map(periods => periods),
            tap(_ => this.logService.log(`fetched period = ${startDate.toString()}`)),
            catchError(this.errorService.handleError<Period[]>(`getPeriod period = ${startDate.toString()}`))
        );
    }
}

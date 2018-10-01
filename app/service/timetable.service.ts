import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 

import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

import { Lesson, Period } from '../model/timetable.model';
import { AppValuesService } from '~/service/appvalues.service';
import { User } from '~/model/user.model';

@Injectable()
export class TimetableService {
    private url = 'api/';

    constructor(
        private http: HttpClient,
        private appValuesService: AppValuesService,
        private errorService: ErrorService,
        private logService: LoggingService
    ) { }
    
    getLessons(dateRange: string[]): Observable<Lesson[]> {
        const loggedInUser: User = this.appValuesService.getLoggedInUser();
        let params = new HttpParams();
        params = params.append('userId', loggedInUser.id.toString());
        params = params.append('startDate', JSON.stringify(dateRange));
        params = params.append('endDate', JSON.stringify(dateRange));
        
        return this.http.get<Lesson[]>(this.url + "lessons", {params: params})
        .pipe(
            map(lesson => lesson),
            tap(_ => this.logService.log(`fetched lessons for student id = ${loggedInUser.id.toString()}`)),
            catchError(this.errorService.handleError<Lesson[]>(`getLesson student id = ${loggedInUser.id.toString()}`))
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
            tap(_ => this.logService.log(`fetched period = ${startDate.toString()} to ${endDate.toString()}`)),
            catchError(this.errorService.handleError<Period[]>(`getPeriod period = ${startDate.toString()} to ${endDate.toString()}`))
        );
    }

    /* getPeriods(dateRange: string[]): Observable<Period[]> {
        let params = new HttpParams();
        params = params.append('startDate', JSON.stringify(dateRange));
        params = params.append('endDate', JSON.stringify(dateRange));
        
        // TODO - only get periods between a set of dates by passing in params.
        return this.http.get<Period[]>(this.url + "periods", {params: params})
        .pipe(
            map(periods => periods),
            tap(_ => this.logService.log(`fetched period from ${dateRange[0]} to ${dateRange[dateRange.length-1]}`)),
            catchError(this.errorService.handleError<Period[]>(`getPeriods(): period = ${dateRange[0]} to ${dateRange[dateRange.length-1]}`))
        );
    } */
}

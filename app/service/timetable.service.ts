import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 

import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

import { Lessons, Periods } from '../model/timetable.model';
import { Parent } from '../model/user.model';

@Injectable()
export class TimetableService {
    private url = 'api/lessons';
    private parentUrl = 'api/parent';

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private logService: LoggingService
    ) { }
    
    getLesson(userId: number): Observable<Lessons[]> {
        let params = new HttpParams();
        params = params.append('id', userId.toString());
        
        return this.http.get<Lessons[]>(this.url, {params: params})
        .pipe(
            map(lesson => lesson),
            tap(_ => this.logService.log(`fetched user id = ${userId}`)),
            catchError(this.errorService.handleError<Lessons[]>(`getLesson() user id = ${userId}`))
        );
    }

    getPeriod(startDate: Date, endDate: Date): Observable<Periods> {
        let params = new HttpParams();
        params = params.append('startDate', startDate.toString());
        params = params.append('endDate', endDate.toString());

        return this.http.get<Periods>(this.url, {params: params})
        .pipe(
            map(period => period[0]),
            tap(_ => this.logService.log(`fetched period = ${startDate.toString()}`)),
            catchError(this.errorService.handleError<Periods>(`getPeriod() period = ${startDate.toString()}`))
        );
    }

    getParent(userId: number): Observable<Parent> {
        const url = `${this.parentUrl}/${userId}`;

        return this.http.get<Parent>(url)
        .pipe(
            tap(_ => this.logService.log(`fetched parent id = ${userId.toString()}`)),
            catchError(this.errorService.handleError<Parent>(`getParent() parent id = ${userId.toString()}`))
        );
    }

/*     getPeriod(startDate: Date, endDate: Date): Observable<Periods[]> {
        return this.http.get<Periods[]>(this.url)
        .pipe(
            map(period => period),
            tap(_ => this.logService.log(`fetched period = ${startDate.toString()}`)),
            catchError(this.errorService.handleError<Periods[]>(`getPeriod period = ${startDate.toString()}`))
        );
    } */
}

import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Lesson, Period } from '../model/timetable.model';
import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';
import { ErrorService } from '../service/error.service';
import { HttpService } from '../service/httpservice.service';
import { LoggingService } from '../service/logging.service';

@Injectable()
export class TimetableService {
    private url_lesson = 'lesson';
    private url_period = 'period';

    constructor(private appValuesService: AppValuesService,
        private errorService: ErrorService,
        private httpService: HttpService,
        private logService: LoggingService) { }

    getLessons(dateRange: string[]): Observable<Lesson[]> {
        const selectedStudent: User = this.appValuesService.getSelectedStudent();
        let params = new HttpParams();
        params = params.append('userId', selectedStudent.id.toString());
        params = params.append('startDate', JSON.stringify(dateRange));
        params = params.append('endDate', JSON.stringify(dateRange));
        
        return this.httpService.get<Lesson[]>(this.url_lesson, params)
        .pipe(
            map(lesson => lesson),
            tap(_ => this.logService.log(`fetched lessons for student id = ${selectedStudent.id.toString()}`)),
            catchError(this.errorService.handleError<Lesson[]>(`getLesson student id = ${selectedStudent.id.toString()}`))
        );
    }

    getPeriods(dateRange: string[]): Observable<Period[]> {
        let params = new HttpParams();
        params = params.append('startDate', JSON.stringify(dateRange));
        params = params.append('endDate', JSON.stringify(dateRange));
        
        return this.httpService.get<Period[]>(this.url_period, params)
        .pipe(
            map(periods => periods),
            tap(_ => this.logService.log(`fetched period from ${dateRange[0]} to ${dateRange[dateRange.length-1]}`)),
            catchError(this.errorService.handleError<Period[]>(`getPeriods(): period = ${dateRange[0]} to ${dateRange[dateRange.length-1]}`))
        );
    }
}

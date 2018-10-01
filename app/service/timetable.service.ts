import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Lesson, Period } from '../model/timetable.model';
import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class TimetableService {
    constructor(private appValuesService: AppValuesService,
        private httpService: HttpService) { }

    getLessons(dateRange: string[]): Observable<Lesson[]> {
        const loggedInUser: User = this.appValuesService.getLoggedInUser();
        return this.httpService.getLessons(dateRange, loggedInUser);
    }

    getPeriods(startDate: Date, endDate: Date): Observable<Period[]> {
        return this.httpService.getPeriods(startDate, endDate);
    }
}

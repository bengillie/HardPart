import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Notification } from '~/model/notification.model';
import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';
import { ErrorService } from '../service/error.service';
import { HttpService } from '../service/httpservice.service';
import { LoggingService } from '../service/logging.service';

@Injectable()
export class NotificationService {
    private url = 'notification';

    constructor(
        private appValuesService: AppValuesService,
        private errorService: ErrorService,
        private httpService: HttpService,
        private logService: LoggingService
    ) { }

    getEmergencyNotification(): Observable<Notification[]> {
        const loggedInUser: User = this.appValuesService.getLoggedInUser();
        let params = new HttpParams();
        // params = params.append('userId', JSON.stringify(loggedInUser.id));
        params = params.append('displayOnLogin', JSON.stringify(true));

        return this.httpService.get<Notification[]>(this.url, params)
        .pipe(
            map(emergencyNotification => emergencyNotification),
            catchError(this.errorService.handleError<Notification[]>(`getNotification(): student id = ${loggedInUser.id.toString()}`))
        );
    }

    getNotification(): Observable<Notification[]> {
        const loggedInUser: User = this.appValuesService.getLoggedInUser();
        let params = new HttpParams();
        // params = params.append('userId', JSON.stringify(loggedInUser.id));
        params = params.append('seen', JSON.stringify(false));

        return this.httpService.get<Notification[]>(this.url, params)
        .pipe(
            map(notification => notification),
            catchError(this.errorService.handleError<Notification[]>(`getNotification(): student id = ${loggedInUser.id.toString()}`))
        );
    }

    updateNotification(notification: Notification): Observable<any> {
        return this.httpService.put(this.url, notification)
        .pipe(
            catchError(this.errorService.handleError<Notification[]>(`updateNotification(): user id = ${notification.id.toString()}`))
        );
    }
}
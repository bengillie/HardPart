import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Notification } from '~/model/notification.model';
import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class NotificationService {
    constructor(
        private appValuesService: AppValuesService,
        private httpService: HttpService
    ) { }

    // getNotification(): Observable<Notification[]> {
    //     const loggedInUser: User = this.appValuesService.getLoggedInUser();
    //     return this.httpService.getNotification(loggedInUser);
    // }

    // updateNotification(notification: Notification): Observable<any> {
    //     return this.httpService.updateNotification(notification);
    // }
}
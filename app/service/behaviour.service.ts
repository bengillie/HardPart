import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Behaviour } from '~/model/behaviour.model';
import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';
import { ErrorService } from '../service/error.service';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class BehaviourService {
    private url = "behaviour";

    constructor(
        private appValuesService: AppValuesService,
        private errorService: ErrorService,
        private httpService: HttpService,
    ) { }

    getBehaviour(): Observable<Behaviour[]> {
        const loggedInUser: User = this.appValuesService.getLoggedInUser();
        let params = new HttpParams();
        params = params.append('userId', JSON.stringify(loggedInUser.id));

        return this.httpService.get<Behaviour[]>(this.url, params)
        .pipe(
            map(advert => advert),
            catchError(this.errorService.handleError<Behaviour[]>(`getAdvert()`))
        );
    }
}

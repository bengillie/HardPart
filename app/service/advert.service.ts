import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Advert } from '~/model/advert.model';

import { ErrorService } from '../service/error.service';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class AdvertService {
    private url = "advert";

    constructor(
        private errorService: ErrorService,
        private httpService: HttpService,
    ) { }
    
    getAdvert(): Observable<Advert[]> {
        return this.httpService.get<Advert[]>(this.url)
        .pipe(
            map(advert => advert),
            catchError(this.errorService.handleError<Advert[]>(`getAdvert()`))
        );
    }
}

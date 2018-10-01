import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../model/user.model';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class LoginService {
    constructor(private httpService: HttpService) { }

    getUser(login: User): Observable<User> {
        return this.httpService.getUser(login);
    }
}

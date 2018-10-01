import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../model/user.model';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class UserService {
    constructor(private httpService: HttpService) { }

    getUserByEmailAddress(emailAddress: string): Observable<User> {
        return this.httpService.getUserByEmailAddress(emailAddress);
    }

    getUserById(userId: number) : Observable<User> {
        return this.httpService.getUserById(userId);
    }

    updateUser (user: User): Observable<any> {
        return this.httpService.updateUser(user);
    }
}
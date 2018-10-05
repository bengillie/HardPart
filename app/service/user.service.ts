import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';

import { HelperService } from '../service/helper.service';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class UserService {
    private url = 'user';

    constructor(private httpService: HttpService,
        private helperService: HelperService) { }

    getUserByPrimaryEmail(emailAddress: string): Observable<User> {
        let params = new HttpParams();
        params = params.append('emailprimary', encodeURIComponent(emailAddress));

        return this.httpService.get<User[]>(this.url, params)
            .pipe(
                map(x => x[0])
            );
    }

    getUserBySecondaryEmail(emailAddress: string): Observable<User> {
        let params = new HttpParams();
        params = params.append('emailsecondary', encodeURIComponent(emailAddress));

        return this.httpService.get<User[]>(this.url, params)
            .pipe(
                map(x => x[0])
            );
    }

    getUserById(userId: number) : Observable<User> {
        const newUrl = `${this.url}/${userId}`;
        return this.httpService.get<User>(newUrl);
    }

    updateUser (user: User): Observable<any> {
        return this.httpService.put(this.url, user);
    }

    validatePassword(passwordNew: string, passwordConfirm: string) {
		if(passwordNew.trim().length === 0) {
			return { 
                control: 'newpassword',
                message: 'New password is required.'
            };
		} else if(passwordNew.length < 6) {
            return { 
                control: 'newpassword',
                message: 'Password must have atleast 6 characters.'
            };
		} else if(!this.helperService.isAlphaNumeric(passwordNew)) {
            return { 
                control: 'newpassword',
                message: 'Password must be alphanumeric.'
            };
		} else if(passwordConfirm.trim().length === 0) {
            return { 
                control: 'confirmpassword',
                message: 'Confirm password is required.'
            };
		} else if(passwordNew !== passwordConfirm) {
            return { 
                control: 'confirmpassword',
                message: 'New password and confirm password do not match.'
            };
		} else {
            return null;
		}
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RouterExtensions } from 'nativescript-angular/router'
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators'; 

import { UserModel, UserType } from '../model/user.model';

@Injectable()
export class LoginService {

    user = UserModel;
    userType = UserType;

    private userUrl = 'api/users';

    constructor(
        private http: HttpClient,
        private router: RouterExtensions
    ) { }

    getUser(user: UserModel): Observable<UserModel> {

        let params = new HttpParams();
        params = params.append('username', user.username);
        params = params.append('password', user.password);
        params = params.append('birthdate', user.birthdate.toString());

        return this.http.get<UserModel[]>(this.userUrl, {params: params})
        .pipe(
            map(users => users[0]),
            tap(_ => this.log(`fetched username = ${user.username}`)),
            catchError(this.handleError<UserModel>(`getUser username = ${user.username}`))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
    }
    
    // Log error 
    private log(message: string) {
        console.log('LoginService: ' + message);
    }
}

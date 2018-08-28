import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { UserModel, UserType } from '../model/user.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

    user = UserModel;
    userType = UserType;

    private userUrl = 'api/users';

    constructor(
        private http: HttpClient
    ) { }
    
    /* getUser (): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.userUrl)
        .pipe(
            tap(user => this.log('fetched user')),
            catchError(this.handleError('getUser', []))
        );
    } */

    getUser(userDetail: UserModel) {
        const url = `${this.userUrl}/${userDetail}`;
        return this.http.get<UserModel>(url).pipe(
          tap(_ => this.log(`fetched username=${userDetail}`)),
          catchError(this.handleError<UserModel>(`getUsername id=${userDetail}`))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error); // log to console instead
    
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
    }
    
    // Log error 
    private log(message: string) {
        console.error('LoginService: ' + message);
    }
}

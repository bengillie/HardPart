import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { StudentItem } from '~/model/studentitem.model';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
    private url = 'api/user';
    private url_studentSelection = 'api/studentSelection';

    constructor(private http: HttpClient) { }
    
    getStudentItems(parentId: number) : Observable<StudentItem[]> {
        let params = new HttpParams();
        params = params.append('parentid', parentId.toString());
        return this.http.get<StudentItem[]>(this.url_studentSelection, { params: params });
    }

    getUserById(userId: number) : Observable<User> {
        const url = `${this.url}/${userId}`;
        return this.http.get<User>(url);
    }
}
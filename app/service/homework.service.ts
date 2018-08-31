import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Homework } from '../model/homework.model';

@Injectable()
export class HomeworkService {

    private url = 'api/homework';

    constructor(
        private http: HttpClient,) { }

    getHomeworks (): Observable<Homework[]> {
        return this.http.get<Homework[]>(this.url);
    }

    getHomework (id: number): Observable<Homework> {
        const url = `${this.url}/${id}`;
        return this.http.get<Homework>(url);
    }
}
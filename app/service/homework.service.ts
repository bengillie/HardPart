import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Homework, HomeworkStatus } from '../model/homework.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

    updateUserHomework (homework: Homework): Observable<any> {
        return this.http.put(this.url, homework, httpOptions);
    }

	isNearDueDate(homework: Homework) : boolean {
		if (homework.status === HomeworkStatus.todo) {
			var dateNow = new Date();
			
			if(new Date(homework.dueDate) <= dateNow){
				return true;
			}
			else {
				var diff = Math.abs(new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime());
				var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
				return diffDays <= 2;
			}
		}
		return false;
	}
}
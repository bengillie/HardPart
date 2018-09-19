import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Homework, HomeworkStatus } from '../model/homework.model';

import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomeworkService {
    private url = 'api/homework';

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private logService: LoggingService) { }

    getHomeworks (): Observable<Homework[]> {
        return this.http.get<Homework[]>(this.url);
    }

    getHomework (id: number): Observable<Homework> {
        const url = `${this.url}/${id}`;
        return this.http.get<Homework>(url);
    }

    getStudentHomework(studentId: number): Observable<Homework[]> {
        let params = new HttpParams();
        params = params.append('studentId', studentId.toString());
        
        return this.http.get<Homework[]>(this.url, {params: params})
        .pipe(
            map(homework => homework),
            tap(_ => this.logService.log(`fetched homework for student id = ${studentId.toString()}`)),
            catchError(this.errorService.handleError<Homework[]>(`getStudentHomework student id = ${studentId.toString()}`))
        );
    }

    updateUserHomework (homework: Homework): Observable<any> {
        return this.http.put(this.url, homework, httpOptions);
    }

    isDue(homework: Homework): boolean {
		if (homework.status === HomeworkStatus.todo) {
			var dateNow = new Date();
            var diff = new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime();
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
            return diffDays < 0;
        }
		return false;
    }

	isNearDueDate(homework: Homework): boolean {
		if (homework.status === HomeworkStatus.todo) {
            var dateNow = new Date();
            var diff = new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime();
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
            return diffDays >= 0 && diffDays <= 2;
        }
		return false;
	}
}
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Homework, HomeworkDeadlineStatus, HomeworkStatus } from '../shared/model/homework.model';

import { ErrorService } from '../shared/service/error.service';
import { HttpService } from '../shared/service/httpservice.service';
import { LoggingService } from '../shared/service/logging.service';

@Injectable()
export class HomeworkService {
	url = 'homework';

	public Homework: Array<Homework> = [];

	constructor(private errorService: ErrorService, private httpService: HttpService, private logService: LoggingService) {}

	getHomeworks(): Observable<Homework[]> {
		return this.httpService.get<Homework[]>(this.url);
	}

	getHomework(id: number): Observable<Homework> {
		const newUrl = `${this.url}/${id}`;
		return this.httpService.get<Homework>(newUrl);
	}

	getHomeworkDeadlineStatus(homework: Homework): HomeworkDeadlineStatus {
		if (homework.status === HomeworkStatus.todo) {
			var dateNow = new Date();
			var diff = new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime();
			var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
			if (diffDays >= 0 && diffDays <= 2) {
				return HomeworkDeadlineStatus.nearDueDate;
			} else if (diffDays < 0) {
				return HomeworkDeadlineStatus.overDue;
			}
		}
		return HomeworkDeadlineStatus.good;
	}

	async getStudentHomework(studentId: number): Promise<Homework[]> {
		let params = new HttpParams();
		params = params.append('studentId', studentId.toString());

		await this.httpService
			.GetWithParams<Homework[]>(this.url, params)
			.then(result => {
				if (result) {
					this.Homework = result;
				} else {
					this.Homework = [];
				}
			})
			.catch(error => {
				console.log(`Error getting homework, Error: ${error}`);
			});

		return this.Homework;
	}

	updateUserHomework(homework: Homework): Observable<any> {
		return this.httpService.put(this.url, homework);
	}
}

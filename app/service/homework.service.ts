import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Homework, HomeworkDeadlineStatus, HomeworkStatus } from '../model/homework.model';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class HomeworkService {
    constructor(private httpService: HttpService) { }

    getHomeworks (): Observable<Homework[]> {
        return this.httpService.getHomeworks();
    }

    getHomework (id: number): Observable<Homework> {
        return this.httpService.getHomework(id);
    }

    getHomeworkDeadlineStatus(homework: Homework): HomeworkDeadlineStatus {
		if (homework.status === HomeworkStatus.todo) {
			var dateNow = new Date();
            var diff = new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime();
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            if(diffDays >= 0 && diffDays <= 2){
                return HomeworkDeadlineStatus.nearDueDate;
            } else if(diffDays < 0) {
                return HomeworkDeadlineStatus.overDue;
            }
        }
		return HomeworkDeadlineStatus.good;
    }

    getStudentHomework(studentId: number): Observable<Homework[]> {
        return this.httpService.getStudentHomework(studentId);
    }

    updateUserHomework(homework: Homework): Observable<any> {
        return this.httpService.updateUserHomework(homework);
    }
}
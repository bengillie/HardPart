import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Achievement } from '../model/achievement.model';
import { Attendance } from '../model/attendance.model';
import { Homework, HomeworkDeadlineStatus, HomeworkStatus } from '../model/homework.model';
import { Lesson, Period } from '../model/timetable.model';
import { User } from '../model/user.model';

import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {
    private url_achievement = 'api/achievement';
    private url_attendance = 'api/attendance';
    private url_homework = 'api/homework';
    private url_lesson = 'api/lesson';
    private url_period = 'api/period';
    private url_user = 'api/user';

    constructor(private http: HttpClient,
        private errorService: ErrorService,
        private logService: LoggingService) { }

    //#region Achievements
    getUserAchievements() : Observable<Achievement[]> {
        return this.http.get<Achievement[]>(this.url_achievement);
    }
    //#endregion

    //#region Attendance
    getUserAttendance() : Observable<Attendance[]> {
        return this.http.get<Attendance[]>(this.url_attendance);
    }
    //#endregion
    
    //#region Homework
    getHomeworks (): Observable<Homework[]> {
        return this.http.get<Homework[]>(this.url_homework);
    }

    getHomework (id: number): Observable<Homework> {
        const url = `${this.url_homework}/${id}`;
        return this.http.get<Homework>(url);
    }

    getStudentHomework(studentId: number): Observable<Homework[]> {
        let params = new HttpParams();
        params = params.append('studentId', studentId.toString());
        
        return this.http.get<Homework[]>(this.url_homework, {params: params})
        .pipe(
            map(homework => homework),
            tap(_ => this.logService.log(`fetched homework for student id = ${studentId.toString()}`)),
            catchError(this.errorService.handleError<Homework[]>(`getStudentHomework student id = ${studentId.toString()}`))
        );
    }

    updateUserHomework (homework: Homework): Observable<any> {
        return this.http.put(this.url_homework, homework, httpOptions);
    }
    //#endregion

    //#region Login
    getUser(login: User): Observable<User> {
        let params = new HttpParams();
        params = params.append('username', login.username);
        params = params.append('password', login.password);
        params = params.append('birthdate', login.birthdate.toString());

        return this.http.get<User[]>(this.url_user, {params: params})
        .pipe(
            map(users => users[0]),
            tap(_ => this.logService.log(`fetched username = ${login.username}`)),
            catchError(this.errorService.handleError<User>(`getUser username = ${login.username}`))
        );
    }
    //#endregion

    //#region Timetable
    getLessons(dateRange: string[], loggedInUser: User): Observable<Lesson[]> {
        let params = new HttpParams();
        params = params.append('userId', loggedInUser.id.toString());
        params = params.append('startDate', JSON.stringify(dateRange));
        params = params.append('endDate', JSON.stringify(dateRange));
        
        return this.http.get<Lesson[]>(this.url_lesson, {params: params})
        .pipe(
            map(lesson => lesson),
            tap(_ => this.logService.log(`fetched lessons for student id = ${loggedInUser.id.toString()}`)),
            catchError(this.errorService.handleError<Lesson[]>(`getLesson student id = ${loggedInUser.id.toString()}`))
        );
    }

    getPeriods(startDate: Date, endDate: Date): Observable<Period[]> {
        let params = new HttpParams();
        params = params.append('startDate', startDate.toString());
        params = params.append('endDate', endDate.toString());
        
        // TODO - only get periods between a set of dates by passing in params.
        return this.http.get<Period[]>(this.url_period)
        .pipe(
            map(periods => periods),
            tap(_ => this.logService.log(`fetched period = ${startDate.toString()} to ${endDate.toString()}`)),
            catchError(this.errorService.handleError<Period[]>(`getPeriod period = ${startDate.toString()} to ${endDate.toString()}`))
        );
    }

    /* getPeriods(dateRange: string[]): Observable<Period[]> {
        let params = new HttpParams();
        params = params.append('startDate', JSON.stringify(dateRange));
        params = params.append('endDate', JSON.stringify(dateRange));
        
        // TODO - only get periods between a set of dates by passing in params.
        return this.http.get<Period[]>(this.url + "periods", {params: params})
        .pipe(
            map(periods => periods),
            tap(_ => this.logService.log(`fetched period from ${dateRange[0]} to ${dateRange[dateRange.length-1]}`)),
            catchError(this.errorService.handleError<Period[]>(`getPeriods(): period = ${dateRange[0]} to ${dateRange[dateRange.length-1]}`))
        );
    } */
    //#endregion

    //#region User
    getUserByEmailAddress(emailAddress: string): Observable<User> {
        let params = new HttpParams();
        params = params.append('email', encodeURIComponent(emailAddress));

        return this.http.get<User[]>(this.url_user, {params: params})
            .pipe(
                map(x => x[0])
            );
    }

    getUserById(userId: number) : Observable<User> {
        const url = `${this.url_user}/${userId}`;
        return this.http.get<User>(url);
    }

    updateUser (user: User): Observable<any> {
        return this.http.put(this.url_user, user, httpOptions);
    }
    //#endregion
}
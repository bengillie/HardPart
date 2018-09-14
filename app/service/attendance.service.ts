import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Attendance } from '../model/attendance.model';

@Injectable()
export class AttendanceService {
    private url = 'api/attendance';

    constructor(private http: HttpClient) { }

    getUserAttendance() : Observable<Attendance[]> {
        return this.http.get<Attendance[]>(this.url);
    }
}
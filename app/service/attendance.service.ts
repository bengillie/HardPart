import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Attendance } from '../model/attendance.model';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class AttendanceService {
    constructor(private httpService: HttpService) { }

    getUserAttendance() : Observable<Attendance[]> {
        return this.httpService.getUserAttendance();
    }
}
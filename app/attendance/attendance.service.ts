import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Attendance } from '../shared/model/attendance.model';
import { HttpService } from '../shared/service/httpservice.service';

@Injectable()
export class AttendanceService {
	url = 'attendance';

	constructor(private httpService: HttpService) {}

	getUserAttendance(): Observable<Attendance[]> {
		return this.httpService.get<Attendance[]>(this.url);
	}
}

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Attendance, AttendanceMark } from '../shared/model/attendance.model';
import { AttendanceService } from './attendance.service';

@Component({
	moduleId: module.id,
	selector: 'attendance',
	templateUrl: './attendance.component.html',
	styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	attendance: Attendance[] = [];

	summPresentValue = 0;
	summPresentText = '0.00%';

	summAuthValue = 0;
	summAuthText = '0.00%';

	summUnAuthValue = 0;
	summUnAuthText = '0.00%';

	colorPresent = '#1EB69D';
	colorLate = '#1EB69D';
	colorAuthorised = '#ffae42';
	colorUnauthorised = '#FF4500';

	isLoading = true;

	constructor(private attendanceService: AttendanceService) {}

	ngOnInit() {
		this.getUserAttendance();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	getUserAttendance() {
		this.subscriptions.push(
			this.attendanceService.getUserAttendance().subscribe(
				x => {
					this.attendance = x;
				},
				error => console.log('Error: ', error),
				() => {
					let arrayLength = this.attendance.length * 2;

					let summPresentAM = this.attendance.filter(x => x.amMark === AttendanceMark.present || x.amMark === AttendanceMark.late).length;
					let summPresentPM = this.attendance.filter(x => x.pmMark === AttendanceMark.present || x.pmMark === AttendanceMark.late).length;
					this.summPresentValue = summPresentAM + summPresentPM;
					this.summPresentValue = (this.summPresentValue / arrayLength) * 100;
					this.summPresentText = this.summPresentValue.toFixed(2) + '%';

					let summAuthAM = this.attendance.filter(x => x.amMark === AttendanceMark.authorised).length;
					let summAuthPM = this.attendance.filter(x => x.pmMark === AttendanceMark.authorised).length;
					this.summAuthValue = summAuthAM + summAuthPM;
					this.summAuthValue = (this.summAuthValue / arrayLength) * 100;
					this.summAuthText = this.summAuthValue.toFixed(2) + '%';

					let summUnauthAM = this.attendance.filter(x => x.amMark === AttendanceMark.unauthorised).length;
					let summUnauthPM = this.attendance.filter(x => x.pmMark === AttendanceMark.unauthorised).length;
					this.summUnAuthValue = summUnauthAM + summUnauthPM;
					this.summUnAuthValue = (this.summUnAuthValue / arrayLength) * 100;
					this.summUnAuthText = this.summUnAuthValue.toFixed(2) + '%';

					this.isLoading = false;
				}
			)
		);
	}

	getColor(attendanceMark: AttendanceMark): string {
		if (attendanceMark === AttendanceMark.present) {
			return this.colorPresent;
		} else if (attendanceMark === AttendanceMark.late) {
			return this.colorLate;
		} else if (attendanceMark === AttendanceMark.authorised) {
			return this.colorAuthorised;
		} else if (attendanceMark === AttendanceMark.unauthorised) {
			return this.colorUnauthorised;
		}
	}

	getIcon(attendanceMark: AttendanceMark): string {
		return String.fromCharCode(attendanceMark);
	}
}

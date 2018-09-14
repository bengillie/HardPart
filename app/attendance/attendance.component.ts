import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Attendance } from '../model/attendance.model';
import { AttendanceService } from '../service/attendance.service';

@Component({
	moduleId: module.id,
	selector: 'attendance',
	templateUrl: './attendance.component.html',
	styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

	attendance: Attendance[] = [];

	summPresentValue = 0;
	summPresentText = '0.00%';

	summAuthValue = 0;
	summAuthText = '0.00%';

	summUnAuthValue = 0;
	summUnAuthText = '0.00%';

	isLoading = true;

	constructor(private attendanceService: AttendanceService) { }

	ngOnInit() {
		this.getUserAttendance(); 
	}

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
	}

	getUserAttendance() {
		this.subscriptions.push(
			this.attendanceService.getUserAttendance()
			.subscribe(
				x => {
					this.attendance = x;
				},
				error => console.log("Error: ", error),
				() => {
					let arrayLength = this.attendance.length;

					this.summPresentValue = ((this.attendance.filter(x => x.isPresent === true).length / arrayLength) * 100);
					this.summPresentText = (this.summPresentValue.toFixed(2)) + '%';
					
					this.summAuthValue = ((this.attendance.filter(x => x.isPresent === false && x.isAbsenceAuthorised === true).length / arrayLength) * 100);
					this.summAuthText = (this.summAuthValue.toFixed(2)) + '%';

					this.summUnAuthValue = ((this.attendance.filter(x => x.isPresent === false && x.isAbsenceAuthorised === false).length / arrayLength) * 100);
					this.summUnAuthText = (this.summUnAuthValue.toFixed(2)) + '%';
					
					this.isLoading = false;
				}
			)
		);
	}
}
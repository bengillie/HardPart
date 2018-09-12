import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { isIOS } from 'tns-core-modules/platform';
import { ItemEventData } from 'ui/list-view/list-view.d.ts';

import { Attendance } from '../model/attendance.model';
import { AttendanceService } from '../service/attendance.service';

declare var UITableViewCellSelectionStyle;

@Component({
	moduleId: module.id,
	selector: 'attendance',
	templateUrl: './attendance.component.html',
	styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

	attendance: Attendance[] = [];
	summPresentText = 'Present - 0.00%';
	summAuthText = 'Authorised Absence - 0.00%';
	summUnAuthText = 'Unauthorised Absence - 0.00%';

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
					this.summPresentText = 'Present - ' + (
							((this.attendance.filter(x => x.isPresent === true).length / this.attendance.length) * 100).toFixed(2)
					) + '%';
					this.summAuthText = 'Authorised Absence - ' + (
							((this.attendance.filter(x => x.isPresent === false && x.isAbsenceAuthorised === true).length / this.attendance.length) * 100).toFixed(2)
					) + '%';
					this.summUnAuthText = 'Unauthorised Absence - ' + (
						((this.attendance.filter(x => x.isPresent === false && x.isAbsenceAuthorised === false).length / this.attendance.length) * 100).toFixed(2)
					) + '%';
					
					this.isLoading = false;
				}
			)
		);
	}
}
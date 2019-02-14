import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ErrorService } from '../shared/service/error.service';
import { HttpService } from '../shared/service/httpservice.service';
import { LoggingService } from '../shared/service/logging.service';
import { UserService } from '../shared/service/user.service';
import { DateHelper } from '../shared/helpers/date.helper';
import { TimetableDay } from '../shared/model/timetableDay.model';
import { Period } from '../shared/model/period.model';

@Injectable()
export class TimetableService {
	private urlEvents = 'event/';
	private urlPeriods = 'period/';

	public TimetableDaysForDates: Array<TimetableDay> = [];
	public Periods: Array<Period> = [];

	constructor(private errorService: ErrorService, private httpService: HttpService, private logService: LoggingService, private userService: UserService, private dateHelper: DateHelper) {}

	public async GetTimetableDaysForDates(fromDate: Date, toDate: Date): Promise<TimetableDay[]> {
		const fullUrl = this.urlEvents + 'GetTimetableForDatesAndStudent';

		const httpParams = new HttpParams()
			.set('schoolId', this.userService.ReturnUserSession().activeUserSchool.schoolId)
			.set('employeeId', this.userService.ReturnUserSession().activeUserSchool.employeeId)
			.set('fromDate', this.dateHelper.ToUTC0String(fromDate))
			.set('toDate', this.dateHelper.ToUTC0String(toDate));

		await this.httpService
			.GetWithParams<TimetableDay[]>(fullUrl, httpParams)
			.then(result => {
				this.TimetableDaysForDates = result;
			})
			.catch(error => {
				this.TimetableDaysForDates = [];
				console.log('Could not get events');
			});

		return this.TimetableDaysForDates;
	}

	public async GetPeriods(date: Date): Promise<Period[]> {
		const fullUrl = this.urlPeriods + 'GetPeriodsForDate';

		const httpParams = new HttpParams().set('schoolId', this.userService.ReturnUserSession().activeUserSchool.schoolId).set('date', this.dateHelper.ToUTC0String(date));

		await this.httpService
			.GetWithParams<Period[]>(fullUrl, httpParams)
			.then(result => {
				this.Periods = result;
			})
			.catch(error => {
				this.Periods = [];
				console.log('Could not get periods');
			});

		return this.Periods;
	}
}

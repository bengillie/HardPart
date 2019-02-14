import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

import { Behaviour } from '~/shared/model/behaviour.model';

import { ErrorService } from '../shared/service/error.service';
import { HttpService } from '../shared/service/httpservice.service';
import { UserService } from '../shared/service/user.service';

@Injectable()
export class BehaviourService {
	private url = 'behaviour';

	public Behaviours: Behaviour[] = [];

	constructor(private errorService: ErrorService, private httpService: HttpService, private userService: UserService) {}

	getBehaviour(): Promise<Behaviour[]> {
		const fullUrl = this.url + 'GetAllAcademicYears';

		const httpParams = new HttpParams()
			.set('schoolId', this.userService.ReturnUserSession().activeUserSchool.schoolId)
			.set('studentId', this.userService.ReturnUserSession().activeUserSchool.studentId);

		return new Promise<Behaviour[]>(resolve => {
			this.httpService
				.GetWithParams<Behaviour[]>(fullUrl, httpParams)
				.then(result => {
					resolve(result);
				})
				.catch(error => {
					console.log(`Could not get behaviour: ${error}`);
				});
		});
	}
}

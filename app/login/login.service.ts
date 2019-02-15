import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../shared/model/user.model';

import { ErrorService } from '../shared/service/error.service';
import { HttpService } from '../shared/service/httpservice.service';
import { LoggingService } from '../shared/service/logging.service';
import { AuthorizationService } from '../shared/service/authorization.service';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
	url = 'user';

	constructor(
		private errorService: ErrorService,
		private httpService: HttpService,
		private logService: LoggingService,
		private authorizationService: AuthorizationService,
		private userService: UserService,
		private router: Router
	) {}

	// getUser(login: User): Observable<User> {
	// 	let params = new HttpParams();
	// 	params = params.append('username', login.username);
	// 	params = params.append('password', login.password);

	// 	return this.httpService.get<User[]>(this.url, params).pipe(
	// 		map(users => users[0]),
	// 		tap(_ => this.logService.log(`fetched username = ${login.username}`)),
	// 		catchError(this.errorService.HandleError())
	// 	);
	// }

	public async HandleLogin(username: string) {
		if (!this.authorizationService.IsLoggedIn()) {
			return;
		}

		await this.userService.GetUserSession(username);

		if (this.authorizationService.ReturnFirstTimeLogin()) {
			this.router.navigate([`updatesecuritydetails`]);
		} else {
			this.router.navigate([`dashboard`]);
			setTimeout(() => {
				this.router.navigate([`advert`]);
			}, 200);
		}
	}
}

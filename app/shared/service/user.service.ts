import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';

import { HelperService } from '../service/helper.service';
import { HttpService } from '../service/httpservice.service';
import { UserSession } from '../model/userSession.model';
import { AppValuesService } from './appvalues.service';
import { UserRequest } from '../model/userRequest.model';

@Injectable()
export class UserService {
	private url = 'user/';

	constructor(private httpService: HttpService, private helperService: HelperService, private appValuesService: AppValuesService) {}

	getUserByPrimaryEmail(emailAddress: string): Observable<User> {
		let params = new HttpParams();
		params = params.append('emailprimary', encodeURIComponent(emailAddress));

		return this.httpService.get<User[]>(this.url, params).pipe(map(x => x[0]));
	}

	getUserBySecondaryEmail(emailAddress: string): Observable<User> {
		let params = new HttpParams();
		params = params.append('emailsecondary', encodeURIComponent(emailAddress));

		return this.httpService.get<User[]>(this.url, params).pipe(map(x => x[0]));
	}

	getUserById(userId: number): Observable<User> {
		const newUrl = `${this.url}/${userId}`;
		return this.httpService.get<User>(newUrl);
	}

	public async GetUserSession(username: string) {
		const httpParams = new HttpParams().set('username', username);

		await this.httpService
			.GetWithParams<UserSession>(this.url + 'GetUserSession', httpParams)
			.then(result => {
				this.appValuesService.UserSession = result;

				if (this.appValuesService.UserSession.userSchools.length === 1) {
					this.appValuesService.UserSession.activeUserSchool = this.appValuesService.UserSession.userSchools[0];
				}

				// sessionStorage.setItem('userSession', JSON.stringify(this.appValuesService.UserSession));
			})
			.catch(error => {
				this.appValuesService.UserSession = undefined;
				console.log('Could not get User Session');
			});
	}

	public HasSession(): boolean {
		if (this.appValuesService.UserSession) {
			return true;
		}

		// this.appValuesService.UserSession = JSON.parse(sessionStorage.getItem('userSession'));
		// if (this.appValuesService.UserSession) {
		// 	return true;
		// }

		return false;
	}

	public HasActiveSchool(): boolean {
		if (this.ReturnUserSession().activeUserSchool) {
			return true;
		}

		return false;
	}

	public ReturnUserSession(): UserSession {
		// if (!this.appValuesService.UserSession) {
		// 	this.appValuesService.UserSession = JSON.parse(sessionStorage.getItem('userSession'));
		// }

		return this.appValuesService.UserSession;
	}

	public async UpdateUser(userToUpdate: UserRequest): Promise<string> {
		const fullUrl = this.url + 'UpdateUser';
		let user = null;

		const body = userToUpdate;

		await this.httpService
			.Post<string>(fullUrl, body)
			.then(result => {
				console.log('User Updated');
				user = result;

				// if (user !== undefined) {
				// 	const snackBarRef = this.snackBar.open('Successfully updated user and contact details.');
				// 	snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
				// } else {
				// 	const snackBarRef = this.snackBar.open('Failed to update user and contact details.', 'Dismiss');
				// 	snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
				// }
			})
			.catch(error => {
				console.log('Error creating updating user');
				// const snackBarRef = this.snackBar.open('Error updating user and contact details.', 'Dismiss');
				// snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
			});

		return user;
	}

	validatePassword(passwordNew: string, passwordConfirm: string) {
		if (passwordNew.trim().length === 0) {
			return {
				control: 'newpassword',
				message: 'New password is required.',
			};
		} else if (passwordNew.length < 6) {
			return {
				control: 'newpassword',
				message: 'Password must have atleast 6 characters.',
			};
		} else if (!this.helperService.isAlphaNumeric(passwordNew)) {
			return {
				control: 'newpassword',
				message: 'Password must be alphanumeric.',
			};
		} else if (passwordConfirm.trim().length === 0) {
			return {
				control: 'confirmpassword',
				message: 'Confirm password is required.',
			};
		} else if (passwordNew !== passwordConfirm) {
			return {
				control: 'confirmpassword',
				message: 'New password and confirm password do not match.',
			};
		} else {
			return null;
		}
	}
}

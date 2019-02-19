import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { Subscription } from 'rxjs';

import { User } from '~/shared/model/user.model';

import { HelperService } from '../shared/service/helper.service';
import { UserService } from '../shared/service/user.service';
import { UserRequest } from '~/shared/model/userRequest.model';

export enum pageState {
	sendCode = 0,
	enterCode = 1,
	enterNewPassword = 2,
}

@Component({
	moduleId: module.id,
	selector: 'forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	code: string = '';
	emailAddress: string = '';
	errorMessageEmailAddress: string = '';
	errorMessageCode: string = '';
	errorMessageNewPassword: string = '';
	errorMessageConfirmPassword: string = '';
	pageState: pageState = pageState.sendCode;
	pageStates: pageState[] = [pageState.sendCode];
	passwordConfirm = '';
	passwordNew = '';
	user: User = new User();

	successfulIconCode = String.fromCharCode(0xea10);

	constructor(private routerExt: RouterExtensions, private helperService: HelperService, private userService: UserService) {}

	ngOnInit() {
		// this.emailAddress = "jasonsmith@email.com";
		// this.code = "12345";
		// this.passwordConfirm = "test123";
		// this.passwordNew = "test123";
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	backToLogin() {
		this.routerExt.navigate([`login`]);
	}

	changePassword() {
		this.errorMessageNewPassword = '';
		this.errorMessageConfirmPassword = '';

		let errorMessage = this.userService.validatePassword(this.passwordNew, this.passwordConfirm);
		if (errorMessage !== null) {
			if (errorMessage.control === 'newpassword') {
				this.errorMessageNewPassword = errorMessage.message;
			} else {
				this.errorMessageConfirmPassword = errorMessage.message;
			}
		} else {
			const userRequest = new UserRequest(this.userService.ReturnUserSession().userId, this.passwordNew, null, null);

			this.userService.UpdateUser(userRequest).then(x => {
				this.routerExt.navigate([`messagepage`], {
					queryParams: {
						title: 'Forgot Password',
						messageSub: 'Password successfully changed.',
						nextModule: 'login',
					},
				});
			});
		}
	}

	clearCode() {
		this.code = '';
		this.errorMessageCode = '';
	}

	clearEmailAddress() {
		this.emailAddress = '';
		this.errorMessageEmailAddress = '';
	}

	clearPasswords() {
		this.passwordNew = '';
		this.passwordConfirm = '';
		this.errorMessageNewPassword = '';
		this.errorMessageConfirmPassword = '';
	}

	enterCode() {
		if (this.code.trim().length === 0) {
			this.errorMessageCode = 'Code is required.';
		} else if (this.code !== '12345') {
			this.errorMessageCode = 'Incorrect code.';
		} else {
			this.pageState = pageState.enterNewPassword;
			this.pageStates.push(this.pageState);
			this.errorMessageCode = '';
		}
	}

	goBack() {
		if (this.pageStates.length <= 1) {
			this.backToLogin();
		} else {
			this.pageStates.pop();
			this.pageState = this.pageStates[this.pageStates.length - 1];
		}
	}

	sendCode() {
		if (this.emailAddress.trim().length === 0) {
			this.errorMessageEmailAddress = 'Email address is required.';
		} else if (!this.helperService.validateEmail(this.emailAddress)) {
			this.errorMessageEmailAddress = 'Invalid email address.';
		} else {
			this.subscriptions.push(
				this.userService.getUserByPrimaryEmail(this.emailAddress).subscribe(x => {
					this.user = x;
					if (!this.user) {
						this.subscriptions.push(
							this.userService.getUserBySecondaryEmail(this.emailAddress).subscribe(y => {
								this.user = y;
								if (!this.user) {
									this.errorMessageEmailAddress = 'Email address not found.';
								} else {
									this.pageState = pageState.enterCode;
									this.pageStates.push(this.pageState);
									this.errorMessageEmailAddress = '';
								}
							})
						);
					} else {
						this.pageState = pageState.enterCode;
						this.pageStates.push(this.pageState);
						this.errorMessageEmailAddress = '';
					}
				})
			);
		}
	}
}

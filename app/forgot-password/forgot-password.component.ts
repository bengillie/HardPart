import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router'

import { Subscription } from 'rxjs';

import { User } from '~/model/user.model';

import { UserService } from '../service/user.service';

export enum pageState {
	sendCode = 0,
	enterCode = 1,
	enterNewPassword = 2,
	confirmation = 3
}

@Component({
	moduleId: module.id,
	selector: 'forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

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

	constructor(private userService: UserService,
		private routerExt: RouterExtensions) { }

	ngOnInit() { }

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
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

		if(this.passwordNew.trim().length === 0) {
			this.errorMessageNewPassword = 'New password is required.';
		} else if(this.passwordNew.length < 6) {
			this.errorMessageNewPassword = 'Password must have atleast 6 characters.';
		} else if(!this.isAlphaNumeric(this.passwordNew)) {
			this.errorMessageNewPassword = 'Password must be alphanumeric.';
		} else if(this.passwordConfirm.trim().length === 0) {
			this.errorMessageConfirmPassword = 'Confirm password is required.';
		} else if(this.passwordNew !== this.passwordConfirm) {
			this.errorMessageConfirmPassword = 'New password and confirm password do not match.';
		} else {
			this.user.password = this.passwordNew;
			this.subscriptions.push(this.userService.updateUser(this.user)
				.subscribe(
					(x) => {
						this.pageState = pageState.confirmation;
						this.pageStates.push(this.pageState);
				})
			);
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
		if(this.code.trim().length === 0) {
			this.errorMessageCode = 'Code is required.';
		} else if(this.code !== '12345') {
			this.errorMessageCode = 'Incorrect code.';
		} else {
			this.pageState = pageState.enterNewPassword;
			this.pageStates.push(this.pageState);
			this.errorMessageCode = '';
		}
	}

	goBack() {
		if(this.pageStates.length <= 1 || this.pageStates[this.pageStates.length - 1] === pageState.confirmation) {
			this.backToLogin();
		} else {
			this.pageStates.pop();
			this.pageState = this.pageStates[this.pageStates.length - 1];
		}
	}

	sendCode() {
		if(this.emailAddress.trim().length === 0) {
			this.errorMessageEmailAddress = 'Email address is required.';
		} 
		else if(!this.validateEmail(this.emailAddress)) {
			this.errorMessageEmailAddress = 'Invalid email address.';
		} 
		else {
			this.subscriptions.push(this.userService.getUserByEmailAddress(this.emailAddress)
				.subscribe(
					(x) => {
						this.user = x;
						if(!this.user) {
							this.errorMessageEmailAddress = 'Email address not found.';
						} else {
							this.pageState = pageState.enterCode;
							this.pageStates.push(this.pageState);
							this.errorMessageEmailAddress = '';
						}
					}
				)
			);
		}
	}

	validateEmail(email): boolean {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	isAlphaNumeric(args): boolean {
		var re = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i;
		return re.test(String(args).toLowerCase());
	}
}
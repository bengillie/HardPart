import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { Subscription } from 'rxjs';

import { User } from '../shared/model/user.model';

import { AppValuesService } from '../shared/service/appvalues.service';
import { HelperService } from '../shared/service/helper.service';
import { UserService } from '../shared/service/user.service';
import { AuthorizationService } from '~/shared/service/authorization.service';
import { UserRequest } from '~/shared/model/userRequest.model';

export enum pageState {
	updatePassword = 0,
	updateEmailAddress = 1,
	updatePhoneNo = 2,
}

@Component({
	moduleId: module.id,
	selector: 'update-security-details',
	templateUrl: './update-security-details.component.html',
	styleUrls: ['./update-security-details.component.css'],
})
export class UpdateSecurityDetailsComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	hasNavigationBack: boolean;
	isLoading = true;
	pageState: pageState;

	errorMessageNewPassword = '';
	errorMessageConfirmPassword = '';
	errorMessagePrimaryEmailAddress = '';
	errorMessagePrimaryPhoneNo = '';
	passwordConfirm = '';
	passwordNew = '';
	primaryEmailAddress = '';
	primaryPhoneNo = '';

	constructor(
		private route: ActivatedRoute,
		private routerExt: RouterExtensions,
		private appValuesService: AppValuesService,
		private helperService: HelperService,
		private userService: UserService,
		public authorizationService: AuthorizationService
	) {}

	ngOnInit() {
		// this.getCurrentUser();
		this.getQueryParams();

		this.primaryEmailAddress = decodeURIComponent(this.userService.ReturnUserSession().username);
		this.primaryPhoneNo = this.userService.ReturnUserSession().phoneNumber;

		// this.passwordNew = "test123";
		// this.passwordConfirm = "test123";
		// this.primaryEmailAddress = "t@est.com";
		// this.secondaryEmailAddress = "s@mple.com";
		// this.primaryPhoneNo = "123";
		// this.secondaryPhoneNo = "456";
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	get title(): string {
		if (this.pageState === pageState.updateEmailAddress) {
			return 'Update Email Address';
		} else if (this.pageState === pageState.updatePhoneNo) {
			return 'Update Phone No.';
		} else {
			return 'Update Password';
		}
	}

	clearEmailAddress() {
		this.primaryEmailAddress = '';
		this.errorMessagePrimaryEmailAddress = '';
	}

	clearPasswords() {
		this.passwordNew = '';
		this.passwordConfirm = '';
		this.errorMessageNewPassword = '';
		this.errorMessageConfirmPassword = '';
	}

	clearPhoneNo() {
		this.primaryPhoneNo = '';
		this.errorMessagePrimaryPhoneNo = '';
	}

	getQueryParams() {
		this.subscriptions.push(
			this.route.queryParams.subscribe(params => {
				let state = params['pageState'] || '';
				if (state === 'EmailAddress') {
					this.pageState = pageState.updateEmailAddress;
				} else if (state === 'PhoneNo') {
					this.pageState = pageState.updatePhoneNo;
				} else {
					this.pageState = pageState.updatePassword;
				}

				this.isLoading = false;
			})
		);
	}

	async goToSuccessaPage() {
		this.routerExt.navigate([`messagepage`], {
			queryParams: {
				title: 'Account Security',
				messageSub: 'Account successfully changed.',
				nextModule: 'dashboard',
			},
		});
	}

	skipEmailAddress() {
		this.pageState = pageState.updatePhoneNo;
	}

	skipPhoneNo() {
		this.goToSuccessaPage();
	}

	updatEmailAddress() {
		this.errorMessagePrimaryEmailAddress = '';

		if (this.primaryEmailAddress.trim().length === 0) {
			this.errorMessagePrimaryEmailAddress = 'Primary email address is required.';
			return;
		} else if (!this.helperService.validateEmail(this.primaryEmailAddress)) {
			this.errorMessagePrimaryEmailAddress = 'Invalid primary email address.';
			return;
		}

		const userRequest = new UserRequest(this.userService.ReturnUserSession().userId, null, this.primaryEmailAddress, null);

		this.userService.UpdateUser(userRequest).then(x => {
			if (this.authorizationService.ReturnFirstTimeLogin()) {
				this.pageState = pageState.updatePhoneNo;
			} else {
				this.goToSuccessaPage();
			}
		});
	}

	updatePassword() {
		this.errorMessageNewPassword = '';
		this.errorMessageConfirmPassword = '';

		let errorMessage = this.userService.validatePassword(this.passwordNew, this.passwordConfirm);
		if (errorMessage !== null) {
			if (errorMessage.control === 'newpassword') {
				this.errorMessageNewPassword = errorMessage.message;
			} else {
				this.errorMessageConfirmPassword = errorMessage.message;
			}
			return;
		}

		const userRequest = new UserRequest(this.userService.ReturnUserSession().userId, this.passwordNew, null, null);
		this.userService.UpdateUser(userRequest).then(x => {
			if (this.authorizationService.ReturnFirstTimeLogin()) {
				this.pageState = pageState.updateEmailAddress;
			} else {
				this.goToSuccessaPage();
			}
		});
	}

	updatePhoneNo() {
		this.errorMessagePrimaryPhoneNo = '';

		if (this.primaryPhoneNo) {
			this.errorMessagePrimaryPhoneNo = 'Primary phone no is required.';
			return;
		}
		if (this.primaryPhoneNo.trim().length < 10) {
			this.errorMessagePrimaryPhoneNo = 'Primary phone number invalid.';
			return;
		}

		const userRequest = new UserRequest(this.userService.ReturnUserSession().userId, null, null, this.primaryPhoneNo);

		this.userService.UpdateUser(userRequest).then(x => {
			this.goToSuccessaPage();
		});
	}
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { Subscription } from 'rxjs';

import { User } from '../shared/model/user.model';

import { AppValuesService } from '../shared/service/appvalues.service';
import { HelperService } from '../shared/service/helper.service';
import { UserService } from '../shared/service/user.service';
import { AuthorizationService } from '~/shared/service/authorization.service';

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

	currentUser: User = new User();
	hasNavigationBack: boolean;
	isLoading = true;
	pageState: pageState;

	errorMessageNewPassword = '';
	errorMessageConfirmPassword = '';
	errorMessagePrimaryEmailAddress = '';
	errorMessageSecondaryEmailAddress = '';
	errorMessagePrimaryPhoneNo = '';
	errorMessageSecondaryPhoneNo = '';
	passwordConfirm = '';
	passwordNew = '';
	primaryEmailAddress = '';
	secondaryEmailAddress = '';
	primaryPhoneNo = '';
	secondaryPhoneNo = '';

	constructor(
		private route: ActivatedRoute,
		private routerExt: RouterExtensions,
		private appValuesService: AppValuesService,
		private helperService: HelperService,
		private userService: UserService,
		private authorizationService: AuthorizationService
	) {}

	ngOnInit() {
		this.getCurrentUser();
		this.getQueryParams();

		this.primaryEmailAddress = decodeURIComponent(this.currentUser.emailprimary);
		this.secondaryEmailAddress = decodeURIComponent(this.currentUser.emailsecondary);
		this.primaryPhoneNo = this.currentUser.phoneprimary;
		this.secondaryPhoneNo = this.currentUser.phonesecondary;

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
		this.secondaryEmailAddress = '';
		this.errorMessagePrimaryEmailAddress = '';
		this.errorMessageSecondaryEmailAddress = '';
	}

	clearPasswords() {
		this.passwordNew = '';
		this.passwordConfirm = '';
		this.errorMessageNewPassword = '';
		this.errorMessageConfirmPassword = '';
	}

	clearPhoneNo() {
		this.primaryPhoneNo = '';
		this.secondaryPhoneNo = '';
		this.errorMessagePrimaryPhoneNo = '';
		this.errorMessageSecondaryPhoneNo = '';
	}

	getCurrentUser() {
		this.currentUser = this.appValuesService.getLoggedInUser();
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
		this.userService.UpdateUser(this.currentUser).then(() => {
			this.routerExt.navigate([`messagepage`], {
				queryParams: {
					title: 'Account Security',
					messageSub: 'Account successfully changed.',
					nextModule: 'dashboard',
				},
			});
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
		this.errorMessageSecondaryEmailAddress = '';

		if (this.primaryEmailAddress.trim().length === 0) {
			this.errorMessagePrimaryEmailAddress = 'Primary email address is required.';
		} else if (!this.helperService.validateEmail(this.primaryEmailAddress)) {
			this.errorMessagePrimaryEmailAddress = 'Invalid primary email address.';
		} else if (this.secondaryEmailAddress.trim().length !== 0 && !this.helperService.validateEmail(this.secondaryEmailAddress)) {
			this.errorMessageSecondaryEmailAddress = 'Invalid secondary email address.';
		} else if (this.secondaryEmailAddress.trim().length !== 0 && this.secondaryEmailAddress === this.primaryEmailAddress) {
			this.errorMessageSecondaryEmailAddress = 'Primary and secondary must not be the same.';
		} else {
			this.currentUser.emailprimary = this.primaryEmailAddress;
			this.currentUser.emailsecondary = this.secondaryEmailAddress;

			this.userService.UpdateUser(this.currentUser).then(x => {
				if (this.authorizationService.ReturnFirstTimeLogin()) {
					this.pageState = pageState.updatePhoneNo;
				} else {
					this.goToSuccessaPage();
				}
			});
		}
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
		} else {
			this.currentUser.password = this.passwordNew;

			this.userService.UpdateUser(this.currentUser).then(x => {
				if (this.authorizationService.ReturnFirstTimeLogin()) {
					this.pageState = pageState.updateEmailAddress;
				} else {
					this.goToSuccessaPage();
				}
			});
		}
	}

	updatePhoneNo() {
		this.errorMessagePrimaryPhoneNo = '';
		this.errorMessageSecondaryPhoneNo = '';

		if (this.primaryPhoneNo.trim().length === 0) {
			this.errorMessagePrimaryPhoneNo = 'Primary phone no is required.';
		} else if (this.secondaryPhoneNo.trim().length !== 0 && this.primaryPhoneNo === this.secondaryPhoneNo) {
			this.errorMessageSecondaryPhoneNo = 'Primary and secondary must not be the same.';
		} else {
			this.currentUser.phoneprimary = this.primaryPhoneNo;
			this.currentUser.phonesecondary = this.secondaryPhoneNo;
			this.userService.UpdateUser(this.currentUser).then(x => {
				this.goToSuccessaPage();
			});
		}
	}
}

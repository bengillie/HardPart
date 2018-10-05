import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router'

import { Subscription } from 'rxjs';

import { User } from '~/model/user.model';

import { AppValuesService } from '../service/appvalues.service';
import { HelperService } from '../service/helper.service';
import { UserService } from '../service/user.service';

export enum pageState {
	updatePassword = 0,
	updateEmailAddress = 1,
	updatePhoneNo = 2
}

@Component({
	moduleId: module.id,
	selector: 'update-security-details',
	templateUrl: './update-security-details.component.html',
	styleUrls: ['./update-security-details.component.css']
})

export class UpdateSecurityDetailsComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

	currentUser: User = new User();
	hasNavigationBack;
	hasSkip;
	isLoading = true;
	pageState: pageState;

	errorMessageNewPassword: string = '';
	errorMessageConfirmPassword: string = '';
	errorMessagePrimaryEmailAddress: string = '';
	errorMessageSecondaryEmailAddress: string = '';
	errorMessagePrimaryPhoneNo: string = '';
	errorMessageSecondaryPhoneNo: string = '';
	passwordConfirm: string = '';
	passwordNew: string = '';
	primaryEmailAddress: string = '';
	secondaryEmailAddress: string = '';
	primaryPhoneNo: string = '';
	secondaryPhoneNo: string = '';
	
	constructor(private route: ActivatedRoute,
		private routerExt: RouterExtensions,
		private appValuesService: AppValuesService,
		private helperService: HelperService,
		private userService: UserService) { }

	ngOnInit() { 
		this.getCurrentUser();
		this.getQueryParams();

		this.hasNavigationBack = (!this.currentUser.isfirsttime).toString();
		this.hasSkip = this.currentUser.isfirsttime;

		// this.passwordNew = "test123";
		// this.passwordConfirm = "test123";
		// this.primaryEmailAddress = "t@est.com";
		// this.secondaryEmailAddress = "s@mple.com";
		// this.primaryPhoneNo = "123";
		// this.secondaryPhoneNo = "456";
	}

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
	}

	get title(): string {
		if(this.pageState === pageState.updateEmailAddress) {
			return "Update Email Address";
		} else if(this.pageState === pageState.updatePhoneNo) {
			return "Update Phone No.";
		} else {
			return "Update Password";
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
			this.route.queryParams
			.subscribe(
				params => {
					let state = params['pageState'] || '';
					if(state === 'EmailAddress') {
						this.pageState = pageState.updateEmailAddress;
					} else if(state === 'PhoneNo') {
						this.pageState = pageState.updatePhoneNo;
					} else {
						this.pageState = pageState.updatePassword;
					}

					this.isLoading = false;
				}
			)
		);
	}

	goToSuccessaPage() {
		if(this.currentUser.isfirsttime) {
			this.currentUser.isfirsttime = this.currentUser.isfirsttime ? false : this.currentUser.isfirsttime;
			this.subscriptions.push(this.userService.updateUser(this.currentUser)
				.subscribe(
					(x) => {
						this.routerExt.navigate([`messagepage`], { 
							queryParams: {
								title: 'Account Security',
								messageSub: 'Account successfully changed.',
								nextModule: 'dashboard'
							}
						});
					}
				)
			);
		} else {
			this.routerExt.navigate([`messagepage`], { 
				queryParams: {
					title: 'Account Security',
					messageSub: 'Account successfully changed.',
					nextModule: 'accountsecurity'
				}
			});	
		}
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

		if(this.primaryEmailAddress.trim().length === 0) {
			this.errorMessagePrimaryEmailAddress = 'Primary email address is required.';
		} 
		else if(!this.helperService.validateEmail(this.primaryEmailAddress)) {
			this.errorMessagePrimaryEmailAddress = 'Invalid primary email address.';
		}
		else if(this.secondaryEmailAddress.trim().length !== 0 && !this.helperService.validateEmail(this.secondaryEmailAddress)) {
			this.errorMessageSecondaryEmailAddress = "Invalid secondary email address.";
		}
		else if(this.secondaryEmailAddress.trim().length !== 0 && this.secondaryEmailAddress === this.primaryEmailAddress) {
			this.errorMessageSecondaryEmailAddress = "Primary and secondary must not be the same.";
		}
		else {
			this.currentUser.emailprimary = this.primaryEmailAddress;
			this.currentUser.emailsecondary = this.secondaryEmailAddress;
			this.subscriptions.push(this.userService.updateUser(this.currentUser)
				.subscribe(
					(x) => {
						if(this.currentUser.isfirsttime) {
							this.pageState = pageState.updatePhoneNo;
						} else {
							this.goToSuccessaPage();
						}
					}
				)
			);
		}
	}

	updatePassword() {
		this.errorMessageNewPassword = '';
		this.errorMessageConfirmPassword = '';

		let errorMessage = this.userService.validatePassword(this.passwordNew, this.passwordConfirm);
		if(errorMessage !== null) {
			if(errorMessage.control === 'newpassword') {
				this.errorMessageNewPassword = errorMessage.message;
			} else {
				this.errorMessageConfirmPassword = errorMessage.message;
			}
		} else {
			this.currentUser.password = this.passwordNew;
			this.subscriptions.push(this.userService.updateUser(this.currentUser)
				.subscribe(
					(x) => {
						if(this.currentUser.isfirsttime) {
							this.pageState = pageState.updateEmailAddress;
						} else {
							this.goToSuccessaPage();
						}
					}
				)
			);
		}
	}

	updatePhoneNo() {
		this.errorMessagePrimaryPhoneNo = '';
		this.errorMessageSecondaryPhoneNo = '';

		if(this.primaryPhoneNo.trim().length === 0) {
			this.errorMessagePrimaryPhoneNo = 'Primary phone no is required.';
		}
		else if(this.secondaryPhoneNo.trim().length !== 0 && this.primaryPhoneNo === this.secondaryPhoneNo) {
			this.errorMessageSecondaryPhoneNo = "Primary and secondary must not be the same.";
		}
		else {
			this.currentUser.phoneprimary = this.primaryPhoneNo;
			this.currentUser.phonesecondary = this.secondaryPhoneNo;
			this.subscriptions.push(this.userService.updateUser(this.currentUser)
				.subscribe(
					(x) => {
						this.goToSuccessaPage();
					}
				)
			);
		}
	}
}
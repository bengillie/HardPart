import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { User } from '../model/user.model';

import { AppValuesService } from '../service/appvalues.service';
import { HelperService } from '../service/helper.service'

@Component({
	moduleId: module.id,
	selector: 'contactus-form',
	templateUrl: './contactus-form.component.html',
	styleUrls: ['./contactus-form.component.css']
})

export class ContactusFormComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];
	
	isLoading = true;
	currentUser: User = new User();
	name: string = '';
	emailaddress: string = '';
	message: string = '';

	nameIconCode = String.fromCharCode(0xe971);
	mailIconCode = String.fromCharCode(0xe945);

	errorMessageName: string = '';
	errorMessageEmailAddress: string = '';
	errorMessage: string = '';

	constructor(private routerExt: RouterExtensions, 
		private appValuesService: AppValuesService,
		private helperService: HelperService) { }

	ngOnInit() { 
		this.getCurrentUser();
		this.isLoading = false;
	}

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
	}

	getCurrentUser() {
		this.currentUser = this.appValuesService.getLoggedInUser();
		this.name = this.currentUser.fname + ' ' + this.currentUser.lname;
		this.emailaddress = decodeURIComponent(this.currentUser.emailprimary);
	}

	sendEmail() {
		let validrequest: boolean = true;
		this.errorMessageName = '';
		this.errorMessageEmailAddress = '';
		this.errorMessage = '';

		if(this.name.trim().length === 0) {
			this.errorMessageName = 'Name is required.';
			validrequest = false;
		}
		if(this.emailaddress.trim().length === 0) {
			this.errorMessageEmailAddress = 'Email Address is required.';
			validrequest = false;
		}
		if(!this.helperService.validateEmail(this.emailaddress)) {
			this.errorMessageEmailAddress = 'Invalid email address.';
			validrequest = false;
		}
		if(this.message.trim().length === 0) {
			this.errorMessage = 'Message is required.';
			validrequest = false;
		}

		if(validrequest) { 
			this.routerExt.navigate([`messagepage`], { 
				queryParams: {
					title: 'Email Us',
					messageSub: 'Email sent.',
					nextModule: 'contactus'
				}
			});
		}
	}
}
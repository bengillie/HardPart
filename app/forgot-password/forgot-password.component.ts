import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router'

import { Subscription } from 'rxjs';

import { UserService } from '../service/user.service';

@Component({
	moduleId: module.id,
	selector: 'forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

	emailAddress: string = 'jasonsmith';
	errorMessage: string = '';

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

	clear() {
		this.emailAddress = '';
		this.errorMessage = '';
	}

	sendCode() {
		this.errorMessage = '';

		if(this.emailAddress.trim().length === 0) {
			this.errorMessage = 'Email address is required.';
		} 
		// else if(!this.validateEmail(this.emailAddress)) {
		// 	this.errorMessage = 'Invalid email address.';
		// } 
		else {
			this.subscriptions.push(this.userService.getUserByEmailAddress(this.emailAddress)
				.subscribe(
					(x) => {
						if(!x){
							this.errorMessage = 'Email address not found.';
						} else {
							this.errorMessage = "Code has been sent.";
							//send code => call a service that will send code to the email adress.
							//for now code is equal to 12345.
							//change the view to enter code
							//change the view to enter new password
							//back to login
						}
					}
				)
			);
		}
	}

	// validateEmail(email) {
	// 	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	return re.test(String(email).toLowerCase());
	// }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router'

import { Subscription } from 'rxjs';

import { User } from '~/model/user.model';
import { AppValuesService } from '../service/appvalues.service';

@Component({
	moduleId: module.id,
	selector: 'account-security',
	templateUrl: './account-security.component.html',
	styleUrls: ['./account-security.component.css']
})

export class AccountSecurityComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

	currentUser: User = new User();
	editIconCode = String.fromCharCode(0xe905);
	isLoading = true;

	constructor(private router: RouterExtensions,
		private appValuesService: AppValuesService) { }

	ngOnInit() { 
		this.getCurrentUser();
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
		this.currentUser.emailprimary = decodeURIComponent(this.currentUser.emailprimary);
		this.currentUser.emailsecondary = decodeURIComponent(this.currentUser.emailsecondary);

		this.isLoading = false;
	}

	checkValue(arg: string) {
		if(arg === '' || arg === null) {
			return '-';
		} else {
			return arg;
		}
	}

	onTap(args: string){
		this.router.navigate([`updatesecuritydetails`], { 
			queryParams: {
				pageState: args
			}
		});
	}
}
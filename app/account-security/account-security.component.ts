import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { Subscription } from 'rxjs';

import { User } from '../shared/model/user.model';
import { AppValuesService } from '../shared/service/appvalues.service';
import { UserService } from '~/shared/service/user.service';

@Component({
	moduleId: module.id,
	selector: 'account-security',
	templateUrl: './account-security.component.html',
	styleUrls: ['./account-security.component.css'],
})
export class AccountSecurityComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	public Date = new Date();

	editIconCode = String.fromCharCode(0xe905);
	isLoading = true;

	constructor(private router: RouterExtensions, public userService: UserService) {}

	ngOnInit() {
		this.isLoading = false;
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	checkValue(arg: string) {
		if (arg === '' || arg === null) {
			return '-';
		} else {
			return arg;
		}
	}

	onTap(args: string) {
		this.router.navigate([`updatesecuritydetails`], {
			queryParams: {
				pageState: args,
			},
		});
	}
}

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';

import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';

@Component({
	moduleId: module.id,
	selector: 'actionbar',
	templateUrl: './actionbar.component.html',
	styleUrls: ['./actionbar.component.css']
})

export class ActionbarComponent implements OnInit, OnDestroy {
	@Input() title: string;
	@Input() hasNavigationBack: boolean;

	private subscriptions : Subscription[] = [];

	currentUser: User;
	
	constructor(private appValuesService: AppValuesService,
		private location: Location) { }

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
		if(this.currentUser.image === '') {
			this.currentUser.image = '~/images/silhouette.jpg';
		}
	}

	goBack() {
		this.location.back();
	}
}
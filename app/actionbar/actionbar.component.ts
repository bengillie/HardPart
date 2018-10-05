import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Subscription } from 'rxjs';
import * as app from "tns-core-modules/application";

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
	@Input() hasDisplayPicture: boolean;
	@Input() hasNavigationBack: boolean;

	private subscriptions : Subscription[] = [];
	sideDrawer = <RadSideDrawer>app.getRootView();

	currentUser: User;
	
	constructor(private appValuesService: AppValuesService,
		private location: Location) {
			this.getCurrentUser();
	}

	ngOnInit() { }

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
		if(this.currentUser && this.currentUser.image === '') {
			this.currentUser.image = '~/images/silhouette.png';
			this.appValuesService.setLoggedInUser(this.currentUser);
		}
		this.hasDisplayPicture = this.hasDisplayPicture === undefined ? true : false;
		this.hasDisplayPicture = (this.hasDisplayPicture && (this.currentUser !== undefined));
	}

	goBack() {
		this.location.back();
	}

	openSidedrawer() {
		this.sideDrawer.showDrawer();
	}
}
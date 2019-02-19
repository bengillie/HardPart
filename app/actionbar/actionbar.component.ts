import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Subscription } from 'rxjs';
import * as app from 'tns-core-modules/application';

import { User } from '~/shared/model/user.model';

import { AppValuesService } from '~/shared/service/appvalues.service';
import { UserService } from '~/shared/service/user.service';

@Component({
	moduleId: module.id,
	selector: 'actionbar',
	templateUrl: './actionbar.component.html',
	styleUrls: ['./actionbar.component.css'],
})
export class ActionbarComponent implements OnInit, OnDestroy {
	@Input()
	title: string;

	@Input()
	hasNavigationBack;

	private subscriptions: Subscription[] = [];
	sideDrawer = <RadSideDrawer>app.getRootView();

	displayImage: string;

	constructor(private appValuesService: AppValuesService, private location: Location, public userService: UserService) {
		this.getUserImage();
	}

	ngOnInit() {
		if (this.hasNavigationBack === 'false') {
			this.hasNavigationBack = false;
		}
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	getUserImage() {
		this.displayImage = this.userService.ReturnUserSession().image;

		if (this.displayImage) {
			this.displayImage = '~/images/silhouette.png';
		}
	}

	goBack() {
		this.location.back();
	}

	openSidedrawer() {
		this.sideDrawer.showDrawer();
	}
}

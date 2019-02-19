import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs';

import { Notification } from '~/shared/model/notification.model';
import { User } from '../shared/model/user.model';

import { AppValuesService } from '../shared/service/appvalues.service';
import { HelperService } from '../shared/service/helper.service';
import { NotificationService } from '~/notification/notification.service';
import { AuthorizationService } from '~/shared/service/authorization.service';

@Component({
	moduleId: module.id,
	selector: 'navigation-bar',
	templateUrl: './navigationbar.component.html',
	styleUrls: ['./navigationbar.component.less'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	iconCodeMenu = '';
	iconCodeHomework = '';
	iconCodeStudentSelection = '';
	iconCodeNotification = '';
	iconCodeNewNotification = '';
	tabIcon = '';
	tabViewSelectedIndex = 0;
	title = '';
	totalNotification = 0;

	displayOnLogin = false;
	showNavBar = false;
	showStudentSelection = false;

	emergencyNotification: Notification[] = [];

	constructor(
		private appValuesService: AppValuesService,
		private helperService: HelperService,
		private notificationService: NotificationService,
		private router: Router,
		private routerExt: RouterExtensions,
		private authorizationService: AuthorizationService
	) {}

	ngOnInit() {
		this.getIcon();
		this.getRouteUrl();
		this.getNotification();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	// getCurrentUser() {
	// 	if (this.currentUser) {
	// 		this.showStudentSelection = this.currentUser.children.length > 1;
	// 		this.getNotification();
	// 	}

	// }

	getEmergencyNotification(notification: Notification[]) {
		let today = new Date();

		this.emergencyNotification = notification.filter(n => n.displayOnLogin == true && new Date(n.expiryDate) > today);

		if (this.emergencyNotification.length != 0) {
			this.appValuesService.setEmergencyNotification(this.emergencyNotification);
			this.router.navigate([`notificationlogin`]);
		}
	}

	getIcon() {
		this.iconCodeMenu = String.fromCharCode(0xe9bd);
		this.iconCodeHomework = String.fromCharCode(0xe91f);
		this.iconCodeStudentSelection = String.fromCharCode(0xe972);
		this.iconCodeNotification = String.fromCharCode(0xea08);
	}

	async getNotification() {
		this.totalNotification = this.appValuesService.getTotalNotification();

		if (!this.authorizationService.IsLoggedIn()) {
			return;
		}

		await this.notificationService.getNotification();

		this.notificationService.Notifications.sort((a, b) => (new Date(a.createdDate) > new Date(b.createdDate) ? -1 : 1));
		this.appValuesService.setNotification(this.notificationService.Notifications);
		this.appValuesService.setTotalNotification(this.notificationService.Notifications.length);
		this.totalNotification = this.notificationService.Notifications.length;
		this.getEmergencyNotification(this.notificationService.Notifications);
	}

	getTabList() {
		if (this.tabViewSelectedIndex === 0) {
			this.routerExt.navigate(['dashboard']);
		} else if (this.tabViewSelectedIndex === 1) {
			this.routerExt.navigate([`homework`]);
		} else if (this.tabViewSelectedIndex === 2) {
			this.routerExt.navigate([`studentselection`]);
		} else if (this.tabViewSelectedIndex === 3) {
			this.routerExt.navigate(['notification']);
		}
	}

	getRouteUrl() {
		this.router.events.subscribe(res => {
			let excludedPages: string[] = ['/login', '/forgotpassword', '/advert'];
			let tempShowNavBar = excludedPages.filter(x => this.router.url.startsWith(x)).length === 0;
			tempShowNavBar = tempShowNavBar && this.authorizationService.IsLoggedIn() && !this.authorizationService.ReturnFirstTimeLogin();
			this.showNavBar = tempShowNavBar;
		});
	}

	gridColumnsGenerator(count: number): string {
		return this.helperService.gridColumnsGenerator(count);
	}

	onTabViewClicked(args) {
		this.tabViewSelectedIndex = args;
		this.getTabList();
	}
}

import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { isAndroid, isIOS, ios } from 'tns-core-modules/ui/frame/frame';

import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Subscription } from 'rxjs';

import { User } from './shared/model/user.model';
import { AppValuesService } from '../app/shared/service/appvalues.service';

export class navItem {
	sortId: number;
	icon: string;
	text: string;
}

@Component({
	selector: 'ns-app',
	templateUrl: 'app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	@ViewChild(RadSideDrawerComponent)
	public drawerComponent: RadSideDrawerComponent;
	private sideDrawer: RadSideDrawer;

	currentUser: User;
	navItemSettings: navItem = {
		sortId: 1,
		icon: String.fromCharCode(0xe994),
		text: 'Settings',
	};
	navItemSecurity: navItem = {
		sortId: 2,
		icon: String.fromCharCode(0xe9b4),
		text: 'Security',
	};
	navItemLogout: navItem = {
		sortId: 3,
		icon: String.fromCharCode(0xe9b6),
		text: 'Logout',
	};
	navItems: navItem[] = [];

	constructor(private appValuesService: AppValuesService, private router: Router, private routerExt: RouterExtensions) {}

	ngOnInit() {
		this.getRouteUrl();
	}

	ngAfterViewInit() {
		this.sideDrawer = this.drawerComponent.sideDrawer;

		if (isIOS) {
			// This disables the swipe gesture to open menu
			this.sideDrawer.ios.defaultSideDrawer.allowEdgeSwipe = false;
		}
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	decode_URIComponent(args): string {
		return decodeURIComponent(args);
	}

	getRouteUrl() {
		this.router.events.subscribe(res => {
			this.getCurrentUser();
			this.getNavItems();
		});
	}

	getCurrentUser() {
		this.currentUser = this.appValuesService.getLoggedInUser();
	}

	getNavItems() {
		if (!this.currentUser) {
			this.navItems = [];
		} else {
			if (this.currentUser.isfirsttime) {
			} else {
				this.pushNavItem(this.navItemSettings);
				this.pushNavItem(this.navItemSecurity);
			}

			this.pushNavItem(this.navItemLogout);
			this.navItems.sort(this.sortMenu);
		}
	}

	onLoaded() {
		if (isAndroid) {
			// This disables the swipe gesture to open menu, by setting the treshhold to '0'
			this.sideDrawer.android.setTouchTargetThreshold(0);
		}
	}

	pushNavItem(item: navItem) {
		const navExists = this.navItems.filter(x => x.text == item.text).length !== 0;
		if (!navExists) {
			this.navItems.push(item);
		}
	}

	sortMenu(a: navItem, b: navItem) {
		if (a.sortId < b.sortId) return -1;
		if (a.sortId > b.sortId) return 1;
		return 0;
	}

	tapLogout() {
		this.appValuesService.clearValues();
		this.routerExt.navigate([`login`]);
		this.sideDrawer.closeDrawer();
	}

	tapSecurity() {
		this.routerExt.navigate([`accountsecurity`]);
		this.sideDrawer.closeDrawer();
	}

	tapSettings() {}
}

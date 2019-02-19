import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RadListViewComponent } from 'nativescript-ui-listview/angular/listview-directives';
import { Subscription } from 'rxjs';
import { SwipeActionsEventData } from 'nativescript-ui-listview';
import { View } from 'tns-core-modules/ui/page/page';

import { Notification } from '~/shared/model/notification.model';
import { User } from '~/shared/model/user.model';

import { AppValuesService } from '~/shared/service/appvalues.service';
import { NotificationService } from '~/notification/notification.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'ns-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.less'],
})
export class NotificationComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];
	isLoading = true;

	allNotification: Notification[] = [];

	itemIndex = 0;

	@ViewChild('listView_notif')
	listView_notif: RadListViewComponent;

	constructor(private appValuesService: AppValuesService, private notificationService: NotificationService, private routerExt: RouterExtensions) {}

	ngOnInit() {
		this.getNotification();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	getNotification() {
		this.allNotification = this.appValuesService.getNotification();
		this.isLoading = false;
	}

	getRouteNavBar() {
		this.routerExt.navigate([`navigationbar`]);
		this.routerExt.navigate([`notification`]);
	}

	async onDelete() {
		let notification = this.allNotification[this.itemIndex];
		notification.seen = true;

		await this.notificationService.updateNotification(notification);

		this.allNotification.splice(this.itemIndex, 1);
		this.listView_notif.listView.notifySwipeToExecuteFinished();

		this.appValuesService.setTotalNotification(this.allNotification.length);
		this.getRouteNavBar();
	}

	onSwipeCellStarted(args: SwipeActionsEventData) {
		this.itemIndex = args.index;

		const swipeLimits = args.data.swipeLimits;
		const swipeView = args['object'];

		const leftItem = swipeView.getViewById<View>('rightSwipe');
		swipeLimits.right = leftItem.getMeasuredWidth();
		swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;

		const rightItem = swipeView.getViewById<View>('delete');
		swipeLimits.right = rightItem.getMeasuredWidth();
	}
}

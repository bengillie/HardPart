import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core'
import { RadListViewComponent } from 'nativescript-ui-listview/angular/listview-directives';
import { Subscription } from 'rxjs';
import { SwipeActionsEventData } from 'nativescript-ui-listview';
import { View } from 'tns-core-modules/ui/page/page';

import { Notification } from '~/model/notification.model';
import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';
import { NotificationService } from '~/service/notification.service';

@Component({
    moduleId: module.id,
    selector: 'ns-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit, OnDestroy {
    private subscriptions : Subscription[] = [];
    isLoading = true;

    loggedInUser: User;

    allNotification: Notification[] = [];
    
    itemIndex = 0;
    totalNotif = 0;

    @ViewChild("listView_notif") listView_notif: RadListViewComponent;

    constructor(
        private appValuesService: AppValuesService,
        private notificationService: NotificationService,
    ) { 
        this.loggedInUser = this.appValuesService.getLoggedInUser();
    }

    ngOnInit() { 
        this.getNotification();
    }

    ngOnDestroy() {
        if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
    }

    getNotification() {
        this.subscriptions.push(this.notificationService.getNotification()
            .subscribe(
                notification => {
                    /* this.allNotification = notification.sort((a, b) => a.title < b.title ? -1 : 1); */
                    this.allNotification = notification;
                    this.totalNotif = this.allNotification.length;
                    this.isLoading = false;
                }
            ),
        )
    }

    onDelete() {
        let notification = this.allNotification[this.itemIndex];
        notification.isSeen = true;

        this.subscriptions.push(this.notificationService.updateNotification(notification)
            .subscribe(() => {})
        )

        this.allNotification.splice(this.itemIndex, 1);
        this.listView_notif.listView.notifySwipeToExecuteFinished();
	}
    
    onItemTap(args) {
        let notification = this.allNotification[args.index];
        console.log('Title: ' + notification.title + ' Message: ' + notification.message);

        /* this.router.navigate([`/homeworkdetails/${homework.id}`]); */
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
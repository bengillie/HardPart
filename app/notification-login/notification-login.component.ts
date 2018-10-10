import { Component, OnInit, OnDestroy } from '@angular/core'
// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { Subscription } from 'rxjs';
import { topmost } from "ui/frame";

import { Notification } from '~/model/notification.model';

import { NotificationService } from '~/service/notification.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'ns-notification-login',
    templateUrl: './notification-login.component.html',
    styleUrls: ['./notification-login.component.less']
})
export class NotificationLoginComponent implements OnInit, OnDestroy {
    private subscriptions : Subscription[] = [];

    isLoading = true;
    emergencyNotification: Notification[] = [];

    constructor(
        private notificationService: NotificationService,
        // private params: ModalDialogParams,
        private routerExt: RouterExtensions,
    ) { }

    ngOnInit() { 
        this.getEmergencyNotification();
    }

    ngOnDestroy() {
        if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
    }  

    close(emergencyNotification: Notification) {
        // this.params.closeCallback(emergencyNotification);
    }

    getEmergencyNotification() {
        this.subscriptions.push(this.notificationService.getEmergencyNotification()
            .subscribe(
                notification => {
                    notification = notification.sort((a, b) => new Date(a.createdDate) > new Date(b.createdDate) ? -1 : 1);
                    this.emergencyNotification = notification;
                }
            ),
        )
    }
}

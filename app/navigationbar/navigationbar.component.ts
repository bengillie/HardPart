import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { User } from '../model/user.model';

import { AppValuesService } from '../service/appvalues.service';
import { HelperService } from '../service/helper.service';
import { NotificationService } from '~/service/notification.service';

@Component({
    moduleId: module.id,
    selector: 'navigation-bar',
    templateUrl: './navigationbar.component.html',
    styleUrls: ['./navigationbar.component.less']
})
export class NavigationBarComponent implements OnInit, OnDestroy {
    private subscriptions : Subscription[] = [];

    currentUser: User = new User();
    iconCodeMenu = "";
    iconCodeHomework = "";
    iconCodeStudentSelection = "";
    iconCodeNotification = "";
    iconCodeNewNotification = "";
    tabIcon = "";
    tabViewSelectedIndex = 0;
    title = "";
    totalNotification = 0;

    showNavBar = false;
    showStudentSelection = false;

    constructor(
        private appValuesService: AppValuesService,
        private helperService: HelperService,
        private notificationService: NotificationService,
        private router: Router,
        private routerExt: RouterExtensions) { }

    ngOnInit() {
        this.getIcon();
        this.getRouteUrl();
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
        if(this.currentUser) {
            this.showStudentSelection = this.currentUser.children.length > 1;
            this.getNotification();
        }
    }

    getIcon() {
        this.iconCodeMenu = String.fromCharCode(0xe9bd);
        this.iconCodeHomework = String.fromCharCode(0xe91f);
        this.iconCodeStudentSelection = String.fromCharCode(0xe972);
        this.iconCodeNotification = String.fromCharCode(0xea08);
    } 

    getNotification() {    
        this.totalNotification = this.appValuesService.getTotalNotification();

        if (this.totalNotification === 0) {
            this.subscriptions.push(this.notificationService.getNotification()
                .subscribe(
                    notification => {
                        notification = notification.sort((a, b) => new Date(a.createdDate) > new Date(b.createdDate) ? -1 : 1);
                        this.appValuesService.setNotification(notification);
                        this.appValuesService.setTotalNotification(notification.length);
                        this.totalNotification = notification.length;
                    }
                ),
            )
        }
    }

    getTabList() {
        if (this.tabViewSelectedIndex === 0) 
        {
            this.routerExt.navigate(['dashboard']);
        } else if (this.tabViewSelectedIndex === 1) 
        {
            this.routerExt.navigate([`homework`]);
        } else if (this.tabViewSelectedIndex === 2) 
        {
            this.routerExt.navigate([`studentselection`]);
        } else if (this.tabViewSelectedIndex === 3) 
        {
            this.routerExt.navigate(['notification']);
        }
    }

    getRouteUrl() {
        this.router.events.subscribe((res) => { 
            this.getCurrentUser();

            let excludedPages: string[] = ['/login', '/forgotpassword'];
            let tempShowNavBar = excludedPages.filter(x => this.router.url.startsWith(x)).length === 0;
            tempShowNavBar = tempShowNavBar && this.currentUser && !this.currentUser.isfirsttime;
            this.showNavBar  = tempShowNavBar;
        })
    }

    gridColumnsGenerator(count: number): string {
        return this.helperService.gridColumnsGenerator(count);
    }

    onTabViewClicked(args){ 
        this.tabViewSelectedIndex = args;
        this.getTabList();
	}
}
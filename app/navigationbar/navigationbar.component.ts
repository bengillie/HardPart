import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { User } from '../model/user.model';

import { AppValuesService } from '../service/appvalues.service';
import { HelperService } from '../service/helper.service';

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
    iconCodeNotif = "";
    tabIcon = "";
    tabViewSelectedIndex = 0;
    title = "";

    showNavBar = false;
    showStudentSelection = false;

    constructor(
        private appValuesService: AppValuesService,
        private helperService: HelperService,
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

    gridColumnsGenerator(count: number): string {
        return this.helperService.gridColumnsGenerator(count);
    }

    getCurrentUser() {
        this.currentUser = this.appValuesService.getLoggedInUser();
        if(this.currentUser) {
            this.showStudentSelection = this.currentUser.children.length > 1;
        }
    }

    getIcon() {
        this.iconCodeMenu = String.fromCharCode(0xe9bd);
        this.iconCodeHomework = String.fromCharCode(0xe91f);
        this.iconCodeStudentSelection = String.fromCharCode(0xe972);
        this.iconCodeNotif = String.fromCharCode(0xea08);
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
            this.routerExt.navigate(['notifications']);
        }
    }

    getRouteUrl() {
        this.router.events.subscribe((res) => { 
            let excludedPages: string[] = ['/login', '/forgotpassword'];
            this.showNavBar  = excludedPages.filter(x => this.router.url === x).length === 0;
            
            this.getCurrentUser();
        })
    }

    onTabViewClicked(args){ 
        this.tabViewSelectedIndex = args;
        this.getTabList();
	}
}
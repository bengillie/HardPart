import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Subscription } from 'rxjs';

import { User } from './model/user.model';
import { AppValuesService } from "./service/appvalues.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    private subscriptions : Subscription[] = [];

    @ViewChild(RadSideDrawerComponent) 
    public drawerComponent: RadSideDrawerComponent;
    private sideDrawer: RadSideDrawer;

    iconSettings = String.fromCharCode(0xe994);
    iconLogout = String.fromCharCode(0xe9b6);
    currentUser: User = new User();

    constructor(private appValuesService: AppValuesService,
        private router: Router,
        private routerExt: RouterExtensions) { }

    ngOnInit() {
        this.getRouteUrl();
    } 

    ngAfterViewInit() {
        this.sideDrawer = this.drawerComponent.sideDrawer;
    }

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
    }

    getRouteUrl() {
        this.router.events.subscribe((res) => {
            this.getCurrentUser();
        })
    }
    
    getCurrentUser() {
        this.currentUser = this.appValuesService.getLoggedInUser();
    }

    tapLogout() {
        this.appValuesService.clearValues();
        this.routerExt.navigate([`login`]);
        this.sideDrawer.closeDrawer()
    }

    tapSettings() {
        
    }
 }

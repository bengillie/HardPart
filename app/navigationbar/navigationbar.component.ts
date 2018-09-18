import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'navigation-bar',
    templateUrl: './navigationbar.component.html',
    styleUrls: ['./navigationbar.component.less']
})
export class NavigationBarComponent implements OnInit {
    private subscriptions : Subscription[] = [];
    
    iconCodeMenu = "";
    iconCodeHomework = "";
    iconCodeStudentSelection = "";
    iconCodeNotif = "";
    tabIcon = "";
    tabViewSelectedIndex = 0;
    title = "";

    showNavBar = false;

    constructor(
        private router: Router,
        private routerExt: RouterExtensions) 
    { }

    ngOnInit() {
        this.getIcon();
        this.getRouteUrl();
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
            
        }
    }

    getRouteUrl() {
        this.router.events.subscribe((res) => { 
            if (this.router.url != '/login') {
                this.showNavBar = true;
            } else {
                this.showNavBar = false;
            }
        })
    }

    onTabViewClicked(args){ 
        this.tabViewSelectedIndex = args;
        this.getTabList();
	}
}
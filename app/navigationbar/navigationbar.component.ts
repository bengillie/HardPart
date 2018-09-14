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
    iconCodeNotif = "";
    tabIcon = "";
    tabViewSelectedIndex = 0;
    title = "";

    showNavBar = false;

    constructor(
        private route: Router,
        private router: RouterExtensions) 
    { }

    ngOnInit() { 
        this.getIcon();
        this.getRouteUrl();
    }

    getIcon() {
        this.iconCodeMenu = String.fromCharCode(0xe9bd);
        this.iconCodeHomework = String.fromCharCode(0xe91f);
        this.iconCodeNotif = String.fromCharCode(0xea08);
    } 

    getTabList() {
        if (this.tabViewSelectedIndex === 0) 
        {
            this.router.navigate(['dashboard']);
        } else if (this.tabViewSelectedIndex === 1) 
        {
            this.router.navigate([`homework`]);
        } else if (this.tabViewSelectedIndex === 2) 
        {
            
        }
    }

    getRouteUrl() {
        this.route.events.subscribe((res) => { 
            if (this.route.url != '/login') {
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
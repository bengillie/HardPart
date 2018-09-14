import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { MenuList } from '~/model/dashboard.model';

@Component({
    moduleId: module.id,
    selector: 'ns-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, OnDestroy {
    private subscriptions : Subscription[] = [];
    private menuName = MenuList;
    
    icon = "";
    menuList = [];
    
    isLoading = true;
    
    constructor(
        private router: RouterExtensions) { }

    ngOnInit() {
        this.getMenuList();
    }

    ngOnDestroy() {
        if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
    }

    getMenuList() {
        this.menuList = [
            {
                "name": this.menuName.homework,
                "icon": this.icon = String.fromCharCode(0xe91f),
            }, {
                "name": this.menuName.timetable,
                "icon": this.icon = String.fromCharCode(0xea71),
            }, {
                "name": this.menuName.attendance,
                "icon": this.icon = String.fromCharCode(0xe923),
            }, {
                "name": this.menuName.achievement,
                "icon": this.icon = String.fromCharCode(0xe99e),
            }, {
                "name": this.menuName.behaviour,
                "icon": this.icon = String.fromCharCode(0xe9df),
            }, {
                "name": this.menuName.contact,
                "icon": this.icon = String.fromCharCode(0xea84),
            },
        ];
    }

    onTapList(name: string) {
        switch (name) {
            case this.menuName.homework: {
                this.router.navigate([`homework`]);
                break;
            }
            case this.menuName.timetable: {
                this.router.navigate([`timetable`]);
                break;
            }
            case this.menuName.attendance: {
                //this.router.navigate([`homework`]);
            }
            case this.menuName.achievement: {
                //this.router.navigate([`homework`]);
            }
            case this.menuName.behaviour: {
                //this.router.navigate([`homework`]);
            }
            case this.menuName.contact: {
                //this.router.navigate([`homework`]);
            }
        }
    }
}

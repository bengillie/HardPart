import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { MenuList } from '~/model/dashboard.model';

import { AppValuesService } from '../service/appvalues.service';
import { UserService } from '../service/user.service';

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
        private appValuesService: AppValuesService,
        private routerExt: RouterExtensions,
        private userService: UserService) { }

    ngOnInit() {
        this.checkMultiChildren();
    }

    ngOnDestroy() {
        if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
    }

    checkMultiChildren() {
        if(this.appValuesService.getSelectedStudent()) {
            this.getMenuList();
        } else {
            let currentUser = this.appValuesService.getLoggedInUser();
            this.subscriptions.push(this.userService.getStudentItems(currentUser.id)
                .subscribe(
                    (x) => {
                        if(x.length > 1) {
                            this.routerExt.navigate([`studentselection`]);
                        } else if(x.length === 1) {
                            this.appValuesService.setSelectedStudent(x[0]);
                            this.getMenuList();
                        }
                        else {
                            this.getMenuList();
                        }
                    },
                    () => {},
                    () => {
                        this.getMenuList();
                        this.isLoading = false;
                    }
                )
            )
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
                this.routerExt.navigate([`homework`]);
                break;
            }
            case this.menuName.timetable: {
                this.routerExt.navigate([`timetable`]);
                break;
            }
            case this.menuName.attendance: {
                this.routerExt.navigate([`attendance`]);
                break;
            }
            case this.menuName.achievement: {
                this.routerExt.navigate([`achievement`]);
                break;
            }
            case this.menuName.behaviour: {
                //this.router.navigate([`behaviour`]);
                break;
            }
            case this.menuName.contact: {
                //this.router.navigate([`contact`]);
                break;
            }
        }
    }
}

import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Subscription } from "rxjs";

import { MenuList } from "~/shared/model/dashboard.model";
import { UserType } from "~/shared/model/user.model";

import { AppValuesService } from "../shared/service/appvalues.service";

import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { NotificationLoginComponent } from "~/notification-login/notification-login.component";

@Component({
  moduleId: module.id,
  selector: "ns-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private menuName = MenuList;

  icon = "";
  menuList = [];

  isLoading = true;

  constructor(
    private appValuesService: AppValuesService,
    private route: Router,
    private routerExt: RouterExtensions,
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.checkMultiChildren();
    // this.getEmergencyNotification();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      for (let subscription of this.subscriptions) {
        subscription.unsubscribe();
      }
    }
  }

  checkMultiChildren() {
    if (this.appValuesService.getSelectedStudent()) {
      this.getMenuList();
    } else {
      let currentUser = this.appValuesService.getLoggedInUser();
      if (currentUser.usertype === UserType.student) {
        this.appValuesService.setSelectedStudent(
          this.appValuesService.getLoggedInUser()
        );
      } else if (currentUser.children.length > 1) {
        this.routerExt.navigate([`studentselection`]);
      } else if (currentUser.children.length === 1) {
        this.appValuesService.setSelectedStudent(currentUser.children[0]);
        this.getMenuList();
      }

      this.getMenuList();
      this.isLoading = false;
    }
  }

  getMenuList() {
    this.menuList = [
      {
        name: this.menuName.homework,
        icon: (this.icon = String.fromCharCode(0xe91f))
      },
      {
        name: this.menuName.timetable,
        icon: (this.icon = String.fromCharCode(0xea71))
      },
      {
        name: this.menuName.attendance,
        icon: (this.icon = String.fromCharCode(0xe923))
      },
      {
        name: this.menuName.achievement,
        icon: (this.icon = String.fromCharCode(0xe99e))
      },
      {
        name: this.menuName.behaviour,
        icon: (this.icon = String.fromCharCode(0xe9df))
      },
      {
        name: this.menuName.contact,
        icon: (this.icon = String.fromCharCode(0xea84))
      }
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
        this.routerExt.navigate([`behaviour`]);
        break;
      }
      case this.menuName.contact: {
        this.routerExt.navigate([`contactus`]);
        break;
      }
    }
  }

  private getEmergencyNotification() {
    let options = {
      context: {},
      fullscreen: false,
      viewContainerRef: this.vcRef
    };

    this.modal.showModal(NotificationLoginComponent, options);
  }
}

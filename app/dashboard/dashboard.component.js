"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var dashboard_model_1 = require("~/shared/model/dashboard.model");
var user_model_1 = require("~/shared/model/user.model");
var appvalues_service_1 = require("../shared/service/appvalues.service");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var notification_login_component_1 = require("~/notification-login/notification-login.component");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appValuesService, route, routerExt, modal, vcRef) {
        this.appValuesService = appValuesService;
        this.route = route;
        this.routerExt = routerExt;
        this.modal = modal;
        this.vcRef = vcRef;
        this.subscriptions = [];
        this.menuName = dashboard_model_1.MenuList;
        this.icon = "";
        this.menuList = [];
        this.isLoading = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.checkMultiChildren();
        // this.getEmergencyNotification();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription.unsubscribe();
            }
        }
    };
    DashboardComponent.prototype.checkMultiChildren = function () {
        if (this.appValuesService.getSelectedStudent()) {
            this.getMenuList();
        }
        else {
            var currentUser = this.appValuesService.getLoggedInUser();
            if (currentUser.usertype === user_model_1.UserType.student) {
                this.appValuesService.setSelectedStudent(this.appValuesService.getLoggedInUser());
            }
            else if (currentUser.children.length > 1) {
                this.routerExt.navigate(["studentselection"]);
            }
            else if (currentUser.children.length === 1) {
                this.appValuesService.setSelectedStudent(currentUser.children[0]);
                this.getMenuList();
            }
            this.getMenuList();
            this.isLoading = false;
        }
    };
    DashboardComponent.prototype.getMenuList = function () {
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
    };
    DashboardComponent.prototype.onTapList = function (name) {
        switch (name) {
            case this.menuName.homework: {
                this.routerExt.navigate(["homework"]);
                break;
            }
            case this.menuName.timetable: {
                this.routerExt.navigate(["timetable"]);
                break;
            }
            case this.menuName.attendance: {
                this.routerExt.navigate(["attendance"]);
                break;
            }
            case this.menuName.achievement: {
                this.routerExt.navigate(["achievement"]);
                break;
            }
            case this.menuName.behaviour: {
                this.routerExt.navigate(["behaviour"]);
                break;
            }
            case this.menuName.contact: {
                this.routerExt.navigate(["contactus"]);
                break;
            }
        }
    };
    DashboardComponent.prototype.getEmergencyNotification = function () {
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(notification_login_component_1.NotificationLoginComponent, options);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-dashboard",
            templateUrl: "./dashboard.component.html",
            styleUrls: ["./dashboard.component.less"]
        }),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService,
            router_1.Router,
            router_2.RouterExtensions,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUcvRCxrRUFBMEQ7QUFDMUQsd0RBQXFEO0FBRXJELHlFQUF1RTtBQUV2RSxtRUFBNkU7QUFDN0Usa0dBQStGO0FBUS9GO0lBU0UsNEJBQ1UsZ0JBQWtDLEVBQ2xDLEtBQWEsRUFDYixTQUEyQixFQUMzQixLQUF5QixFQUN6QixLQUF1QjtRQUp2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWJ6QixrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLDBCQUFRLENBQUM7UUFFNUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBUWQsQ0FBQztJQUVKLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixtQ0FBbUM7SUFDckMsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2QixHQUFHLENBQUMsQ0FBcUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQjtnQkFBdEMsSUFBSSxZQUFZLFNBQUE7Z0JBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCO1FBQ0UsRUFBRSxD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SUFDNUQsQ0FBQztJQXJIVSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBVzRCLG9DQUFnQjtZQUMzQixlQUFNO1lBQ0YseUJBQWdCO1lBQ3BCLDRCQUFrQjtZQUNsQix1QkFBZ0I7T0FkdEIsa0JBQWtCLENBc0g5QjtJQUFELHlCQUFDO0NBQUEsQUF0SEQsSUFzSEM7QUF0SFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IE1lbnVMaXN0IH0gZnJvbSBcIn4vc2hhcmVkL21vZGVsL2Rhc2hib2FyZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyVHlwZSB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbC91c2VyLm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkxvZ2luQ29tcG9uZW50IH0gZnJvbSBcIn4vbm90aWZpY2F0aW9uLWxvZ2luL25vdGlmaWNhdGlvbi1sb2dpbi5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwibnMtZGFzaGJvYXJkXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgbWVudU5hbWUgPSBNZW51TGlzdDtcclxuXHJcbiAgaWNvbiA9IFwiXCI7XHJcbiAgbWVudUxpc3QgPSBbXTtcclxuXHJcbiAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFwcFZhbHVlc1NlcnZpY2U6IEFwcFZhbHVlc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jaGVja011bHRpQ2hpbGRyZW4oKTtcclxuICAgIC8vIHRoaXMuZ2V0RW1lcmdlbmN5Tm90aWZpY2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgZm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja011bHRpQ2hpbGRyZW4oKSB7XHJcbiAgICBpZiAodGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmdldFNlbGVjdGVkU3R1ZGVudCgpKSB7XHJcbiAgICAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjdXJyZW50VXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgICAgaWYgKGN1cnJlbnRVc2VyLnVzZXJ0eXBlID09PSBVc2VyVHlwZS5zdHVkZW50KSB7XHJcbiAgICAgICAgdGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLnNldFNlbGVjdGVkU3R1ZGVudChcclxuICAgICAgICAgIHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFVzZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgc3R1ZGVudHNlbGVjdGlvbmBdKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50VXNlci5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICB0aGlzLmFwcFZhbHVlc1NlcnZpY2Uuc2V0U2VsZWN0ZWRTdHVkZW50KGN1cnJlbnRVc2VyLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICB0aGlzLmdldE1lbnVMaXN0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE1lbnVMaXN0KCkge1xyXG4gICAgdGhpcy5tZW51TGlzdCA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IHRoaXMubWVudU5hbWUuaG9tZXdvcmssXHJcbiAgICAgICAgaWNvbjogKHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTFmKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IHRoaXMubWVudU5hbWUudGltZXRhYmxlLFxyXG4gICAgICAgIGljb246ICh0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZWE3MSkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiB0aGlzLm1lbnVOYW1lLmF0dGVuZGFuY2UsXHJcbiAgICAgICAgaWNvbjogKHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTIzKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IHRoaXMubWVudU5hbWUuYWNoaWV2ZW1lbnQsXHJcbiAgICAgICAgaWNvbjogKHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTllKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IHRoaXMubWVudU5hbWUuYmVoYXZpb3VyLFxyXG4gICAgICAgIGljb246ICh0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTlkZikpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiB0aGlzLm1lbnVOYW1lLmNvbnRhY3QsXHJcbiAgICAgICAgaWNvbjogKHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYTg0KSlcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIG9uVGFwTGlzdChuYW1lOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICBjYXNlIHRoaXMubWVudU5hbWUuaG9tZXdvcms6IHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGhvbWV3b3JrYF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS50aW1ldGFibGU6IHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYHRpbWV0YWJsZWBdKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIHRoaXMubWVudU5hbWUuYXR0ZW5kYW5jZToge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgYXR0ZW5kYW5jZWBdKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIHRoaXMubWVudU5hbWUuYWNoaWV2ZW1lbnQ6IHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGFjaGlldmVtZW50YF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5iZWhhdmlvdXI6IHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGJlaGF2aW91cmBdKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIHRoaXMubWVudU5hbWUuY29udGFjdDoge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgY29udGFjdHVzYF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEVtZXJnZW5jeU5vdGlmaWNhdGlvbigpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTm90aWZpY2F0aW9uTG9naW5Db21wb25lbnQsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=
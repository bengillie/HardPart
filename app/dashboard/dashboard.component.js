"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var dashboard_model_1 = require("~/model/dashboard.model");
var appvalues_service_1 = require("../service/appvalues.service");
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
            if (currentUser.children.length > 1) {
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
            viewContainerRef: this.vcRef,
        };
        this.modal.showModal(notification_login_component_1.NotificationLoginComponent, options);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.less']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEU7QUFDOUUsMENBQXlDO0FBQ3pDLHNEQUE4RDtBQUc5RCwyREFBbUQ7QUFFbkQsa0VBQWdFO0FBRWhFLG1FQUE2RTtBQUM3RSxrR0FBK0Y7QUFRL0Y7SUFTSSw0QkFDWSxnQkFBa0MsRUFDbEMsS0FBYSxFQUNiLFNBQTJCLEVBQzNCLEtBQXlCLEVBQ3pCLEtBQXVCO1FBSnZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBYjNCLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQUcsMEJBQVEsQ0FBQztRQUU1QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFRYixDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLG1DQUFtQztJQUN2QyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCwrQ0FBa0IsR0FBbEI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJ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QUFDO0NBQUEsQUE5R0QsSUE4R0M7QUE5R1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTWVudUxpc3QgfSBmcm9tICd+L21vZGVsL2Rhc2hib2FyZC5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hcHB2YWx1ZXMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkxvZ2luQ29tcG9uZW50IH0gZnJvbSAnfi9ub3RpZmljYXRpb24tbG9naW4vbm90aWZpY2F0aW9uLWxvZ2luLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLWRhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtZW51TmFtZSA9IE1lbnVMaXN0O1xyXG4gICAgXHJcbiAgICBpY29uID0gXCJcIjtcclxuICAgIG1lbnVMaXN0ID0gW107XHJcbiAgICBcclxuICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXBwVmFsdWVzU2VydmljZTogQXBwVmFsdWVzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tNdWx0aUNoaWxkcmVuKCk7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRFbWVyZ2VuY3lOb3RpZmljYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTXVsdGlDaGlsZHJlbigpIHtcclxuICAgICAgICBpZih0aGlzLmFwcFZhbHVlc1NlcnZpY2UuZ2V0U2VsZWN0ZWRTdHVkZW50KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRNZW51TGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudFVzZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2BzdHVkZW50c2VsZWN0aW9uYF0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY3VycmVudFVzZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFZhbHVlc1NlcnZpY2Uuc2V0U2VsZWN0ZWRTdHVkZW50KGN1cnJlbnRVc2VyLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5nZXRNZW51TGlzdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRNZW51TGlzdCgpIHtcclxuICAgICAgICB0aGlzLm1lbnVMaXN0ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS5ob21ld29yayxcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTkxZiksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLm1lbnVOYW1lLnRpbWV0YWJsZSxcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZWE3MSksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLm1lbnVOYW1lLmF0dGVuZGFuY2UsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MjMpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS5hY2hpZXZlbWVudCxcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTk5ZSksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLm1lbnVOYW1lLmJlaGF2aW91cixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTlkZiksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLm1lbnVOYW1lLmNvbnRhY3QsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhODQpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBMaXN0KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudU5hbWUuaG9tZXdvcms6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgaG9tZXdvcmtgXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudU5hbWUudGltZXRhYmxlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYHRpbWV0YWJsZWBdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5hdHRlbmRhbmNlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGF0dGVuZGFuY2VgXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudU5hbWUuYWNoaWV2ZW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgYWNoaWV2ZW1lbnRgXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudU5hbWUuYmVoYXZpb3VyOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGJlaGF2aW91cmBdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5jb250YWN0OiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGNvbnRhY3R1c2BdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RW1lcmdlbmN5Tm90aWZpY2F0aW9uKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTm90aWZpY2F0aW9uTG9naW5Db21wb25lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var dashboard_model_1 = require("~/shared/model/dashboard.model");
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
        this.icon = '';
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
        // if (this.appValuesService.getSelectedStudent()) {
        //   this.getMenuList();
        // } else {
        //   let currentUser = this.appValuesService.getLoggedInUser();
        //   if (currentUser.usertype === UserType.student) {
        //     this.appValuesService.setSelectedStudent(
        //       this.appValuesService.getLoggedInUser()
        //     );
        //   } else if (currentUser.children.length > 1) {
        //     this.routerExt.navigate([`studentselection`]);
        //   } else if (currentUser.children.length === 1) {
        //     this.appValuesService.setSelectedStudent(currentUser.children[0]);
        //     this.getMenuList();
        //   }
        //   this.getMenuList();
        //   this.isLoading = false;
        // }
        this.getMenuList();
        this.isLoading = false;
    };
    DashboardComponent.prototype.getMenuList = function () {
        this.menuList = [
            {
                name: this.menuName.homework,
                icon: this.icon = String.fromCharCode(0xe91f),
            },
            {
                name: this.menuName.timetable,
                icon: this.icon = String.fromCharCode(0xea71),
            },
            {
                name: this.menuName.attendance,
                icon: this.icon = String.fromCharCode(0xe923),
            },
            {
                name: this.menuName.achievement,
                icon: this.icon = String.fromCharCode(0xe99e),
            },
            {
                name: this.menuName.behaviour,
                icon: this.icon = String.fromCharCode(0xe9df),
            },
            {
                name: this.menuName.contact,
                icon: this.icon = String.fromCharCode(0xea84),
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
            styleUrls: ['./dashboard.component.less'],
        }),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService, router_1.Router, router_2.RouterExtensions, dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUcvRCxrRUFBMEQ7QUFHMUQseUVBQXVFO0FBRXZFLG1FQUE2RTtBQUM3RSxrR0FBK0Y7QUFRL0Y7SUFTQyw0QkFBb0IsZ0JBQWtDLEVBQVUsS0FBYSxFQUFVLFNBQTJCLEVBQVUsS0FBeUIsRUFBVSxLQUF1QjtRQUFsSyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQVI5SyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLDBCQUFRLENBQUM7UUFFNUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRXdLLENBQUM7SUFFMUwscUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLG1DQUFtQztJQUNwQyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFDcEIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFFRCwrQ0FBa0IsR0FBbEI7UUFDQyxvREFBb0Q7UUFDcEQsd0JBQXdCO1FB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LE9BQU8sRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQztZQUNQLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztJQUVPLHFEQUF3QixHQUFoQztRQUNDLElBQUksT0FBTyxHQUFHO1lBQ2IsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM1QixDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMseURBQTBCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQWxIVyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQ3pDLENBQUM7eUNBVXFDLG9DQUFnQixFQUFpQixlQUFNLEVBQXFCLHlCQUFnQixFQUFpQiw0QkFBa0IsRUFBaUIsdUJBQWdCO09BVDFLLGtCQUFrQixDQW1IOUI7SUFBRCx5QkFBQztDQUFBLEFBbkhELElBbUhDO0FBbkhZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTWVudUxpc3QgfSBmcm9tICd+L3NoYXJlZC9tb2RlbC9kYXNoYm9hcmQubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyVHlwZSB9IGZyb20gJ34vc2hhcmVkL21vZGVsL3VzZXIubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgQXBwVmFsdWVzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkxvZ2luQ29tcG9uZW50IH0gZnJvbSAnfi9ub3RpZmljYXRpb24tbG9naW4vbm90aWZpY2F0aW9uLWxvZ2luLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnbnMtZGFzaGJvYXJkJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblx0cHJpdmF0ZSBtZW51TmFtZSA9IE1lbnVMaXN0O1xyXG5cclxuXHRpY29uID0gJyc7XHJcblx0bWVudUxpc3QgPSBbXTtcclxuXHJcblx0aXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhcHBWYWx1ZXNTZXJ2aWNlOiBBcHBWYWx1ZXNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5jaGVja011bHRpQ2hpbGRyZW4oKTtcclxuXHRcdC8vIHRoaXMuZ2V0RW1lcmdlbmN5Tm90aWZpY2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuXHRcdFx0Zm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG5cdFx0XHRcdHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjaGVja011bHRpQ2hpbGRyZW4oKSB7XHJcblx0XHQvLyBpZiAodGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmdldFNlbGVjdGVkU3R1ZGVudCgpKSB7XHJcblx0XHQvLyAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuXHRcdC8vIH0gZWxzZSB7XHJcblx0XHQvLyAgIGxldCBjdXJyZW50VXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuXHRcdC8vICAgaWYgKGN1cnJlbnRVc2VyLnVzZXJ0eXBlID09PSBVc2VyVHlwZS5zdHVkZW50KSB7XHJcblx0XHQvLyAgICAgdGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLnNldFNlbGVjdGVkU3R1ZGVudChcclxuXHRcdC8vICAgICAgIHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKVxyXG5cdFx0Ly8gICAgICk7XHJcblx0XHQvLyAgIH0gZWxzZSBpZiAoY3VycmVudFVzZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG5cdFx0Ly8gICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgc3R1ZGVudHNlbGVjdGlvbmBdKTtcclxuXHRcdC8vICAgfSBlbHNlIGlmIChjdXJyZW50VXNlci5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcclxuXHRcdC8vICAgICB0aGlzLmFwcFZhbHVlc1NlcnZpY2Uuc2V0U2VsZWN0ZWRTdHVkZW50KGN1cnJlbnRVc2VyLmNoaWxkcmVuWzBdKTtcclxuXHRcdC8vICAgICB0aGlzLmdldE1lbnVMaXN0KCk7XHJcblx0XHQvLyAgIH1cclxuXHJcblx0XHQvLyAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuXHRcdC8vICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdC8vIH1cclxuXHJcblx0XHR0aGlzLmdldE1lbnVMaXN0KCk7XHJcblx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0TWVudUxpc3QoKSB7XHJcblx0XHR0aGlzLm1lbnVMaXN0ID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogdGhpcy5tZW51TmFtZS5ob21ld29yayxcclxuXHRcdFx0XHRpY29uOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTkxZiksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm1lbnVOYW1lLnRpbWV0YWJsZSxcclxuXHRcdFx0XHRpY29uOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZWE3MSksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm1lbnVOYW1lLmF0dGVuZGFuY2UsXHJcblx0XHRcdFx0aWNvbjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MjMpLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogdGhpcy5tZW51TmFtZS5hY2hpZXZlbWVudCxcclxuXHRcdFx0XHRpY29uOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTk5ZSksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm1lbnVOYW1lLmJlaGF2aW91cixcclxuXHRcdFx0XHRpY29uOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTlkZiksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm1lbnVOYW1lLmNvbnRhY3QsXHJcblx0XHRcdFx0aWNvbjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhODQpLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdG9uVGFwTGlzdChuYW1lOiBzdHJpbmcpIHtcclxuXHRcdHN3aXRjaCAobmFtZSkge1xyXG5cdFx0XHRjYXNlIHRoaXMubWVudU5hbWUuaG9tZXdvcms6IHtcclxuXHRcdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGhvbWV3b3JrYF0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgdGhpcy5tZW51TmFtZS50aW1ldGFibGU6IHtcclxuXHRcdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYHRpbWV0YWJsZWBdKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIHRoaXMubWVudU5hbWUuYXR0ZW5kYW5jZToge1xyXG5cdFx0XHRcdHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgYXR0ZW5kYW5jZWBdKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIHRoaXMubWVudU5hbWUuYWNoaWV2ZW1lbnQ6IHtcclxuXHRcdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGFjaGlldmVtZW50YF0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgdGhpcy5tZW51TmFtZS5iZWhhdmlvdXI6IHtcclxuXHRcdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGJlaGF2aW91cmBdKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIHRoaXMubWVudU5hbWUuY29udGFjdDoge1xyXG5cdFx0XHRcdHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgY29udGFjdHVzYF0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldEVtZXJnZW5jeU5vdGlmaWNhdGlvbigpIHtcclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRjb250ZXh0OiB7fSxcclxuXHRcdFx0ZnVsbHNjcmVlbjogZmFsc2UsXHJcblx0XHRcdHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMubW9kYWwuc2hvd01vZGFsKE5vdGlmaWNhdGlvbkxvZ2luQ29tcG9uZW50LCBvcHRpb25zKTtcclxuXHR9XHJcbn1cclxuIl19
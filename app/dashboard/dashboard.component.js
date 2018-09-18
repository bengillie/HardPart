"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dashboard_model_1 = require("~/model/dashboard.model");
var appvalues_service_1 = require("../service/appvalues.service");
var user_service_1 = require("../service/user.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appValuesService, routerExt, userService) {
        this.appValuesService = appValuesService;
        this.routerExt = routerExt;
        this.userService = userService;
        this.subscriptions = [];
        this.menuName = dashboard_model_1.MenuList;
        this.icon = "";
        this.menuList = [];
        this.isLoading = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.checkMultiChildren();
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
        var _this = this;
        if (this.appValuesService.getSelectedStudent()) {
            this.getMenuList();
        }
        else {
            var currentUser = this.appValuesService.getLoggedInUser();
            this.subscriptions.push(this.userService.getStudentItems(currentUser.id)
                .subscribe(function (x) {
                if (x.length > 1) {
                    _this.routerExt.navigate(["studentselection"]);
                }
                else if (x.length === 1) {
                    _this.appValuesService.setSelectedStudent(x[0]);
                    _this.getMenuList();
                }
                else {
                    _this.getMenuList();
                }
            }, function () { }, function () {
                _this.getMenuList();
                _this.isLoading = false;
            }));
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
                //this.router.navigate([`homework`]);
            }
            case this.menuName.contact: {
                //this.router.navigate([`homework`]);
            }
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.less']
        }),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService,
            router_1.RouterExtensions,
            user_service_1.UserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsc0RBQThEO0FBRzlELDJEQUFtRDtBQUVuRCxrRUFBZ0U7QUFDaEUsd0RBQXNEO0FBUXREO0lBU0ksNEJBQ1ksZ0JBQWtDLEVBQ2xDLFNBQTJCLEVBQzNCLFdBQXdCO1FBRnhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFYNUIsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBRywwQkFBUSxDQUFDO1FBRTVCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQsY0FBUyxHQUFHLElBQUksQ0FBQztJQUt1QixDQUFDO0lBRXpDLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCwrQ0FBa0IsR0FBbEI7UUFBQSxpQkEwQkM7UUF6QkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxD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QUFLLENBQUM7WUFDVixDQUFDO1lBQ0QsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQztZQUNWLENBQUM7WUFDRCxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDekMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUNELEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0IscUNBQXFDO1lBQ3pDLENBQUM7WUFDRCxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pCLHFDQUFxQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUF4R1Esa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQVdnQyxvQ0FBZ0I7WUFDdkIseUJBQWdCO1lBQ2QsMEJBQVc7T0FaM0Isa0JBQWtCLENBeUc5QjtJQUFELHlCQUFDO0NBQUEsQUF6R0QsSUF5R0M7QUF6R1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBNZW51TGlzdCB9IGZyb20gJ34vbW9kZWwvZGFzaGJvYXJkLm1vZGVsJztcclxuXHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLWRhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtZW51TmFtZSA9IE1lbnVMaXN0O1xyXG4gICAgXHJcbiAgICBpY29uID0gXCJcIjtcclxuICAgIG1lbnVMaXN0ID0gW107XHJcbiAgICBcclxuICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXBwVmFsdWVzU2VydmljZTogQXBwVmFsdWVzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja011bHRpQ2hpbGRyZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTXVsdGlDaGlsZHJlbigpIHtcclxuICAgICAgICBpZih0aGlzLmFwcFZhbHVlc1NlcnZpY2UuZ2V0U2VsZWN0ZWRTdHVkZW50KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRNZW51TGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy51c2VyU2VydmljZS5nZXRTdHVkZW50SXRlbXMoY3VycmVudFVzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHgubGVuZ3RoID4gMSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgc3R1ZGVudHNlbGVjdGlvbmBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHgubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFZhbHVlc1NlcnZpY2Uuc2V0U2VsZWN0ZWRTdHVkZW50KHhbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNZW51TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNZW51TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVudUxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51TGlzdCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVudU5hbWUuaG9tZXdvcmssXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MWYpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS50aW1ldGFibGUsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhNzEpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS5hdHRlbmRhbmNlLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTIzKSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVudU5hbWUuYWNoaWV2ZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5OWUpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS5iZWhhdmlvdXIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5ZGYpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS5jb250YWN0LFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYTg0KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwTGlzdChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLmhvbWV3b3JrOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGhvbWV3b3JrYF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLnRpbWV0YWJsZToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2B0aW1ldGFibGVgXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudU5hbWUuYXR0ZW5kYW5jZToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2BhdHRlbmRhbmNlYF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLmFjaGlldmVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGFjaGlldmVtZW50YF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLmJlaGF2aW91cjoge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbYGhvbWV3b3JrYF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5jb250YWN0OiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtgaG9tZXdvcmtgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
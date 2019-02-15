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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUcvRCxrRUFBMEQ7QUFDMUQsd0RBQXFEO0FBRXJELHlFQUF1RTtBQUV2RSxtRUFBNkU7QUFDN0Usa0dBQStGO0FBUS9GO0lBU0UsNEJBQ1UsZ0JBQWtDLEVBQ2xDLEtBQWEsRUFDYixTQUEyQixFQUMzQixLQUF5QixFQUN6QixLQUF1QjtRQUp2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWJ6QixrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLDBCQUFRLENBQUM7UUFFNUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBUWQsQ0FBQztJQUVKLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixtQ0FBbUM7SUFDckMsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsS0FBeUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO2dCQUF4QyxJQUFJLFlBQVksU0FBQTtnQkFDbkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzVCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVB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Q0FBQSxBQXRIRCxJQXNIQztBQXRIWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgTWVudUxpc3QgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWwvZGFzaGJvYXJkLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJUeXBlIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVsL3VzZXIubW9kZWxcIjtcclxuXHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2UvYXBwdmFsdWVzLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uTG9naW5Db21wb25lbnQgfSBmcm9tIFwifi9ub3RpZmljYXRpb24tbG9naW4vbm90aWZpY2F0aW9uLWxvZ2luLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJucy1kYXNoYm9hcmRcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBtZW51TmFtZSA9IE1lbnVMaXN0O1xyXG5cclxuICBpY29uID0gXCJcIjtcclxuICBtZW51TGlzdCA9IFtdO1xyXG5cclxuICBpc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYXBwVmFsdWVzU2VydmljZTogQXBwVmFsdWVzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNoZWNrTXVsdGlDaGlsZHJlbigpO1xyXG4gICAgLy8gdGhpcy5nZXRFbWVyZ2VuY3lOb3RpZmljYXRpb24oKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICBmb3IgKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrTXVsdGlDaGlsZHJlbigpIHtcclxuICAgIGlmICh0aGlzLmFwcFZhbHVlc1NlcnZpY2UuZ2V0U2VsZWN0ZWRTdHVkZW50KCkpIHtcclxuICAgICAgdGhpcy5nZXRNZW51TGlzdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGN1cnJlbnRVc2VyID0gdGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmdldExvZ2dlZEluVXNlcigpO1xyXG4gICAgICBpZiAoY3VycmVudFVzZXIudXNlcnR5cGUgPT09IFVzZXJUeXBlLnN0dWRlbnQpIHtcclxuICAgICAgICB0aGlzLmFwcFZhbHVlc1NlcnZpY2Uuc2V0U2VsZWN0ZWRTdHVkZW50KFxyXG4gICAgICAgICAgdGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmdldExvZ2dlZEluVXNlcigpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50VXNlci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2BzdHVkZW50c2VsZWN0aW9uYF0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRVc2VyLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuYXBwVmFsdWVzU2VydmljZS5zZXRTZWxlY3RlZFN0dWRlbnQoY3VycmVudFVzZXIuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5nZXRNZW51TGlzdCgpO1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TWVudUxpc3QoKSB7XHJcbiAgICB0aGlzLm1lbnVMaXN0ID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5tZW51TmFtZS5ob21ld29yayxcclxuICAgICAgICBpY29uOiAodGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MWYpKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5tZW51TmFtZS50aW1ldGFibGUsXHJcbiAgICAgICAgaWNvbjogKHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYTcxKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IHRoaXMubWVudU5hbWUuYXR0ZW5kYW5jZSxcclxuICAgICAgICBpY29uOiAodGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MjMpKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5tZW51TmFtZS5hY2hpZXZlbWVudCxcclxuICAgICAgICBpY29uOiAodGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5OWUpKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5tZW51TmFtZS5iZWhhdmlvdXIsXHJcbiAgICAgICAgaWNvbjogKHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOWRmKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IHRoaXMubWVudU5hbWUuY29udGFjdCxcclxuICAgICAgICBpY29uOiAodGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhODQpKVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgb25UYXBMaXN0KG5hbWU6IHN0cmluZykge1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5ob21ld29yazoge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgaG9tZXdvcmtgXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLnRpbWV0YWJsZToge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgdGltZXRhYmxlYF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5hdHRlbmRhbmNlOiB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2BhdHRlbmRhbmNlYF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5hY2hpZXZlbWVudDoge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgYWNoaWV2ZW1lbnRgXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLmJlaGF2aW91cjoge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgYmVoYXZpb3VyYF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5jb250YWN0OiB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2Bjb250YWN0dXNgXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RW1lcmdlbmN5Tm90aWZpY2F0aW9uKCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChOb3RpZmljYXRpb25Mb2dpbkNvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
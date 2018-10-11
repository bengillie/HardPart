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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEU7QUFDOUUsMENBQXlDO0FBQ3pDLHNEQUE4RDtBQUc5RCwyREFBbUQ7QUFFbkQsa0VBQWdFO0FBRWhFLG1FQUE2RTtBQUM3RSxrR0FBK0Y7QUFRL0Y7SUFTSSw0QkFDWSxnQkFBa0MsRUFDbEMsS0FBYSxFQUNiLFNBQTJCLEVBQzNCLEtBQXlCLEVBQ3pCLEtBQXVCO1FBSnZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBYjNCLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQUcsMEJBQVEsQ0FBQztRQUU1QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFRYixDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLG1DQUFtQztJQUN2QyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCwrQ0FBa0IsR0FBbEI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJ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IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE1lbnVMaXN0IH0gZnJvbSAnfi9tb2RlbC9kYXNoYm9hcmQubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgQXBwVmFsdWVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYXBwdmFsdWVzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Mb2dpbkNvbXBvbmVudCB9IGZyb20gJ34vbm90aWZpY2F0aW9uLWxvZ2luL25vdGlmaWNhdGlvbi1sb2dpbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy1kYXNoYm9hcmQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zIDogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICAgIHByaXZhdGUgbWVudU5hbWUgPSBNZW51TGlzdDtcclxuICAgIFxyXG4gICAgaWNvbiA9IFwiXCI7XHJcbiAgICBtZW51TGlzdCA9IFtdO1xyXG4gICAgXHJcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFwcFZhbHVlc1NlcnZpY2U6IEFwcFZhbHVlc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrTXVsdGlDaGlsZHJlbigpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2V0RW1lcmdlbmN5Tm90aWZpY2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja011bHRpQ2hpbGRyZW4oKSB7XHJcbiAgICAgICAgaWYodGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmdldFNlbGVjdGVkU3R1ZGVudCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFVzZXIgPSB0aGlzLmFwcFZhbHVlc1NlcnZpY2UuZ2V0TG9nZ2VkSW5Vc2VyKCk7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRVc2VyLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgc3R1ZGVudHNlbGVjdGlvbmBdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGN1cnJlbnRVc2VyLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLnNldFNlbGVjdGVkU3R1ZGVudChjdXJyZW50VXNlci5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lbnVMaXN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVudUxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51TGlzdCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVudU5hbWUuaG9tZXdvcmssXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MWYpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS50aW1ldGFibGUsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhNzEpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS5hdHRlbmRhbmNlLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTIzKSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVudU5hbWUuYWNoaWV2ZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5OWUpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS5iZWhhdmlvdXIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogdGhpcy5pY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5ZGYpLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5tZW51TmFtZS5jb250YWN0LFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYTg0KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwTGlzdChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLmhvbWV3b3JrOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGhvbWV3b3JrYF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLnRpbWV0YWJsZToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2B0aW1ldGFibGVgXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudU5hbWUuYXR0ZW5kYW5jZToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2BhdHRlbmRhbmNlYF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLmFjaGlldmVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGFjaGlldmVtZW50YF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLmJlaGF2aW91cjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2BiZWhhdmlvdXJgXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudU5hbWUuY29udGFjdDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFbWVyZ2VuY3lOb3RpZmljYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChOb3RpZmljYXRpb25Mb2dpbkNvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuIl19
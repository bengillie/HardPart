"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var user_model_1 = require("./model/user.model");
var appvalues_service_1 = require("./service/appvalues.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(appValuesService, changeDetectionRef, router, routerExt) {
        this.appValuesService = appValuesService;
        this.changeDetectionRef = changeDetectionRef;
        this.router = router;
        this.routerExt = routerExt;
        this.subscriptions = [];
        this.iconSettings = String.fromCharCode(0xe994);
        this.iconLogout = String.fromCharCode(0xe9b6);
        this.currentUser = new user_model_1.User();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getRouteUrl();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.sideDrawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription.unsubscribe();
            }
        }
    };
    AppComponent.prototype.getRouteUrl = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.getCurrentUser();
        });
    };
    AppComponent.prototype.getCurrentUser = function () {
        this.currentUser = this.appValuesService.getLoggedInUser();
    };
    AppComponent.prototype.tapLogout = function () {
        this.appValuesService.clearValues();
        this.routerExt.navigate(["login"]);
        this.sideDrawer.closeDrawer();
    };
    AppComponent.prototype.tapSettings = function () {
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService,
            core_1.ChangeDetectorRef,
            router_1.Router,
            router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEc7QUFDMUcsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUUvRCw4REFBNEU7QUFJNUUsaURBQTBDO0FBQzFDLGlFQUErRDtBQVEvRDtJQVdJLHNCQUFvQixnQkFBa0MsRUFDMUMsa0JBQXFDLEVBQ3JDLE1BQWMsRUFDZCxTQUEyQjtRQUhuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBYi9CLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztRQU01QyxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsZUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsZ0JBQVcsR0FBUyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUtZLENBQUM7SUFFNUMsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFSixrQ0FBVyxHQUFYO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDZixHQUFHLENBQUMsQ0FBcUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQjtnQkFBdEMsSUFBSSxZQUFZLFNBQUE7Z0JBRWpCLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUM5QjtRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUM3QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxrQ0FBVyxHQUFYO0lBRUEsQ0FBQztJQWhERDtRQURDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQ1YsZ0NBQXNCO3lEQUFDO0lBSnRDLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0Fhd0Msb0NBQWdCO1lBQ3RCLHdCQUFpQjtZQUM3QixlQUFNO1lBQ0gseUJBQWdCO09BZDlCLFlBQVksQ0FxRHZCO0lBQUQsbUJBQUM7Q0FBQSxBQXJERixJQXFERTtBQXJEVyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL21vZGVsL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9hcHB2YWx1ZXMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBcclxuICAgIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIHNpZGVEcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcblxyXG4gICAgaWNvblNldHRpbmdzID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5OTQpO1xyXG4gICAgaWNvbkxvZ291dCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOWI2KTtcclxuICAgIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFZhbHVlc1NlcnZpY2U6IEFwcFZhbHVlc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0Um91dGVVcmwoKTtcclxuICAgIH0gXHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2lkZURyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um91dGVVcmwoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRDdXJyZW50VXNlcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmdldExvZ2dlZEluVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcExvZ291dCgpIHtcclxuICAgICAgICB0aGlzLmFwcFZhbHVlc1NlcnZpY2UuY2xlYXJWYWx1ZXMoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGxvZ2luYF0pO1xyXG4gICAgICAgIHRoaXMuc2lkZURyYXdlci5jbG9zZURyYXdlcigpXHJcbiAgICB9XHJcblxyXG4gICAgdGFwU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiB9XHJcbiJdfQ==
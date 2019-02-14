"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var frame_1 = require("tns-core-modules/ui/frame/frame");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var appvalues_service_1 = require("../app/shared/service/appvalues.service");
var navItem = /** @class */ (function () {
    function navItem() {
    }
    return navItem;
}());
exports.navItem = navItem;
var AppComponent = /** @class */ (function () {
    function AppComponent(appValuesService, router, routerExt) {
        this.appValuesService = appValuesService;
        this.router = router;
        this.routerExt = routerExt;
        this.subscriptions = [];
        this.navItemSettings = {
            sortId: 1,
            icon: String.fromCharCode(0xe994),
            text: 'Settings',
        };
        this.navItemSecurity = {
            sortId: 2,
            icon: String.fromCharCode(0xe9b4),
            text: 'Security',
        };
        this.navItemLogout = {
            sortId: 3,
            icon: String.fromCharCode(0xe9b6),
            text: 'Logout',
        };
        this.navItems = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getRouteUrl();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.sideDrawer = this.drawerComponent.sideDrawer;
        if (frame_1.isIOS) {
            // This disables the swipe gesture to open menu
            this.sideDrawer.ios.defaultSideDrawer.allowEdgeSwipe = false;
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription.unsubscribe();
            }
        }
    };
    AppComponent.prototype.decode_URIComponent = function (args) {
        return decodeURIComponent(args);
    };
    AppComponent.prototype.getRouteUrl = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.getCurrentUser();
            _this.getNavItems();
        });
    };
    AppComponent.prototype.getCurrentUser = function () {
        this.currentUser = this.appValuesService.getLoggedInUser();
    };
    AppComponent.prototype.getNavItems = function () {
        if (!this.currentUser) {
            this.navItems = [];
        }
        else {
            if (this.currentUser.isfirsttime) {
            }
            else {
                this.pushNavItem(this.navItemSettings);
                this.pushNavItem(this.navItemSecurity);
            }
            this.pushNavItem(this.navItemLogout);
            this.navItems.sort(this.sortMenu);
        }
    };
    AppComponent.prototype.onLoaded = function () {
        if (frame_1.isAndroid) {
            // This disables the swipe gesture to open menu, by setting the treshhold to '0'
            this.sideDrawer.android.setTouchTargetThreshold(0);
        }
    };
    AppComponent.prototype.pushNavItem = function (item) {
        var navExists = this.navItems.filter(function (x) { return x.text == item.text; }).length !== 0;
        if (!navExists) {
            this.navItems.push(item);
        }
    };
    AppComponent.prototype.sortMenu = function (a, b) {
        if (a.sortId < b.sortId)
            return -1;
        if (a.sortId > b.sortId)
            return 1;
        return 0;
    };
    AppComponent.prototype.tapLogout = function () {
        this.appValuesService.clearValues();
        this.routerExt.navigate(["login"]);
        this.sideDrawer.closeDrawer();
    };
    AppComponent.prototype.tapSecurity = function () {
        this.routerExt.navigate(["accountsecurity"]);
        this.sideDrawer.closeDrawer();
    };
    AppComponent.prototype.tapSettings = function () { };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            templateUrl: 'app.component.html',
            styleUrls: ['./app.component.css'],
        }),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService, router_1.Router, router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUMvRCx5REFBd0U7QUFFeEUsOERBQTRFO0FBSzVFLDZFQUEyRTtBQUUzRTtJQUFBO0lBSUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLDBCQUFPO0FBV3BCO0lBeUJDLHNCQUFvQixnQkFBa0MsRUFBVSxNQUFjLEVBQVUsU0FBMkI7UUFBL0YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQXhCM0csa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBTzNDLG9CQUFlLEdBQVk7WUFDMUIsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxFQUFFLFVBQVU7U0FDaEIsQ0FBQztRQUNGLG9CQUFlLEdBQVk7WUFDMUIsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxFQUFFLFVBQVU7U0FDaEIsQ0FBQztRQUNGLGtCQUFhLEdBQVk7WUFDeEIsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxFQUFFLFFBQVE7U0FDZCxDQUFDO1FBQ0YsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUU2RixDQUFDO0lBRXZILCtCQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFl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QyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQXpHaEI7UUFEQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUNWLGdDQUFzQjt5REFBQztJQUpuQyxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ2xDLENBQUM7eUNBMEJxQyxvQ0FBZ0IsRUFBa0IsZUFBTSxFQUFxQix5QkFBZ0I7T0F6QnZHLFlBQVksQ0E4R3hCO0lBQUQsbUJBQUM7Q0FBQSxBQTlHRCxJQThHQztBQTlHWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgaW9zIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XHJcblxyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vc2hhcmVkL21vZGVsL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL3NoYXJlZC9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBuYXZJdGVtIHtcclxuXHRzb3J0SWQ6IG51bWJlcjtcclxuXHRpY29uOiBzdHJpbmc7XHJcblx0dGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ25zLWFwcCcsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuXHRAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpXHJcblx0cHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHRwcml2YXRlIHNpZGVEcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcblxyXG5cdGN1cnJlbnRVc2VyOiBVc2VyO1xyXG5cdG5hdkl0ZW1TZXR0aW5nczogbmF2SXRlbSA9IHtcclxuXHRcdHNvcnRJZDogMSxcclxuXHRcdGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTk0KSxcclxuXHRcdHRleHQ6ICdTZXR0aW5ncycsXHJcblx0fTtcclxuXHRuYXZJdGVtU2VjdXJpdHk6IG5hdkl0ZW0gPSB7XHJcblx0XHRzb3J0SWQ6IDIsXHJcblx0XHRpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTliNCksXHJcblx0XHR0ZXh0OiAnU2VjdXJpdHknLFxyXG5cdH07XHJcblx0bmF2SXRlbUxvZ291dDogbmF2SXRlbSA9IHtcclxuXHRcdHNvcnRJZDogMyxcclxuXHRcdGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOWI2KSxcclxuXHRcdHRleHQ6ICdMb2dvdXQnLFxyXG5cdH07XHJcblx0bmF2SXRlbXM6IG5hdkl0ZW1bXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFZhbHVlc1NlcnZpY2U6IEFwcFZhbHVlc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZ2V0Um91dGVVcmwoKTtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdHRoaXMuc2lkZURyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcblxyXG5cdFx0aWYgKGlzSU9TKSB7XHJcblx0XHRcdC8vIFRoaXMgZGlzYWJsZXMgdGhlIHN3aXBlIGdlc3R1cmUgdG8gb3BlbiBtZW51XHJcblx0XHRcdHRoaXMuc2lkZURyYXdlci5pb3MuZGVmYXVsdFNpZGVEcmF3ZXIuYWxsb3dFZGdlU3dpcGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG5cdFx0XHRmb3IgKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcblx0XHRcdFx0c3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlY29kZV9VUklDb21wb25lbnQoYXJncyk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGFyZ3MpO1xyXG5cdH1cclxuXHJcblx0Z2V0Um91dGVVcmwoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKHJlcyA9PiB7XHJcblx0XHRcdHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcclxuXHRcdFx0dGhpcy5nZXROYXZJdGVtcygpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRDdXJyZW50VXNlcigpIHtcclxuXHRcdHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmFwcFZhbHVlc1NlcnZpY2UuZ2V0TG9nZ2VkSW5Vc2VyKCk7XHJcblx0fVxyXG5cclxuXHRnZXROYXZJdGVtcygpIHtcclxuXHRcdGlmICghdGhpcy5jdXJyZW50VXNlcikge1xyXG5cdFx0XHR0aGlzLm5hdkl0ZW1zID0gW107XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50VXNlci5pc2ZpcnN0dGltZSkge1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucHVzaE5hdkl0ZW0odGhpcy5uYXZJdGVtU2V0dGluZ3MpO1xyXG5cdFx0XHRcdHRoaXMucHVzaE5hdkl0ZW0odGhpcy5uYXZJdGVtU2VjdXJpdHkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnB1c2hOYXZJdGVtKHRoaXMubmF2SXRlbUxvZ291dCk7XHJcblx0XHRcdHRoaXMubmF2SXRlbXMuc29ydCh0aGlzLnNvcnRNZW51KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uTG9hZGVkKCkge1xyXG5cdFx0aWYgKGlzQW5kcm9pZCkge1xyXG5cdFx0XHQvLyBUaGlzIGRpc2FibGVzIHRoZSBzd2lwZSBnZXN0dXJlIHRvIG9wZW4gbWVudSwgYnkgc2V0dGluZyB0aGUgdHJlc2hob2xkIHRvICcwJ1xyXG5cdFx0XHR0aGlzLnNpZGVEcmF3ZXIuYW5kcm9pZC5zZXRUb3VjaFRhcmdldFRocmVzaG9sZCgwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1c2hOYXZJdGVtKGl0ZW06IG5hdkl0ZW0pIHtcclxuXHRcdGNvbnN0IG5hdkV4aXN0cyA9IHRoaXMubmF2SXRlbXMuZmlsdGVyKHggPT4geC50ZXh0ID09IGl0ZW0udGV4dCkubGVuZ3RoICE9PSAwO1xyXG5cdFx0aWYgKCFuYXZFeGlzdHMpIHtcclxuXHRcdFx0dGhpcy5uYXZJdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c29ydE1lbnUoYTogbmF2SXRlbSwgYjogbmF2SXRlbSkge1xyXG5cdFx0aWYgKGEuc29ydElkIDwgYi5zb3J0SWQpIHJldHVybiAtMTtcclxuXHRcdGlmIChhLnNvcnRJZCA+IGIuc29ydElkKSByZXR1cm4gMTtcclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblx0dGFwTG9nb3V0KCkge1xyXG5cdFx0dGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmNsZWFyVmFsdWVzKCk7XHJcblx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGxvZ2luYF0pO1xyXG5cdFx0dGhpcy5zaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcblx0fVxyXG5cclxuXHR0YXBTZWN1cml0eSgpIHtcclxuXHRcdHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtgYWNjb3VudHNlY3VyaXR5YF0pO1xyXG5cdFx0dGhpcy5zaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcblx0fVxyXG5cclxuXHR0YXBTZXR0aW5ncygpIHt9XHJcbn1cclxuIl19
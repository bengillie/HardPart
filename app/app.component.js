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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUMvRCx5REFBd0U7QUFFeEUsOERBQTRFO0FBSzVFLDZFQUEyRTtBQUUzRTtJQUFBO0lBSUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLDBCQUFPO0FBV3BCO0lBeUJDLHNCQUFvQixnQkFBa0MsRUFBVSxNQUFjLEVBQVUsU0FBMkI7UUFBL0YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQXhCM0csa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBTzNDLG9CQUFlLEdBQVk7WUFDMUIsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxFQUFFLFVBQVU7U0FDaEIsQ0FBQztRQUNGLG9CQUFlLEdBQVk7WUFDMUIsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxFQUFFLFVBQVU7U0FDaEIsQ0FBQztRQUNGLGtCQUFhLEdBQVk7WUFDeEIsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxFQUFFLFFBQVE7U0FDZCxDQUFDO1FBQ0YsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUU2RixDQUFDO0lBRXZILCtCQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFl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QVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVcsR0FBWCxjQUFlLENBQUM7SUF6R2hCO1FBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FDVixnQ0FBc0I7eURBQUM7SUFKbkMsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNsQyxDQUFDO3lDQTBCcUMsb0NBQWdCLEVBQWtCLGVBQU0sRUFBcUIseUJBQWdCO09BekJ2RyxZQUFZLENBOEd4QjtJQUFELG1CQUFDO0NBQUEsQUE5R0QsSUE4R0M7QUE5R1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGlvcyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xyXG5cclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3NoYXJlZC9tb2RlbC91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgQXBwVmFsdWVzU2VydmljZSB9IGZyb20gJy4uL2FwcC9zaGFyZWQvc2VydmljZS9hcHB2YWx1ZXMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgbmF2SXRlbSB7XHJcblx0c29ydElkOiBudW1iZXI7XHJcblx0aWNvbjogc3RyaW5nO1xyXG5cdHRleHQ6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICducy1hcHAnLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcblx0QFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblx0cHJpdmF0ZSBzaWRlRHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuXHRjdXJyZW50VXNlcjogVXNlcjtcclxuXHRuYXZJdGVtU2V0dGluZ3M6IG5hdkl0ZW0gPSB7XHJcblx0XHRzb3J0SWQ6IDEsXHJcblx0XHRpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTk5NCksXHJcblx0XHR0ZXh0OiAnU2V0dGluZ3MnLFxyXG5cdH07XHJcblx0bmF2SXRlbVNlY3VyaXR5OiBuYXZJdGVtID0ge1xyXG5cdFx0c29ydElkOiAyLFxyXG5cdFx0aWNvbjogU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5YjQpLFxyXG5cdFx0dGV4dDogJ1NlY3VyaXR5JyxcclxuXHR9O1xyXG5cdG5hdkl0ZW1Mb2dvdXQ6IG5hdkl0ZW0gPSB7XHJcblx0XHRzb3J0SWQ6IDMsXHJcblx0XHRpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTliNiksXHJcblx0XHR0ZXh0OiAnTG9nb3V0JyxcclxuXHR9O1xyXG5cdG5hdkl0ZW1zOiBuYXZJdGVtW10gPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhcHBWYWx1ZXNTZXJ2aWNlOiBBcHBWYWx1ZXNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucykge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmdldFJvdXRlVXJsKCk7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHR0aGlzLnNpZGVEcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG5cclxuXHRcdGlmIChpc0lPUykge1xyXG5cdFx0XHQvLyBUaGlzIGRpc2FibGVzIHRoZSBzd2lwZSBnZXN0dXJlIHRvIG9wZW4gbWVudVxyXG5cdFx0XHR0aGlzLnNpZGVEcmF3ZXIuaW9zLmRlZmF1bHRTaWRlRHJhd2VyLmFsbG93RWRnZVN3aXBlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuXHRcdFx0Zm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG5cdFx0XHRcdHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWNvZGVfVVJJQ29tcG9uZW50KGFyZ3MpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhcmdzKTtcclxuXHR9XHJcblxyXG5cdGdldFJvdXRlVXJsKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHR0aGlzLmdldEN1cnJlbnRVc2VyKCk7XHJcblx0XHRcdHRoaXMuZ2V0TmF2SXRlbXMoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0Q3VycmVudFVzZXIoKSB7XHJcblx0XHR0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmdldExvZ2dlZEluVXNlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0TmF2SXRlbXMoKSB7XHJcblx0XHRpZiAoIXRoaXMuY3VycmVudFVzZXIpIHtcclxuXHRcdFx0dGhpcy5uYXZJdGVtcyA9IFtdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuY3VycmVudFVzZXIuaXNmaXJzdHRpbWUpIHtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnB1c2hOYXZJdGVtKHRoaXMubmF2SXRlbVNldHRpbmdzKTtcclxuXHRcdFx0XHR0aGlzLnB1c2hOYXZJdGVtKHRoaXMubmF2SXRlbVNlY3VyaXR5KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5wdXNoTmF2SXRlbSh0aGlzLm5hdkl0ZW1Mb2dvdXQpO1xyXG5cdFx0XHR0aGlzLm5hdkl0ZW1zLnNvcnQodGhpcy5zb3J0TWVudSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkxvYWRlZCgpIHtcclxuXHRcdGlmIChpc0FuZHJvaWQpIHtcclxuXHRcdFx0Ly8gVGhpcyBkaXNhYmxlcyB0aGUgc3dpcGUgZ2VzdHVyZSB0byBvcGVuIG1lbnUsIGJ5IHNldHRpbmcgdGhlIHRyZXNoaG9sZCB0byAnMCdcclxuXHRcdFx0dGhpcy5zaWRlRHJhd2VyLmFuZHJvaWQuc2V0VG91Y2hUYXJnZXRUaHJlc2hvbGQoMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdXNoTmF2SXRlbShpdGVtOiBuYXZJdGVtKSB7XHJcblx0XHRjb25zdCBuYXZFeGlzdHMgPSB0aGlzLm5hdkl0ZW1zLmZpbHRlcih4ID0+IHgudGV4dCA9PSBpdGVtLnRleHQpLmxlbmd0aCAhPT0gMDtcclxuXHRcdGlmICghbmF2RXhpc3RzKSB7XHJcblx0XHRcdHRoaXMubmF2SXRlbXMucHVzaChpdGVtKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNvcnRNZW51KGE6IG5hdkl0ZW0sIGI6IG5hdkl0ZW0pIHtcclxuXHRcdGlmIChhLnNvcnRJZCA8IGIuc29ydElkKSByZXR1cm4gLTE7XHJcblx0XHRpZiAoYS5zb3J0SWQgPiBiLnNvcnRJZCkgcmV0dXJuIDE7XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9XHJcblxyXG5cdHRhcExvZ291dCgpIHtcclxuXHRcdHRoaXMuYXBwVmFsdWVzU2VydmljZS5jbGVhclZhbHVlcygpO1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2Bsb2dpbmBdKTtcclxuXHRcdHRoaXMuc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xyXG5cdH1cclxuXHJcblx0dGFwU2VjdXJpdHkoKSB7XHJcblx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGFjY291bnRzZWN1cml0eWBdKTtcclxuXHRcdHRoaXMuc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xyXG5cdH1cclxuXHJcblx0dGFwU2V0dGluZ3MoKSB7fVxyXG59XHJcbiJdfQ==
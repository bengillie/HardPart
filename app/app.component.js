"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var frame_1 = require("tns-core-modules/ui/frame/frame");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var appvalues_service_1 = require("./service/appvalues.service");
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
        this.navItemSettings = { sortId: 1, icon: String.fromCharCode(0xe994), text: 'Settings' };
        this.navItemSecurity = { sortId: 2, icon: String.fromCharCode(0xe9b4), text: 'Security' };
        this.navItemLogout = { sortId: 3, icon: String.fromCharCode(0xe9b6), text: 'Logout' };
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
            router_1.Router,
            router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUMvRCx5REFBd0U7QUFFeEUsOERBQTRFO0FBSzVFLGlFQUErRDtBQUUvRDtJQUFBO0lBSUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLDBCQUFPO0FBWXBCO0lBYUksc0JBQW9CLGdCQUFrQyxFQUMxQyxNQUFjLEVBQ2QsU0FBMkI7UUFGbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFkL0Isa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBTzVDLG9CQUFlLEdBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUM5RixvQkFBZSxHQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDOUYsa0JBQWEsR0FBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzFGLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFJa0IsQ0FBQztJQUU1QywrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFD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TUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUUsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDakMsQ0FBQztJQUVELGtDQUFXLEdBQVg7SUFFQSxDQUFDO0lBcEdEO1FBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FDVixnQ0FBc0I7eURBQUM7SUFKdEMsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDO3lDQWV3QyxvQ0FBZ0I7WUFDbEMsZUFBTTtZQUNILHlCQUFnQjtPQWY5QixZQUFZLENBeUd2QjtJQUFELG1CQUFDO0NBQUEsQUF6R0YsSUF5R0U7QUF6R1csb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgaW9zIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuXHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL21vZGVsL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9hcHB2YWx1ZXMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIG5hdkl0ZW0ge1xyXG4gICAgc29ydElkOiBudW1iZXI7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgXHJcbiAgICBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBzaWRlRHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICAgIGN1cnJlbnRVc2VyOiBVc2VyO1xyXG4gICAgbmF2SXRlbVNldHRpbmdzOiBuYXZJdGVtID0geyBzb3J0SWQ6IDEsIGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTk0KSwgdGV4dDogJ1NldHRpbmdzJyB9O1xyXG4gICAgbmF2SXRlbVNlY3VyaXR5OiBuYXZJdGVtID0geyBzb3J0SWQ6IDIsIGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOWI0KSwgdGV4dDogJ1NlY3VyaXR5JyB9O1xyXG4gICAgbmF2SXRlbUxvZ291dDogbmF2SXRlbSA9IHsgc29ydElkOiAzLCBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTliNiksIHRleHQ6ICdMb2dvdXQnIH07XHJcbiAgICBuYXZJdGVtczogbmF2SXRlbVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBWYWx1ZXNTZXJ2aWNlOiBBcHBWYWx1ZXNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0Um91dGVVcmwoKTtcclxuICAgIH0gXHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2lkZURyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaXNJT1MpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBkaXNhYmxlcyB0aGUgc3dpcGUgZ2VzdHVyZSB0byBvcGVuIG1lbnVcclxuICAgICAgICAgICAgdGhpcy5zaWRlRHJhd2VyLmlvcy5kZWZhdWx0U2lkZURyYXdlci5hbGxvd0VkZ2VTd2lwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY29kZV9VUklDb21wb25lbnQoYXJncyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3V0ZVVybCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdldE5hdkl0ZW1zKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYXZJdGVtcygpIHtcclxuICAgICAgICBpZighdGhpcy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICB0aGlzLm5hdkl0ZW1zID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50VXNlci5pc2ZpcnN0dGltZSkge1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoTmF2SXRlbSh0aGlzLm5hdkl0ZW1TZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hOYXZJdGVtKHRoaXMubmF2SXRlbVNlY3VyaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wdXNoTmF2SXRlbSh0aGlzLm5hdkl0ZW1Mb2dvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdkl0ZW1zLnNvcnQodGhpcy5zb3J0TWVudSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGVkKCkge1xyXG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgICAgIC8vIFRoaXMgZGlzYWJsZXMgdGhlIHN3aXBlIGdlc3R1cmUgdG8gb3BlbiBtZW51LCBieSBzZXR0aW5nIHRoZSB0cmVzaGhvbGQgdG8gJzAnXHJcbiAgICAgICAgICB0aGlzLnNpZGVEcmF3ZXIuYW5kcm9pZC5zZXRUb3VjaFRhcmdldFRocmVzaG9sZCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaE5hdkl0ZW0oaXRlbTogbmF2SXRlbSkge1xyXG4gICAgICAgIGNvbnN0IG5hdkV4aXN0cyA9IHRoaXMubmF2SXRlbXMuZmlsdGVyKHggPT4geC50ZXh0ID09IGl0ZW0udGV4dCkubGVuZ3RoICE9PSAwO1xyXG4gICAgICAgIGlmKCFuYXZFeGlzdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5uYXZJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzb3J0TWVudShhOiBuYXZJdGVtLCBiOiBuYXZJdGVtKSB7XHJcblx0XHRpZiAoYS5zb3J0SWQgPCBiLnNvcnRJZClcclxuXHRcdCAgcmV0dXJuIC0xO1xyXG5cdFx0aWYgKGEuc29ydElkID4gYi5zb3J0SWQpXHJcblx0XHQgIHJldHVybiAxO1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cclxuICAgIHRhcExvZ291dCgpIHtcclxuICAgICAgICB0aGlzLmFwcFZhbHVlc1NlcnZpY2UuY2xlYXJWYWx1ZXMoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGxvZ2luYF0pO1xyXG4gICAgICAgIHRoaXMuc2lkZURyYXdlci5jbG9zZURyYXdlcigpXHJcbiAgICB9XHJcblxyXG4gICAgdGFwU2VjdXJpdHkoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2BhY2NvdW50c2VjdXJpdHlgXSk7XHJcbiAgICAgICAgdGhpcy5zaWRlRHJhd2VyLmNsb3NlRHJhd2VyKClcclxuICAgIH1cclxuXHJcbiAgICB0YXBTZXR0aW5ncygpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuIH1cclxuIl19
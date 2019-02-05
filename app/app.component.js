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

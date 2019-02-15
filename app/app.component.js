"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var frame_1 = require("tns-core-modules/ui/frame/frame");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var user_model_1 = require("./shared/model/user.model");
var appvalues_service_1 = require("../app/shared/service/appvalues.service");
var authorization_service_1 = require("./shared/service/authorization.service");
var navItem = /** @class */ (function () {
    function navItem() {
    }
    return navItem;
}());
exports.navItem = navItem;
var AppComponent = /** @class */ (function () {
    function AppComponent(appValuesService, router, routerExt, authorizationService) {
        this.appValuesService = appValuesService;
        this.router = router;
        this.routerExt = routerExt;
        this.authorizationService = authorizationService;
        this.subscriptions = [];
        this.currentUser = {
            id: 1,
            fname: 'Jay',
            mname: '',
            lname: 'Smith',
            username: '1',
            password: '1',
            birthdate: '1',
            phoneprimary: '9123',
            phonesecondary: '0123',
            emailprimary: encodeURIComponent('jaysmith@email.com'),
            emailsecondary: encodeURIComponent('jaysmith2@email.com'),
            usertype: user_model_1.UserType.student,
            hasIncompleteHomework: true,
            image: '~/images/dp1.jpg',
            lastpwupdate: new Date(),
            lastlogin: new Date(),
            children: [],
        };
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
            _this.getNavItems();
        });
    };
    AppComponent.prototype.getNavItems = function () {
        if (!this.currentUser) {
            this.navItems = [];
        }
        else {
            this.pushNavItem(this.navItemSettings);
            this.pushNavItem(this.navItemSecurity);
        }
        this.pushNavItem(this.navItemLogout);
        this.navItems.sort(this.sortMenu);
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
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService, router_1.Router, router_2.RouterExtensions, authorization_service_1.AuthorizationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUMvRCx5REFBd0U7QUFFeEUsOERBQTRFO0FBSTVFLHdEQUEyRDtBQUMzRCw2RUFBMkU7QUFDM0UsZ0ZBQThFO0FBRTlFO0lBQUE7SUFJQSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksMEJBQU87QUFXcEI7SUE0Q0Msc0JBQW9CLGdCQUFrQyxFQUFVLE1BQWMsRUFBVSxTQUEyQixFQUFVLG9CQUEwQztRQUFuSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQTNDL0osa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBTTNDLGdCQUFXLEdBQVM7WUFDbkIsRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsR0FBRztZQUNiLFFBQVEsRUFBRSxHQUFHO1lBQ2IsU0FBUyxFQUFFLEdBQUc7WUFDZCxZQUFZLEVBQUUsTUFBTTtZQUNwQixjQUFjLEVBQUUsTUFBTTtZQUN0QixZQUFZLEVBQUUsa0JBQWtCLENBQUMsb0JBQW9CLENBQUM7WUFDdEQsY0FBYyxFQUFFLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDO1lBQ3pELFFBQVEsRUFBRSxxQkFBUSxDQUFDLE9BQU87WUFDMUIscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRTtZQUN4QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFD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QWdCLEVBQWtCLGVBQU0sRUFBcUIseUJBQWdCLEVBQWdDLDRDQUFvQjtPQTVDM0osWUFBWSxDQXlIeEI7SUFBRCxtQkFBQztDQUFBLEFBekhELElBeUhDO0FBekhZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBpb3MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcclxuXHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyLCBVc2VyVHlwZSB9IGZyb20gJy4vc2hhcmVkL21vZGVsL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL3NoYXJlZC9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aG9yaXphdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlL2F1dGhvcml6YXRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgbmF2SXRlbSB7XHJcblx0c29ydElkOiBudW1iZXI7XHJcblx0aWNvbjogc3RyaW5nO1xyXG5cdHRleHQ6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICducy1hcHAnLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcblx0QFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblx0cHJpdmF0ZSBzaWRlRHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuXHRjdXJyZW50VXNlcjogVXNlciA9IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0Zm5hbWU6ICdKYXknLFxyXG5cdFx0bW5hbWU6ICcnLFxyXG5cdFx0bG5hbWU6ICdTbWl0aCcsXHJcblx0XHR1c2VybmFtZTogJzEnLFxyXG5cdFx0cGFzc3dvcmQ6ICcxJyxcclxuXHRcdGJpcnRoZGF0ZTogJzEnLFxyXG5cdFx0cGhvbmVwcmltYXJ5OiAnOTEyMycsXHJcblx0XHRwaG9uZXNlY29uZGFyeTogJzAxMjMnLFxyXG5cdFx0ZW1haWxwcmltYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoJ2pheXNtaXRoQGVtYWlsLmNvbScpLFxyXG5cdFx0ZW1haWxzZWNvbmRhcnk6IGVuY29kZVVSSUNvbXBvbmVudCgnamF5c21pdGgyQGVtYWlsLmNvbScpLFxyXG5cdFx0dXNlcnR5cGU6IFVzZXJUeXBlLnN0dWRlbnQsXHJcblx0XHRoYXNJbmNvbXBsZXRlSG9tZXdvcms6IHRydWUsXHJcblx0XHRpbWFnZTogJ34vaW1hZ2VzL2RwMS5qcGcnLFxyXG5cdFx0bGFzdHB3dXBkYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdFx0bGFzdGxvZ2luOiBuZXcgRGF0ZSgpLFxyXG5cdFx0Y2hpbGRyZW46IFtdLFxyXG5cdH07XHJcblxyXG5cdG5hdkl0ZW1TZXR0aW5nczogbmF2SXRlbSA9IHtcclxuXHRcdHNvcnRJZDogMSxcclxuXHRcdGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTk0KSxcclxuXHRcdHRleHQ6ICdTZXR0aW5ncycsXHJcblx0fTtcclxuXHRuYXZJdGVtU2VjdXJpdHk6IG5hdkl0ZW0gPSB7XHJcblx0XHRzb3J0SWQ6IDIsXHJcblx0XHRpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTliNCksXHJcblx0XHR0ZXh0OiAnU2VjdXJpdHknLFxyXG5cdH07XHJcblx0bmF2SXRlbUxvZ291dDogbmF2SXRlbSA9IHtcclxuXHRcdHNvcnRJZDogMyxcclxuXHRcdGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOWI2KSxcclxuXHRcdHRleHQ6ICdMb2dvdXQnLFxyXG5cdH07XHJcblx0bmF2SXRlbXM6IG5hdkl0ZW1bXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFZhbHVlc1NlcnZpY2U6IEFwcFZhbHVlc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGF1dGhvcml6YXRpb25TZXJ2aWNlOiBBdXRob3JpemF0aW9uU2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmdldFJvdXRlVXJsKCk7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHR0aGlzLnNpZGVEcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG5cclxuXHRcdGlmIChpc0lPUykge1xyXG5cdFx0XHQvLyBUaGlzIGRpc2FibGVzIHRoZSBzd2lwZSBnZXN0dXJlIHRvIG9wZW4gbWVudVxyXG5cdFx0XHR0aGlzLnNpZGVEcmF3ZXIuaW9zLmRlZmF1bHRTaWRlRHJhd2VyLmFsbG93RWRnZVN3aXBlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuXHRcdFx0Zm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG5cdFx0XHRcdHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWNvZGVfVVJJQ29tcG9uZW50KGFyZ3MpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhcmdzKTtcclxuXHR9XHJcblxyXG5cdGdldFJvdXRlVXJsKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHR0aGlzLmdldE5hdkl0ZW1zKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldE5hdkl0ZW1zKCkge1xyXG5cdFx0aWYgKCF0aGlzLmN1cnJlbnRVc2VyKSB7XHJcblx0XHRcdHRoaXMubmF2SXRlbXMgPSBbXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHVzaE5hdkl0ZW0odGhpcy5uYXZJdGVtU2V0dGluZ3MpO1xyXG5cdFx0XHR0aGlzLnB1c2hOYXZJdGVtKHRoaXMubmF2SXRlbVNlY3VyaXR5KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnB1c2hOYXZJdGVtKHRoaXMubmF2SXRlbUxvZ291dCk7XHJcblx0XHR0aGlzLm5hdkl0ZW1zLnNvcnQodGhpcy5zb3J0TWVudSk7XHJcblx0fVxyXG5cclxuXHRvbkxvYWRlZCgpIHtcclxuXHRcdGlmIChpc0FuZHJvaWQpIHtcclxuXHRcdFx0Ly8gVGhpcyBkaXNhYmxlcyB0aGUgc3dpcGUgZ2VzdHVyZSB0byBvcGVuIG1lbnUsIGJ5IHNldHRpbmcgdGhlIHRyZXNoaG9sZCB0byAnMCdcclxuXHRcdFx0dGhpcy5zaWRlRHJhd2VyLmFuZHJvaWQuc2V0VG91Y2hUYXJnZXRUaHJlc2hvbGQoMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdXNoTmF2SXRlbShpdGVtOiBuYXZJdGVtKSB7XHJcblx0XHRjb25zdCBuYXZFeGlzdHMgPSB0aGlzLm5hdkl0ZW1zLmZpbHRlcih4ID0+IHgudGV4dCA9PSBpdGVtLnRleHQpLmxlbmd0aCAhPT0gMDtcclxuXHRcdGlmICghbmF2RXhpc3RzKSB7XHJcblx0XHRcdHRoaXMubmF2SXRlbXMucHVzaChpdGVtKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNvcnRNZW51KGE6IG5hdkl0ZW0sIGI6IG5hdkl0ZW0pIHtcclxuXHRcdGlmIChhLnNvcnRJZCA8IGIuc29ydElkKSByZXR1cm4gLTE7XHJcblx0XHRpZiAoYS5zb3J0SWQgPiBiLnNvcnRJZCkgcmV0dXJuIDE7XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9XHJcblxyXG5cdHRhcExvZ291dCgpIHtcclxuXHRcdHRoaXMuYXBwVmFsdWVzU2VydmljZS5jbGVhclZhbHVlcygpO1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2Bsb2dpbmBdKTtcclxuXHRcdHRoaXMuc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xyXG5cdH1cclxuXHJcblx0dGFwU2VjdXJpdHkoKSB7XHJcblx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbYGFjY291bnRzZWN1cml0eWBdKTtcclxuXHRcdHRoaXMuc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xyXG5cdH1cclxuXHJcblx0dGFwU2V0dGluZ3MoKSB7fVxyXG59XHJcbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var user_model_1 = require("./model/user.model");
var appvalues_service_1 = require("./service/appvalues.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(appValuesService, router, routerExt) {
        this.appValuesService = appValuesService;
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
            router_1.Router,
            router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUUvRCw4REFBNEU7QUFJNUUsaURBQTBDO0FBQzFDLGlFQUErRDtBQVEvRDtJQVdJLHNCQUFvQixnQkFBa0MsRUFDMUMsTUFBYyxFQUNkLFNBQTJCO1FBRm5CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBWi9CLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztRQU01QyxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsZUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsZ0JBQVcsR0FBUyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUlZLENBQUM7SUFFNUMsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDdEQsQ0FBQztJQUVKLGtDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDN0IsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtJQUVBLENBQUM7SUFsREQ7UUFEQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUNWLGdDQUFzQjt5REFBQztJQUp0QyxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7eUNBYXdDLG9DQUFnQjtZQUNsQyxlQUFNO1lBQ0gseUJBQWdCO09BYjlCLFlBQVksQ0F1RHZCO0lBQUQsbUJBQUM7Q0FBQSxBQXZERixJQXVERTtBQXZEVyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vbW9kZWwvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zIDogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIFxyXG4gICAgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgc2lkZURyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBpY29uU2V0dGluZ3MgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTk5NCk7XHJcbiAgICBpY29uTG9nb3V0ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5YjYpO1xyXG4gICAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVmFsdWVzU2VydmljZTogQXBwVmFsdWVzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldFJvdXRlVXJsKCk7XHJcbiAgICB9IFxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNpZGVEcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgfVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjb2RlX1VSSUNvbXBvbmVudChhcmdzKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvdXRlVXJsKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0YXBMb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBWYWx1ZXNTZXJ2aWNlLmNsZWFyVmFsdWVzKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2Bsb2dpbmBdKTtcclxuICAgICAgICB0aGlzLnNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIHRhcFNldHRpbmdzKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gfVxyXG4iXX0=
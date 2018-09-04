"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var user_model_1 = require("../model/user.model");
var login_service_1 = require("../service/login.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, route) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.errorMessage = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new user_model_1.UserModel();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
        this.subscription.unsubscribe();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.errorMessage = "";
        var isEmpty = this.validInput(this.user);
        if (isEmpty != false) {
            this.subscription = this.loginService.getUser(this.user)
                .subscribe(function (user) {
                _this.checkUser(user);
            });
        }
    };
    LoginComponent.prototype.validInput = function (user) {
        if ((!user.username) || (!user.password) || (!user.birthdate)) {
            this.errorMessage = "Required fields";
            if (!user.username) {
                this.username.nativeElement.borderColor = "red";
            }
            if (!user.password) {
                this.password.nativeElement.borderColor = "red";
            }
            if (!user.birthdate) {
                this.dob.nativeElement.borderColor = "red";
            }
            return false;
        }
        return true;
    };
    LoginComponent.prototype.checkUser = function (user) {
        if ((user === undefined) ||
            (user.username != this.user.username) ||
            (user.password != this.user.password) ||
            (user.birthdate != this.user.birthdate)) {
            this.errorMessage = "User not found";
        }
        else {
            this.loginService.setLoggedInUser(user);
            this.router.navigate(["homework"]);
        }
    };
    __decorate([
        core_1.ViewChild("username"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "username", void 0);
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("dob"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "dob", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.less']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_2.RouterExtensions,
            router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1GO0FBQ25GLDBDQUFpRDtBQUNqRCxzREFBOEQ7QUFHOUQsa0RBQStDO0FBQy9DLDBEQUF3RDtBQVF4RDtJQVVJLHdCQUNZLFlBQTBCLEVBQzFCLE1BQXdCLEVBQ3hCLEtBQXFCO1FBRnJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVGpDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBVWQsQ0FBQztJQUVMLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ25ELFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ1gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQVUsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQy9DLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxrQ0FBUyxHQUFqQixVQUFrQixJQUFlO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztZQUNwQixDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQTlEc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7b0RBQUM7SUFDckI7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7b0RBQUM7SUFDMUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQU0saUJBQVU7K0NBQUM7SUFSekIsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FZNEIsNEJBQVk7WUFDbEIseUJBQWdCO1lBQ2pCLHVCQUFjO09BYnhCLGNBQWMsQ0FxRTFCO0lBQUQscUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvdXNlci5tb2RlbFwiXHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uIDogU3Vic2NyaXB0aW9uO1xyXG4gICAgdXNlcjogVXNlck1vZGVsO1xyXG5cclxuICAgIGVycm9yTWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcInVzZXJuYW1lXCIpIHVzZXJuYW1lOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImRvYlwiKSBkb2I6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJNb2RlbCgpOyBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25EZXN0cm95XCIpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgIGxldCBpc0VtcHR5ID0gdGhpcy52YWxpZElucHV0KHRoaXMudXNlcik7XHJcblxyXG4gICAgICAgIGlmIChpc0VtcHR5ICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZElucHV0KHVzZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoKCF1c2VyLnVzZXJuYW1lKSB8fCAoIXVzZXIucGFzc3dvcmQpIHx8ICghdXNlci5iaXJ0aGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJSZXF1aXJlZCBmaWVsZHNcIjtcclxuICAgICAgICAgICAgaWYgKCF1c2VyLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXVzZXIuYmlydGhkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvYi5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1VzZXIodXNlcjogVXNlck1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCh1c2VyID09PSB1bmRlZmluZWQpIHx8XHJcbiAgICAgICAgICAgICh1c2VyLnVzZXJuYW1lICE9IHRoaXMudXNlci51c2VybmFtZSkgfHxcclxuICAgICAgICAgICAgKHVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLnBhc3N3b3JkKSB8fFxyXG4gICAgICAgICAgICAodXNlci5iaXJ0aGRhdGUgIT0gdGhpcy51c2VyLmJpcnRoZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlVzZXIgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2Uuc2V0TG9nZ2VkSW5Vc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYGhvbWV3b3JrYF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
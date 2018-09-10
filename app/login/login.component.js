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
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.errorMessage = "";
        var isValid = this.validInput(this.user);
        if (isValid != false) {
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
            this.router.navigate(["timetable"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1GO0FBQ25GLDBDQUFpRDtBQUNqRCxzREFBOEQ7QUFHOUQsa0RBQStDO0FBQy9DLDBEQUF3RDtBQVF4RDtJQVVJLHdCQUNZLFlBQTBCLEVBQzFCLE1BQXdCLEVBQ3hCLEtBQXFCO1FBRnJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVGpDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBVWQsQ0FBQztJQUVMLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ25ELFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ1gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQVUsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQy9DLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxrQ0FBUyxHQUFqQixVQUFrQixJQUFlO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztZQUNwQixDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQS9Ec0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7b0RBQUM7SUFDckI7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7b0RBQUM7SUFDMUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQU0saUJBQVU7K0NBQUM7SUFSekIsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FZNEIsNEJBQVk7WUFDbEIseUJBQWdCO1lBQ2pCLHVCQUFjO09BYnhCLGNBQWMsQ0FzRTFCO0lBQUQscUJBQUM7Q0FBQSxBQXRFRCxJQXNFQztBQXRFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvdXNlci5tb2RlbFwiXHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uIDogU3Vic2NyaXB0aW9uO1xyXG4gICAgdXNlcjogVXNlck1vZGVsO1xyXG5cclxuICAgIGVycm9yTWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcInVzZXJuYW1lXCIpIHVzZXJuYW1lOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImRvYlwiKSBkb2I6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJNb2RlbCgpOyBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJcIjtcclxuICAgICAgICBsZXQgaXNWYWxpZCA9IHRoaXMudmFsaWRJbnB1dCh0aGlzLnVzZXIpO1xyXG5cclxuICAgICAgICBpZiAoaXNWYWxpZCAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubG9naW5TZXJ2aWNlLmdldFVzZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVXNlcih1c2VyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRJbnB1dCh1c2VyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCghdXNlci51c2VybmFtZSkgfHwgKCF1c2VyLnBhc3N3b3JkKSB8fCAoIXVzZXIuYmlydGhkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiUmVxdWlyZWQgZmllbGRzXCI7XHJcbiAgICAgICAgICAgIGlmICghdXNlci51c2VybmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZS5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF1c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF1c2VyLmJpcnRoZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb2IubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tVc2VyKHVzZXI6IFVzZXJNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICgodXNlciA9PT0gdW5kZWZpbmVkKSB8fFxyXG4gICAgICAgICAgICAodXNlci51c2VybmFtZSAhPSB0aGlzLnVzZXIudXNlcm5hbWUpIHx8XHJcbiAgICAgICAgICAgICh1c2VyLnBhc3N3b3JkICE9IHRoaXMudXNlci5wYXNzd29yZCkgfHxcclxuICAgICAgICAgICAgKHVzZXIuYmlydGhkYXRlICE9IHRoaXMudXNlci5iaXJ0aGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJVc2VyIG5vdCBmb3VuZFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLnNldExvZ2dlZEluVXNlcih1c2VyKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2B0aW1ldGFibGVgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
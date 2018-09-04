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
        var isEmpty = this.checkUserInput(this.user);
        if (isEmpty != false) {
            this.subscription = this.loginService.getUser(this.user)
                .subscribe(function (user) {
                _this.checkUser(user);
            });
        }
    };
    LoginComponent.prototype.checkUserInput = function (user) {
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
    };
    LoginComponent.prototype.checkUser = function (user) {
        if ((user === undefined) ||
            (user.username != this.user.username) ||
            (user.password != this.user.password) ||
            (user.birthdate != this.user.birthdate)) {
            this.errorMessage = "User not found";
        }
        else {
            this.loginService.getLoggedUser(user);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1GO0FBQ25GLDBDQUFpRDtBQUNqRCxzREFBOEQ7QUFHOUQsa0RBQStDO0FBQy9DLDBEQUF3RDtBQVF4RDtJQVVJLHdCQUNZLFlBQTBCLEVBQzFCLE1BQXdCLEVBQ3hCLEtBQXFCO1FBRnJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVGpDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBVWQsQ0FBQztJQUVMLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ25ELFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ1gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUM7SUFDTCxDQUFDO0lBRU8sdUNBQWMsR0FBdEIsVUFBdUIsSUFBSTtRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQy9DLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBRU8sa0NBQVMsR0FBakIsVUFBa0IsSUFBZTtRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7WUFDcEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUE1RHNCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO29EQUFDO0lBQ3JCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO29EQUFDO0lBQzFCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFNLGlCQUFVOytDQUFDO0lBUnpCLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBWTRCLDRCQUFZO1lBQ2xCLHlCQUFnQjtZQUNqQix1QkFBYztPQWJ4QixjQUFjLENBbUUxQjtJQUFELHFCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL3VzZXIubW9kZWxcIlxyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcclxuICAgIHVzZXI6IFVzZXJNb2RlbDtcclxuXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ1c2VybmFtZVwiKSB1c2VybmFtZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJkb2JcIikgZG9iOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyTW9kZWwoKTsgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uRGVzdHJveVwiKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJcIjtcclxuICAgICAgICBsZXQgaXNFbXB0eSA9IHRoaXMuY2hlY2tVc2VySW5wdXQodGhpcy51c2VyKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRW1wdHkgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1VzZXIodXNlcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVXNlcklucHV0KHVzZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoKCF1c2VyLnVzZXJuYW1lKSB8fCAoIXVzZXIucGFzc3dvcmQpIHx8ICghdXNlci5iaXJ0aGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJSZXF1aXJlZCBmaWVsZHNcIjtcclxuICAgICAgICAgICAgaWYgKCF1c2VyLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXVzZXIuYmlydGhkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvYi5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVXNlcih1c2VyOiBVc2VyTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICBpZiAoKHVzZXIgPT09IHVuZGVmaW5lZCkgfHxcclxuICAgICAgICAgICAgKHVzZXIudXNlcm5hbWUgIT0gdGhpcy51c2VyLnVzZXJuYW1lKSB8fFxyXG4gICAgICAgICAgICAodXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIucGFzc3dvcmQpIHx8XHJcbiAgICAgICAgICAgICh1c2VyLmJpcnRoZGF0ZSAhPSB0aGlzLnVzZXIuYmlydGhkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiVXNlciBub3QgZm91bmRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5nZXRMb2dnZWRVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYHRpbWV0YWJsZWBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_model_1 = require("../model/login.model");
var appvalues_service_1 = require("../service/appvalues.service");
var login_service_1 = require("../service/login.service");
var user_service_1 = require("../service/user.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appValuesService, loginService, userService, router) {
        this.appValuesService = appValuesService;
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
        this.errorMessage = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.logIn = new login_model_1.Login();
        // this.logIn.username = '1';
        // this.logIn.password = '1';
        // this.logIn.birthdate = '1';
        // this.login();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.errorMessage = "";
        var isValid = this.validInput(this.logIn);
        if (isValid != false) {
            this.subscription = this.loginService.getUser(this.logIn)
                .subscribe(function (user) {
                _this.checkUser(user);
            });
        }
    };
    LoginComponent.prototype.validInput = function (logIn) {
        if ((!logIn.username) || (!logIn.password) || (!logIn.birthdate)) {
            this.errorMessage = "Required fields";
            if (!logIn.username) {
                this.username.nativeElement.borderColor = "red";
            }
            if (!logIn.password) {
                this.password.nativeElement.borderColor = "red";
            }
            if (!logIn.birthdate) {
                this.dob.nativeElement.borderColor = "red";
            }
            return false;
        }
        return true;
    };
    LoginComponent.prototype.checkUser = function (login) {
        var _this = this;
        if ((login === undefined) ||
            (login.username != this.logIn.username) ||
            (login.password != this.logIn.password) ||
            (login.birthdate != this.logIn.birthdate)) {
            this.errorMessage = "User not found";
        }
        else {
            this.subscription = this.userService.getUserById(login.id)
                .subscribe(function (user) {
                _this.appValuesService.setLoggedInUser(user);
                _this.router.navigate(["dashboard"]);
            });
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
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService,
            login_service_1.LoginService,
            user_service_1.UserService,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1GO0FBQ25GLHNEQUE4RDtBQUc5RCxvREFBNEM7QUFFNUMsa0VBQWdFO0FBQ2hFLDBEQUF3RDtBQUN4RCx3REFBc0Q7QUFTdEQ7SUFVSSx3QkFDWSxnQkFBa0MsRUFDbEMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsTUFBd0I7UUFIeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVZwQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQVdkLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFLLEVBQUUsQ0FBQztRQUN6Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QixnQkFBZ0I7SUFDcEIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMs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Q29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4uL21vZGVsL2xvZ2luLm1vZGVsXCJcclxuXHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcclxuICAgIGxvZ0luOiBMb2dpbjtcclxuXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ1c2VybmFtZVwiKSB1c2VybmFtZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJkb2JcIikgZG9iOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXBwVmFsdWVzU2VydmljZTogQXBwVmFsdWVzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgdGhpcy5sb2dJbiA9IG5ldyBMb2dpbigpO1xyXG4gICAgICAgIC8vIHRoaXMubG9nSW4udXNlcm5hbWUgPSAnMSc7XHJcbiAgICAgICAgLy8gdGhpcy5sb2dJbi5wYXNzd29yZCA9ICcxJztcclxuICAgICAgICAvLyB0aGlzLmxvZ0luLmJpcnRoZGF0ZSA9ICcxJztcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0aGlzLnZhbGlkSW5wdXQodGhpcy5sb2dJbik7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcih0aGlzLmxvZ0luKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVXNlcih1c2VyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRJbnB1dChsb2dJbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICgoIWxvZ0luLnVzZXJuYW1lKSB8fCAoIWxvZ0luLnBhc3N3b3JkKSB8fCAoIWxvZ0luLmJpcnRoZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlJlcXVpcmVkIGZpZWxkc1wiO1xyXG4gICAgICAgICAgICBpZiAoIWxvZ0luLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWxvZ0luLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFsb2dJbi5iaXJ0aGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9iLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVXNlcihsb2dpbjogTG9naW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoKGxvZ2luID09PSB1bmRlZmluZWQpIHx8XHJcbiAgICAgICAgICAgIChsb2dpbi51c2VybmFtZSAhPSB0aGlzLmxvZ0luLnVzZXJuYW1lKSB8fFxyXG4gICAgICAgICAgICAobG9naW4ucGFzc3dvcmQgIT0gdGhpcy5sb2dJbi5wYXNzd29yZCkgfHxcclxuICAgICAgICAgICAgKGxvZ2luLmJpcnRoZGF0ZSAhPSB0aGlzLmxvZ0luLmJpcnRoZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlVzZXIgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKGxvZ2luLmlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFZhbHVlc1NlcnZpY2Uuc2V0TG9nZ2VkSW5Vc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgZGFzaGJvYXJkYF0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
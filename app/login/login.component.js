"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var user_model_1 = require("../shared/model/user.model");
var appvalues_service_1 = require("../shared/service/appvalues.service");
var login_service_1 = require("../shared/service/login.service");
var authorization_service_1 = require("~/shared/service/authorization.service");
var user_service_1 = require("~/shared/service/user.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appValuesService, loginService, router, authorizationService, userService) {
        this.appValuesService = appValuesService;
        this.loginService = loginService;
        this.router = router;
        this.authorizationService = authorizationService;
        this.userService = userService;
        this.isLoginBusy = false;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.logIn = new user_model_1.User();
        // this.logIn.username = 'parent';
        // this.logIn.password = 'parent';
        // this.logIn.birthdate = '01/01/1950';
        // this.logIn.username = 'student1';
        // this.logIn.password = 'password';
        // this.logIn.birthdate = '02/03/2001';
        // this.logIn.username = '1';
        // this.logIn.password = '1';
        // this.logIn.birthdate = '1';
        // this.logIn.username = 'parent1';
        // this.logIn.password = 'parent';
        // this.logIn.birthdate = '01/02/1950';
        // this.login();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(["forgotpassword"]);
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isLoginBusy) {
                            return [2 /*return*/];
                        }
                        this.isLoginBusy = true;
                        this.errorMessage = '';
                        isValid = this.validInput(this.logIn);
                        if (!isValid) {
                            this.isLoginBusy = false;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authorizationService.Login(this.logIn.username, this.logIn.password)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loginService.HandleLogin(this.logIn.username)];
                    case 2:
                        _a.sent();
                        this.isLoginBusy = false;
                        if (!this.authorizationService.IsLoggedIn()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.validInput = function (logIn) {
        if (!logIn.username || !logIn.password || !logIn.birthdate) {
            this.errorMessage = 'Required fields';
            if (!logIn.username) {
                this.username.nativeElement.borderColor = 'red';
            }
            if (!logIn.password) {
                this.password.nativeElement.borderColor = 'red';
            }
            return false;
        }
        return true;
    };
    __decorate([
        core_1.ViewChild('username'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "username", void 0);
    __decorate([
        core_1.ViewChild('password'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.less'],
        }),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService,
            login_service_1.LoginService,
            router_1.RouterExtensions,
            authorization_service_1.AuthorizationService,
            user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9GO0FBQ3BGLHNEQUErRDtBQUcvRCx5REFBa0Q7QUFFbEQseUVBQXVFO0FBQ3ZFLGlFQUErRDtBQUMvRCxnRkFBOEU7QUFDOUUsOERBQTREO0FBUTVEO0lBWUMsd0JBQ1MsZ0JBQWtDLEVBQ2xDLFlBQTBCLEVBQzFCLE1BQXdCLEVBQ3hCLG9CQUEwQyxFQUMxQyxXQUF3QjtRQUp4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFkakMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFhZixDQUFDO0lBRUosaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFFeEIsa0NBQWtDO1FBQ2xDLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFFdkMsb0NBQW9DO1FBQ3BDLG9DQUFvQztRQUNwQyx1Q0FBdUM7UUFFdkMsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFFOUIsbUNBQW1DO1FBQ25DLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFFdkMsZ0JBQWdCO0lBQ2pCLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQztJQUNGLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVLLDhCQUFLLEdBQVg7Ozs7Ozt3QkFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxnQkFBQzt3QkFDUixDQUFDO3dCQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUUxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7NEJBQ3pCLE1BQU0sZ0JBQUM7d0JBQ1IsQ0FBQzt3QkFFRCxxQkFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUEvRSxTQUErRSxDQUFDO3dCQUNoRixxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBeEQsU0FBd0QsQ0FBQzt3QkFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7d0JBRXpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDN0MsTUFBTSxnQkFBQzt3QkFDUixDQUFDOzs7OztLQUNEO0lBRU8sbUNBQVUsR0FBbEIsVUFBbUIsS0FBSztRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2pELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2pELENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBakZEO1FBREMsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQ1osaUJBQVU7b0RBQUM7SUFFckI7UUFEQyxnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FDWixpQkFBVTtvREFBQztJQVZULGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3JDLENBQUM7eUNBYzBCLG9DQUFnQjtZQUNwQiw0QkFBWTtZQUNsQix5QkFBZ0I7WUFDRiw0Q0FBb0I7WUFDN0IsMEJBQVc7T0FqQnJCLGNBQWMsQ0EwRjFCO0lBQUQscUJBQUM7Q0FBQSxBQTFGRCxJQTBGQztBQTFGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL3VzZXIubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgQXBwVmFsdWVzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhvcml6YXRpb25TZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZS9hdXRob3JpemF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2UvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICducy1sb2dpbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQubGVzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRsb2dJbjogVXNlcjtcclxuXHRpc0xvZ2luQnVzeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRlcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcblx0QFZpZXdDaGlsZCgndXNlcm5hbWUnKVxyXG5cdHVzZXJuYW1lOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoJ3Bhc3N3b3JkJylcclxuXHRwYXNzd29yZDogRWxlbWVudFJlZjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFwcFZhbHVlc1NlcnZpY2U6IEFwcFZhbHVlc1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcblx0XHRwcml2YXRlIGF1dGhvcml6YXRpb25TZXJ2aWNlOiBBdXRob3JpemF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubG9nSW4gPSBuZXcgVXNlcigpO1xyXG5cclxuXHRcdC8vIHRoaXMubG9nSW4udXNlcm5hbWUgPSAncGFyZW50JztcclxuXHRcdC8vIHRoaXMubG9nSW4ucGFzc3dvcmQgPSAncGFyZW50JztcclxuXHRcdC8vIHRoaXMubG9nSW4uYmlydGhkYXRlID0gJzAxLzAxLzE5NTAnO1xyXG5cclxuXHRcdC8vIHRoaXMubG9nSW4udXNlcm5hbWUgPSAnc3R1ZGVudDEnO1xyXG5cdFx0Ly8gdGhpcy5sb2dJbi5wYXNzd29yZCA9ICdwYXNzd29yZCc7XHJcblx0XHQvLyB0aGlzLmxvZ0luLmJpcnRoZGF0ZSA9ICcwMi8wMy8yMDAxJztcclxuXHJcblx0XHQvLyB0aGlzLmxvZ0luLnVzZXJuYW1lID0gJzEnO1xyXG5cdFx0Ly8gdGhpcy5sb2dJbi5wYXNzd29yZCA9ICcxJztcclxuXHRcdC8vIHRoaXMubG9nSW4uYmlydGhkYXRlID0gJzEnO1xyXG5cclxuXHRcdC8vIHRoaXMubG9nSW4udXNlcm5hbWUgPSAncGFyZW50MSc7XHJcblx0XHQvLyB0aGlzLmxvZ0luLnBhc3N3b3JkID0gJ3BhcmVudCc7XHJcblx0XHQvLyB0aGlzLmxvZ0luLmJpcnRoZGF0ZSA9ICcwMS8wMi8xOTUwJztcclxuXHJcblx0XHQvLyB0aGlzLmxvZ2luKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcmdvdFBhc3N3b3JkKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Bmb3Jnb3RwYXNzd29yZGBdKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvZ2luKCkge1xyXG5cdFx0aWYgKHRoaXMuaXNMb2dpbkJ1c3kpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaXNMb2dpbkJ1c3kgPSB0cnVlO1xyXG5cdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdGxldCBpc1ZhbGlkID0gdGhpcy52YWxpZElucHV0KHRoaXMubG9nSW4pO1xyXG5cclxuXHRcdGlmICghaXNWYWxpZCkge1xyXG5cdFx0XHR0aGlzLmlzTG9naW5CdXN5ID0gZmFsc2U7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRhd2FpdCB0aGlzLmF1dGhvcml6YXRpb25TZXJ2aWNlLkxvZ2luKHRoaXMubG9nSW4udXNlcm5hbWUsIHRoaXMubG9nSW4ucGFzc3dvcmQpO1xyXG5cdFx0YXdhaXQgdGhpcy5sb2dpblNlcnZpY2UuSGFuZGxlTG9naW4odGhpcy5sb2dJbi51c2VybmFtZSk7XHJcblx0XHR0aGlzLmlzTG9naW5CdXN5ID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmF1dGhvcml6YXRpb25TZXJ2aWNlLklzTG9nZ2VkSW4oKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHZhbGlkSW5wdXQobG9nSW4pOiBib29sZWFuIHtcclxuXHRcdGlmICghbG9nSW4udXNlcm5hbWUgfHwgIWxvZ0luLnBhc3N3b3JkIHx8ICFsb2dJbi5iaXJ0aGRhdGUpIHtcclxuXHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnUmVxdWlyZWQgZmllbGRzJztcclxuXHRcdFx0aWYgKCFsb2dJbi51c2VybmFtZSkge1xyXG5cdFx0XHRcdHRoaXMudXNlcm5hbWUubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9ICdyZWQnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWxvZ0luLnBhc3N3b3JkKSB7XHJcblx0XHRcdFx0dGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gJ3JlZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG4iXX0=
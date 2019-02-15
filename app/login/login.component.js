"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var user_model_1 = require("../shared/model/user.model");
var appvalues_service_1 = require("../shared/service/appvalues.service");
var login_service_1 = require("./login.service");
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
        if (!logIn.username || !logIn.password) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9GO0FBQ3BGLHNEQUErRDtBQUcvRCx5REFBa0Q7QUFFbEQseUVBQXVFO0FBQ3ZFLGlEQUErQztBQUMvQyxnRkFBOEU7QUFDOUUsOERBQTREO0FBUTVEO0lBWUMsd0JBQ1MsZ0JBQWtDLEVBQ2xDLFlBQTBCLEVBQzFCLE1BQXdCLEVBQ3hCLG9CQUEwQyxFQUMxQyxXQUF3QjtRQUp4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFkakMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFhZixDQUFDO0lBRUosaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFFeEIsa0NBQWtDO1FBQ2xDLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFFdkMsb0NBQW9DO1FBQ3BDLG9DQUFvQztRQUNwQyx1Q0FBdUM7UUFFdkMsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFFOUIsbUNBQW1DO1FBQ25DLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFFdkMsZ0JBQWdCO0lBQ2pCLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQztJQUNGLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVLLDhCQUFLLEdBQVg7Ozs7Ozt3QkFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxnQkFBQzt3QkFDUixDQUFDO3dCQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUUxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7NEJBQ3pCLE1BQU0sZ0JBQUM7d0JBQ1IsQ0FBQzt3QkFFRCxxQkFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUEvRSxTQUErRSxDQUFDO3dCQUNoRixxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBeEQsU0FBd0QsQ0FBQzt3QkFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7d0JBRXpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDN0MsTUFBTSxnQkFBQzt3QkFDUixDQUFDOzs7OztLQUNEO0lBRU8sbUNBQVUsR0FBbEIsVUFBbUIsS0FBSztRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDakQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDakQsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFqRkQ7UUFEQyxnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FDWixpQkFBVTtvREFBQztJQUVyQjtRQURDLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUNaLGlCQUFVO29EQUFDO0lBVlQsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FjMEIsb0NBQWdCO1lBQ3BCLDRCQUFZO1lBQ2xCLHlCQUFnQjtZQUNGLDRDQUFvQjtZQUM3QiwwQkFBVztPQWpCckIsY0FBYyxDQTBGMUI7SUFBRCxxQkFBQztDQUFBLEFBMUZELElBMEZDO0FBMUZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvdXNlci5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2UvYXBwdmFsdWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRob3JpemF0aW9uU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2UvYXV0aG9yaXphdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnbnMtbG9naW4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50Lmxlc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0bG9nSW46IFVzZXI7XHJcblx0aXNMb2dpbkJ1c3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0ZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ3VzZXJuYW1lJylcclxuXHR1c2VybmFtZTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKCdwYXNzd29yZCcpXHJcblx0cGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhcHBWYWx1ZXNTZXJ2aWNlOiBBcHBWYWx1ZXNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG5cdFx0cHJpdmF0ZSBhdXRob3JpemF0aW9uU2VydmljZTogQXV0aG9yaXphdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmxvZ0luID0gbmV3IFVzZXIoKTtcclxuXHJcblx0XHQvLyB0aGlzLmxvZ0luLnVzZXJuYW1lID0gJ3BhcmVudCc7XHJcblx0XHQvLyB0aGlzLmxvZ0luLnBhc3N3b3JkID0gJ3BhcmVudCc7XHJcblx0XHQvLyB0aGlzLmxvZ0luLmJpcnRoZGF0ZSA9ICcwMS8wMS8xOTUwJztcclxuXHJcblx0XHQvLyB0aGlzLmxvZ0luLnVzZXJuYW1lID0gJ3N0dWRlbnQxJztcclxuXHRcdC8vIHRoaXMubG9nSW4ucGFzc3dvcmQgPSAncGFzc3dvcmQnO1xyXG5cdFx0Ly8gdGhpcy5sb2dJbi5iaXJ0aGRhdGUgPSAnMDIvMDMvMjAwMSc7XHJcblxyXG5cdFx0Ly8gdGhpcy5sb2dJbi51c2VybmFtZSA9ICcxJztcclxuXHRcdC8vIHRoaXMubG9nSW4ucGFzc3dvcmQgPSAnMSc7XHJcblx0XHQvLyB0aGlzLmxvZ0luLmJpcnRoZGF0ZSA9ICcxJztcclxuXHJcblx0XHQvLyB0aGlzLmxvZ0luLnVzZXJuYW1lID0gJ3BhcmVudDEnO1xyXG5cdFx0Ly8gdGhpcy5sb2dJbi5wYXNzd29yZCA9ICdwYXJlbnQnO1xyXG5cdFx0Ly8gdGhpcy5sb2dJbi5iaXJ0aGRhdGUgPSAnMDEvMDIvMTk1MCc7XHJcblxyXG5cdFx0Ly8gdGhpcy5sb2dpbigpO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb24gIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3Jnb3RQYXNzd29yZCgpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtgZm9yZ290cGFzc3dvcmRgXSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2dpbigpIHtcclxuXHRcdGlmICh0aGlzLmlzTG9naW5CdXN5KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmlzTG9naW5CdXN5ID0gdHJ1ZTtcclxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRsZXQgaXNWYWxpZCA9IHRoaXMudmFsaWRJbnB1dCh0aGlzLmxvZ0luKTtcclxuXHJcblx0XHRpZiAoIWlzVmFsaWQpIHtcclxuXHRcdFx0dGhpcy5pc0xvZ2luQnVzeSA9IGZhbHNlO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5hdXRob3JpemF0aW9uU2VydmljZS5Mb2dpbih0aGlzLmxvZ0luLnVzZXJuYW1lLCB0aGlzLmxvZ0luLnBhc3N3b3JkKTtcclxuXHRcdGF3YWl0IHRoaXMubG9naW5TZXJ2aWNlLkhhbmRsZUxvZ2luKHRoaXMubG9nSW4udXNlcm5hbWUpO1xyXG5cdFx0dGhpcy5pc0xvZ2luQnVzeSA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICghdGhpcy5hdXRob3JpemF0aW9uU2VydmljZS5Jc0xvZ2dlZEluKCkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSB2YWxpZElucHV0KGxvZ0luKTogYm9vbGVhbiB7XHJcblx0XHRpZiAoIWxvZ0luLnVzZXJuYW1lIHx8ICFsb2dJbi5wYXNzd29yZCkge1xyXG5cdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9ICdSZXF1aXJlZCBmaWVsZHMnO1xyXG5cdFx0XHRpZiAoIWxvZ0luLnVzZXJuYW1lKSB7XHJcblx0XHRcdFx0dGhpcy51c2VybmFtZS5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gJ3JlZCc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghbG9nSW4ucGFzc3dvcmQpIHtcclxuXHRcdFx0XHR0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSAncmVkJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcbiJdfQ==
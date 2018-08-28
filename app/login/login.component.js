"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.isLoggingIn = true;
        this.isLoading = true;
        this.input = {
            "username": "",
            "password": "",
            "birthdate": ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        if (this.input.username && this.input.password && this.input.birthdate) {
        }
    };
    __decorate([
        core_1.ViewChild('scrollView'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "scrollView", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.less']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLHNEQUE4RDtBQVk5RDtJQVNJLHdCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVI1QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQU1YLGNBQVMsR0FBRyxJQUFJLENBQUE7UUFHcEIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFVBQVUsRUFBRSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtTQUNsQixDQUFBO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRVAsOEJBQUssR0FBWjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV6RSxDQUFDO0lBQ0wsQ0FBQztJQWxCd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7c0RBQUE7SUFMdEMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FVOEIseUJBQWdCO09BVG5DLGNBQWMsQ0F3QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcblxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL3VzZXIubW9kZWxcIlxuXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICB1c2VyOiBVc2VyTW9kZWw7XG4gICAgaW5wdXQ6IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbFZpZXcnKSBzY3JvbGxWaWV3OiBFbGVtZW50UmVmXG5cbiAgICBwcml2YXRlIGlzTG9hZGluZyA9IHRydWVcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgICAgICB0aGlzLmlucHV0ID0ge1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJiaXJ0aGRhdGVcIjogXCJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIHB1YmxpYyBsb2dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQudXNlcm5hbWUgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCAmJiB0aGlzLmlucHV0LmJpcnRoZGF0ZSkge1xuXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
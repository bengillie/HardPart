"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.title = "Login";
        this.isLoggingIn = true;
        this.isLoading = true;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLHNEQUE4RDtBQVU5RDtJQVNJLHdCQUNZLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBVHBDLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFLWCxjQUFTLEdBQUcsSUFBSSxDQUFBO0lBSXBCLENBQUM7SUFFTCxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLDhCQUFLLEdBQVo7SUFFQSxDQUFDO0lBWndCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGlCQUFVO3NEQUFBO0lBTHRDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBV3NCLHlCQUFnQjtPQVYzQixjQUFjLENBa0IxQjtJQUFELHFCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXG5cbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC91c2VyLm1vZGVsXCJcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRpdGxlID0gXCJMb2dpblwiO1xuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICB1c2VyOiBVc2VyTW9kZWw7XG5cbiAgICBAVmlld0NoaWxkKCdzY3JvbGxWaWV3Jykgc2Nyb2xsVmlldzogRWxlbWVudFJlZlxuXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmcgPSB0cnVlXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBwdWJsaWMgbG9naW4oKSB7XG4gICAgICAgXG4gICAgfVxufVxuIl19
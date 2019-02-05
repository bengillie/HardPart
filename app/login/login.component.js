"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var user_model_1 = require("../model/user.model");
var appvalues_service_1 = require("../service/appvalues.service");
var login_service_1 = require("../service/login.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appValuesService, loginService, router) {
        this.appValuesService = appValuesService;
        this.loginService = loginService;
        this.router = router;
        this.isLoginBusy = false;
        this.errorMessage = "";
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
        var _this = this;
        if (!this.isLoginBusy) {
            this.isLoginBusy = true;
            this.errorMessage = "";
            var isValid = this.validInput(this.logIn);
            if (isValid != false) {
                this.subscription = this.loginService.getUser(this.logIn)
                    .subscribe(function (user) {
                    var isSuccessful = _this.checkUser(user);
                    if (!isSuccessful) {
                        _this.isLoginBusy = false;
                    }
                });
            }
            else {
                this.isLoginBusy = false;
            }
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
            return false;
        }
        else {
            this.appValuesService.setLoggedInUser(login);
            if (login.isfirsttime) {
                this.router.navigate(["updatesecuritydetails"]);
            }
            else {
                this.router.navigate(["dashboard"]);
                setTimeout(function () { _this.router.navigate(["advert"]); }, 200);
            }
        }
        return true;
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
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

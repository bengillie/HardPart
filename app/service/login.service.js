"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var error_service_1 = require("../service/error.service");
var httpservice_service_1 = require("../service/httpservice.service");
var logging_service_1 = require("../service/logging.service");
var LoginService = /** @class */ (function () {
    function LoginService(errorService, httpService, logService) {
        this.errorService = errorService;
        this.httpService = httpService;
        this.logService = logService;
        this.url = "user";
    }
    LoginService.prototype.getUser = function (login) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('username', login.username);
        params = params.append('password', login.password);
        params = params.append('birthdate', login.birthdate.toString());
        return this.httpService.get(this.url, params)
            .pipe(operators_1.map(function (users) { return users[0]; }), operators_1.tap(function (_) { return _this.logService.log("fetched username = " + login.username); }), operators_1.catchError(this.errorService.handleError("getUser username = " + login.username)));
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [error_service_1.ErrorService,
            httpservice_service_1.HttpService,
            logging_service_1.LoggingService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var error_service_1 = require("../service/error.service");
var logging_service_1 = require("../service/logging.service");
var LoginService = /** @class */ (function () {
    function LoginService(http, errorService, logService) {
        this.http = http;
        this.errorService = errorService;
        this.logService = logService;
        this.loginUrl = 'api/login';
    }
    LoginService.prototype.getUser = function (login) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('username', login.username);
        params = params.append('password', login.password);
        params = params.append('birthdate', login.birthdate.toString());
        return this.http.get(this.loginUrl, { params: params })
            .pipe(operators_1.map(function (users) { return users[0]; }), operators_1.tap(function (_) { return _this.logService.log("fetched username = " + login.username); }), operators_1.catchError(this.errorService.handleError("getUser username = " + login.username)));
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_service_1.ErrorService,
            logging_service_1.LoggingService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQThEO0FBRTlELDRDQUFzRDtBQUl0RCwwREFBd0Q7QUFDeEQsOERBQTREO0FBRzVEO0lBS0ksc0JBQ1ksSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsVUFBMEI7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUw5QixhQUFRLEdBQUcsV0FBVyxDQUFDO0lBTTNCLENBQUM7SUFHTCw4QkFBTyxHQUFQLFVBQVEsS0FBWTtRQUFwQixpQkFZQztRQVhHLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQzdELElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLEVBQ3RCLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLHdCQUFzQixLQUFLLENBQUMsUUFBVSxDQUFDLEVBQTNELENBQTJELENBQUMsRUFDckUsc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBUSx3QkFBc0IsS0FBSyxDQUFDLFFBQVUsQ0FBQyxDQUFDLENBQzNGLENBQUM7SUFDTixDQUFDO0lBeEJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FPUyxpQkFBVTtZQUNGLDRCQUFZO1lBQ2QsZ0NBQWM7T0FSN0IsWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnOyBcclxuXHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi4vbW9kZWwvbG9naW4ubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG4gICAgbG9naW46IExvZ2luO1xyXG5cclxuICAgIHByaXZhdGUgbG9naW5VcmwgPSAnYXBpL2xvZ2luJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuXHJcbiAgICBnZXRVc2VyKGxvZ2luOiBMb2dpbik6IE9ic2VydmFibGU8TG9naW4+IHtcclxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCd1c2VybmFtZScsIGxvZ2luLnVzZXJuYW1lKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIGxvZ2luLnBhc3N3b3JkKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdiaXJ0aGRhdGUnLCBsb2dpbi5iaXJ0aGRhdGUudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PExvZ2luW10+KHRoaXMubG9naW5VcmwsIHtwYXJhbXM6IHBhcmFtc30pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCh1c2VycyA9PiB1c2Vyc1swXSksXHJcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nU2VydmljZS5sb2coYGZldGNoZWQgdXNlcm5hbWUgPSAke2xvZ2luLnVzZXJuYW1lfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcjxMb2dpbj4oYGdldFVzZXIgdXNlcm5hbWUgPSAke2xvZ2luLnVzZXJuYW1lfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
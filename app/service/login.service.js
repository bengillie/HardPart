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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBRWxELDRDQUFzRDtBQUt0RCwwREFBd0Q7QUFDeEQsc0VBQTZEO0FBQzdELDhEQUE0RDtBQUc1RDtJQUdJLHNCQUFvQixZQUEwQixFQUNsQyxXQUF3QixFQUN4QixVQUEwQjtRQUZsQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUp0QyxRQUFHLEdBQUcsTUFBTSxDQUFDO0lBSTZCLENBQUM7SUFFM0MsOEJBQU8sR0FBUCxVQUFRLEtBQVc7UUFBbkIsaUJBWUM7UUFYRyxJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVoRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7YUFDcEQsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBUixDQUFRLENBQUMsRUFDdEIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsd0JBQXNCLEtBQUssQ0FBQyxRQUFVLENBQUMsRUFBM0QsQ0FBMkQsQ0FBQyxFQUNyRSxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFPLHdCQUFzQixLQUFLLENBQUMsUUFBVSxDQUFDLENBQUMsQ0FDMUYsQ0FBQztJQUNOLENBQUM7SUFuQlEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUl5Qiw0QkFBWTtZQUNyQixpQ0FBVztZQUNaLGdDQUFjO09BTDdCLFlBQVksQ0FvQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaHR0cHNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICAgIHVybCA9IFwidXNlclwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSkgeyB9XHJcblxyXG4gICAgZ2V0VXNlcihsb2dpbjogVXNlcik6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3VzZXJuYW1lJywgbG9naW4udXNlcm5hbWUpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgbG9naW4ucGFzc3dvcmQpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2JpcnRoZGF0ZScsIGxvZ2luLmJpcnRoZGF0ZS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0PFVzZXJbXT4odGhpcy51cmwsIHBhcmFtcylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKHVzZXJzID0+IHVzZXJzWzBdKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCB1c2VybmFtZSA9ICR7bG9naW4udXNlcm5hbWV9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yPFVzZXI+KGBnZXRVc2VyIHVzZXJuYW1lID0gJHtsb2dpbi51c2VybmFtZX1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
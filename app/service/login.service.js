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
        this.userUrl = 'api/users';
    }
    LoginService.prototype.getLoggedInUser = function () {
        return this.user;
    };
    LoginService.prototype.getUser = function (user) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('username', user.username);
        params = params.append('password', user.password);
        params = params.append('birthdate', user.birthdate.toString());
        return this.http.get(this.userUrl, { params: params })
            .pipe(operators_1.map(function (users) { return users[0]; }), operators_1.tap(function (_) { return _this.logService.log("fetched username = " + user.username); }), operators_1.catchError(this.errorService.handleError("getUser username = " + user.username)));
    };
    LoginService.prototype.setLoggedInUser = function (user) {
        this.user = user;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTJFO0FBRTNFLDRDQUFxRDtBQUlyRCwwREFBd0Q7QUFDeEQsOERBQTREO0FBRzVEO0lBTUksc0JBQ1ksSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsVUFBMEI7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUw5QixZQUFPLEdBQUcsV0FBVyxDQUFDO0lBTTFCLENBQUM7SUFFTCxzQ0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxJQUFlO1FBQXZCLGlCQWFDO1FBWEcsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDaEUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBUixDQUFRLENBQUMsRUFDdEIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsd0JBQXNCLElBQUksQ0FBQyxRQUFVLENBQUMsRUFBMUQsQ0FBMEQsQ0FBQyxFQUNwRSxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFZLHdCQUFzQixJQUFJLENBQUMsUUFBVSxDQUFDLENBQUMsQ0FDOUYsQ0FBQztJQUNOLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQWpDUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBUVMsaUJBQVU7WUFDRiw0QkFBWTtZQUNkLGdDQUFjO09BVDdCLFlBQVksQ0FtQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBVc2VyVHlwZSB9IGZyb20gJy4uL21vZGVsL3VzZXIubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG4gICAgdXNlcjogVXNlck1vZGVsO1xyXG4gICAgdXNlclR5cGU6IFVzZXJUeXBlO1xyXG5cclxuICAgIHByaXZhdGUgdXNlclVybCA9ICdhcGkvdXNlcnMnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nZ2luZ1NlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgZ2V0TG9nZ2VkSW5Vc2VyKCk6IFVzZXJNb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyKHVzZXI6IFVzZXJNb2RlbCk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlci51c2VybmFtZSk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdiaXJ0aGRhdGUnLCB1c2VyLmJpcnRoZGF0ZS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlck1vZGVsW10+KHRoaXMudXNlclVybCwge3BhcmFtczogcGFyYW1zfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKHVzZXJzID0+IHVzZXJzWzBdKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCB1c2VybmFtZSA9ICR7dXNlci51c2VybmFtZX1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3I8VXNlck1vZGVsPihgZ2V0VXNlciB1c2VybmFtZSA9ICR7dXNlci51c2VybmFtZX1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvZ2dlZEluVXNlcih1c2VyOiBVc2VyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
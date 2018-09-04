"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var user_model_1 = require("../model/user.model");
var error_service_1 = require("../service/error.service");
var logging_service_1 = require("../service/logging.service");
var LoginService = /** @class */ (function () {
    function LoginService(http, errorService, logService) {
        this.http = http;
        this.errorService = errorService;
        this.logService = logService;
        this.user = user_model_1.UserModel;
        this.userType = user_model_1.UserType;
        this.userUrl = 'api/users';
    }
    LoginService.prototype.getUser = function (user) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('username', user.username);
        params = params.append('password', user.password);
        params = params.append('birthdate', user.birthdate.toString());
        return this.http.get(this.userUrl, { params: params })
            .pipe(operators_1.map(function (users) { return users[0]; }), operators_1.tap(function (_) { return _this.logService.log("fetched username = " + user.username); }), operators_1.catchError(this.errorService.handleError("getUser username = " + user.username)));
    };
    LoginService.prototype.getLoggedUser = function (user) {
        var _this = this;
        var data = {
            userid: user.id,
            username: user.username,
            birthdate: user.birthdate,
            usertype: user.usertype,
        };
        exports.data = data;
        return this.http.get(this.userUrl)
            .pipe(operators_1.map(function (data) { return data[0]; }), operators_1.tap(function (_) { return _this.logService.log("fetched username = " + user.username); }), operators_1.catchError(this.errorService.handleError("getUser username = " + user.username)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTJFO0FBRTNFLDRDQUFxRDtBQUVyRCxrREFBMEQ7QUFFMUQsMERBQXdEO0FBQ3hELDhEQUE0RDtBQUc1RDtJQU1JLHNCQUNZLElBQWdCLEVBQ2hCLFlBQTBCLEVBQzFCLFVBQTBCO1FBRjFCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFSdEMsU0FBSSxHQUFHLHNCQUFTLENBQUM7UUFDakIsYUFBUSxHQUFHLHFCQUFRLENBQUM7UUFFWixZQUFPLEdBQUcsV0FBVyxDQUFDO0lBTTFCLENBQUM7SUFFTCw4QkFBTyxHQUFQLFVBQVEsSUFBZTtRQUF2QixpQkFhQztRQVhHLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQ2hFLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLEVBQ3RCLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLHdCQUFzQixJQUFJLENBQUMsUUFBVSxDQUFDLEVBQTFELENBQTBELENBQUMsRUFDcEUsc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBWSx3QkFBc0IsSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDLENBQzlGLENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQWU7UUFBN0IsaUJBZUM7UUFkRyxJQUFJLElBQUksR0FBRztZQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM5QyxJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFQLENBQU8sQ0FBQyxFQUNwQixlQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsSUFBSSxDQUFDLFFBQVUsQ0FBQyxFQUExRCxDQUEwRCxDQUFDLEVBQ3BFLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQVksd0JBQXNCLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQyxDQUM5RixDQUFBO0lBQ0wsQ0FBQztJQTFDUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBUVMsaUJBQVU7WUFDRiw0QkFBWTtZQUNkLGdDQUFjO09BVDdCLFlBQVksQ0EyQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBVc2VyVHlwZSB9IGZyb20gJy4uL21vZGVsL3VzZXIubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG4gICAgdXNlciA9IFVzZXJNb2RlbDtcclxuICAgIHVzZXJUeXBlID0gVXNlclR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyVXJsID0gJ2FwaS91c2Vycyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dnaW5nU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBnZXRVc2VyKHVzZXI6IFVzZXJNb2RlbCk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlci51c2VybmFtZSk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdiaXJ0aGRhdGUnLCB1c2VyLmJpcnRoZGF0ZS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlck1vZGVsW10+KHRoaXMudXNlclVybCwge3BhcmFtczogcGFyYW1zfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKHVzZXJzID0+IHVzZXJzWzBdKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCB1c2VybmFtZSA9ICR7dXNlci51c2VybmFtZX1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3I8VXNlck1vZGVsPihgZ2V0VXNlciB1c2VybmFtZSA9ICR7dXNlci51c2VybmFtZX1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvZ2dlZFVzZXIodXNlcjogVXNlck1vZGVsKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcmlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgYmlydGhkYXRlOiB1c2VyLmJpcnRoZGF0ZSxcclxuICAgICAgICAgICAgdXNlcnR5cGU6IHVzZXIudXNlcnR5cGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBleHBvcnRzLmRhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyTW9kZWxbXT4odGhpcy51c2VyVXJsKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiBkYXRhWzBdKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCB1c2VybmFtZSA9ICR7dXNlci51c2VybmFtZX1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3I8VXNlck1vZGVsPihgZ2V0VXNlciB1c2VybmFtZSA9ICR7dXNlci51c2VybmFtZX1gKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19
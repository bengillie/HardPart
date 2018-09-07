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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQThEO0FBRTlELDRDQUFzRDtBQUl0RCwwREFBd0Q7QUFDeEQsOERBQTREO0FBRzVEO0lBTUksc0JBQ1ksSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsVUFBMEI7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUw5QixZQUFPLEdBQUcsV0FBVyxDQUFDO0lBTTFCLENBQUM7SUFFTCxzQ0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxJQUFlO1FBQXZCLGlCQWFDO1FBWEcsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDaEUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBUixDQUFRLENBQUMsRUFDdEIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsd0JBQXNCLElBQUksQ0FBQyxRQUFVLENBQUMsRUFBMUQsQ0FBMEQsQ0FBQyxFQUNwRSxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFZLHdCQUFzQixJQUFJLENBQUMsUUFBVSxDQUFDLENBQUMsQ0FDOUYsQ0FBQztJQUNOLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQWpDUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBUVMsaUJBQVU7WUFDRiw0QkFBWTtZQUNkLGdDQUFjO09BVDdCLFlBQVksQ0FtQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJzsgXHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIFVzZXJUeXBlIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvbG9nZ2luZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcbiAgICB1c2VyOiBVc2VyTW9kZWw7XHJcbiAgICB1c2VyVHlwZTogVXNlclR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyVXJsID0gJ2FwaS91c2Vycyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dnaW5nU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBnZXRMb2dnZWRJblVzZXIoKTogVXNlck1vZGVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXIodXNlcjogVXNlck1vZGVsKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VyLnVzZXJuYW1lKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2JpcnRoZGF0ZScsIHVzZXIuYmlydGhkYXRlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyTW9kZWxbXT4odGhpcy51c2VyVXJsLCB7cGFyYW1zOiBwYXJhbXN9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAodXNlcnMgPT4gdXNlcnNbMF0pLFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZ1NlcnZpY2UubG9nKGBmZXRjaGVkIHVzZXJuYW1lID0gJHt1c2VyLnVzZXJuYW1lfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcjxVc2VyTW9kZWw+KGBnZXRVc2VyIHVzZXJuYW1lID0gJHt1c2VyLnVzZXJuYW1lfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9nZ2VkSW5Vc2VyKHVzZXI6IFVzZXJNb2RlbCkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
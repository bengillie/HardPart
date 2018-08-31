"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("nativescript-angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var user_model_1 = require("../model/user.model");
var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
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
            .pipe(operators_1.map(function (users) { return users[0]; }), operators_1.tap(function (_) { return _this.log("fetched username = " + user.username); }), operators_1.catchError(this.handleError("getUser username = " + user.username)));
    };
    LoginService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return rxjs_1.of(result);
        };
    };
    // Log error 
    LoginService.prototype.log = function (message) {
        console.log('LoginService: ' + message);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.RouterExtensions])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTJFO0FBQzNFLHNEQUE4RDtBQUM5RCw2QkFBc0M7QUFDdEMsNENBQXFEO0FBRXJELGtEQUEwRDtBQUcxRDtJQU9JLHNCQUNZLElBQWdCLEVBQ2hCLE1BQXdCO1FBRHhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQcEMsU0FBSSxHQUFHLHNCQUFTLENBQUM7UUFDakIsYUFBUSxHQUFHLHFCQUFRLENBQUM7UUFFWixZQUFPLEdBQUcsV0FBVyxDQUFDO0lBSzFCLENBQUM7SUFFTCw4QkFBTyxHQUFQLFVBQVEsSUFBZTtRQUF2QixpQkFhQztRQVhHLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQ2hFLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLEVBQ3RCLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXNCLElBQUksQ0FBQyxRQUFVLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxFQUN6RCxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksd0JBQXNCLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQyxDQUNqRixDQUFDO0lBQ04sQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQXdCLFNBQXVCLEVBQUUsTUFBVTtRQUEzRCxpQkFNQztRQU51QiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMzQyxNQUFNLENBQUMsVUFBQyxLQUFVO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLEdBQUcsQ0FBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsU0FBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxhQUFhO0lBQ0wsMEJBQUcsR0FBWCxVQUFZLE9BQWU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBdENRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FTUyxpQkFBVTtZQUNSLHlCQUFnQjtPQVQzQixZQUFZLENBdUN4QjtJQUFELG1CQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvcixtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJzsgXG5cbmltcG9ydCB7IFVzZXJNb2RlbCwgVXNlclR5cGUgfSBmcm9tICcuLi9tb2RlbC91c2VyLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG5cbiAgICB1c2VyID0gVXNlck1vZGVsO1xuICAgIHVzZXJUeXBlID0gVXNlclR5cGU7XG5cbiAgICBwcml2YXRlIHVzZXJVcmwgPSAnYXBpL3VzZXJzJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIGdldFVzZXIodXNlcjogVXNlck1vZGVsKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcblxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VyLnVzZXJuYW1lKTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnYmlydGhkYXRlJywgdXNlci5iaXJ0aGRhdGUudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlck1vZGVsW10+KHRoaXMudXNlclVybCwge3BhcmFtczogcGFyYW1zfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAodXNlcnMgPT4gdXNlcnNbMF0pLFxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2coYGZldGNoZWQgdXNlcm5hbWUgPSAke3VzZXIudXNlcm5hbWV9YCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPFVzZXJNb2RlbD4oYGdldFVzZXIgdXNlcm5hbWUgPSAke3VzZXIudXNlcm5hbWV9YCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPiAob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcbiAgICAgICAgcmV0dXJuIChlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxUPiA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAvLyBMb2cgZXJyb3IgXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpblNlcnZpY2U6ICcgKyBtZXNzYWdlKTtcbiAgICB9XG59XG4iXX0=
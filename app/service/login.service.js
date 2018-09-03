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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTJFO0FBQzNFLHNEQUE4RDtBQUM5RCw2QkFBc0M7QUFDdEMsNENBQXFEO0FBRXJELGtEQUEwRDtBQUcxRDtJQU9JLHNCQUNZLElBQWdCLEVBQ2hCLE1BQXdCO1FBRHhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQcEMsU0FBSSxHQUFHLHNCQUFTLENBQUM7UUFDakIsYUFBUSxHQUFHLHFCQUFRLENBQUM7UUFFWixZQUFPLEdBQUcsV0FBVyxDQUFDO0lBSzFCLENBQUM7SUFFTCw4QkFBTyxHQUFQLFVBQVEsSUFBZTtRQUF2QixpQkFhQztRQVhHLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQ2hFLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLEVBQ3RCLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXNCLElBQUksQ0FBQyxRQUFVLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxFQUN6RCxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksd0JBQXNCLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQyxDQUNqRixDQUFDO0lBQ04sQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQXdCLFNBQXVCLEVBQUUsTUFBVTtRQUEzRCxpQkFNQztRQU51QiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMzQyxNQUFNLENBQUMsVUFBQyxLQUFVO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLEdBQUcsQ0FBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsU0FBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxhQUFhO0lBQ0wsMEJBQUcsR0FBWCxVQUFZLE9BQWU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBdENRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FTUyxpQkFBVTtZQUNSLHlCQUFnQjtPQVQzQixZQUFZLENBdUN4QjtJQUFELG1CQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnOyBcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCwgVXNlclR5cGUgfSBmcm9tICcuLi9tb2RlbC91c2VyLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcblxyXG4gICAgdXNlciA9IFVzZXJNb2RlbDtcclxuICAgIHVzZXJUeXBlID0gVXNlclR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyVXJsID0gJ2FwaS91c2Vycyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGdldFVzZXIodXNlcjogVXNlck1vZGVsKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VyLnVzZXJuYW1lKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2JpcnRoZGF0ZScsIHVzZXIuYmlydGhkYXRlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyTW9kZWxbXT4odGhpcy51c2VyVXJsLCB7cGFyYW1zOiBwYXJhbXN9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAodXNlcnMgPT4gdXNlcnNbMF0pLFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgZmV0Y2hlZCB1c2VybmFtZSA9ICR7dXNlci51c2VybmFtZX1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxVc2VyTW9kZWw+KGBnZXRVc2VyIHVzZXJuYW1lID0gJHt1c2VyLnVzZXJuYW1lfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPiAob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcclxuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTG9nIGVycm9yIFxyXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luU2VydmljZTogJyArIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
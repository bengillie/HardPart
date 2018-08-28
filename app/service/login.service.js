"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var user_model_1 = require("../model/user.model");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.user = user_model_1.UserModel;
        this.userType = user_model_1.UserType;
        this.userUrl = 'api/users';
    }
    LoginService.prototype.getUser = function () {
        var _this = this;
        return this.http.get(this.userUrl)
            .pipe(operators_1.tap(function (user) { return _this.log('fetched user'); }), operators_1.catchError(this.handleError('getUser', [])));
    };
    LoginService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    // Log error 
    LoginService.prototype.log = function (message) {
        console.error('LoginService: ' + message);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBQy9ELDRDQUFzRDtBQUN0RCw2QkFBc0M7QUFFdEMsa0RBQTBEO0FBRTFELElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNuRSxDQUFDO0FBR0Y7SUFPSSxzQkFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTjVCLFNBQUksR0FBRyxzQkFBUyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxxQkFBUSxDQUFDO1FBRVosWUFBTyxHQUFHLFdBQVcsQ0FBQztJQUkxQixDQUFDO0lBRUwsOEJBQU8sR0FBUDtRQUFBLGlCQU1DO1FBTEcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDOUMsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQXhCLENBQXdCLENBQUMsRUFDckMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUM5QyxDQUFDO0lBQ04sQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQXdCLFNBQXVCLEVBQUUsTUFBVTtRQUEzRCxpQkFVQztRQVZ1QiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMzQyxNQUFNLENBQUMsVUFBQyxLQUFVO1lBRWhCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7WUFFL0MsS0FBSSxDQUFDLEdBQUcsQ0FBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztZQUVsRCx5REFBeUQ7WUFDekQsTUFBTSxDQUFDLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsYUFBYTtJQUNMLDBCQUFHLEdBQVgsVUFBWSxPQUFlO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQWxDUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBU1MsaUJBQVU7T0FSbkIsWUFBWSxDQW1DeEI7SUFBRCxtQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFVzZXJNb2RlbCwgVXNlclR5cGUgfSBmcm9tICcuLi9tb2RlbC91c2VyLm1vZGVsJztcblxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG5cbiAgICB1c2VyID0gVXNlck1vZGVsO1xuICAgIHVzZXJUeXBlID0gVXNlclR5cGU7XG5cbiAgICBwcml2YXRlIHVzZXJVcmwgPSAnYXBpL3VzZXJzJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgICApIHsgfVxuICAgIFxuICAgIGdldFVzZXIgKCk6IE9ic2VydmFibGU8VXNlck1vZGVsW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlck1vZGVsW10+KHRoaXMudXNlclVybClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YXAodXNlciA9PiB0aGlzLmxvZygnZmV0Y2hlZCB1c2VyJykpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRVc2VyJywgW10pKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3I8VD4gKG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xuICAgIFxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gICAgXG4gICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICBcbiAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cbiAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAvLyBMb2cgZXJyb3IgXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luU2VydmljZTogJyArIG1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdfQ==
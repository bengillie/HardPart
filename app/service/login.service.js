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
    /* getUser (): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.userUrl)
        .pipe(
            tap(user => this.log('fetched user')),
            catchError(this.handleError('getUser', []))
        );
    } */
    LoginService.prototype.getUser = function (userDetail) {
        var _this = this;
        var url = this.userUrl + "/" + userDetail;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched username=" + userDetail); }), operators_1.catchError(this.handleError("getUsername id=" + userDetail)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBQy9ELDRDQUFzRDtBQUN0RCw2QkFBc0M7QUFFdEMsa0RBQTBEO0FBRTFELElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNuRSxDQUFDO0FBR0Y7SUFPSSxzQkFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTjVCLFNBQUksR0FBRyxzQkFBUyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxxQkFBUSxDQUFDO1FBRVosWUFBTyxHQUFHLFdBQVcsQ0FBQztJQUkxQixDQUFDO0lBRUw7Ozs7OztRQU1JO0lBRUosOEJBQU8sR0FBUCxVQUFRLFVBQXFCO1FBQTdCLGlCQU1DO1FBTEcsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLE9BQU8sU0FBSSxVQUFZLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDdkMsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsVUFBWSxDQUFDLEVBQTFDLENBQTBDLENBQUMsRUFDcEQsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFZLG9CQUFrQixVQUFZLENBQUMsQ0FBQyxDQUN4RSxDQUFDO0lBQ04sQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQXdCLFNBQXVCLEVBQUUsTUFBVTtRQUEzRCxpQkFVQztRQVZ1QiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMzQyxNQUFNLENBQUMsVUFBQyxLQUFVO1lBRWhCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7WUFFL0MsS0FBSSxDQUFDLEdBQUcsQ0FBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztZQUVsRCx5REFBeUQ7WUFDekQsTUFBTSxDQUFDLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsYUFBYTtJQUNMLDBCQUFHLEdBQVgsVUFBWSxPQUFlO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQTFDUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBU1MsaUJBQVU7T0FSbkIsWUFBWSxDQTJDeEI7SUFBRCxtQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIFVzZXJUeXBlIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcblxyXG4gICAgdXNlciA9IFVzZXJNb2RlbDtcclxuICAgIHVzZXJUeXBlID0gVXNlclR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyVXJsID0gJ2FwaS91c2Vycyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHsgfVxyXG4gICAgXHJcbiAgICAvKiBnZXRVc2VyICgpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlck1vZGVsW10+KHRoaXMudXNlclVybClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgdGFwKHVzZXIgPT4gdGhpcy5sb2coJ2ZldGNoZWQgdXNlcicpKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRVc2VyJywgW10pKVxyXG4gICAgICAgICk7XHJcbiAgICB9ICovXHJcblxyXG4gICAgZ2V0VXNlcih1c2VyRGV0YWlsOiBVc2VyTW9kZWwpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLnVzZXJVcmx9LyR7dXNlckRldGFpbH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXJNb2RlbD4odXJsKS5waXBlKFxyXG4gICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2coYGZldGNoZWQgdXNlcm5hbWU9JHt1c2VyRGV0YWlsfWApKSxcclxuICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxVc2VyTW9kZWw+KGBnZXRVc2VybmFtZSBpZD0ke3VzZXJEZXRhaWx9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+IChvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xyXG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG4gICAgXHJcbiAgICAgICAgICB0aGlzLmxvZyhgJHtvcGVyYXRpb259IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgXHJcbiAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cclxuICAgICAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTG9nIGVycm9yIFxyXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTG9naW5TZXJ2aWNlOiAnICsgbWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
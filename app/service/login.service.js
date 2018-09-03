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
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_service_1.ErrorService,
            logging_service_1.LoggingService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTJFO0FBRzNFLDRDQUFxRDtBQUVyRCxrREFBMEQ7QUFFMUQsMERBQXdEO0FBQ3hELDhEQUE0RDtBQUc1RDtJQU1JLHNCQUNZLElBQWdCLEVBQ2hCLFlBQTBCLEVBQzFCLFVBQTBCO1FBRjFCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFSdEMsU0FBSSxHQUFHLHNCQUFTLENBQUM7UUFDakIsYUFBUSxHQUFHLHFCQUFRLENBQUM7UUFFWixZQUFPLEdBQUcsV0FBVyxDQUFDO0lBTTFCLENBQUM7SUFFTCw4QkFBTyxHQUFQLFVBQVEsSUFBZTtRQUF2QixpQkFhQztRQVhHLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQ2hFLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLEVBQ3RCLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLHdCQUFzQixJQUFJLENBQUMsUUFBVSxDQUFDLEVBQTFELENBQTBELENBQUMsRUFDcEUsc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBWSx3QkFBc0IsSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDLENBQzlGLENBQUM7SUFDTixDQUFDO0lBekJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FRUyxpQkFBVTtZQUNGLDRCQUFZO1lBQ2QsZ0NBQWM7T0FUN0IsWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvcixtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJzsgXHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIFVzZXJUeXBlIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvbG9nZ2luZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcbiAgICB1c2VyID0gVXNlck1vZGVsO1xyXG4gICAgdXNlclR5cGUgPSBVc2VyVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIHVzZXJVcmwgPSAnYXBpL3VzZXJzJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGdldFVzZXIodXNlcjogVXNlck1vZGVsKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VyLnVzZXJuYW1lKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2JpcnRoZGF0ZScsIHVzZXIuYmlydGhkYXRlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyTW9kZWxbXT4odGhpcy51c2VyVXJsLCB7cGFyYW1zOiBwYXJhbXN9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAodXNlcnMgPT4gdXNlcnNbMF0pLFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZ1NlcnZpY2UubG9nKGBmZXRjaGVkIHVzZXJuYW1lID0gJHt1c2VyLnVzZXJuYW1lfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcjxVc2VyTW9kZWw+KGBnZXRVc2VyIHVzZXJuYW1lID0gJHt1c2VyLnVzZXJuYW1lfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
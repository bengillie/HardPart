"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var error_service_1 = require("../service/error.service");
var logging_service_1 = require("../service/logging.service");
var login_service_1 = require("~/service/login.service");
var TimetableService = /** @class */ (function () {
    function TimetableService(http, errorService, logService, loginService) {
        this.http = http;
        this.errorService = errorService;
        this.logService = logService;
        this.loginService = loginService;
        this.url = 'api/';
    }
    TimetableService.prototype.getLessons = function () {
        var _this = this;
        var loggedInUser = this.loginService.getLoggedInUser();
        var params = new http_1.HttpParams();
        params = params.append('userId', loggedInUser.id.toString());
        return this.http.get(this.url + "lessons", { params: params })
            .pipe(operators_1.map(function (lesson) { return lesson; }), operators_1.tap(function (_) { return _this.logService.log("fetched lessons for user id = " + loggedInUser.id.toString()); }), operators_1.catchError(this.errorService.handleError("getLesson user id = " + loggedInUser.id.toString())));
    };
    TimetableService.prototype.getPeriods = function (startDate, endDate) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('startDate', startDate.toString());
        params = params.append('endDate', endDate.toString());
        // TODO - only get periods between a set of dates by passing in params.
        return this.http.get(this.url + "periods")
            .pipe(operators_1.map(function (periods) { return periods; }), operators_1.tap(function (_) { return _this.logService.log("fetched period = " + startDate.toString()); }), operators_1.catchError(this.errorService.handleError("getPeriod period = " + startDate.toString())));
    };
    TimetableService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_service_1.ErrorService,
            logging_service_1.LoggingService,
            login_service_1.LoginService])
    ], TimetableService);
    return TimetableService;
}());
exports.TimetableService = TimetableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1ldGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBOEQ7QUFFOUQsNENBQXNEO0FBRXRELDBEQUF3RDtBQUN4RCw4REFBNEQ7QUFHNUQseURBQXVEO0FBSXZEO0lBR0ksMEJBQ1ksSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsVUFBMEIsRUFDMUIsWUFBMEI7UUFIMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU45QixRQUFHLEdBQUcsTUFBTSxDQUFDO0lBT2pCLENBQUM7SUFFTCxxQ0FBVSxHQUFWO1FBQUEsaUJBV0M7UUFWRyxJQUFNLFlBQVksR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BFLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQ3JFLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLEVBQU4sQ0FBTSxDQUFDLEVBQ3JCLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLG1DQUFpQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBSSxDQUFDLEVBQWxGLENBQWtGLENBQUMsRUFDNUYsc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBVyx5QkFBdUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDLENBQzNHLENBQUM7SUFDTixDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLFNBQWUsRUFBRSxPQUFhO1FBQXpDLGlCQVlDO1FBWEcsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV0RCx1RUFBdUU7UUFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO2FBQ25ELElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLEVBQVAsQ0FBTyxDQUFDLEVBQ3ZCLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLHNCQUFvQixTQUFTLENBQUMsUUFBUSxFQUFJLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQyxFQUN6RSxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFXLHdCQUFzQixTQUFTLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQyxDQUNwRyxDQUFDO0lBQ04sQ0FBQztJQW5DUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FLUyxpQkFBVTtZQUNGLDRCQUFZO1lBQ2QsZ0NBQWM7WUFDWiw0QkFBWTtPQVA3QixnQkFBZ0IsQ0FvQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxyXG5cclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBMZXNzb24sIFBlcmlvZCB9IGZyb20gJy4uL21vZGVsL3RpbWV0YWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnfi9tb2RlbC91c2VyLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRpbWV0YWJsZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmwgPSAnYXBpLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG4gICAgXHJcbiAgICBnZXRMZXNzb25zKCk6IE9ic2VydmFibGU8TGVzc29uW10+IHtcclxuICAgICAgICBjb25zdCBsb2dnZWRJblVzZXI6IFVzZXJNb2RlbCA9IHRoaXMubG9naW5TZXJ2aWNlLmdldExvZ2dlZEluVXNlcigpO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3VzZXJJZCcsIGxvZ2dlZEluVXNlci5pZC50b1N0cmluZygpKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxMZXNzb25bXT4odGhpcy51cmwgKyBcImxlc3NvbnNcIiwge3BhcmFtczogcGFyYW1zfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKGxlc3NvbiA9PiBsZXNzb24pLFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZ1NlcnZpY2UubG9nKGBmZXRjaGVkIGxlc3NvbnMgZm9yIHVzZXIgaWQgPSAke2xvZ2dlZEluVXNlci5pZC50b1N0cmluZygpfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcjxMZXNzb25bXT4oYGdldExlc3NvbiB1c2VyIGlkID0gJHtsb2dnZWRJblVzZXIuaWQudG9TdHJpbmcoKX1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBlcmlvZHMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogT2JzZXJ2YWJsZTxQZXJpb2RbXT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3N0YXJ0RGF0ZScsIHN0YXJ0RGF0ZS50b1N0cmluZygpKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdlbmREYXRlJywgZW5kRGF0ZS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETyAtIG9ubHkgZ2V0IHBlcmlvZHMgYmV0d2VlbiBhIHNldCBvZiBkYXRlcyBieSBwYXNzaW5nIGluIHBhcmFtcy5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQZXJpb2RbXT4odGhpcy51cmwgKyBcInBlcmlvZHNcIilcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKHBlcmlvZHMgPT4gcGVyaW9kcyksXHJcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nU2VydmljZS5sb2coYGZldGNoZWQgcGVyaW9kID0gJHtzdGFydERhdGUudG9TdHJpbmcoKX1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3I8UGVyaW9kW10+KGBnZXRQZXJpb2QgcGVyaW9kID0gJHtzdGFydERhdGUudG9TdHJpbmcoKX1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
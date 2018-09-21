"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var error_service_1 = require("../service/error.service");
var logging_service_1 = require("../service/logging.service");
var appvalues_service_1 = require("~/service/appvalues.service");
var TimetableService = /** @class */ (function () {
    function TimetableService(http, appValuesService, errorService, logService) {
        this.http = http;
        this.appValuesService = appValuesService;
        this.errorService = errorService;
        this.logService = logService;
        this.url = 'api/';
    }
    TimetableService.prototype.getLessons = function () {
        var _this = this;
        var loggedInUser = this.appValuesService.getLoggedInUser();
        var params = new http_1.HttpParams();
        params = params.append('userId', loggedInUser.id.toString());
        return this.http.get(this.url + "lessons", { params: params })
            .pipe(operators_1.map(function (lesson) { return lesson; }), operators_1.tap(function (_) { return _this.logService.log("fetched lessons for student id = " + loggedInUser.id.toString()); }), operators_1.catchError(this.errorService.handleError("getLesson student id = " + loggedInUser.id.toString())));
    };
    TimetableService.prototype.getPeriods = function (startDate, endDate) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('startDate', startDate.toString());
        params = params.append('endDate', endDate.toString());
        // TODO - only get periods between a set of dates by passing in params.
        return this.http.get(this.url + "periods")
            .pipe(operators_1.map(function (periods) { return periods; }), operators_1.tap(function (_) { return _this.logService.log("fetched period = " + startDate.toString() + " to " + endDate.toString()); }), operators_1.catchError(this.errorService.handleError("getPeriod period = " + startDate.toString() + " to " + endDate.toString())));
    };
    TimetableService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            appvalues_service_1.AppValuesService,
            error_service_1.ErrorService,
            logging_service_1.LoggingService])
    ], TimetableService);
    return TimetableService;
}());
exports.TimetableService = TimetableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1ldGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBOEQ7QUFFOUQsNENBQXNEO0FBRXRELDBEQUF3RDtBQUN4RCw4REFBNEQ7QUFHNUQsaUVBQStEO0FBSS9EO0lBR0ksMEJBQ1ksSUFBZ0IsRUFDaEIsZ0JBQWtDLEVBQ2xDLFlBQTBCLEVBQzFCLFVBQTBCO1FBSDFCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQU45QixRQUFHLEdBQUcsTUFBTSxDQUFDO0lBT2pCLENBQUM7SUFFTCxxQ0FBVSxHQUFWO1FBQUEsaUJBV0M7UUFWRyxJQUFNLFlBQVksR0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkUsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDckUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sRUFBTixDQUFNLENBQUMsRUFDckIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsc0NBQW9DLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFJLENBQUMsRUFBckYsQ0FBcUYsQ0FBQyxFQUMvRixzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFXLDRCQUEwQixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUMsQ0FDOUcsQ0FBQztJQUNOLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsU0FBZSxFQUFFLE9BQWE7UUFBekMsaUJBWUM7UUFYRyxJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXRELHVFQUF1RTtRQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7YUFDbkQsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUMsRUFDdkIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsc0JBQW9CLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBTyxPQUFPLENBQUMsUUFBUSxFQUFJLENBQUMsRUFBeEYsQ0FBd0YsQ0FBQyxFQUNsRyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFXLHdCQUFzQixTQUFTLENBQUMsUUFBUSxFQUFFLFlBQU8sT0FBTyxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUMsQ0FDN0gsQ0FBQztJQUNOLENBQUM7SUFuQ1EsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBS1MsaUJBQVU7WUFDRSxvQ0FBZ0I7WUFDcEIsNEJBQVk7WUFDZCxnQ0FBYztPQVA3QixnQkFBZ0IsQ0FvQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxyXG5cclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBMZXNzb24sIFBlcmlvZCB9IGZyb20gJy4uL21vZGVsL3RpbWV0YWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYXBwdmFsdWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9tb2RlbC91c2VyLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRpbWV0YWJsZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmwgPSAnYXBpLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgYXBwVmFsdWVzU2VydmljZTogQXBwVmFsdWVzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nZ2luZ1NlcnZpY2VcclxuICAgICkgeyB9XHJcbiAgICBcclxuICAgIGdldExlc3NvbnMoKTogT2JzZXJ2YWJsZTxMZXNzb25bXT4ge1xyXG4gICAgICAgIGNvbnN0IGxvZ2dlZEluVXNlcjogVXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCd1c2VySWQnLCBsb2dnZWRJblVzZXIuaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8TGVzc29uW10+KHRoaXMudXJsICsgXCJsZXNzb25zXCIsIHtwYXJhbXM6IHBhcmFtc30pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChsZXNzb24gPT4gbGVzc29uKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCBsZXNzb25zIGZvciBzdHVkZW50IGlkID0gJHtsb2dnZWRJblVzZXIuaWQudG9TdHJpbmcoKX1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3I8TGVzc29uW10+KGBnZXRMZXNzb24gc3R1ZGVudCBpZCA9ICR7bG9nZ2VkSW5Vc2VyLmlkLnRvU3RyaW5nKCl9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJpb2RzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IE9ic2VydmFibGU8UGVyaW9kW10+IHtcclxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdzdGFydERhdGUnLCBzdGFydERhdGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnZW5kRGF0ZScsIGVuZERhdGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVE9ETyAtIG9ubHkgZ2V0IHBlcmlvZHMgYmV0d2VlbiBhIHNldCBvZiBkYXRlcyBieSBwYXNzaW5nIGluIHBhcmFtcy5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQZXJpb2RbXT4odGhpcy51cmwgKyBcInBlcmlvZHNcIilcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKHBlcmlvZHMgPT4gcGVyaW9kcyksXHJcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nU2VydmljZS5sb2coYGZldGNoZWQgcGVyaW9kID0gJHtzdGFydERhdGUudG9TdHJpbmcoKX0gdG8gJHtlbmREYXRlLnRvU3RyaW5nKCl9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yPFBlcmlvZFtdPihgZ2V0UGVyaW9kIHBlcmlvZCA9ICR7c3RhcnREYXRlLnRvU3RyaW5nKCl9IHRvICR7ZW5kRGF0ZS50b1N0cmluZygpfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
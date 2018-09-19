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
            appvalues_service_1.AppValuesService,
            error_service_1.ErrorService,
            logging_service_1.LoggingService])
    ], TimetableService);
    return TimetableService;
}());
exports.TimetableService = TimetableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1ldGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBOEQ7QUFFOUQsNENBQXNEO0FBRXRELDBEQUF3RDtBQUN4RCw4REFBNEQ7QUFHNUQsaUVBQStEO0FBSS9EO0lBR0ksMEJBQ1ksSUFBZ0IsRUFDaEIsZ0JBQWtDLEVBQ2xDLFlBQTBCLEVBQzFCLFVBQTBCO1FBSDFCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQU45QixRQUFHLEdBQUcsTUFBTSxDQUFDO0lBT2pCLENBQUM7SUFFTCxxQ0FBVSxHQUFWO1FBQUEsaUJBV0M7UUFWRyxJQUFNLFlBQVksR0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkUsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDckUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sRUFBTixDQUFNLENBQUMsRUFDckIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUNBQWlDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFJLENBQUMsRUFBbEYsQ0FBa0YsQ0FBQyxFQUM1RixzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFXLHlCQUF1QixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUMsQ0FDM0csQ0FBQztJQUNOLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsU0FBZSxFQUFFLE9BQWE7UUFBekMsaUJBWUM7UUFYRyxJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXRELHVFQUF1RTtRQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7YUFDbkQsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUMsRUFDdkIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsc0JBQW9CLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxFQUEvRCxDQUErRCxDQUFDLEVBQ3pFLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQVcsd0JBQXNCLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDLENBQ3BHLENBQUM7SUFDTixDQUFDO0lBbkNRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUtTLGlCQUFVO1lBQ0Usb0NBQWdCO1lBQ3BCLDRCQUFZO1lBQ2QsZ0NBQWM7T0FQN0IsZ0JBQWdCLENBb0M1QjtJQUFELHVCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnOyBcclxuXHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZXJyb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTGVzc29uLCBQZXJpb2QgfSBmcm9tICcuLi9tb2RlbC90aW1ldGFibGUubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ34vbW9kZWwvdXNlci5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1ldGFibGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdXJsID0gJ2FwaS8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIGFwcFZhbHVlc1NlcnZpY2U6IEFwcFZhbHVlc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG4gICAgXHJcbiAgICBnZXRMZXNzb25zKCk6IE9ic2VydmFibGU8TGVzc29uW10+IHtcclxuICAgICAgICBjb25zdCBsb2dnZWRJblVzZXI6IFVzZXIgPSB0aGlzLmFwcFZhbHVlc1NlcnZpY2UuZ2V0TG9nZ2VkSW5Vc2VyKCk7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgndXNlcklkJywgbG9nZ2VkSW5Vc2VyLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PExlc3NvbltdPih0aGlzLnVybCArIFwibGVzc29uc1wiLCB7cGFyYW1zOiBwYXJhbXN9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAobGVzc29uID0+IGxlc3NvbiksXHJcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nU2VydmljZS5sb2coYGZldGNoZWQgbGVzc29ucyBmb3IgdXNlciBpZCA9ICR7bG9nZ2VkSW5Vc2VyLmlkLnRvU3RyaW5nKCl9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yPExlc3NvbltdPihgZ2V0TGVzc29uIHVzZXIgaWQgPSAke2xvZ2dlZEluVXNlci5pZC50b1N0cmluZygpfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVyaW9kcyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBPYnNlcnZhYmxlPFBlcmlvZFtdPiB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnc3RhcnREYXRlJywgc3RhcnREYXRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2VuZERhdGUnLCBlbmREYXRlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAvLyBUT0RPIC0gb25seSBnZXQgcGVyaW9kcyBiZXR3ZWVuIGEgc2V0IG9mIGRhdGVzIGJ5IHBhc3NpbmcgaW4gcGFyYW1zLlxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBlcmlvZFtdPih0aGlzLnVybCArIFwicGVyaW9kc1wiKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAocGVyaW9kcyA9PiBwZXJpb2RzKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCBwZXJpb2QgPSAke3N0YXJ0RGF0ZS50b1N0cmluZygpfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcjxQZXJpb2RbXT4oYGdldFBlcmlvZCBwZXJpb2QgPSAke3N0YXJ0RGF0ZS50b1N0cmluZygpfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
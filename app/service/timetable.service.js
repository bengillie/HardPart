"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var appvalues_service_1 = require("~/service/appvalues.service");
var error_service_1 = require("../service/error.service");
var httpservice_service_1 = require("../service/httpservice.service");
var logging_service_1 = require("../service/logging.service");
var TimetableService = /** @class */ (function () {
    function TimetableService(appValuesService, errorService, httpService, logService) {
        this.appValuesService = appValuesService;
        this.errorService = errorService;
        this.httpService = httpService;
        this.logService = logService;
        this.url_lesson = 'lesson';
        this.url_period = 'period';
    }
    TimetableService.prototype.getLessons = function (dateRange) {
        var _this = this;
        var selectedStudent = this.appValuesService.getSelectedStudent();
        var params = new http_1.HttpParams();
        params = params.append('userId', selectedStudent.id.toString());
        params = params.append('startDate', JSON.stringify(dateRange));
        params = params.append('endDate', JSON.stringify(dateRange));
        return this.httpService.get(this.url_lesson, params)
            .pipe(operators_1.map(function (lesson) { return lesson; }), operators_1.tap(function (_) { return _this.logService.log("fetched lessons for student id = " + selectedStudent.id.toString()); }), operators_1.catchError(this.errorService.handleError("getLesson student id = " + selectedStudent.id.toString())));
    };
    TimetableService.prototype.getPeriods = function (dateRange) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('startDate', JSON.stringify(dateRange));
        params = params.append('endDate', JSON.stringify(dateRange));
        return this.httpService.get(this.url_period, params)
            .pipe(operators_1.map(function (periods) { return periods; }), operators_1.tap(function (_) { return _this.logService.log("fetched period from " + dateRange[0] + " to " + dateRange[dateRange.length - 1]); }), operators_1.catchError(this.errorService.handleError("getPeriods(): period = " + dateRange[0] + " to " + dateRange[dateRange.length - 1])));
    };
    TimetableService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService,
            error_service_1.ErrorService,
            httpservice_service_1.HttpService,
            logging_service_1.LoggingService])
    ], TimetableService);
    return TimetableService;
}());
exports.TimetableService = TimetableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1ldGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFFbEQsNENBQXNEO0FBTXRELGlFQUErRDtBQUMvRCwwREFBd0Q7QUFDeEQsc0VBQTZEO0FBQzdELDhEQUE0RDtBQUc1RDtJQUlJLDBCQUFvQixnQkFBa0MsRUFDMUMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsVUFBMEI7UUFIbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQU45QixlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxRQUFRLENBQUM7SUFLWSxDQUFDO0lBRTNDLHFDQUFVLEdBQVYsVUFBVyxTQUFtQjtRQUE5QixpQkFhQztRQVpHLElBQU0sZUFBZSxHQUFTLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3pFLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRTdELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBVyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQzthQUM3RCxJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQyxFQUNyQixlQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxzQ0FBb0MsZUFBZSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUksQ0FBQyxFQUF4RixDQUF3RixDQUFDLEVBQ2xHLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQVcsNEJBQTBCLGVBQWUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQyxDQUNqSCxDQUFDO0lBQ04sQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxTQUFtQjtRQUE5QixpQkFXQztRQVZHLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7YUFDN0QsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUMsRUFDdkIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMseUJBQXVCLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBTyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUcsQ0FBQyxFQUE5RixDQUE4RixDQUFDLEVBQ3hHLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQVcsNEJBQTBCLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBTyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDLENBQ3BJLENBQUM7SUFDTixDQUFDO0lBbkNRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUs2QixvQ0FBZ0I7WUFDNUIsNEJBQVk7WUFDYixpQ0FBVztZQUNaLGdDQUFjO09BUDdCLGdCQUFnQixDQW9DNUI7SUFBRCx1QkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMZXNzb24sIFBlcmlvZCB9IGZyb20gJy4uL21vZGVsL3RpbWV0YWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L21vZGVsL3VzZXIubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgQXBwVmFsdWVzU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9hcHB2YWx1ZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZXJyb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9odHRwc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1ldGFibGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdXJsX2xlc3NvbiA9ICdsZXNzb24nO1xyXG4gICAgcHJpdmF0ZSB1cmxfcGVyaW9kID0gJ3BlcmlvZCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBWYWx1ZXNTZXJ2aWNlOiBBcHBWYWx1ZXNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSkgeyB9XHJcblxyXG4gICAgZ2V0TGVzc29ucyhkYXRlUmFuZ2U6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxMZXNzb25bXT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU3R1ZGVudDogVXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRTZWxlY3RlZFN0dWRlbnQoKTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCd1c2VySWQnLCBzZWxlY3RlZFN0dWRlbnQuaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnc3RhcnREYXRlJywgSlNPTi5zdHJpbmdpZnkoZGF0ZVJhbmdlKSk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnZW5kRGF0ZScsIEpTT04uc3RyaW5naWZ5KGRhdGVSYW5nZSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldDxMZXNzb25bXT4odGhpcy51cmxfbGVzc29uLCBwYXJhbXMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChsZXNzb24gPT4gbGVzc29uKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCBsZXNzb25zIGZvciBzdHVkZW50IGlkID0gJHtzZWxlY3RlZFN0dWRlbnQuaWQudG9TdHJpbmcoKX1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3I8TGVzc29uW10+KGBnZXRMZXNzb24gc3R1ZGVudCBpZCA9ICR7c2VsZWN0ZWRTdHVkZW50LmlkLnRvU3RyaW5nKCl9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJpb2RzKGRhdGVSYW5nZTogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFBlcmlvZFtdPiB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnc3RhcnREYXRlJywgSlNPTi5zdHJpbmdpZnkoZGF0ZVJhbmdlKSk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnZW5kRGF0ZScsIEpTT04uc3RyaW5naWZ5KGRhdGVSYW5nZSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldDxQZXJpb2RbXT4odGhpcy51cmxfcGVyaW9kLCBwYXJhbXMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChwZXJpb2RzID0+IHBlcmlvZHMpLFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZ1NlcnZpY2UubG9nKGBmZXRjaGVkIHBlcmlvZCBmcm9tICR7ZGF0ZVJhbmdlWzBdfSB0byAke2RhdGVSYW5nZVtkYXRlUmFuZ2UubGVuZ3RoLTFdfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcjxQZXJpb2RbXT4oYGdldFBlcmlvZHMoKTogcGVyaW9kID0gJHtkYXRlUmFuZ2VbMF19IHRvICR7ZGF0ZVJhbmdlW2RhdGVSYW5nZS5sZW5ndGgtMV19YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=
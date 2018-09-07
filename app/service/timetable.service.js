"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var error_service_1 = require("../service/error.service");
var logging_service_1 = require("../service/logging.service");
var TimetableService = /** @class */ (function () {
    function TimetableService(http, errorService, logService) {
        this.http = http;
        this.errorService = errorService;
        this.logService = logService;
        this.url = 'api/lessons';
    }
    TimetableService.prototype.getLesson = function (userId) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('id', userId.toString());
        return this.http.get(this.url, { params: params })
            .pipe(operators_1.map(function (lesson) { return lesson; }), operators_1.tap(function (_) { return _this.logService.log("fetched user id = " + userId); }), operators_1.catchError(this.errorService.handleError("getLesson user id = " + userId)));
    };
    TimetableService.prototype.getPeriod = function (startDate, endDate) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('startDate', startDate.toString());
        params = params.append('endDate', endDate.toString());
        return this.http.get(this.url, { params: params })
            .pipe(operators_1.map(function (period) { return period[0]; }), operators_1.tap(function (_) { return _this.logService.log("fetched period = " + startDate.toString()); }), operators_1.catchError(this.errorService.handleError("getPeriod period = " + startDate.toString())));
    };
    TimetableService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_service_1.ErrorService,
            logging_service_1.LoggingService])
    ], TimetableService);
    return TimetableService;
}());
exports.TimetableService = TimetableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1ldGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBOEQ7QUFFOUQsNENBQXNEO0FBRXRELDBEQUF3RDtBQUN4RCw4REFBNEQ7QUFLNUQ7SUFHSSwwQkFDWSxJQUFnQixFQUNoQixZQUEwQixFQUMxQixVQUEwQjtRQUYxQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQWdCO1FBTDlCLFFBQUcsR0FBRyxhQUFhLENBQUM7SUFNeEIsQ0FBQztJQUVMLG9DQUFTLEdBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQVVDO1FBVEcsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQzFELElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLEVBQU4sQ0FBTSxDQUFDLEVBQ3JCLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLHVCQUFxQixNQUFRLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQyxFQUM1RCxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFZLHlCQUF1QixNQUFRLENBQUMsQ0FBQyxDQUN4RixDQUFDO0lBQ04sQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxTQUFlLEVBQUUsT0FBYTtRQUF4QyxpQkFXQztRQVZHLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDMUQsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUMsRUFDeEIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsc0JBQW9CLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxFQUEvRCxDQUErRCxDQUFDLEVBQ3pFLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQVUsd0JBQXNCLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDLENBQ25HLENBQUM7SUFDTixDQUFDO0lBaENRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUtTLGlCQUFVO1lBQ0YsNEJBQVk7WUFDZCxnQ0FBYztPQU43QixnQkFBZ0IsQ0FpQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxuXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XG5cbmltcG9ydCB7IExlc3NvbnMsIFBlcmlvZHMgfSBmcm9tICcuLi9tb2RlbC90aW1ldGFibGUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXRhYmxlU2VydmljZSB7XG4gICAgcHJpdmF0ZSB1cmwgPSAnYXBpL2xlc3NvbnMnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dnaW5nU2VydmljZVxuICAgICkgeyB9XG4gICAgXG4gICAgZ2V0TGVzc29uKHVzZXJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxMZXNzb25zW10+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2lkJywgdXNlcklkLnRvU3RyaW5nKCkpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8TGVzc29uc1tdPih0aGlzLnVybCwge3BhcmFtczogcGFyYW1zfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAobGVzc29uID0+IGxlc3NvbiksXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZ1NlcnZpY2UubG9nKGBmZXRjaGVkIHVzZXIgaWQgPSAke3VzZXJJZH1gKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yPExlc3NvbnNbXT4oYGdldExlc3NvbiB1c2VyIGlkID0gJHt1c2VySWR9YCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UGVyaW9kKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IE9ic2VydmFibGU8UGVyaW9kcz4ge1xuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnc3RhcnREYXRlJywgc3RhcnREYXRlLnRvU3RyaW5nKCkpO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdlbmREYXRlJywgZW5kRGF0ZS50b1N0cmluZygpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQZXJpb2RzW10+KHRoaXMudXJsLCB7cGFyYW1zOiBwYXJhbXN9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChwZXJpb2QgPT4gcGVyaW9kWzBdKSxcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nU2VydmljZS5sb2coYGZldGNoZWQgcGVyaW9kID0gJHtzdGFydERhdGUudG9TdHJpbmcoKX1gKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yPFBlcmlvZHM+KGBnZXRQZXJpb2QgcGVyaW9kID0gJHtzdGFydERhdGUudG9TdHJpbmcoKX1gKSlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=
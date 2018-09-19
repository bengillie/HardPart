"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var homework_model_1 = require("../model/homework.model");
var error_service_1 = require("../service/error.service");
var logging_service_1 = require("../service/logging.service");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var HomeworkService = /** @class */ (function () {
    function HomeworkService(http, errorService, logService) {
        this.http = http;
        this.errorService = errorService;
        this.logService = logService;
        this.url = 'api/homework';
    }
    HomeworkService.prototype.getHomeworks = function () {
        return this.http.get(this.url);
    };
    HomeworkService.prototype.getHomework = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url);
    };
    HomeworkService.prototype.getStudentHomework = function (studentId) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.append('studentId', studentId.toString());
        return this.http.get(this.url, { params: params })
            .pipe(operators_1.map(function (homework) { return homework; }), operators_1.tap(function (_) { return _this.logService.log("fetched homework for student id = " + studentId.toString()); }), operators_1.catchError(this.errorService.handleError("getStudentHomework student id = " + studentId.toString())));
    };
    HomeworkService.prototype.updateUserHomework = function (homework) {
        return this.http.put(this.url, homework, httpOptions);
    };
    HomeworkService.prototype.isDue = function (homework) {
        if (homework.status === homework_model_1.HomeworkStatus.todo) {
            var dateNow = new Date();
            var diff = new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime();
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            return diffDays < 0;
        }
        return false;
    };
    HomeworkService.prototype.isNearDueDate = function (homework) {
        if (homework.status === homework_model_1.HomeworkStatus.todo) {
            var dateNow = new Date();
            var diff = new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime();
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            return diffDays >= 0 && diffDays <= 2;
        }
        return false;
    };
    HomeworkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_service_1.ErrorService,
            logging_service_1.LoggingService])
    ], HomeworkService);
    return HomeworkService;
}());
exports.HomeworkService = HomeworkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTJFO0FBRTNFLDRDQUFzRDtBQUd0RCwwREFBbUU7QUFFbkUsMERBQXdEO0FBQ3hELDhEQUE0RDtBQUU1RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDbkUsQ0FBQztBQUdGO0lBR0kseUJBQ1ksSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsVUFBMEI7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUw5QixRQUFHLEdBQUcsY0FBYyxDQUFDO0lBS2EsQ0FBQztJQUUzQyxzQ0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFhLEVBQVU7UUFDbkIsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLEdBQUcsU0FBSSxFQUFJLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBbUIsU0FBaUI7UUFBcEMsaUJBVUM7UUFURyxJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDM0QsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsRUFDekIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsdUNBQXFDLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxFQUFoRixDQUFnRixDQUFDLEVBQzFGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQWEscUNBQW1DLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDLENBQ25ILENBQUM7SUFDTixDQUFDO0lBRUQsNENBQWtCLEdBQWxCLFVBQW9CLFFBQWtCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLFFBQWtCO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDWCxDQUFDO0lBRUosdUNBQWEsR0FBYixVQUFjLFFBQWtCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNkLENBQUM7SUFuRFcsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUtTLGlCQUFVO1lBQ0YsNEJBQVk7WUFDZCxnQ0FBYztPQU43QixlQUFlLENBb0QzQjtJQUFELHNCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEhvbWV3b3JrLCBIb21ld29ya1N0YXR1cyB9IGZyb20gJy4uL21vZGVsL2hvbWV3b3JrLm1vZGVsJztcclxuXHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZXJyb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIb21ld29ya1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmwgPSAnYXBpL2hvbWV3b3JrJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBnZXRIb21ld29ya3MgKCk6IE9ic2VydmFibGU8SG9tZXdvcmtbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEhvbWV3b3JrW10+KHRoaXMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIb21ld29yayAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SG9tZXdvcms+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLnVybH0vJHtpZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEhvbWV3b3JrPih1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0dWRlbnRIb21ld29yayhzdHVkZW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SG9tZXdvcmtbXT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3N0dWRlbnRJZCcsIHN0dWRlbnRJZC50b1N0cmluZygpKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxIb21ld29ya1tdPih0aGlzLnVybCwge3BhcmFtczogcGFyYW1zfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKGhvbWV3b3JrID0+IGhvbWV3b3JrKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCBob21ld29yayBmb3Igc3R1ZGVudCBpZCA9ICR7c3R1ZGVudElkLnRvU3RyaW5nKCl9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yPEhvbWV3b3JrW10+KGBnZXRTdHVkZW50SG9tZXdvcmsgc3R1ZGVudCBpZCA9ICR7c3R1ZGVudElkLnRvU3RyaW5nKCl9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VySG9tZXdvcmsgKGhvbWV3b3JrOiBIb21ld29yayk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwsIGhvbWV3b3JrLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEdWUoaG9tZXdvcms6IEhvbWV3b3JrKTogYm9vbGVhbiB7XHJcblx0XHRpZiAoaG9tZXdvcmsuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XHJcblx0XHRcdHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGhvbWV3b3JrLmR1ZURhdGUudG9TdHJpbmcoKSkpLmdldFRpbWUoKSAtIGRhdGVOb3cuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgZGlmZkRheXMgPSBNYXRoLmNlaWwoZGlmZiAvICgxMDAwICogMzYwMCAqIDI0KSk7IFxyXG4gICAgICAgICAgICByZXR1cm4gZGlmZkRheXMgPCAwO1xyXG4gICAgICAgIH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblx0aXNOZWFyRHVlRGF0ZShob21ld29yazogSG9tZXdvcmspOiBib29sZWFuIHtcclxuXHRcdGlmIChob21ld29yay5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLnRvZG8pIHtcclxuICAgICAgICAgICAgdmFyIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgZGlmZiA9IG5ldyBEYXRlKERhdGUucGFyc2UoaG9tZXdvcmsuZHVlRGF0ZS50b1N0cmluZygpKSkuZ2V0VGltZSgpIC0gZGF0ZU5vdy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciBkaWZmRGF5cyA9IE1hdGguY2VpbChkaWZmIC8gKDEwMDAgKiAzNjAwICogMjQpKTsgXHJcbiAgICAgICAgICAgIHJldHVybiBkaWZmRGF5cyA+PSAwICYmIGRpZmZEYXlzIDw9IDI7XHJcbiAgICAgICAgfVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufSJdfQ==
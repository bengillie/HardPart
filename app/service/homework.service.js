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
    HomeworkService.prototype.getHomeworkDeadlineStatus = function (homework) {
        if (homework.status === homework_model_1.HomeworkStatus.todo) {
            var dateNow = new Date();
            var diff = new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime();
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            if (diffDays >= 0 && diffDays <= 2) {
                return homework_model_1.HomeworkDeadlineStatus.nearDueDate;
            }
            else if (diffDays < 0) {
                return homework_model_1.HomeworkDeadlineStatus.overDue;
            }
        }
        return homework_model_1.HomeworkDeadlineStatus.good;
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
    HomeworkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_service_1.ErrorService,
            logging_service_1.LoggingService])
    ], HomeworkService);
    return HomeworkService;
}());
exports.HomeworkService = HomeworkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTJFO0FBRTNFLDRDQUFzRDtBQUd0RCwwREFBMkY7QUFFM0YsMERBQXdEO0FBQ3hELDhEQUE0RDtBQUU1RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDbkUsQ0FBQztBQUdGO0lBR0kseUJBQ1ksSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsVUFBMEI7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUw5QixRQUFHLEdBQUcsY0FBYyxDQUFDO0lBS2EsQ0FBQztJQUUzQyxzQ0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFhLEVBQVU7UUFDbkIsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLEdBQUcsU0FBSSxFQUFJLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtREFBeUIsR0FBekIsVUFBMEIsUUFBa0I7UUFDOUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSywrQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzRixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxFQUFFLENBQUEsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUMvQixNQUFNLENBQUMsdUNBQXNCLENBQUMsV0FBVyxDQUFDO1lBQzlDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyx1Q0FBc0IsQ0FBQyxPQUFPLENBQUM7WUFDMUMsQ0FBQztRQUNMLENBQUM7UUFDUCxNQUFNLENBQUMsdUNBQXNCLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBbUIsU0FBaUI7UUFBcEMsaUJBVUM7UUFURyxJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDM0QsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsRUFDekIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsdUNBQXFDLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxFQUFoRixDQUFnRixDQUFDLEVBQzFGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQWEscUNBQW1DLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDLENBQ25ILENBQUM7SUFDTixDQUFDO0lBRUQsNENBQWtCLEdBQWxCLFVBQW9CLFFBQWtCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBN0NRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FLUyxpQkFBVTtZQUNGLDRCQUFZO1lBQ2QsZ0NBQWM7T0FON0IsZUFBZSxDQXNEM0I7SUFBRCxzQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtEZWFkbGluZVN0YXR1cywgSG9tZXdvcmtTdGF0dXMgfSBmcm9tICcuLi9tb2RlbC9ob21ld29yay5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvbG9nZ2luZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG9tZXdvcmtTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdXJsID0gJ2FwaS9ob21ld29yayc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSkgeyB9XHJcblxyXG4gICAgZ2V0SG9tZXdvcmtzICgpOiBPYnNlcnZhYmxlPEhvbWV3b3JrW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxIb21ld29ya1tdPih0aGlzLnVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG9tZXdvcmsgKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEhvbWV3b3JrPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9LyR7aWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxIb21ld29yaz4odXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIb21ld29ya0RlYWRsaW5lU3RhdHVzKGhvbWV3b3JrOiBIb21ld29yayk6IEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMge1xyXG5cdFx0aWYgKGhvbWV3b3JrLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xyXG5cdFx0XHR2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBkaWZmID0gbmV3IERhdGUoRGF0ZS5wYXJzZShob21ld29yay5kdWVEYXRlLnRvU3RyaW5nKCkpKS5nZXRUaW1lKCkgLSBkYXRlTm93LmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIGRpZmZEYXlzID0gTWF0aC5jZWlsKGRpZmYgLyAoMTAwMCAqIDM2MDAgKiAyNCkpO1xyXG4gICAgICAgICAgICBpZihkaWZmRGF5cyA+PSAwICYmIGRpZmZEYXlzIDw9IDIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMubmVhckR1ZURhdGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihkaWZmRGF5cyA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIb21ld29ya0RlYWRsaW5lU3RhdHVzLm92ZXJEdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0XHRyZXR1cm4gSG9tZXdvcmtEZWFkbGluZVN0YXR1cy5nb29kO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0dWRlbnRIb21ld29yayhzdHVkZW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SG9tZXdvcmtbXT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3N0dWRlbnRJZCcsIHN0dWRlbnRJZC50b1N0cmluZygpKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxIb21ld29ya1tdPih0aGlzLnVybCwge3BhcmFtczogcGFyYW1zfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKGhvbWV3b3JrID0+IGhvbWV3b3JrKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCBob21ld29yayBmb3Igc3R1ZGVudCBpZCA9ICR7c3R1ZGVudElkLnRvU3RyaW5nKCl9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yPEhvbWV3b3JrW10+KGBnZXRTdHVkZW50SG9tZXdvcmsgc3R1ZGVudCBpZCA9ICR7c3R1ZGVudElkLnRvU3RyaW5nKCl9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VySG9tZXdvcmsgKGhvbWV3b3JrOiBIb21ld29yayk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwsIGhvbWV3b3JrLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXNPdmVyZHVlKGhvbWV3b3JrOiBIb21ld29yayk6IGJvb2xlYW4ge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuZ2V0SG9tZXdvcmtEZWFkbGluZVN0YXR1cyhob21ld29yaykgPT09IEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMub3ZlckR1ZTtcclxuICAgIC8vIH1cclxuXHJcblx0Ly8gaXNOZWFyRHVlRGF0ZShob21ld29yazogSG9tZXdvcmspOiBib29sZWFuIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmdldEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMoaG9tZXdvcmspID09PSBIb21ld29ya0RlYWRsaW5lU3RhdHVzLm5lYXJEdWVEYXRlO1xyXG5cdC8vIH1cclxufSJdfQ==
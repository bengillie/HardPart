"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var homework_model_1 = require("../model/homework.model");
var error_service_1 = require("../service/error.service");
var httpservice_service_1 = require("../service/httpservice.service");
var logging_service_1 = require("../service/logging.service");
var HomeworkService = /** @class */ (function () {
    function HomeworkService(errorService, httpService, logService) {
        this.errorService = errorService;
        this.httpService = httpService;
        this.logService = logService;
        this.url = "homework";
    }
    HomeworkService.prototype.getHomeworks = function () {
        return this.httpService.get(this.url);
    };
    HomeworkService.prototype.getHomework = function (id) {
        var newUrl = this.url + "/" + id;
        return this.httpService.get(newUrl);
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
        return this.httpService.get(this.url, params)
            .pipe(operators_1.map(function (homework) { return homework; }), operators_1.tap(function (_) { return _this.logService.log("fetched homework for student id = " + studentId.toString()); }), operators_1.catchError(this.errorService.handleError("getStudentHomework student id = " + studentId.toString())));
    };
    HomeworkService.prototype.updateUserHomework = function (homework) {
        return this.httpService.put(this.url, homework);
    };
    HomeworkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [error_service_1.ErrorService,
            httpservice_service_1.HttpService,
            logging_service_1.LoggingService])
    ], HomeworkService);
    return HomeworkService;
}());
exports.HomeworkService = HomeworkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBRWxELDRDQUFzRDtBQUd0RCwwREFBMkY7QUFFM0YsMERBQXdEO0FBQ3hELHNFQUE2RDtBQUM3RCw4REFBNEQ7QUFHNUQ7SUFHSSx5QkFBb0IsWUFBMEIsRUFDbEMsV0FBd0IsRUFDeEIsVUFBMEI7UUFGbEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFKdEMsUUFBRyxHQUFHLFVBQVUsQ0FBQztJQUl5QixDQUFDO0lBRTNDLHNDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQWEsRUFBVTtRQUNuQixJQUFNLE1BQU0sR0FBTSxJQUFJLENBQUMsR0FBRyxTQUFJLEVBQUksQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQVcsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG1EQUF5QixHQUF6QixVQUEwQixRQUFrQjtRQUM5QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLCtCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNGLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyx1Q0FBc0IsQ0FBQyxXQUFXLENBQUM7WUFDOUMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLHVDQUFzQixDQUFDLE9BQU8sQ0FBQztZQUMxQyxDQUFDO1FBQ0wsQ0FBQztRQUNQLE1BQU0sQ0FBQyx1Q0FBc0IsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELDRDQUFrQixHQUFsQixVQUFtQixTQUFpQjtRQUFwQyxpQkFVQztRQVRHLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWEsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7YUFDeEQsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsRUFDekIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsdUNBQXFDLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxFQUFoRixDQUFnRixDQUFDLEVBQzFGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQWEscUNBQW1DLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDLENBQ25ILENBQUM7SUFDTixDQUFDO0lBRUQsNENBQWtCLEdBQWxCLFVBQW1CLFFBQWtCO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUE1Q1EsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUl5Qiw0QkFBWTtZQUNyQixpQ0FBVztZQUNaLGdDQUFjO09BTDdCLGVBQWUsQ0E2QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtEZWFkbGluZVN0YXR1cywgSG9tZXdvcmtTdGF0dXMgfSBmcm9tICcuLi9tb2RlbC9ob21ld29yay5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaHR0cHNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG9tZXdvcmtTZXJ2aWNlIHtcclxuICAgIHVybCA9IFwiaG9tZXdvcmtcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIGdldEhvbWV3b3JrcyAoKTogT2JzZXJ2YWJsZTxIb21ld29ya1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0PEhvbWV3b3JrW10+KHRoaXMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIb21ld29yayAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SG9tZXdvcms+IHtcclxuICAgICAgICBjb25zdCBuZXdVcmwgPSBgJHt0aGlzLnVybH0vJHtpZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldDxIb21ld29yaz4obmV3VXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIb21ld29ya0RlYWRsaW5lU3RhdHVzKGhvbWV3b3JrOiBIb21ld29yayk6IEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMge1xyXG5cdFx0aWYgKGhvbWV3b3JrLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xyXG5cdFx0XHR2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBkaWZmID0gbmV3IERhdGUoRGF0ZS5wYXJzZShob21ld29yay5kdWVEYXRlLnRvU3RyaW5nKCkpKS5nZXRUaW1lKCkgLSBkYXRlTm93LmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIGRpZmZEYXlzID0gTWF0aC5jZWlsKGRpZmYgLyAoMTAwMCAqIDM2MDAgKiAyNCkpO1xyXG4gICAgICAgICAgICBpZihkaWZmRGF5cyA+PSAwICYmIGRpZmZEYXlzIDw9IDIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMubmVhckR1ZURhdGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihkaWZmRGF5cyA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIb21ld29ya0RlYWRsaW5lU3RhdHVzLm92ZXJEdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0XHRyZXR1cm4gSG9tZXdvcmtEZWFkbGluZVN0YXR1cy5nb29kO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0dWRlbnRIb21ld29yayhzdHVkZW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SG9tZXdvcmtbXT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3N0dWRlbnRJZCcsIHN0dWRlbnRJZC50b1N0cmluZygpKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQ8SG9tZXdvcmtbXT4odGhpcy51cmwsIHBhcmFtcylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKGhvbWV3b3JrID0+IGhvbWV3b3JrKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2dTZXJ2aWNlLmxvZyhgZmV0Y2hlZCBob21ld29yayBmb3Igc3R1ZGVudCBpZCA9ICR7c3R1ZGVudElkLnRvU3RyaW5nKCl9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yPEhvbWV3b3JrW10+KGBnZXRTdHVkZW50SG9tZXdvcmsgc3R1ZGVudCBpZCA9ICR7c3R1ZGVudElkLnRvU3RyaW5nKCl9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VySG9tZXdvcmsoaG9tZXdvcms6IEhvbWV3b3JrKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQodGhpcy51cmwsIGhvbWV3b3JrKTtcclxuICAgIH1cclxufSJdfQ==
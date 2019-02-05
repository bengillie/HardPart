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

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

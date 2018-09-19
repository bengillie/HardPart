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
    HomeworkService.prototype.isNearDueDate = function (homework) {
        if (homework.status === homework_model_1.HomeworkStatus.todo) {
            var dateNow = new Date();
            if (new Date(homework.dueDate) <= dateNow) {
                return true;
            }
            else {
                var diff = Math.abs(new Date(Date.parse(homework.dueDate.toString())).getTime() - dateNow.getTime());
                var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                return diffDays <= 2;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTJFO0FBRTNFLDRDQUFzRDtBQUd0RCwwREFBbUU7QUFFbkUsMERBQXdEO0FBQ3hELDhEQUE0RDtBQUU1RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDbkUsQ0FBQztBQUdGO0lBR0kseUJBQ1ksSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsVUFBMEI7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUw5QixRQUFHLEdBQUcsY0FBYyxDQUFDO0lBS2EsQ0FBQztJQUUzQyxzQ0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFhLEVBQVU7UUFDbkIsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLEdBQUcsU0FBSSxFQUFJLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBbUIsU0FBaUI7UUFBcEMsaUJBVUM7UUFURyxJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDM0QsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsRUFDekIsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsdUNBQXFDLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxFQUFoRixDQUFnRixDQUFDLEVBQzFGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQWEscUNBQW1DLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDLENBQ25ILENBQUM7SUFDTixDQUFDO0lBRUQsNENBQWtCLEdBQWxCLFVBQW9CLFFBQWtCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUosdUNBQWEsR0FBYixVQUFjLFFBQWtCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFekIsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFDdEIsQ0FBQztRQUNJLENBQUM7UUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQS9DVyxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBS1MsaUJBQVU7WUFDRiw0QkFBWTtZQUNkLGdDQUFjO09BTjdCLGVBQWUsQ0FnRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybCA9ICdhcGkvaG9tZXdvcmsnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIGdldEhvbWV3b3JrcyAoKTogT2JzZXJ2YWJsZTxIb21ld29ya1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SG9tZXdvcmtbXT4odGhpcy51cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhvbWV3b3JrIChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxIb21ld29yaz4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMudXJsfS8ke2lkfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SG9tZXdvcms+KHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3R1ZGVudEhvbWV3b3JrKHN0dWRlbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxIb21ld29ya1tdPiB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnc3R1ZGVudElkJywgc3R1ZGVudElkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEhvbWV3b3JrW10+KHRoaXMudXJsLCB7cGFyYW1zOiBwYXJhbXN9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAoaG9tZXdvcmsgPT4gaG9tZXdvcmspLFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZ1NlcnZpY2UubG9nKGBmZXRjaGVkIGhvbWV3b3JrIGZvciBzdHVkZW50IGlkID0gJHtzdHVkZW50SWQudG9TdHJpbmcoKX1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3I8SG9tZXdvcmtbXT4oYGdldFN0dWRlbnRIb21ld29yayBzdHVkZW50IGlkID0gJHtzdHVkZW50SWQudG9TdHJpbmcoKX1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVzZXJIb21ld29yayAoaG9tZXdvcms6IEhvbWV3b3JrKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnVybCwgaG9tZXdvcmssIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuXHJcblx0aXNOZWFyRHVlRGF0ZShob21ld29yazogSG9tZXdvcmspIDogYm9vbGVhbiB7XHJcblx0XHRpZiAoaG9tZXdvcmsuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XHJcblx0XHRcdHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKG5ldyBEYXRlKGhvbWV3b3JrLmR1ZURhdGUpIDw9IGRhdGVOb3cpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR2YXIgZGlmZiA9IE1hdGguYWJzKG5ldyBEYXRlKERhdGUucGFyc2UoaG9tZXdvcmsuZHVlRGF0ZS50b1N0cmluZygpKSkuZ2V0VGltZSgpIC0gZGF0ZU5vdy5nZXRUaW1lKCkpO1xyXG5cdFx0XHRcdHZhciBkaWZmRGF5cyA9IE1hdGguY2VpbChkaWZmIC8gKDEwMDAgKiAzNjAwICogMjQpKTsgXHJcblx0XHRcdFx0cmV0dXJuIGRpZmZEYXlzIDw9IDI7XHJcblx0XHRcdH1cclxuICAgICAgICB9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59Il19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var homework_model_1 = require("../model/homework.model");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var HomeworkService = /** @class */ (function () {
    function HomeworkService(http) {
        this.http = http;
        this.url = 'api/homework';
    }
    HomeworkService.prototype.getHomeworks = function () {
        return this.http.get(this.url);
    };
    HomeworkService.prototype.getHomework = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url);
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
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HomeworkService);
    return HomeworkService;
}());
exports.HomeworkService = HomeworkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBSS9ELDBEQUFtRTtBQUVuRSxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDbkUsQ0FBQztBQUdGO0lBR0kseUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsUUFBRyxHQUFHLGNBQWMsQ0FBQztJQUVXLENBQUM7SUFFekMsc0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBYSxFQUFVO1FBQ25CLElBQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxHQUFHLFNBQUksRUFBSSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNENBQWtCLEdBQWxCLFVBQW9CLFFBQWtCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUosdUNBQWEsR0FBYixVQUFjLFFBQWtCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFekIsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFDdEIsQ0FBQztRQUNJLENBQUM7UUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQWhDVyxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSWlCLGlCQUFVO09BSDNCLGVBQWUsQ0FpQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtTdGF0dXMgfSBmcm9tICcuLi9tb2RlbC9ob21ld29yay5tb2RlbCc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybCA9ICdhcGkvaG9tZXdvcmsnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgZ2V0SG9tZXdvcmtzICgpOiBPYnNlcnZhYmxlPEhvbWV3b3JrW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxIb21ld29ya1tdPih0aGlzLnVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG9tZXdvcmsgKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEhvbWV3b3JrPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9LyR7aWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxIb21ld29yaz4odXJsKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VySG9tZXdvcmsgKGhvbWV3b3JrOiBIb21ld29yayk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwsIGhvbWV3b3JrLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG5cdGlzTmVhckR1ZURhdGUoaG9tZXdvcms6IEhvbWV3b3JrKSA6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKGhvbWV3b3JrLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xyXG5cdFx0XHR2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihuZXcgRGF0ZShob21ld29yay5kdWVEYXRlKSA8PSBkYXRlTm93KSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dmFyIGRpZmYgPSBNYXRoLmFicyhuZXcgRGF0ZShEYXRlLnBhcnNlKGhvbWV3b3JrLmR1ZURhdGUudG9TdHJpbmcoKSkpLmdldFRpbWUoKSAtIGRhdGVOb3cuZ2V0VGltZSgpKTtcclxuXHRcdFx0XHR2YXIgZGlmZkRheXMgPSBNYXRoLmNlaWwoZGlmZiAvICgxMDAwICogMzYwMCAqIDI0KSk7IFxyXG5cdFx0XHRcdHJldHVybiBkaWZmRGF5cyA8PSAyO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufSJdfQ==
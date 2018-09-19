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
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HomeworkService);
    return HomeworkService;
}());
exports.HomeworkService = HomeworkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBSS9ELDBEQUFtRTtBQUVuRSxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDbkUsQ0FBQztBQUdGO0lBR0kseUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsUUFBRyxHQUFHLGNBQWMsQ0FBQztJQUVXLENBQUM7SUFFekMsc0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBYSxFQUFVO1FBQ25CLElBQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxHQUFHLFNBQUksRUFBSSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNENBQWtCLEdBQWxCLFVBQW9CLFFBQWtCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLFFBQWtCO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDWCxDQUFDO0lBRUosdUNBQWEsR0FBYixVQUFjLFFBQWtCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNkLENBQUM7SUFwQ1csZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUlpQixpQkFBVTtPQUgzQixlQUFlLENBcUMzQjtJQUFELHNCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIb21ld29ya1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmwgPSAnYXBpL2hvbWV3b3JrJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIGdldEhvbWV3b3JrcyAoKTogT2JzZXJ2YWJsZTxIb21ld29ya1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SG9tZXdvcmtbXT4odGhpcy51cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhvbWV3b3JrIChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxIb21ld29yaz4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMudXJsfS8ke2lkfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SG9tZXdvcms+KHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVXNlckhvbWV3b3JrIChob21ld29yazogSG9tZXdvcmspOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMudXJsLCBob21ld29yaywgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRHVlKGhvbWV3b3JrOiBIb21ld29yayk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKGhvbWV3b3JrLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xyXG5cdFx0XHR2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBkaWZmID0gbmV3IERhdGUoRGF0ZS5wYXJzZShob21ld29yay5kdWVEYXRlLnRvU3RyaW5nKCkpKS5nZXRUaW1lKCkgLSBkYXRlTm93LmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIGRpZmZEYXlzID0gTWF0aC5jZWlsKGRpZmYgLyAoMTAwMCAqIDM2MDAgKiAyNCkpOyBcclxuICAgICAgICAgICAgcmV0dXJuIGRpZmZEYXlzIDwgMDtcclxuICAgICAgICB9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cdGlzTmVhckR1ZURhdGUoaG9tZXdvcms6IEhvbWV3b3JrKTogYm9vbGVhbiB7XHJcblx0XHRpZiAoaG9tZXdvcmsuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGhvbWV3b3JrLmR1ZURhdGUudG9TdHJpbmcoKSkpLmdldFRpbWUoKSAtIGRhdGVOb3cuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgZGlmZkRheXMgPSBNYXRoLmNlaWwoZGlmZiAvICgxMDAwICogMzYwMCAqIDI0KSk7IFxyXG4gICAgICAgICAgICByZXR1cm4gZGlmZkRheXMgPj0gMCAmJiBkaWZmRGF5cyA8PSAyO1xyXG4gICAgICAgIH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn0iXX0=
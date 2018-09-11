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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBSS9ELDBEQUFtRTtBQUVuRSxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDbkUsQ0FBQztBQUdGO0lBR0kseUJBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQixRQUFHLEdBQUcsY0FBYyxDQUFDO0lBR0ksQ0FBQztJQUVsQyxzQ0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFhLEVBQVU7UUFDbkIsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLEdBQUcsU0FBSSxFQUFJLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBb0IsUUFBa0I7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFSix1Q0FBYSxHQUFiLFVBQWMsUUFBa0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSywrQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUV6QixFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDTCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3JHLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0YsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBakNXLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FLUyxpQkFBVTtPQUpuQixlQUFlLENBa0MzQjtJQUFELHNCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIb21ld29ya1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmwgPSAnYXBpL2hvbWV3b3JrJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsKSB7IH1cclxuXHJcbiAgICBnZXRIb21ld29ya3MgKCk6IE9ic2VydmFibGU8SG9tZXdvcmtbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEhvbWV3b3JrW10+KHRoaXMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIb21ld29yayAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SG9tZXdvcms+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLnVybH0vJHtpZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEhvbWV3b3JrPih1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVzZXJIb21ld29yayAoaG9tZXdvcms6IEhvbWV3b3JrKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnVybCwgaG9tZXdvcmssIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuXHJcblx0aXNOZWFyRHVlRGF0ZShob21ld29yazogSG9tZXdvcmspIDogYm9vbGVhbiB7XHJcblx0XHRpZiAoaG9tZXdvcmsuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XHJcblx0XHRcdHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKG5ldyBEYXRlKGhvbWV3b3JrLmR1ZURhdGUpIDw9IGRhdGVOb3cpe1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHZhciBkaWZmID0gTWF0aC5hYnMobmV3IERhdGUoRGF0ZS5wYXJzZShob21ld29yay5kdWVEYXRlLnRvU3RyaW5nKCkpKS5nZXRUaW1lKCkgLSBkYXRlTm93LmdldFRpbWUoKSk7XHJcblx0XHRcdFx0dmFyIGRpZmZEYXlzID0gTWF0aC5jZWlsKGRpZmYgLyAoMTAwMCAqIDM2MDAgKiAyNCkpOyBcclxuXHRcdFx0XHRyZXR1cm4gZGlmZkRheXMgPD0gMjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufSJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
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
    HomeworkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HomeworkService);
    return HomeworkService;
}());
exports.HomeworkService = HomeworkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBT2xEO0lBSUkseUJBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQixRQUFHLEdBQUcsY0FBYyxDQUFDO0lBR0ksQ0FBQztJQUVsQyxzQ0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFhLEVBQVU7UUFDbkIsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLEdBQUcsU0FBSSxFQUFJLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFkUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBTVMsaUJBQVU7T0FMbkIsZUFBZSxDQWUzQjtJQUFELHNCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29yayB9IGZyb20gJy4uL21vZGVsL2hvbWV3b3JrLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmwgPSAnYXBpL2hvbWV3b3JrJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsKSB7IH1cclxuXHJcbiAgICBnZXRIb21ld29ya3MgKCk6IE9ic2VydmFibGU8SG9tZXdvcmtbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEhvbWV3b3JrW10+KHRoaXMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIb21ld29yayAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SG9tZXdvcms+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLnVybH0vJHtpZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEhvbWV3b3JrPih1cmwpO1xyXG4gICAgfVxyXG59Il19
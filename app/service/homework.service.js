"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var homework_model_1 = require("../model/homework.model");
var httpservice_service_1 = require("../service/httpservice.service");
var HomeworkService = /** @class */ (function () {
    function HomeworkService(httpService) {
        this.httpService = httpService;
    }
    HomeworkService.prototype.getHomeworks = function () {
        return this.httpService.getHomeworks();
    };
    HomeworkService.prototype.getHomework = function (id) {
        return this.httpService.getHomework(id);
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
        return this.httpService.getStudentHomework(studentId);
    };
    HomeworkService.prototype.updateUserHomework = function (homework) {
        return this.httpService.updateUserHomework(homework);
    };
    HomeworkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [httpservice_service_1.HttpService])
    ], HomeworkService);
    return HomeworkService;
}());
exports.HomeworkService = HomeworkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFJM0MsMERBQTJGO0FBQzNGLHNFQUE2RDtBQUc3RDtJQUNJLHlCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsc0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQWEsRUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELG1EQUF5QixHQUF6QixVQUEwQixRQUFrQjtRQUM5QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLCtCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNGLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyx1Q0FBc0IsQ0FBQyxXQUFXLENBQUM7WUFDOUMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLHVDQUFzQixDQUFDLE9BQU8sQ0FBQztZQUMxQyxDQUFDO1FBQ0wsQ0FBQztRQUNQLE1BQU0sQ0FBQyx1Q0FBc0IsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELDRDQUFrQixHQUFsQixVQUFtQixTQUFpQjtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsNENBQWtCLEdBQWxCLFVBQW1CLFFBQWtCO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUEvQlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUV3QixpQ0FBVztPQURuQyxlQUFlLENBZ0MzQjtJQUFELHNCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtEZWFkbGluZVN0YXR1cywgSG9tZXdvcmtTdGF0dXMgfSBmcm9tICcuLi9tb2RlbC9ob21ld29yay5tb2RlbCc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9odHRwc2VydmljZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkgeyB9XHJcblxyXG4gICAgZ2V0SG9tZXdvcmtzICgpOiBPYnNlcnZhYmxlPEhvbWV3b3JrW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXRIb21ld29ya3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIb21ld29yayAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SG9tZXdvcms+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXRIb21ld29yayhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG9tZXdvcmtEZWFkbGluZVN0YXR1cyhob21ld29yazogSG9tZXdvcmspOiBIb21ld29ya0RlYWRsaW5lU3RhdHVzIHtcclxuXHRcdGlmIChob21ld29yay5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLnRvZG8pIHtcclxuXHRcdFx0dmFyIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgZGlmZiA9IG5ldyBEYXRlKERhdGUucGFyc2UoaG9tZXdvcmsuZHVlRGF0ZS50b1N0cmluZygpKSkuZ2V0VGltZSgpIC0gZGF0ZU5vdy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciBkaWZmRGF5cyA9IE1hdGguY2VpbChkaWZmIC8gKDEwMDAgKiAzNjAwICogMjQpKTtcclxuICAgICAgICAgICAgaWYoZGlmZkRheXMgPj0gMCAmJiBkaWZmRGF5cyA8PSAyKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIb21ld29ya0RlYWRsaW5lU3RhdHVzLm5lYXJEdWVEYXRlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZGlmZkRheXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSG9tZXdvcmtEZWFkbGluZVN0YXR1cy5vdmVyRHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdFx0cmV0dXJuIEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMuZ29vZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdHVkZW50SG9tZXdvcmsoc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEhvbWV3b3JrW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXRTdHVkZW50SG9tZXdvcmsoc3R1ZGVudElkKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VySG9tZXdvcmsoaG9tZXdvcms6IEhvbWV3b3JrKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS51cGRhdGVVc2VySG9tZXdvcmsoaG9tZXdvcmspO1xyXG4gICAgfVxyXG59Il19
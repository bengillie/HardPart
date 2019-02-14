"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var homework_service_1 = require("../homework/homework.service");
var homework_model_1 = require("../shared/model/homework.model");
var HomeworkDetailComponent = /** @class */ (function () {
    function HomeworkDetailComponent(route, homeworkService, location) {
        this.route = route;
        this.homeworkService = homeworkService;
        this.location = location;
        this.subscriptions = [];
        this.homework = new homework_model_1.Homework();
        this.isLoading = true;
        this.warningIconCode = String.fromCharCode(0xea08);
    }
    HomeworkDetailComponent.prototype.ngOnInit = function () {
        this.getHomework();
    };
    HomeworkDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription.unsubscribe();
            }
        }
    };
    HomeworkDetailComponent.prototype.getHomework = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.subscriptions.push(this.homeworkService.getHomework(id).subscribe(function (x) {
            _this.homework = x;
        }, function () { }, function () {
            _this.isLoading = false;
        }));
    };
    HomeworkDetailComponent.prototype.getHomeworkDeadlineStatus = function (homework) {
        return this.homeworkService.getHomeworkDeadlineStatus(homework);
    };
    HomeworkDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'homework-detail',
            templateUrl: './homework-detail.component.html',
            styleUrls: ['./homework-detail.component.css'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, homework_service_1.HomeworkService, common_1.Location])
    ], HomeworkDetailComponent);
    return HomeworkDetailComponent;
}());
exports.HomeworkDetailComponent = HomeworkDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELDBDQUEyQztBQUkzQyxpRUFBK0Q7QUFDL0QsaUVBQWtGO0FBUWxGO0lBUUMsaUNBQW9CLEtBQXFCLEVBQVUsZUFBZ0MsRUFBVSxRQUFrQjtRQUEzRixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFQdkcsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRTNDLGFBQVEsR0FBYSxJQUFJLHlCQUFRLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVvRSxDQUFDO0lBRW5ILDBDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4QixHQUFHLENBQUMsQ0FBcUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQjtnQkFBdEMsSUFBSSxZQUFZLFNBQUE7Z0JBQ3BCLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzQjtRQUNGLENBQUM7SUFDRixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUFBLGlCQWFDO1FBWkEsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzdDLFVBQUEsQ0FBQztZQUNBLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFDRCxjQUFPLENBQUMsRUFDUjtZQUNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FDRCxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsMkRBQXlCLEdBQXpCLFVBQTBCLFFBQWtCO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUF2Q1csdUJBQXVCO1FBTm5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7eUNBUzBCLHVCQUFjLEVBQTJCLGtDQUFlLEVBQW9CLGlCQUFRO09BUm5HLHVCQUF1QixDQXdDbkM7SUFBRCw4QkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4uL2hvbWV3b3JrL2hvbWV3b3JrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtEZWFkbGluZVN0YXR1cyB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9ob21ld29yay5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnaG9tZXdvcmstZGV0YWlsJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9ob21ld29yay1kZXRhaWwuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuXHRob21ld29yazogSG9tZXdvcmsgPSBuZXcgSG9tZXdvcmsoKTtcclxuXHRpc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHR3YXJuaW5nSWNvbkNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZWEwOCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGhvbWV3b3JrU2VydmljZTogSG9tZXdvcmtTZXJ2aWNlLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmdldEhvbWV3b3JrKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuXHRcdFx0Zm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG5cdFx0XHRcdHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRIb21ld29yaygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrKGlkKS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0eCA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3JrID0geDtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCgpID0+IHt9LFxyXG5cdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0SG9tZXdvcmtEZWFkbGluZVN0YXR1cyhob21ld29yazogSG9tZXdvcmspOiBIb21ld29ya0RlYWRsaW5lU3RhdHVzIHtcclxuXHRcdHJldHVybiB0aGlzLmhvbWV3b3JrU2VydmljZS5nZXRIb21ld29ya0RlYWRsaW5lU3RhdHVzKGhvbWV3b3JrKTtcclxuXHR9XHJcbn1cclxuIl19
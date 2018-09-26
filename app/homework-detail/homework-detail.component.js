"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var homework_service_1 = require("../service/homework.service");
var homework_model_1 = require("../model/homework.model");
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
        this.subscriptions.push(this.homeworkService.getHomework(id)
            .subscribe(function (x) {
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
            styleUrls: ['./homework-detail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            homework_service_1.HomeworkService,
            common_1.Location])
    ], HomeworkDetailComponent);
    return HomeworkDetailComponent;
}());
exports.HomeworkDetailComponent = HomeworkDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELDBDQUEyQztBQUkzQyxnRUFBOEQ7QUFDOUQsMERBQTJFO0FBUzNFO0lBUUMsaUNBQW9CLEtBQXFCLEVBQ2hDLGVBQWdDLEVBQ2hDLFFBQWtCO1FBRlAsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFUbkIsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBRTVDLGFBQVEsR0FBYSxJQUFJLHlCQUFRLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUlmLENBQUM7SUFFaEMsMENBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2YsR0FBRyxDQUFDLENBQXFCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLGFBQWEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0I7Z0JBQXRDLElBQUksWUFBWSxTQUFBO2dCQUVqQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUI7UUFFWCxDQUFDO0lBQ0YsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFBQSxpQkFhQztRQVpBLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDMUQsU0FBUyxDQUNULFVBQUMsQ0FBQztZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFDRCxjQUFPLENBQUMsRUFDUjtZQUNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FDRCxDQUNELENBQUE7SUFDRixDQUFDO0lBRUQsMkRBQXlCLEdBQXpCLFVBQTBCLFFBQWtCO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUEzQ1csdUJBQXVCO1FBUG5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7eUNBVTBCLHVCQUFjO1lBQ2Ysa0NBQWU7WUFDdEIsaUJBQVE7T0FWZix1QkFBdUIsQ0E0Q25DO0lBQUQsOEJBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2UnO1xuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMgfSBmcm9tICcuLi9tb2RlbC9ob21ld29yay5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrLWRldGFpbCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9ob21ld29yay1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9ob21ld29yay1kZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdHByaXZhdGUgc3Vic2NyaXB0aW9ucyA6IFN1YnNjcmlwdGlvbltdID0gW107XG5cblx0aG9tZXdvcms6IEhvbWV3b3JrID0gbmV3IEhvbWV3b3JrKCk7XG5cdGlzTG9hZGluZyA9IHRydWU7XG5cblx0d2FybmluZ0ljb25Db2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhMDgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgaG9tZXdvcmtTZXJ2aWNlOiBIb21ld29ya1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2V0SG9tZXdvcmsoKTtcblx0fSBcblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuXHQgICBcblx0XHR9XG5cdH1cblxuXHRnZXRIb21ld29yaygpOiB2b2lkIHtcblx0XHRjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmhvbWV3b3JrU2VydmljZS5nZXRIb21ld29yayhpZClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCh4KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29yayA9IHg7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpID0+IHt9LFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdClcblx0fVxuXHRcblx0Z2V0SG9tZXdvcmtEZWFkbGluZVN0YXR1cyhob21ld29yazogSG9tZXdvcmspOiBIb21ld29ya0RlYWRsaW5lU3RhdHVzIHtcblx0XHRyZXR1cm4gdGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtEZWFkbGluZVN0YXR1cyhob21ld29yayk7XG5cdH1cbn0iXX0=
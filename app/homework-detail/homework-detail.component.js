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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELDBDQUEyQztBQUkzQyxpRUFBK0Q7QUFDL0QsaUVBQWtGO0FBUWxGO0lBUUMsaUNBQW9CLEtBQXFCLEVBQVUsZUFBZ0MsRUFBVSxRQUFrQjtRQUEzRixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFQdkcsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRTNDLGFBQVEsR0FBYSxJQUFJLHlCQUFRLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVvRSxDQUFDO0lBRW5ILDBDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsS0FBeUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO2dCQUF4QyxJQUFJLFlBQVksU0FBQTtnQkFDcEIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1NBQ0Q7SUFDRixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUFBLGlCQWFDO1FBWkEsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzdDLFVBQUEsQ0FBQztZQUNBLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFDRCxjQUFPLENBQUMsRUFDUjtZQUNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FDRCxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsMkRBQXlCLEdBQXpCLFVBQTBCLFFBQWtCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBdkNXLHVCQUF1QjtRQU5uQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUM5QyxDQUFDO3lDQVMwQix1QkFBYyxFQUEyQixrQ0FBZSxFQUFvQixpQkFBUTtPQVJuRyx1QkFBdUIsQ0F3Q25DO0lBQUQsOEJBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICcuLi9ob21ld29yay9ob21ld29yay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrLWRldGFpbCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcblx0aG9tZXdvcms6IEhvbWV3b3JrID0gbmV3IEhvbWV3b3JrKCk7XHJcblx0aXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0d2FybmluZ0ljb25Db2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhMDgpO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5nZXRIb21ld29yaygpO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcblx0XHRcdGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuXHRcdFx0XHRzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0SG9tZXdvcmsoKTogdm9pZCB7XHJcblx0XHRjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG5cdFx0XHR0aGlzLmhvbWV3b3JrU2VydmljZS5nZXRIb21ld29yayhpZCkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdHggPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29yayA9IHg7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoKSA9PiB7fSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMoaG9tZXdvcms6IEhvbWV3b3JrKTogSG9tZXdvcmtEZWFkbGluZVN0YXR1cyB7XHJcblx0XHRyZXR1cm4gdGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtEZWFkbGluZVN0YXR1cyhob21ld29yayk7XHJcblx0fVxyXG59XHJcbiJdfQ==
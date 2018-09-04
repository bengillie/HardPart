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
        this.homework = new homework_model_1.Homework();
        this.isLoading = true;
    }
    HomeworkDetailComponent.prototype.ngOnInit = function () {
        this.getHomework();
    };
    HomeworkDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeworkDetailComponent.prototype.getHomework = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.subscription = this.homeworkService.getHomework(id).subscribe(function (x) {
            _this.homework = x;
        }, function () { }, function () {
            _this.isLoading = false;
            // this.container.animate({
            // 	opacity: 1,
            // 	duration: 400
            // });
        });
    };
    HomeworkDetailComponent.prototype.goBack = function () {
        this.location.back();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Y7QUFDcEYsMENBQWlEO0FBQ2pELDBDQUEyQztBQUkzQyxnRUFBOEQ7QUFDOUQsMERBQW1EO0FBU25EO0lBU0MsaUNBQW9CLEtBQXFCLEVBQ2hDLGVBQWdDLEVBQ2hDLFFBQWtCO1FBRlAsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFOM0IsYUFBUSxHQUFhLElBQUkseUJBQVEsRUFBRSxDQUFDO1FBRXBDLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFLZixDQUFDO0lBRUgsMENBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFBQSxpQkFlQztRQWRBLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsVUFBQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUNELGNBQU8sQ0FBQyxFQUNSO1lBQ0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsMkJBQTJCO1lBQzNCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsTUFBTTtRQUNQLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUF6Q1csdUJBQXVCO1FBUG5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7eUNBVzBCLHVCQUFjO1lBQ2Ysa0NBQWU7WUFDdEIsaUJBQVE7T0FYZix1QkFBdUIsQ0EwQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWV3b3JrIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrLWRldGFpbCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdC8vIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcclxuXHJcblx0aG9tZXdvcms6IEhvbWV3b3JrID0gbmV3IEhvbWV3b3JrKCk7XHJcblxyXG5cdGlzTG9hZGluZyA9IHRydWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSxcclxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSBcclxuXHR7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmdldEhvbWV3b3JrKCk7XHJcblx0fSBcclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHJcblx0Z2V0SG9tZXdvcmsoKTogdm9pZCB7XHJcblx0XHRjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmsoaWQpLnN1YnNjcmliZShcclxuXHRcdFx0KHgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmhvbWV3b3JrID0geDtcclxuXHRcdFx0fSxcclxuXHRcdFx0KCkgPT4ge30sXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vIHRoaXMuY29udGFpbmVyLmFuaW1hdGUoe1xyXG5cdFx0XHRcdC8vIFx0b3BhY2l0eTogMSxcclxuXHRcdFx0XHQvLyBcdGR1cmF0aW9uOiA0MDBcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0Z29CYWNrKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcblx0fVxyXG59Il19
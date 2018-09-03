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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Y7QUFDcEYsMENBQWlEO0FBQ2pELDBDQUEyQztBQUkzQyxnRUFBOEQ7QUFDOUQsMERBQW1EO0FBU25EO0lBU0MsaUNBQW9CLEtBQXFCLEVBQ2hDLGVBQWdDLEVBQ2hDLFFBQWtCO1FBRlAsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFOM0IsYUFBUSxHQUFhLElBQUkseUJBQVEsRUFBRSxDQUFDO1FBRXBDLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFLZixDQUFDO0lBRUgsMENBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFBQSxpQkFlQztRQWRBLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsVUFBQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUNELGNBQU8sQ0FBQyxFQUNSO1lBQ0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsMkJBQTJCO1lBQzNCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsTUFBTTtRQUNQLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUF6Q1csdUJBQXVCO1FBUG5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7eUNBVzBCLHVCQUFjO1lBQ2Ysa0NBQWU7WUFDdEIsaUJBQVE7T0FYZix1QkFBdUIsQ0EwQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZSc7XG5pbXBvcnQgeyBIb21ld29yayB9IGZyb20gJy4uL21vZGVsL2hvbWV3b3JrLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaG9tZXdvcmstZGV0YWlsJyxcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21ld29ya0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0Ly8gQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cblx0cHJpdmF0ZSBzdWJzY3JpcHRpb24gOiBTdWJzY3JpcHRpb247XG5cblx0aG9tZXdvcms6IEhvbWV3b3JrID0gbmV3IEhvbWV3b3JrKCk7XG5cblx0aXNMb2FkaW5nID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIGhvbWV3b3JrU2VydmljZTogSG9tZXdvcmtTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSBcblx0eyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRIb21ld29yaygpO1xuXHR9IFxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRnZXRIb21ld29yaygpOiB2b2lkIHtcblx0XHRjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrKGlkKS5zdWJzY3JpYmUoXG5cdFx0XHQoeCkgPT4ge1xuXHRcdFx0XHR0aGlzLmhvbWV3b3JrID0geDtcblx0XHRcdH0sXG5cdFx0XHQoKSA9PiB7fSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0Ly8gdGhpcy5jb250YWluZXIuYW5pbWF0ZSh7XG5cdFx0XHRcdC8vIFx0b3BhY2l0eTogMSxcblx0XHRcdFx0Ly8gXHRkdXJhdGlvbjogNDAwXG5cdFx0XHRcdC8vIH0pO1xuXHRcdFx0fVxuXHRcdClcblx0fVxuXG5cdGdvQmFjaygpOiB2b2lkIHtcblx0XHR0aGlzLmxvY2F0aW9uLmJhY2soKTtcblx0fVxufSJdfQ==
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
        this.isLoading = true;
        this.homework = new homework_model_1.Homework();
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
            _this.isLoading = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELDBDQUEyQztBQUkzQyxnRUFBOEQ7QUFDOUQsMERBQW1EO0FBU25EO0lBTUMsaUNBQW9CLEtBQXFCLEVBQ2hDLGVBQWdDLEVBQ2hDLFFBQWtCO1FBRlAsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFOM0IsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixhQUFRLEdBQWEsSUFBSSx5QkFBUSxFQUFFLENBQUM7SUFLbEMsQ0FBQztJQUVILDBDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQUEsaUJBUUM7UUFQQSxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2pFLFVBQUMsQ0FBQztZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUEvQlcsdUJBQXVCO1FBUG5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7eUNBUTBCLHVCQUFjO1lBQ2Ysa0NBQWU7WUFDdEIsaUJBQVE7T0FSZix1QkFBdUIsQ0FnQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29yayB9IGZyb20gJy4uL21vZGVsL2hvbWV3b3JrLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdob21ld29yay1kZXRhaWwnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9ob21ld29yay1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21ld29ya0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcclxuXHRpc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHRob21ld29yazogSG9tZXdvcmsgPSBuZXcgSG9tZXdvcmsoKTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIGhvbWV3b3JrU2VydmljZTogSG9tZXdvcmtTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIFxyXG5cdHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZ2V0SG9tZXdvcmsoKTtcclxuXHR9IFxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRnZXRIb21ld29yaygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmhvbWV3b3JrU2VydmljZS5nZXRIb21ld29yayhpZCkuc3Vic2NyaWJlKFxyXG5cdFx0XHQoeCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaG9tZXdvcmsgPSB4O1xyXG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGdvQmFjaygpOiB2b2lkIHtcclxuXHRcdHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG5cdH1cclxufSJdfQ==
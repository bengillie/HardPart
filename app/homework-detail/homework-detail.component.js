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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELDBDQUEyQztBQUkzQyxnRUFBOEQ7QUFDOUQsMERBQW1EO0FBU25EO0lBT0MsaUNBQW9CLEtBQXFCLEVBQ2hDLGVBQWdDLEVBQ2hDLFFBQWtCO1FBRlAsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFOM0IsYUFBUSxHQUFhLElBQUkseUJBQVEsRUFBRSxDQUFDO1FBRXBDLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFLZixDQUFDO0lBRUgsMENBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFBQSxpQkFXQztRQVZBLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsVUFBQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUNELGNBQU8sQ0FBQyxFQUNSO1lBQ0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRUQsd0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQW5DVyx1QkFBdUI7UUFQbkMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDOUMsQ0FBQzt5Q0FTMEIsdUJBQWM7WUFDZixrQ0FBZTtZQUN0QixpQkFBUTtPQVRmLHVCQUF1QixDQW9DbkM7SUFBRCw4QkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWV3b3JrIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrLWRldGFpbCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uIDogU3Vic2NyaXB0aW9uO1xyXG5cclxuXHRob21ld29yazogSG9tZXdvcmsgPSBuZXcgSG9tZXdvcmsoKTtcclxuXHJcblx0aXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIGhvbWV3b3JrU2VydmljZTogSG9tZXdvcmtTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIFxyXG5cdHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZ2V0SG9tZXdvcmsoKTtcclxuXHR9IFxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRnZXRIb21ld29yaygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmhvbWV3b3JrU2VydmljZS5nZXRIb21ld29yayhpZCkuc3Vic2NyaWJlKFxyXG5cdFx0XHQoeCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaG9tZXdvcmsgPSB4O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQoKSA9PiB7fSxcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGdvQmFjaygpOiB2b2lkIHtcclxuXHRcdHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG5cdH1cclxufSJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var timetable_model_1 = require("../model/timetable.model");
var login_service_1 = require("../service/login.service");
var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(loginService, route) {
        this.loginService = loginService;
        this.route = route;
    }
    TimetableComponent.prototype.ngOnInit = function () {
        this.lesson = new timetable_model_1.Lessons();
        this.period = new timetable_model_1.Periods();
    };
    TimetableComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
        this.subscription.unsubscribe();
    };
    TimetableComponent.prototype.getLoggedUser = function () {
        var user = this.loginService.getLoggedInUser();
    };
    TimetableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-timetable',
            templateUrl: './timetable.component.html',
            styleUrls: ['./timetable.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.ActivatedRoute])
    ], TimetableComponent);
    return TimetableComponent;
}());
exports.TimetableComponent = TimetableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsMENBQWlEO0FBR2pELDREQUE0RDtBQUM1RCwwREFBd0Q7QUFReEQ7SUFLSSw0QkFDWSxZQUEwQixFQUMxQixLQUFxQjtRQURyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUM3QixDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx5QkFBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHlCQUFPLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQXRCUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBTzRCLDRCQUFZO1lBQ25CLHVCQUFjO09BUHhCLGtCQUFrQixDQXVCOUI7SUFBRCx5QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMZXNzb25zLCBQZXJpb2RzIH0gZnJvbSBcIi4uL21vZGVsL3RpbWV0YWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy10aW1ldGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RpbWV0YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90aW1ldGFibGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1ldGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcclxuICAgIGxlc3NvbjogTGVzc29ucztcclxuICAgIHBlcmlvZDogUGVyaW9kcztcclxuICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyBcclxuICAgICAgICB0aGlzLmxlc3NvbiA9IG5ldyBMZXNzb25zKCk7XHJcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBuZXcgUGVyaW9kcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkRlc3Ryb3lcIik7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2dnZWRVc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
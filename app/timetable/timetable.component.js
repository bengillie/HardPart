"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var timetable_model_1 = require("../model/timetable.model");
var login_service_1 = require("../service/login.service");
var timetable_service_1 = require("../service/timetable.service");
var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(location, loginService, timetableService) {
        this.location = location;
        this.loginService = loginService;
        this.timetableService = timetableService;
        this.isLoading = true;
        this.lesson = [];
        this.hasLesson = true;
    }
    TimetableComponent.prototype.ngOnInit = function () {
        this.lessonDate = new Date();
        this.period = new timetable_model_1.Periods;
        /* this.user = this.getLoggedInUser(); */
        this.getLesson();
    };
    TimetableComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    };
    TimetableComponent.prototype.getLesson = function () {
        var _this = this;
        this.subscription = this.timetableService.getLesson(1)
            .subscribe(function (lesson) {
            lesson = lesson.filter(function (all) { return new Date(all.startDate).toDateString() === _this.lessonDate.toDateString(); });
            lesson = lesson.sort(function (obj1, obj2) {
                return new Date(obj1.startDate).getHours() - new Date(obj2.startDate).getHours();
            });
            _this.lesson = lesson;
            if (lesson.length === 0) {
                _this.hasLesson = false;
            }
            _this.isLoading = false;
        });
    };
    TimetableComponent.prototype.getLoggedInUser = function () {
        var user = this.loginService.getLoggedInUser();
        return user;
    };
    TimetableComponent.prototype.getPeriod = function (startDate, endDate) {
        var _this = this;
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        this.subscription = this.timetableService.getPeriod(startDate, endDate)
            .subscribe(function (period) {
            _this.period = period;
        });
        return this.period.name;
    };
    TimetableComponent.prototype.goBack = function () {
        this.location.back();
    };
    TimetableComponent.prototype.onLeftSwipeClick = function () {
        console.log("swipe left");
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() - 1));
        this.getLesson();
    };
    TimetableComponent.prototype.onRightSwipeClick = function () {
        console.log("swipe right");
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() + 1));
        this.getLesson();
    };
    TimetableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-timetable',
            templateUrl: './timetable.component.html',
            styleUrls: ['./timetable.component.less']
        }),
        __metadata("design:paramtypes", [common_1.Location,
            login_service_1.LoginService,
            timetable_service_1.TimetableService])
    ], TimetableComponent);
    return TimetableComponent;
}());
exports.TimetableComponent = TimetableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsMENBQTJDO0FBRzNDLDREQUE0RDtBQUM1RCwwREFBd0Q7QUFDeEQsa0VBQWdFO0FBU2hFO0lBVUksNEJBQ1ksUUFBa0IsRUFDbEIsWUFBMEIsRUFDMUIsZ0JBQWtDO1FBRmxDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVY5QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFdBQU0sR0FBYyxFQUFFLENBQUM7UUFJdkIsY0FBUyxHQUFHLElBQUksQ0FBQztJQU1iLENBQUM7SUFFTCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx5QkFBTyxDQUFDO1FBQzFCLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkFrQkM7UUFqQkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNqRCxTQUFTLENBQ04sVUFBQSxNQUFNO1lBQ0YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxFQUFFLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBekUsQ0FBeUUsQ0FBQyxDQUFDO1lBQ3pHLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFFLFVBQUMsSUFBYSxFQUFFLElBQWE7Z0JBRS9DLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFckIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDO1lBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLFNBQWUsRUFBRSxPQUFhO1FBQXhDLGlCQVVDO1FBVEcsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQzthQUNsRSxTQUFTLENBQ04sVUFBQSxNQUFNO1lBQ0YsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQyxDQUNKLENBQUM7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBRSxhQUFhLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQWhGUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBWXdCLGlCQUFRO1lBQ0osNEJBQVk7WUFDUixvQ0FBZ0I7T0FickMsa0JBQWtCLENBaUY5QjtJQUFELHlCQUFDO0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IExlc3NvbnMsIFBlcmlvZHMgfSBmcm9tIFwiLi4vbW9kZWwvdGltZXRhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGltZXRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL3RpbWV0YWJsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJ34vbW9kZWwvdXNlci5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLXRpbWV0YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RpbWV0YWJsZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1ldGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgbGVzc29uOiBMZXNzb25zW10gPSBbXTtcclxuICAgIHBlcmlvZDogUGVyaW9kcztcclxuICAgIHVzZXI6IFVzZXJNb2RlbDtcclxuICAgIGxlc3NvbkRhdGU6IERhdGU7XHJcbiAgICBoYXNMZXNzb24gPSB0cnVlO1xyXG4gICAgICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdGltZXRhYmxlU2VydmljZTogVGltZXRhYmxlU2VydmljZSxcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMubGVzc29uRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBuZXcgUGVyaW9kcztcclxuICAgICAgICAvKiB0aGlzLnVzZXIgPSB0aGlzLmdldExvZ2dlZEluVXNlcigpOyAqL1xyXG4gICAgICAgIHRoaXMuZ2V0TGVzc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRMZXNzb24oKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnRpbWV0YWJsZVNlcnZpY2UuZ2V0TGVzc29uKDEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBsZXNzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlc3NvbiA9IGxlc3Nvbi5maWx0ZXIoYWxsID0+IG5ldyBEYXRlKGFsbC5zdGFydERhdGUpLnRvRGF0ZVN0cmluZygpID09PSB0aGlzLmxlc3NvbkRhdGUudG9EYXRlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlc3NvbiA9IGxlc3Nvbi5zb3J0ICgob2JqMTogTGVzc29ucywgb2JqMjogTGVzc29ucykgID0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUob2JqMS5zdGFydERhdGUpLmdldEhvdXJzKCkgLSBuZXcgRGF0ZShvYmoyLnN0YXJ0RGF0ZSkuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlc3NvbiA9IGxlc3NvbjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGVzc29uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0xlc3NvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nZ2VkSW5Vc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJpb2Qoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudGltZXRhYmxlU2VydmljZS5nZXRQZXJpb2Qoc3RhcnREYXRlLCBlbmREYXRlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJpb2QgPSBwZXJpb2Q7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlcmlvZC5uYW1lO1xyXG4gICAgfSAgXHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgb25MZWZ0U3dpcGVDbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoXCJzd2lwZSBsZWZ0XCIpO1xyXG4gICAgICAgIHRoaXMubGVzc29uRGF0ZSA9IG5ldyBEYXRlKHRoaXMubGVzc29uRGF0ZS5zZXREYXRlKHRoaXMubGVzc29uRGF0ZS5nZXREYXRlKCkgLSAxKSk7XHJcbiAgICAgICAgdGhpcy5nZXRMZXNzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJpZ2h0U3dpcGVDbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoXCJzd2lwZSByaWdodFwiKTtcclxuICAgICAgICB0aGlzLmxlc3NvbkRhdGUgPSBuZXcgRGF0ZSh0aGlzLmxlc3NvbkRhdGUuc2V0RGF0ZSh0aGlzLmxlc3NvbkRhdGUuZ2V0RGF0ZSgpICsgMSkpO1xyXG4gICAgICAgIHRoaXMuZ2V0TGVzc29uKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
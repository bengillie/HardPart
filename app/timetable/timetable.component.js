"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var timetable_model_1 = require("../model/timetable.model");
var login_service_1 = require("../service/login.service");
var timetable_service_1 = require("../service/timetable.service");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout/stack-layout");
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
            _this.getTotalLesson(lesson);
            /* this.getSubjectColour(lesson); */
            _this.lesson = lesson;
            _this.isLoading = false;
        });
    };
    TimetableComponent.prototype.getLoggedInUser = function () {
        var user = this.loginService.getLoggedInUser();
        return user;
    };
    /* for testing */
    TimetableComponent.prototype.getPeriod = function (startDate, endDate) {
        var _this = this;
        var pName = "";
        this.subscription = this.timetableService.getPeriod(new Date(startDate), new Date(endDate))
            .subscribe(function (period) {
            _this.period = period;
            if (_this.period.name === undefined) {
                pName = _this.period.name;
            }
            else {
                pName = "ERROR";
            }
        });
        return pName;
    };
    TimetableComponent.prototype.getTotalLesson = function (lesson) {
        if (lesson.length === 0) {
            this.hasLesson = false;
        }
        else {
            this.hasLesson = true;
        }
    };
    TimetableComponent.prototype.goBack = function () {
        this.location.back();
    };
    TimetableComponent.prototype.onLeftSwipeClick = function () {
        console.log("swipe left");
        this.isLoading = true;
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() - 1));
        this.getLesson();
    };
    TimetableComponent.prototype.onRightSwipeClick = function () {
        console.log("swipe right");
        this.isLoading = true;
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() + 1));
        this.getLesson();
    };
    /* for testing */
    TimetableComponent.prototype.getSubjectColour = function (lesson) {
        for (var i = 0; i < lesson.length; i++) {
            switch (lesson[i].subject) {
                case "Science":
                    this.subjectColour.backgroundColor = "green";
                default:
                    this.subjectColour.backgroundColor = "gray";
            }
        }
    };
    __decorate([
        core_1.ViewChild("subjectColour"),
        __metadata("design:type", stack_layout_1.StackLayout)
    ], TimetableComponent.prototype, "subjectColour", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsMENBQTJDO0FBRzNDLDREQUE0RDtBQUM1RCwwREFBd0Q7QUFDeEQsa0VBQWdFO0FBR2hFLHNGQUFvRjtBQVNwRjtJQVlJLDRCQUNZLFFBQWtCLEVBQ2xCLFlBQTBCLEVBQzFCLGdCQUFrQztRQUZsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFaOUMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixXQUFNLEdBQWMsRUFBRSxDQUFDO1FBSXZCLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFRYixDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkseUJBQU8sQ0FBQztRQUMxQix5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNqRCxTQUFTLENBQ04sVUFBQSxNQUFNO1lBQ0YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLElB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QUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxpQkFBaUI7SUFDakIsNkNBQWdCLEdBQWhCLFVBQWlCLE1BQWlCO1FBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLFNBQVM7b0JBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUMsT0FBTyxDQUFDO2dCQUMvQztvQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDcEQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBcEcyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBZ0IsMEJBQVc7NkRBQUM7SUFWOUMsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQWN3QixpQkFBUTtZQUNKLDRCQUFZO1lBQ1Isb0NBQWdCO09BZnJDLGtCQUFrQixDQStHOUI7SUFBRCx5QkFBQztDQUFBLEFBL0dELElBK0dDO0FBL0dZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMZXNzb25zLCBQZXJpb2RzIH0gZnJvbSBcIi4uL21vZGVsL3RpbWV0YWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRpbWV0YWJsZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS90aW1ldGFibGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICd+L21vZGVsL3VzZXIubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXcvY29udGVudC12aWV3JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbnMtdGltZXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW1ldGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGltZXRhYmxlLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWV0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uIDogU3Vic2NyaXB0aW9uO1xyXG4gICAgXHJcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgbGVzc29uOiBMZXNzb25zW10gPSBbXTtcclxuICAgIHBlcmlvZDogUGVyaW9kcztcclxuICAgIHVzZXI6IFVzZXJNb2RlbDtcclxuICAgIGxlc3NvbkRhdGU6IERhdGU7XHJcbiAgICBoYXNMZXNzb24gPSB0cnVlO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJzdWJqZWN0Q29sb3VyXCIpIHN1YmplY3RDb2xvdXI6IFN0YWNrTGF5b3V0O1xyXG4gICAgICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdGltZXRhYmxlU2VydmljZTogVGltZXRhYmxlU2VydmljZSxcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMubGVzc29uRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBuZXcgUGVyaW9kcztcclxuICAgICAgICAvKiB0aGlzLnVzZXIgPSB0aGlzLmdldExvZ2dlZEluVXNlcigpOyAqL1xyXG4gICAgICAgIHRoaXMuZ2V0TGVzc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRMZXNzb24oKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnRpbWV0YWJsZVNlcnZpY2UuZ2V0TGVzc29uKDEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBsZXNzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlc3NvbiA9IGxlc3Nvbi5maWx0ZXIoYWxsID0+IG5ldyBEYXRlKGFsbC5zdGFydERhdGUpLnRvRGF0ZVN0cmluZygpID09PSB0aGlzLmxlc3NvbkRhdGUudG9EYXRlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlc3NvbiA9IGxlc3Nvbi5zb3J0ICgob2JqMTogTGVzc29ucywgb2JqMjogTGVzc29ucykgID0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUob2JqMS5zdGFydERhdGUpLmdldEhvdXJzKCkgLSBuZXcgRGF0ZShvYmoyLnN0YXJ0RGF0ZSkuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRvdGFsTGVzc29uKGxlc3Nvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogdGhpcy5nZXRTdWJqZWN0Q29sb3VyKGxlc3Nvbik7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXNzb24gPSBsZXNzb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nZ2VkSW5Vc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBmb3IgdGVzdGluZyAqL1xyXG4gICAgZ2V0UGVyaW9kKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIGxldCBwTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnRpbWV0YWJsZVNlcnZpY2UuZ2V0UGVyaW9kKG5ldyBEYXRlKHN0YXJ0RGF0ZSksIG5ldyBEYXRlKGVuZERhdGUpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJpb2QgPSBwZXJpb2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVyaW9kLm5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwTmFtZSA9IHRoaXMucGVyaW9kLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcE5hbWUgPSBcIkVSUk9SXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gcE5hbWU7XHJcbiAgICB9ICBcclxuXHJcbiAgICBnZXRUb3RhbExlc3NvbihsZXNzb246IExlc3NvbnNbXSkge1xyXG4gICAgICAgIGlmIChsZXNzb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTGVzc29uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhc0xlc3NvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuXHRcdHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIG9uTGVmdFN3aXBlQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cgKFwic3dpcGUgbGVmdFwiKTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sZXNzb25EYXRlID0gbmV3IERhdGUodGhpcy5sZXNzb25EYXRlLnNldERhdGUodGhpcy5sZXNzb25EYXRlLmdldERhdGUoKSAtIDEpKTtcclxuICAgICAgICB0aGlzLmdldExlc3NvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmlnaHRTd2lwZUNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nIChcInN3aXBlIHJpZ2h0XCIpO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxlc3NvbkRhdGUgPSBuZXcgRGF0ZSh0aGlzLmxlc3NvbkRhdGUuc2V0RGF0ZSh0aGlzLmxlc3NvbkRhdGUuZ2V0RGF0ZSgpICsgMSkpO1xyXG4gICAgICAgIHRoaXMuZ2V0TGVzc29uKCk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgXHJcblxyXG4gICAgLyogZm9yIHRlc3RpbmcgKi9cclxuICAgIGdldFN1YmplY3RDb2xvdXIobGVzc29uOiBMZXNzb25zW10pIHtcclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8bGVzc29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGVzc29uW2ldLnN1YmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTY2llbmNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0Q29sb3VyLmJhY2tncm91bmRDb2xvcj1cImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdENvbG91ci5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var timetable_model_1 = require("../model/timetable.model");
var timetable_model_2 = require("~/model/timetable.model");
var appvalues_service_1 = require("~/service/appvalues.service");
var homework_service_1 = require("~/service/homework.service");
var logging_service_1 = require("~/service/logging.service");
var timetable_service_1 = require("../service/timetable.service");
var homework_model_1 = require("~/model/homework.model");
var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(appValuesService, homeworkService, loggingService, router, timetableService) {
        this.appValuesService = appValuesService;
        this.homeworkService = homeworkService;
        this.loggingService = loggingService;
        this.router = router;
        this.timetableService = timetableService;
        this.subscriptions = [];
        this.homeworkIcon = "";
        this.lessonDate = new Date();
        this.startDate = new Date();
        this.endDate = new Date();
        this.allHomeworks = [];
        this.allDueHomeworks = [];
        this.allLessons = [];
        this.lessonsForDate = [];
        this.allPeriods = [];
        this.periodsForDate = [];
        this.tabDates = [];
        this.current = false;
        this.hasLesson = true;
        this.isDueLesson = false;
        this.isLoading = true;
        this.lastLesson = false;
        this.showDetails = false;
        this.dateRange = [];
        this.loggedInUser = this.appValuesService.getLoggedInUser();
        this.startDate.setDate(this.startDate.getDate() - (this.startDate.getDay() + 7));
        this.endDate.setDate(this.endDate.getDate() - (this.endDate.getDay() - 14));
        this.getAllHomework();
        this.getLessonsDateRange();
        this.getLessons();
        this.getPeriods();
    }
    TimetableComponent.prototype.ngOnInit = function () {
    };
    TimetableComponent.prototype.ngAfterViewInit = function () {
        // this.tabSelectedIndex++;
    };
    TimetableComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription.unsubscribe();
            }
        }
    };
    TimetableComponent.prototype.getAllHomework = function () {
        var _this = this;
        this.subscriptions.push(this.homeworkService.getStudentHomework(this.loggedInUser.id)
            .subscribe(function (homework) {
            _this.allHomeworks = homework;
        }));
    };
    // getBreakPeriod(lesson: Lesson): boolean {    
    //     let breakTimeName = Break;
    //     this.breakPeriodLabel = "";
    //     const regexp = new RegExp('B');
    //     const name = this.getPeriodNameForLesson(lesson);
    //     if ((new Date(lesson.startDate).getHours() < 12) && regexp.test(name)) {
    //         this.breakPeriodLabel = breakTimeName.amBreak;
    //         this.showDetails = false;
    //         return true;
    //     } 
    //     if ((new Date(lesson.startDate).getHours() >= 12) && regexp.test(name)) {
    //         this.breakPeriodLabel = breakTimeName.pmBreak;
    //         this.showDetails = false;
    //         return true;
    //     }
    //     this.showDetails =true;
    //     return false;
    // }
    TimetableComponent.prototype.getCurrentLesson = function (lesson) {
        var today = new Date();
        if ((today >= new Date(lesson.startDate)) && (today <= new Date(lesson.endDate))) {
            this.current = true;
            return true;
        }
        else {
            this.current = false;
            return false;
        }
    };
    TimetableComponent.prototype.getHomeworkDueDate = function (lesson) {
        var dueHomework = this.allHomeworks.find(function (h) {
            return h.subject == lesson.subject;
        });
        if (dueHomework != undefined) {
            this.allDueHomeworks.push(dueHomework);
            var isOverdue = this.homeworkService.getHomeworkDeadlineStatus(dueHomework) === homework_model_1.HomeworkDeadlineStatus.overDue;
            if (isOverdue === true) {
                this.isDueLesson = true;
                this.homeworkIcon = String.fromCharCode(0xe91f);
                return true;
            }
        }
        return false;
    };
    TimetableComponent.prototype.getLessons = function () {
        var _this = this;
        this.subscriptions.push(this.timetableService.getLessons()
            .subscribe(function (lessons) {
            lessons = lessons.sort(function (obj1, obj2) {
                return new Date(obj1.startDate).getHours() - new Date(obj2.startDate).getHours();
            });
            _this.allLessons = lessons;
            _this.getTabDateLesson();
        }));
    };
    TimetableComponent.prototype.getLessonsDateRange = function () {
        // one week previous date
        var minDate = new Date();
        minDate.setDate(minDate.getDate() - (minDate.getDay() + 7));
        // two weeks future date
        var maxDate = new Date();
        maxDate.setDate(maxDate.getDate() - (maxDate.getDay() - 13));
        var tabItemDate = new Date();
        do {
            tabItemDate = new Date(minDate.setDate(minDate.getDate() + 1));
            this.dateRange.push(tabItemDate);
            if (tabItemDate.getDate() === this.lessonDate.getDate()) {
                this.tabSelectedIndex = this.dateRange.findIndex(function (x) { return x == tabItemDate; });
            }
        } while (tabItemDate < maxDate);
    };
    TimetableComponent.prototype.getLessonsForDate = function (date) {
        if (!this.allLessons) {
            this.lessonsForDate = [];
            return;
        }
        this.lessonsForDate = this.allLessons.filter(function (l) { return new Date(l.startDate).toDateString() === date.toDateString(); });
    };
    TimetableComponent.prototype.getPeriods = function () {
        var _this = this;
        this.subscriptions.push(this.timetableService.getPeriods(new Date(this.startDate), new Date(this.endDate))
            .subscribe(function (p) {
            _this.allPeriods = p;
        }));
    };
    TimetableComponent.prototype.getPeriodNameForLesson = function (lesson) {
        var name = "";
        var startLessonDay = new Date(lesson.startDate).getDay();
        var startLessonHour = new Date(lesson.startDate).getHours();
        var startLessonMinute = new Date(lesson.startDate).getMinutes();
        var endLessonDay = new Date(lesson.endDate).getDay();
        var endLessonHour = new Date(lesson.endDate).getHours();
        var endLessonMinute = new Date(lesson.endDate).getMinutes();
        var period = this.allPeriods.find(function (p) {
            return new Date(p.startDate).getDay() == startLessonDay &&
                new Date(p.startDate).getHours() == startLessonHour &&
                new Date(p.startDate).getMinutes() == startLessonMinute &&
                new Date(p.endDate).getDay() == endLessonDay &&
                new Date(p.endDate).getHours() == endLessonHour &&
                new Date(p.endDate).getMinutes() == endLessonMinute;
        });
        if (period) {
            name = period.name;
        }
        return name;
    };
    TimetableComponent.prototype.getSubjectColour = function (lesson) {
        var subject = timetable_model_2.Subject;
        var color = "";
        switch (lesson.subject) {
            case subject.art: {
                color = "#8B0000";
                break;
            }
            case subject.computing: {
                color = "#8B4513";
                break;
            }
            case subject.design: {
                color = "#808000";
                break;
            }
            case subject.english: {
                color = "#2ECCFA";
                break;
            }
            case subject.geography: {
                color = "#FA58F4";
                break;
            }
            case subject.history: {
                color = "#04B404";
                break;
            }
            case subject.languages: {
                color = "#BF00FF";
                break;
            }
            case subject.math: {
                color = "#FF8000";
                break;
            }
            case subject.music: {
                color = "#642EFE";
                break;
            }
            case subject.pe: {
                color = "#FFFF00";
                break;
            }
            case subject.reg: {
                color = "#086A87";
                break;
            }
            case subject.science: {
                color = "#FF0000";
                break;
            }
        }
        return color;
    };
    TimetableComponent.prototype.getTabDateLesson = function () {
        for (var _i = 0, _a = this.dateRange; _i < _a.length; _i++) {
            var tabDate = _a[_i];
            this.getLessonsForDate(tabDate);
            var timetableTab = new timetable_model_1.TimetableTab;
            timetableTab.date = tabDate;
            timetableTab.lessons = this.lessonsForDate;
            this.tabDates.push(timetableTab);
        }
        this.isLoading = false;
    };
    TimetableComponent.prototype.onTapHomework = function (lesson) {
        var homework = this.allDueHomeworks.find(function (h) {
            return h.subject == lesson.subject;
        });
        this.router.navigate(["/homeworkdetails/" + homework.id]);
    };
    TimetableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-timetable',
            templateUrl: './timetable.component.html',
            styleUrls: ['./timetable.component.less']
        }),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService,
            homework_service_1.HomeworkService,
            logging_service_1.LoggingService,
            router_1.Router,
            timetable_service_1.TimetableService])
    ], TimetableComponent);
    return TimetableComponent;
}());
exports.TimetableComponent = TimetableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0UsMENBQXlDO0FBR3pDLDREQUF3RTtBQUN4RSwyREFBa0Q7QUFHbEQsaUVBQStEO0FBQy9ELCtEQUE2RDtBQUM3RCw2REFBMkQ7QUFDM0Qsa0VBQWdFO0FBQ2hFLHlEQUEwRTtBQVExRTtJQWdDSSw0QkFDWSxnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsTUFBYyxFQUNkLGdCQUFrQztRQUpsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFwQ3RDLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztRQUU1QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUlsQixlQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUUzQixpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUM5QixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUVqQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRTlCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFFOUIsYUFBUSxHQUFtQixFQUFFLENBQUM7UUFFOUIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FB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ekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FrQ2dDLG9DQUFnQjtZQUNqQixrQ0FBZTtZQUNoQixnQ0FBYztZQUN0QixlQUFNO1lBQ0ksb0NBQWdCO09BckNyQyxrQkFBa0IsQ0FtUzlCO0lBQUQseUJBQUM7Q0FBQSxBQW5TRCxJQW1TQztBQW5TWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMZXNzb24sIFBlcmlvZCwgVGltZXRhYmxlVGFiIH0gZnJvbSBcIi4uL21vZGVsL3RpbWV0YWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnfi9tb2RlbC90aW1ldGFibGUubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9tb2RlbC91c2VyLm1vZGVsJztcclxuXHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYXBwdmFsdWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbWV0YWJsZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS90aW1ldGFibGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtEZWFkbGluZVN0YXR1cyB9IGZyb20gJ34vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy10aW1ldGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RpbWV0YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90aW1ldGFibGUuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZXRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zIDogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICAgIFxyXG4gICAgaG9tZXdvcmtJY29uID0gXCJcIjtcclxuXHJcbiAgICBsb2dnZWRJblVzZXI6IFVzZXI7XHJcbiAgICBcclxuICAgIGxlc3NvbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgc3RhcnREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGVuZERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIGFsbEhvbWV3b3JrczogSG9tZXdvcmtbXSA9IFtdO1xyXG4gICAgYWxsRHVlSG9tZXdvcmtzOiBIb21ld29ya1tdID0gW107XHJcblxyXG4gICAgYWxsTGVzc29uczogTGVzc29uW10gPSBbXTtcclxuICAgIGxlc3NvbnNGb3JEYXRlOiBMZXNzb25bXSA9IFtdO1xyXG5cclxuICAgIGFsbFBlcmlvZHM6IFBlcmlvZFtdID0gW107XHJcbiAgICBwZXJpb2RzRm9yRGF0ZTogUGVyaW9kW10gPSBbXTsgICAgXHJcblxyXG4gICAgdGFiRGF0ZXM6IFRpbWV0YWJsZVRhYltdID0gW107XHJcbiAgICBcclxuICAgIGN1cnJlbnQgPSBmYWxzZTtcclxuICAgIGhhc0xlc3NvbiA9IHRydWU7XHJcbiAgICBpc0R1ZUxlc3NvbiA9IGZhbHNlO1xyXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIGxhc3RMZXNzb24gPSBmYWxzZTtcclxuICAgIHNob3dEZXRhaWxzID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGRhdGVSYW5nZSA9IFtdO1xyXG4gICAgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gICAgICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBWYWx1ZXNTZXJ2aWNlOiBBcHBWYWx1ZXNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaG9tZXdvcmtTZXJ2aWNlOiBIb21ld29ya1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHRpbWV0YWJsZVNlcnZpY2U6IFRpbWV0YWJsZVNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmxvZ2dlZEluVXNlciA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydERhdGUuc2V0RGF0ZSh0aGlzLnN0YXJ0RGF0ZS5nZXREYXRlKCkgLSAodGhpcy5zdGFydERhdGUuZ2V0RGF5KCkgKyA3KSk7XHJcbiAgICAgICAgdGhpcy5lbmREYXRlLnNldERhdGUodGhpcy5lbmREYXRlLmdldERhdGUoKSAtICh0aGlzLmVuZERhdGUuZ2V0RGF5KCkgLSAxNCkpO1xyXG5cclxuICAgICAgICB0aGlzLmdldEFsbEhvbWV3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5nZXRMZXNzb25zRGF0ZVJhbmdlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRMZXNzb25zKCk7XHJcbiAgICAgICAgdGhpcy5nZXRQZXJpb2RzKCk7ICAgXHJcblxyXG4gICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIC8vIHRoaXMudGFiU2VsZWN0ZWRJbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsSG9tZXdvcmsoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0U3R1ZGVudEhvbWV3b3JrKHRoaXMubG9nZ2VkSW5Vc2VyLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgaG9tZXdvcmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsSG9tZXdvcmtzID0gaG9tZXdvcms7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0QnJlYWtQZXJpb2QobGVzc29uOiBMZXNzb24pOiBib29sZWFuIHsgICAgXHJcbiAgICAvLyAgICAgbGV0IGJyZWFrVGltZU5hbWUgPSBCcmVhaztcclxuXHJcbiAgICAvLyAgICAgdGhpcy5icmVha1BlcmlvZExhYmVsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoJ0InKTtcclxuICAgIC8vICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRQZXJpb2ROYW1lRm9yTGVzc29uKGxlc3Nvbik7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgaWYgKChuZXcgRGF0ZShsZXNzb24uc3RhcnREYXRlKS5nZXRIb3VycygpIDwgMTIpICYmIHJlZ2V4cC50ZXN0KG5hbWUpKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYnJlYWtQZXJpb2RMYWJlbCA9IGJyZWFrVGltZU5hbWUuYW1CcmVhaztcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93RGV0YWlscyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGlmICgobmV3IERhdGUobGVzc29uLnN0YXJ0RGF0ZSkuZ2V0SG91cnMoKSA+PSAxMikgJiYgcmVnZXhwLnRlc3QobmFtZSkpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5icmVha1BlcmlvZExhYmVsID0gYnJlYWtUaW1lTmFtZS5wbUJyZWFrO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dEZXRhaWxzID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgLy8gICAgIH1cclxuICAgICAgICBcclxuICAgIC8vICAgICB0aGlzLnNob3dEZXRhaWxzID10cnVlO1xyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXRDdXJyZW50TGVzc29uKGxlc3NvbjogTGVzc29uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKCh0b2RheSA+PSBuZXcgRGF0ZShsZXNzb24uc3RhcnREYXRlKSkgJiYgKHRvZGF5IDw9IG5ldyBEYXRlKGxlc3Nvbi5lbmREYXRlKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG9tZXdvcmtEdWVEYXRlKGxlc3NvbjogTGVzc29uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZHVlSG9tZXdvcmsgPSB0aGlzLmFsbEhvbWV3b3Jrcy5maW5kKGggPT5cclxuICAgICAgICAgICAgaC5zdWJqZWN0ID09IGxlc3Nvbi5zdWJqZWN0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGR1ZUhvbWV3b3JrICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbER1ZUhvbWV3b3Jrcy5wdXNoKGR1ZUhvbWV3b3JrKTtcclxuICAgICAgICAgICAgbGV0IGlzT3ZlcmR1ZSA9IHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMoZHVlSG9tZXdvcmspID09PSBIb21ld29ya0RlYWRsaW5lU3RhdHVzLm92ZXJEdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNPdmVyZHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRHVlTGVzc29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZXdvcmtJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MWYpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZXNzb25zKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGltZXRhYmxlU2VydmljZS5nZXRMZXNzb25zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGxlc3NvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlc3NvbnMgPSBsZXNzb25zLnNvcnQgKChvYmoxOiBMZXNzb24sIG9iajI6IExlc3NvbikgID0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUob2JqMS5zdGFydERhdGUpLmdldEhvdXJzKCkgLSBuZXcgRGF0ZShvYmoyLnN0YXJ0RGF0ZSkuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbExlc3NvbnMgPSBsZXNzb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGFiRGF0ZUxlc3NvbigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVzc29uc0RhdGVSYW5nZSgpIHtcclxuICAgICAgICAvLyBvbmUgd2VlayBwcmV2aW91cyBkYXRlXHJcbiAgICAgICAgbGV0IG1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIG1pbkRhdGUuc2V0RGF0ZShtaW5EYXRlLmdldERhdGUoKSAtIChtaW5EYXRlLmdldERheSgpICsgNykpO1xyXG5cclxuICAgICAgICAvLyB0d28gd2Vla3MgZnV0dXJlIGRhdGVcclxuICAgICAgICBsZXQgbWF4RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbWF4RGF0ZS5zZXREYXRlKG1heERhdGUuZ2V0RGF0ZSgpIC0gKG1heERhdGUuZ2V0RGF5KCkgLSAxMykpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IHRhYkl0ZW1EYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRhYkl0ZW1EYXRlID0gbmV3IERhdGUobWluRGF0ZS5zZXREYXRlKG1pbkRhdGUuZ2V0RGF0ZSgpICsgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVSYW5nZS5wdXNoKHRhYkl0ZW1EYXRlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0YWJJdGVtRGF0ZS5nZXREYXRlKCkgPT09IHRoaXMubGVzc29uRGF0ZS5nZXREYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IHRoaXMuZGF0ZVJhbmdlLmZpbmRJbmRleCh4ID0+IHggPT0gdGFiSXRlbURhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAodGFiSXRlbURhdGUgPCBtYXhEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZXNzb25zRm9yRGF0ZShkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbExlc3NvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXNzb25zRm9yRGF0ZSA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGVzc29uc0ZvckRhdGUgPSB0aGlzLmFsbExlc3NvbnMuZmlsdGVyKGwgPT4gbmV3IERhdGUobC5zdGFydERhdGUpLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJpb2RzKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLnRpbWV0YWJsZVNlcnZpY2UuZ2V0UGVyaW9kcyhuZXcgRGF0ZSh0aGlzLnN0YXJ0RGF0ZSksIG5ldyBEYXRlKHRoaXMuZW5kRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHAgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBlcmlvZHMgPSBwO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBlcmlvZE5hbWVGb3JMZXNzb24obGVzc29uOiBMZXNzb24pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnRMZXNzb25EYXkgPSBuZXcgRGF0ZShsZXNzb24uc3RhcnREYXRlKS5nZXREYXkoKTtcclxuICAgICAgICBjb25zdCBzdGFydExlc3NvbkhvdXIgPSBuZXcgRGF0ZShsZXNzb24uc3RhcnREYXRlKS5nZXRIb3VycygpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0TGVzc29uTWludXRlID0gbmV3IERhdGUobGVzc29uLnN0YXJ0RGF0ZSkuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGNvbnN0IGVuZExlc3NvbkRheSA9IG5ldyBEYXRlKGxlc3Nvbi5lbmREYXRlKS5nZXREYXkoKTtcclxuICAgICAgICBjb25zdCBlbmRMZXNzb25Ib3VyID0gbmV3IERhdGUobGVzc29uLmVuZERhdGUpLmdldEhvdXJzKCk7XHJcbiAgICAgICAgY29uc3QgZW5kTGVzc29uTWludXRlID0gbmV3IERhdGUobGVzc29uLmVuZERhdGUpLmdldE1pbnV0ZXMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGVyaW9kID0gdGhpcy5hbGxQZXJpb2RzLmZpbmQocCA9PiBcclxuICAgICAgICAgICAgbmV3IERhdGUocC5zdGFydERhdGUpLmdldERheSgpID09IHN0YXJ0TGVzc29uRGF5ICYmIFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShwLnN0YXJ0RGF0ZSkuZ2V0SG91cnMoKSA9PSBzdGFydExlc3NvbkhvdXIgJiYgXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKHAuc3RhcnREYXRlKS5nZXRNaW51dGVzKCkgPT0gc3RhcnRMZXNzb25NaW51dGUgJiYgXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKHAuZW5kRGF0ZSkuZ2V0RGF5KCkgPT0gZW5kTGVzc29uRGF5ICYmIFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShwLmVuZERhdGUpLmdldEhvdXJzKCkgPT0gZW5kTGVzc29uSG91ciAmJiBcclxuICAgICAgICAgICAgbmV3IERhdGUocC5lbmREYXRlKS5nZXRNaW51dGVzKCkgPT0gZW5kTGVzc29uTWludXRlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHBlcmlvZCl7XHJcbiAgICAgICAgICAgIG5hbWUgPSBwZXJpb2QubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9ICBcclxuXHJcbiAgICBnZXRTdWJqZWN0Q29sb3VyKGxlc3NvbjogTGVzc29uKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgc3ViamVjdCA9IFN1YmplY3Q7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gXCJcIjtcclxuXHJcbiAgICAgICAgc3dpdGNoIChsZXNzb24uc3ViamVjdCkge1xyXG4gICAgICAgICAgICBjYXNlIHN1YmplY3QuYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiIzhCMDAwMFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBzdWJqZWN0LmNvbXB1dGluZzoge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiM4QjQ1MTNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2Ugc3ViamVjdC5kZXNpZ246IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjODA4MDAwXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHN1YmplY3QuZW5nbGlzaDoge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiMyRUNDRkFcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2Ugc3ViamVjdC5nZW9ncmFwaHk6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjRkE1OEY0XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHN1YmplY3QuaGlzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiMwNEI0MDRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2Ugc3ViamVjdC5sYW5ndWFnZXM6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjQkYwMEZGXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHN1YmplY3QubWF0aDoge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiNGRjgwMDBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2Ugc3ViamVjdC5tdXNpYzoge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiM2NDJFRkVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2Ugc3ViamVjdC5wZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiNGRkZGMDBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2Ugc3ViamVjdC5yZWc6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjMDg2QTg3XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHN1YmplY3Quc2NpZW5jZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiNGRjAwMDBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFiRGF0ZUxlc3NvbigpIHtcclxuICAgICAgICBmb3IgKGxldCB0YWJEYXRlIG9mIHRoaXMuZGF0ZVJhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TGVzc29uc0ZvckRhdGUodGFiRGF0ZSk7XHJcbiAgICAgICAgICAgIGxldCB0aW1ldGFibGVUYWIgPSBuZXcgVGltZXRhYmxlVGFiO1xyXG5cclxuICAgICAgICAgICAgdGltZXRhYmxlVGFiLmRhdGUgPSB0YWJEYXRlO1xyXG4gICAgICAgICAgICB0aW1ldGFibGVUYWIubGVzc29ucyA9IHRoaXMubGVzc29uc0ZvckRhdGU7XHJcbiAgICAgICAgICAgIHRoaXMudGFiRGF0ZXMucHVzaCh0aW1ldGFibGVUYWIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblRhcEhvbWV3b3JrKGxlc3NvbjogTGVzc29uKSB7XHJcbiAgICAgICAgY29uc3QgaG9tZXdvcmsgPSB0aGlzLmFsbER1ZUhvbWV3b3Jrcy5maW5kKGggPT5cclxuICAgICAgICAgICAgaC5zdWJqZWN0ID09IGxlc3Nvbi5zdWJqZWN0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvaG9tZXdvcmtkZXRhaWxzLyR7aG9tZXdvcmsuaWR9YF0pO1xyXG4gICAgfVxyXG59Il19

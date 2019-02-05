"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var timetable_model_1 = require("../model/timetable.model");
var timetable_model_2 = require("~/model/timetable.model");
var appvalues_service_1 = require("~/service/appvalues.service");
var homework_service_1 = require("~/service/homework.service");
var timetable_service_1 = require("../service/timetable.service");
var homework_model_1 = require("~/model/homework.model");
var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(appValuesService, homeworkService, router, timetableService) {
        this.appValuesService = appValuesService;
        this.homeworkService = homeworkService;
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
        this.selectedStudent = this.appValuesService.getSelectedStudent();
        this.startDate.setDate(this.startDate.getDate() - (this.startDate.getDay() + 7));
        this.endDate.setDate(this.endDate.getDate() - (this.endDate.getDay() - 14));
        this.getAllHomework();
        this.getLessonsDateRange();
        this.getLessons();
        this.getPeriods();
    }
    TimetableComponent.prototype.ngOnInit = function () { };
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
        this.subscriptions.push(this.homeworkService.getStudentHomework(this.selectedStudent.id)
            .subscribe(function (homework) {
            _this.allHomeworks = homework;
        }));
    };
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
        this.subscriptions.push(this.timetableService.getLessons(this.dateRange)
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
        // one week future date
        var maxDate = new Date();
        maxDate.setDate(maxDate.getDate() - (maxDate.getDay() - 13));
        var tabItemDate = new Date();
        while (tabItemDate < maxDate) {
            tabItemDate = new Date(minDate.setDate(minDate.getDate() + 1));
            this.dateRange.push(tabItemDate.toString());
        }
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
        this.subscriptions.push(this.timetableService.getPeriods(this.dateRange)
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
            this.getLessonsForDate(new Date(tabDate));
            var timetableTab = new timetable_model_1.TimetableTab;
            timetableTab.date = tabDate;
            timetableTab.lessons = this.lessonsForDate;
            this.tabDates.push(timetableTab);
        }
        this.isLoading = false;
    };
    TimetableComponent.prototype.onTabSwipe = function (args) {
        var _this = this;
        if (args.oldIndex !== -1) {
            return;
        }
        var _loop_1 = function (tabDate) {
            if (new Date(tabDate.date).getDate() === this_1.lessonDate.getDate()) {
                setTimeout(function () { _this.tabSelectedIndex = _this.dateRange.findIndex(function (x) { return x == tabDate.date; }); }, 200);
                return { value: void 0 };
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.tabDates; _i < _a.length; _i++) {
            var tabDate = _a[_i];
            var state_1 = _loop_1(tabDate);
            if (typeof state_1 === "object")
                return state_1.value;
        }
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
            router_1.Router,
            timetable_service_1.TimetableService])
    ], TimetableComponent);
    return TimetableComponent;
}());
exports.TimetableComponent = TimetableComponent;

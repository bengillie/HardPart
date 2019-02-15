"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var appvalues_service_1 = require("../shared/service/appvalues.service");
var homework_service_1 = require("~/homework/homework.service");
var timetable_service_1 = require("./timetable.service");
var subject_model_1 = require("~/shared/model/subject.model");
var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(appValuesService, homeworkService, router, timetableService) {
        this.appValuesService = appValuesService;
        this.homeworkService = homeworkService;
        this.router = router;
        this.timetableService = timetableService;
        this.subscriptions = [];
        this.homeworkIcon = '';
        this.lessonDate = new Date();
        this.startDate = new Date();
        this.endDate = new Date();
        this.allHomeworks = [];
        this.allDueHomeworks = [];
        this.allTimetableDays = [];
        this.timetableDaysForDate = [];
        this.allPeriods = [];
        this.periodsForDate = [];
        this.current = false;
        this.hasLesson = true;
        this.isDueLesson = false;
        this.isLoading = true;
        this.lastLesson = false;
        this.showDetails = false;
        this.selectedStudent = this.appValuesService.getSelectedStudent();
        this.startDate.setDate(this.startDate.getDate() - (this.startDate.getDay() + 7));
        this.endDate.setDate(this.endDate.getDate() - (this.endDate.getDay() - 14));
        this.getAllHomework();
        this.GetTimetableDays();
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
        this.homeworkService.getStudentHomework(this.selectedStudent.id).then(function (result) {
            _this.allHomeworks = result;
        });
    };
    TimetableComponent.prototype.getCurrentEvent = function (event) {
        var today = new Date();
        if (today >= new Date(event.startDateTime) && today <= new Date(event.endDateTime)) {
            this.current = true;
            return true;
        }
        else {
            this.current = false;
            return false;
        }
    };
    TimetableComponent.prototype.GetTimetableDays = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.timetableService.GetTimetableDaysForDates(this.startDate, this.endDate)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TimetableComponent.prototype.getSubjectColour = function (event) {
        var subject = subject_model_1.Subject;
        var color = '';
        switch (event.subjectName) {
            case subject.art: {
                color = '#8B0000';
                break;
            }
            case subject.computing: {
                color = '#8B4513';
                break;
            }
            case subject.design: {
                color = '#808000';
                break;
            }
            case subject.english: {
                color = '#2ECCFA';
                break;
            }
            case subject.geography: {
                color = '#FA58F4';
                break;
            }
            case subject.history: {
                color = '#04B404';
                break;
            }
            case subject.languages: {
                color = '#BF00FF';
                break;
            }
            case subject.math: {
                color = '#FF8000';
                break;
            }
            case subject.music: {
                color = '#642EFE';
                break;
            }
            case subject.pe: {
                color = '#FFFF00';
                break;
            }
            case subject.reg: {
                color = '#086A87';
                break;
            }
            case subject.science: {
                color = '#FF0000';
                break;
            }
        }
        return color;
    };
    TimetableComponent.prototype.onTabSwipe = function (args) {
        if (args.oldIndex !== -1) {
            return;
        }
        // for (let tabDate of this.tabDates) {
        // 	if (new Date(tabDate.date).getDate() === this.lessonDate.getDate()) {
        // 		setTimeout(() => {
        // 			this.tabSelectedIndex = this.dateRange.findIndex(x => x == tabDate.date);
        // 		}, 200);
        // 		return;
        // 	}
        // }
    };
    TimetableComponent.prototype.onTapHomework = function (event) {
        var homework = this.allDueHomeworks.find(function (h) { return h.subject == event.subjectName; });
        this.router.navigate(["/homeworkdetails/" + homework.id]);
    };
    TimetableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-timetable',
            templateUrl: './timetable.component.html',
            styleUrls: ['./timetable.component.less'],
        }),
        __metadata("design:paramtypes", [appvalues_service_1.AppValuesService, homework_service_1.HomeworkService, router_1.Router, timetable_service_1.TimetableService])
    ], TimetableComponent);
    return TimetableComponent;
}());
exports.TimetableComponent = TimetableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXlDO0FBUXpDLHlFQUF1RTtBQUN2RSxnRUFBOEQ7QUFDOUQseURBQXVEO0FBR3ZELDhEQUF1RDtBQVF2RDtJQTZCQyw0QkFBb0IsZ0JBQWtDLEVBQVUsZUFBZ0MsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDO1FBQWhKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQTVCNUosa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRTNDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBSWxCLGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRTNCLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBQzlCLG9CQUFlLEdBQWUsRUFBRSxDQUFDO1FBRWpDLHFCQUFnQixHQUF3QixFQUFFLENBQUM7UUFDM0MseUJBQW9CLEdBQXdCLEVBQUUsQ0FBQztRQUUvQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRTlCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFLbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JB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QUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFvQixRQUFRLENBQUMsRUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBcEpXLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDekMsQ0FBQzt5Q0E4QnFDLG9DQUFnQixFQUEyQixrQ0FBZSxFQUFrQixlQUFNLEVBQTRCLG9DQUFnQjtPQTdCeEosa0JBQWtCLENBcUo5QjtJQUFELHlCQUFDO0NBQUEsQUFySkQsSUFxSkM7QUFySlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3JztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L3NoYXJlZC9tb2RlbC91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICd+L3NoYXJlZC9tb2RlbC9ldmVudC5tb2RlbCc7XHJcbmltcG9ydCB7IFBlcmlvZCB9IGZyb20gJ34vc2hhcmVkL21vZGVsL3BlcmlvZC5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2UvYXBwdmFsdWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICd+L2hvbWV3b3JrL2hvbWV3b3JrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVTZXJ2aWNlIH0gZnJvbSAnLi90aW1ldGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWV3b3JrLCBIb21ld29ya0RlYWRsaW5lU3RhdHVzIH0gZnJvbSAnfi9zaGFyZWQvbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVEYXkgfSBmcm9tICd+L3NoYXJlZC9tb2RlbC90aW1ldGFibGVEYXkubW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnfi9zaGFyZWQvbW9kZWwvc3ViamVjdC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnbnMtdGltZXRhYmxlJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vdGltZXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi90aW1ldGFibGUuY29tcG9uZW50Lmxlc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWV0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG5cdGhvbWV3b3JrSWNvbiA9ICcnO1xyXG5cclxuXHRzZWxlY3RlZFN0dWRlbnQ6IFVzZXI7XHJcblxyXG5cdGxlc3NvbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdHN0YXJ0RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0ZW5kRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cdGFsbEhvbWV3b3JrczogSG9tZXdvcmtbXSA9IFtdO1xyXG5cdGFsbER1ZUhvbWV3b3JrczogSG9tZXdvcmtbXSA9IFtdO1xyXG5cclxuXHRhbGxUaW1ldGFibGVEYXlzOiBBcnJheTxUaW1ldGFibGVEYXk+ID0gW107XHJcblx0dGltZXRhYmxlRGF5c0ZvckRhdGU6IEFycmF5PFRpbWV0YWJsZURheT4gPSBbXTtcclxuXHJcblx0YWxsUGVyaW9kczogUGVyaW9kW10gPSBbXTtcclxuXHRwZXJpb2RzRm9yRGF0ZTogUGVyaW9kW10gPSBbXTtcclxuXHJcblx0Y3VycmVudCA9IGZhbHNlO1xyXG5cdGhhc0xlc3NvbiA9IHRydWU7XHJcblx0aXNEdWVMZXNzb24gPSBmYWxzZTtcclxuXHRpc0xvYWRpbmcgPSB0cnVlO1xyXG5cdGxhc3RMZXNzb24gPSBmYWxzZTtcclxuXHRzaG93RGV0YWlscyA9IGZhbHNlO1xyXG5cclxuXHR0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVmFsdWVzU2VydmljZTogQXBwVmFsdWVzU2VydmljZSwgcHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB0aW1ldGFibGVTZXJ2aWNlOiBUaW1ldGFibGVTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkU3R1ZGVudCA9IHRoaXMuYXBwVmFsdWVzU2VydmljZS5nZXRTZWxlY3RlZFN0dWRlbnQoKTtcclxuXHJcblx0XHR0aGlzLnN0YXJ0RGF0ZS5zZXREYXRlKHRoaXMuc3RhcnREYXRlLmdldERhdGUoKSAtICh0aGlzLnN0YXJ0RGF0ZS5nZXREYXkoKSArIDcpKTtcclxuXHRcdHRoaXMuZW5kRGF0ZS5zZXREYXRlKHRoaXMuZW5kRGF0ZS5nZXREYXRlKCkgLSAodGhpcy5lbmREYXRlLmdldERheSgpIC0gMTQpKTtcclxuXHJcblx0XHR0aGlzLmdldEFsbEhvbWV3b3JrKCk7XHJcblx0XHR0aGlzLkdldFRpbWV0YWJsZURheXMoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcblx0XHRcdGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuXHRcdFx0XHRzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0QWxsSG9tZXdvcmsoKSB7XHJcblx0XHR0aGlzLmhvbWV3b3JrU2VydmljZS5nZXRTdHVkZW50SG9tZXdvcmsodGhpcy5zZWxlY3RlZFN0dWRlbnQuaWQpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0dGhpcy5hbGxIb21ld29ya3MgPSByZXN1bHQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldEN1cnJlbnRFdmVudChldmVudDogRXZlbnQpOiBib29sZWFuIHtcclxuXHRcdGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cdFx0aWYgKHRvZGF5ID49IG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZVRpbWUpICYmIHRvZGF5IDw9IG5ldyBEYXRlKGV2ZW50LmVuZERhdGVUaW1lKSkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnQgPSB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY3VycmVudCA9IGZhbHNlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgR2V0VGltZXRhYmxlRGF5cygpIHtcclxuXHRcdGF3YWl0IHRoaXMudGltZXRhYmxlU2VydmljZS5HZXRUaW1ldGFibGVEYXlzRm9yRGF0ZXModGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSk7XHJcblx0fVxyXG5cclxuXHRnZXRTdWJqZWN0Q29sb3VyKGV2ZW50OiBFdmVudCk6IHN0cmluZyB7XHJcblx0XHRsZXQgc3ViamVjdCA9IFN1YmplY3Q7XHJcblx0XHRsZXQgY29sb3IgPSAnJztcclxuXHJcblx0XHRzd2l0Y2ggKGV2ZW50LnN1YmplY3ROYW1lKSB7XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5hcnQ6IHtcclxuXHRcdFx0XHRjb2xvciA9ICcjOEIwMDAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIHN1YmplY3QuY29tcHV0aW5nOiB7XHJcblx0XHRcdFx0Y29sb3IgPSAnIzhCNDUxMyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBzdWJqZWN0LmRlc2lnbjoge1xyXG5cdFx0XHRcdGNvbG9yID0gJyM4MDgwMDAnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5lbmdsaXNoOiB7XHJcblx0XHRcdFx0Y29sb3IgPSAnIzJFQ0NGQSc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBzdWJqZWN0Lmdlb2dyYXBoeToge1xyXG5cdFx0XHRcdGNvbG9yID0gJyNGQTU4RjQnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5oaXN0b3J5OiB7XHJcblx0XHRcdFx0Y29sb3IgPSAnIzA0QjQwNCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBzdWJqZWN0Lmxhbmd1YWdlczoge1xyXG5cdFx0XHRcdGNvbG9yID0gJyNCRjAwRkYnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5tYXRoOiB7XHJcblx0XHRcdFx0Y29sb3IgPSAnI0ZGODAwMCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBzdWJqZWN0Lm11c2ljOiB7XHJcblx0XHRcdFx0Y29sb3IgPSAnIzY0MkVGRSc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBzdWJqZWN0LnBlOiB7XHJcblx0XHRcdFx0Y29sb3IgPSAnI0ZGRkYwMCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBzdWJqZWN0LnJlZzoge1xyXG5cdFx0XHRcdGNvbG9yID0gJyMwODZBODcnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5zY2llbmNlOiB7XHJcblx0XHRcdFx0Y29sb3IgPSAnI0ZGMDAwMCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29sb3I7XHJcblx0fVxyXG5cclxuXHRvblRhYlN3aXBlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcblx0XHRpZiAoYXJncy5vbGRJbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZvciAobGV0IHRhYkRhdGUgb2YgdGhpcy50YWJEYXRlcykge1xyXG5cdFx0Ly8gXHRpZiAobmV3IERhdGUodGFiRGF0ZS5kYXRlKS5nZXREYXRlKCkgPT09IHRoaXMubGVzc29uRGF0ZS5nZXREYXRlKCkpIHtcclxuXHRcdC8vIFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdC8vIFx0XHRcdHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IHRoaXMuZGF0ZVJhbmdlLmZpbmRJbmRleCh4ID0+IHggPT0gdGFiRGF0ZS5kYXRlKTtcclxuXHRcdC8vIFx0XHR9LCAyMDApO1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0b25UYXBIb21ld29yayhldmVudDogRXZlbnQpIHtcclxuXHRcdGNvbnN0IGhvbWV3b3JrID0gdGhpcy5hbGxEdWVIb21ld29ya3MuZmluZChoID0+IGguc3ViamVjdCA9PSBldmVudC5zdWJqZWN0TmFtZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvaG9tZXdvcmtkZXRhaWxzLyR7aG9tZXdvcmsuaWR9YF0pO1xyXG5cdH1cclxufVxyXG4iXX0=
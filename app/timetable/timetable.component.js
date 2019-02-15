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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXlDO0FBUXpDLHlFQUF1RTtBQUN2RSxnRUFBOEQ7QUFDOUQseURBQXVEO0FBR3ZELDhEQUF1RDtBQVF2RDtJQTZCQyw0QkFBb0IsZ0JBQWtDLEVBQVUsZUFBZ0MsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDO1FBQWhKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQTVCNUosa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRTNDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBSWxCLGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRTNCLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBQzlCLG9CQUFlLEdBQWUsRUFBRSxDQUFDO1FBRWpDLHFCQUFnQixHQUF3QixFQUFFLENBQUM7UUFDM0MseUJBQW9CLEdBQXdCLEVBQUUsQ0FBQztRQUUvQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRTlCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFLbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JB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QUN2Qyx5RUFBeUU7UUFDekUsdUJBQXVCO1FBQ3ZCLCtFQUErRTtRQUMvRSxhQUFhO1FBQ2IsWUFBWTtRQUNaLEtBQUs7UUFDTCxJQUFJO0lBQ0wsQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxLQUFZO1FBQ3pCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsV0FBVyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBb0IsUUFBUSxDQUFDLEVBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXBKVyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQ3pDLENBQUM7eUNBOEJxQyxvQ0FBZ0IsRUFBMkIsa0NBQWUsRUFBa0IsZUFBTSxFQUE0QixvQ0FBZ0I7T0E3QnhKLGtCQUFrQixDQXFKOUI7SUFBRCx5QkFBQztDQUFBLEFBckpELElBcUpDO0FBckpZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlldyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9zaGFyZWQvbW9kZWwvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnfi9zaGFyZWQvbW9kZWwvZXZlbnQubW9kZWwnO1xyXG5pbXBvcnQgeyBQZXJpb2QgfSBmcm9tICd+L3NoYXJlZC9tb2RlbC9wZXJpb2QubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgQXBwVmFsdWVzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSG9tZXdvcmtTZXJ2aWNlIH0gZnJvbSAnfi9ob21ld29yay9ob21ld29yay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGltZXRhYmxlU2VydmljZSB9IGZyb20gJy4vdGltZXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtEZWFkbGluZVN0YXR1cyB9IGZyb20gJ34vc2hhcmVkL21vZGVsL2hvbWV3b3JrLm1vZGVsJztcclxuaW1wb3J0IHsgVGltZXRhYmxlRGF5IH0gZnJvbSAnfi9zaGFyZWQvbW9kZWwvdGltZXRhYmxlRGF5Lm1vZGVsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ34vc2hhcmVkL21vZGVsL3N1YmplY3QubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ25zLXRpbWV0YWJsZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3RpbWV0YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vdGltZXRhYmxlLmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1ldGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuXHRob21ld29ya0ljb24gPSAnJztcclxuXHJcblx0c2VsZWN0ZWRTdHVkZW50OiBVc2VyO1xyXG5cclxuXHRsZXNzb25EYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuXHRzdGFydERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdGVuZERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRhbGxIb21ld29ya3M6IEhvbWV3b3JrW10gPSBbXTtcclxuXHRhbGxEdWVIb21ld29ya3M6IEhvbWV3b3JrW10gPSBbXTtcclxuXHJcblx0YWxsVGltZXRhYmxlRGF5czogQXJyYXk8VGltZXRhYmxlRGF5PiA9IFtdO1xyXG5cdHRpbWV0YWJsZURheXNGb3JEYXRlOiBBcnJheTxUaW1ldGFibGVEYXk+ID0gW107XHJcblxyXG5cdGFsbFBlcmlvZHM6IFBlcmlvZFtdID0gW107XHJcblx0cGVyaW9kc0ZvckRhdGU6IFBlcmlvZFtdID0gW107XHJcblxyXG5cdGN1cnJlbnQgPSBmYWxzZTtcclxuXHRoYXNMZXNzb24gPSB0cnVlO1xyXG5cdGlzRHVlTGVzc29uID0gZmFsc2U7XHJcblx0aXNMb2FkaW5nID0gdHJ1ZTtcclxuXHRsYXN0TGVzc29uID0gZmFsc2U7XHJcblx0c2hvd0RldGFpbHMgPSBmYWxzZTtcclxuXHJcblx0dGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFZhbHVlc1NlcnZpY2U6IEFwcFZhbHVlc1NlcnZpY2UsIHByaXZhdGUgaG9tZXdvcmtTZXJ2aWNlOiBIb21ld29ya1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdGltZXRhYmxlU2VydmljZTogVGltZXRhYmxlU2VydmljZSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZFN0dWRlbnQgPSB0aGlzLmFwcFZhbHVlc1NlcnZpY2UuZ2V0U2VsZWN0ZWRTdHVkZW50KCk7XHJcblxyXG5cdFx0dGhpcy5zdGFydERhdGUuc2V0RGF0ZSh0aGlzLnN0YXJ0RGF0ZS5nZXREYXRlKCkgLSAodGhpcy5zdGFydERhdGUuZ2V0RGF5KCkgKyA3KSk7XHJcblx0XHR0aGlzLmVuZERhdGUuc2V0RGF0ZSh0aGlzLmVuZERhdGUuZ2V0RGF0ZSgpIC0gKHRoaXMuZW5kRGF0ZS5nZXREYXkoKSAtIDE0KSk7XHJcblxyXG5cdFx0dGhpcy5nZXRBbGxIb21ld29yaygpO1xyXG5cdFx0dGhpcy5HZXRUaW1ldGFibGVEYXlzKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG5cdFx0XHRmb3IgKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcblx0XHRcdFx0c3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEFsbEhvbWV3b3JrKCkge1xyXG5cdFx0dGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0U3R1ZGVudEhvbWV3b3JrKHRoaXMuc2VsZWN0ZWRTdHVkZW50LmlkKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMuYWxsSG9tZXdvcmtzID0gcmVzdWx0O1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRDdXJyZW50RXZlbnQoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XHJcblx0XHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRcdGlmICh0b2RheSA+PSBuZXcgRGF0ZShldmVudC5zdGFydERhdGVUaW1lKSAmJiB0b2RheSA8PSBuZXcgRGF0ZShldmVudC5lbmREYXRlVGltZSkpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50ID0gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnQgPSBmYWxzZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIEdldFRpbWV0YWJsZURheXMoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnRpbWV0YWJsZVNlcnZpY2UuR2V0VGltZXRhYmxlRGF5c0ZvckRhdGVzKHRoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3ViamVjdENvbG91cihldmVudDogRXZlbnQpOiBzdHJpbmcge1xyXG5cdFx0bGV0IHN1YmplY3QgPSBTdWJqZWN0O1xyXG5cdFx0bGV0IGNvbG9yID0gJyc7XHJcblxyXG5cdFx0c3dpdGNoIChldmVudC5zdWJqZWN0TmFtZSkge1xyXG5cdFx0XHRjYXNlIHN1YmplY3QuYXJ0OiB7XHJcblx0XHRcdFx0Y29sb3IgPSAnIzhCMDAwMCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBzdWJqZWN0LmNvbXB1dGluZzoge1xyXG5cdFx0XHRcdGNvbG9yID0gJyM4QjQ1MTMnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5kZXNpZ246IHtcclxuXHRcdFx0XHRjb2xvciA9ICcjODA4MDAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIHN1YmplY3QuZW5nbGlzaDoge1xyXG5cdFx0XHRcdGNvbG9yID0gJyMyRUNDRkEnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5nZW9ncmFwaHk6IHtcclxuXHRcdFx0XHRjb2xvciA9ICcjRkE1OEY0JztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIHN1YmplY3QuaGlzdG9yeToge1xyXG5cdFx0XHRcdGNvbG9yID0gJyMwNEI0MDQnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5sYW5ndWFnZXM6IHtcclxuXHRcdFx0XHRjb2xvciA9ICcjQkYwMEZGJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIHN1YmplY3QubWF0aDoge1xyXG5cdFx0XHRcdGNvbG9yID0gJyNGRjgwMDAnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5tdXNpYzoge1xyXG5cdFx0XHRcdGNvbG9yID0gJyM2NDJFRkUnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5wZToge1xyXG5cdFx0XHRcdGNvbG9yID0gJyNGRkZGMDAnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2Ugc3ViamVjdC5yZWc6IHtcclxuXHRcdFx0XHRjb2xvciA9ICcjMDg2QTg3JztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIHN1YmplY3Quc2NpZW5jZToge1xyXG5cdFx0XHRcdGNvbG9yID0gJyNGRjAwMDAnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbG9yO1xyXG5cdH1cclxuXHJcblx0b25UYWJTd2lwZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG5cdFx0aWYgKGFyZ3Mub2xkSW5kZXggIT09IC0xKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmb3IgKGxldCB0YWJEYXRlIG9mIHRoaXMudGFiRGF0ZXMpIHtcclxuXHRcdC8vIFx0aWYgKG5ldyBEYXRlKHRhYkRhdGUuZGF0ZSkuZ2V0RGF0ZSgpID09PSB0aGlzLmxlc3NvbkRhdGUuZ2V0RGF0ZSgpKSB7XHJcblx0XHQvLyBcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQvLyBcdFx0XHR0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSB0aGlzLmRhdGVSYW5nZS5maW5kSW5kZXgoeCA9PiB4ID09IHRhYkRhdGUuZGF0ZSk7XHJcblx0XHQvLyBcdFx0fSwgMjAwKTtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIH1cclxuXHR9XHJcblxyXG5cdG9uVGFwSG9tZXdvcmsoZXZlbnQ6IEV2ZW50KSB7XHJcblx0XHRjb25zdCBob21ld29yayA9IHRoaXMuYWxsRHVlSG9tZXdvcmtzLmZpbmQoaCA9PiBoLnN1YmplY3QgPT0gZXZlbnQuc3ViamVjdE5hbWUpO1xyXG5cclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2hvbWV3b3JrZGV0YWlscy8ke2hvbWV3b3JrLmlkfWBdKTtcclxuXHR9XHJcbn1cclxuIl19
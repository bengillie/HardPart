"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var timetable_model_1 = require("../model/timetable.model");
var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(location, route) {
        this.location = location;
        this.route = route;
    }
    TimetableComponent.prototype.ngOnInit = function () {
        this.lesson = new timetable_model_1.Lessons();
        this.period = new timetable_model_1.Periods();
        this.user = require("../service/login.service").data;
        var lessonDate = new Date();
        var monday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 1));
        var tuesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 2));
        var wednesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 3));
        var thursday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 4));
        var friday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 5));
        console.log(monday.toDateString());
    };
    TimetableComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    };
    TimetableComponent.prototype.goBack = function () {
        this.location.back();
    };
    TimetableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-timetable',
            templateUrl: './timetable.component.html',
            styleUrls: ['./timetable.component.css']
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute])
    ], TimetableComponent);
    return TimetableComponent;
}());
exports.TimetableComponent = TimetableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsMENBQWlEO0FBQ2pELDBDQUEyQztBQUczQyw0REFBNEQ7QUFTNUQ7SUFNSSw0QkFDWSxRQUFrQixFQUNsQixLQUFxQjtRQURyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHlCQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkseUJBQU8sRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXJELElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBbkNXLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzt5Q0FRd0IsaUJBQVE7WUFDWCx1QkFBYztPQVJ4QixrQkFBa0IsQ0FvQzlCO0lBQUQseUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExlc3NvbnMsIFBlcmlvZHMgfSBmcm9tIFwiLi4vbW9kZWwvdGltZXRhYmxlLm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICd+L21vZGVsL3VzZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdGltZXRhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90aW1ldGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRpbWV0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcbiAgICB1c2VyOiBVc2VyTW9kZWw7XG4gICAgbGVzc29uOiBMZXNzb25zO1xuICAgIHBlcmlvZDogUGVyaW9kcztcbiAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IFxuICAgICAgICB0aGlzLmxlc3NvbiA9IG5ldyBMZXNzb25zKCk7XG4gICAgICAgIHRoaXMucGVyaW9kID0gbmV3IFBlcmlvZHMoKTtcblxuICAgICAgICB0aGlzLnVzZXIgPSByZXF1aXJlKFwiLi4vc2VydmljZS9sb2dpbi5zZXJ2aWNlXCIpLmRhdGE7XG5cbiAgICAgICAgdmFyIGxlc3NvbkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgbW9uZGF5ID0gbmV3IERhdGUobGVzc29uRGF0ZS5zZXREYXRlKChsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkpICsgMSkpO1xuICAgICAgICBsZXQgdHVlc2RheSA9IG5ldyBEYXRlKGxlc3NvbkRhdGUuc2V0RGF0ZSgobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpKSArIDIpKTtcbiAgICAgICAgbGV0IHdlZG5lc2RheSA9IG5ldyBEYXRlKGxlc3NvbkRhdGUuc2V0RGF0ZSgobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpKSArIDMpKTtcbiAgICAgICAgbGV0IHRodXJzZGF5ID0gbmV3IERhdGUobGVzc29uRGF0ZS5zZXREYXRlKChsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkpICsgNCkpO1xuICAgICAgICBsZXQgZnJpZGF5ID0gbmV3IERhdGUobGVzc29uRGF0ZS5zZXREYXRlKChsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkpICsgNSkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG1vbmRheS50b0RhdGVTdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb0JhY2soKTogdm9pZCB7XG5cdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XG5cdH1cbn1cbiJdfQ==
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
        this.subscriptions = [];
        this.homework = new homework_model_1.Homework();
        this.isLoading = true;
        this.warningIconCode = String.fromCharCode(0xea08);
    }
    HomeworkDetailComponent.prototype.ngOnInit = function () {
        this.getHomework();
    };
    HomeworkDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription.unsubscribe();
            }
        }
    };
    HomeworkDetailComponent.prototype.getHomework = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.subscriptions.push(this.homeworkService.getHomework(id)
            .subscribe(function (x) {
            _this.homework = x;
        }, function () { }, function () {
            _this.isLoading = false;
        }));
    };
    HomeworkDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HomeworkDetailComponent.prototype.isNearDueDate = function (homework) {
        return this.homeworkService.isNearDueDate(homework);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWV3b3JrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELDBDQUEyQztBQUkzQyxnRUFBOEQ7QUFDOUQsMERBQW1EO0FBU25EO0lBUUMsaUNBQW9CLEtBQXFCLEVBQ2hDLGVBQWdDLEVBQ2hDLFFBQWtCO1FBRlAsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFUbkIsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBRTVDLGFBQVEsR0FBYSxJQUFJLHlCQUFRLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUlmLENBQUM7SUFFaEMsMENBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2YsR0FBRyxDQUFDLENBQXFCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLGFBQWEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0I7Z0JBQXRDLElBQUksWUFBWSxTQUFBO2dCQUVqQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUI7UUFDTCxDQUFDO0lBQ1IsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFBQSxpQkFhQztRQVpBLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDMUQsU0FBUyxDQUNULFVBQUMsQ0FBQztZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFDRCxjQUFPLENBQUMsRUFDUjtZQUNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FDRCxDQUNELENBQUE7SUFDRixDQUFDO0lBRUQsd0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELCtDQUFhLEdBQWIsVUFBYyxRQUFrQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQTlDVyx1QkFBdUI7UUFQbkMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDOUMsQ0FBQzt5Q0FVMEIsdUJBQWM7WUFDZixrQ0FBZTtZQUN0QixpQkFBUTtPQVZmLHVCQUF1QixDQStDbkM7SUFBRCw4QkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZSc7XG5pbXBvcnQgeyBIb21ld29yayB9IGZyb20gJy4uL21vZGVsL2hvbWV3b3JrLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaG9tZXdvcmstZGV0YWlsJyxcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21ld29ya0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb25zIDogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuXHRob21ld29yazogSG9tZXdvcmsgPSBuZXcgSG9tZXdvcmsoKTtcblx0aXNMb2FkaW5nID0gdHJ1ZTtcblxuXHR3YXJuaW5nSWNvbkNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZWEwOCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0cHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSxcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRIb21ld29yaygpO1xuXHR9IFxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0fVxuXG5cdGdldEhvbWV3b3JrKCk6IHZvaWQge1xuXHRcdGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrKGlkKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KHgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3JrID0geDtcblx0XHRcdFx0fSxcblx0XHRcdFx0KCkgPT4ge30sXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0Z29CYWNrKCk6IHZvaWQge1xuXHRcdHRoaXMubG9jYXRpb24uYmFjaygpO1xuXHR9XG5cblx0aXNOZWFyRHVlRGF0ZShob21ld29yazogSG9tZXdvcmspIDogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmlzTmVhckR1ZURhdGUoaG9tZXdvcmspO1xuXHR9XG59Il19
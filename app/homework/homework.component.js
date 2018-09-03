"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var homework_service_1 = require("../service/homework.service");
var homework_model_1 = require("../model/homework.model");
var HomeworkComponent = /** @class */ (function () {
    function HomeworkComponent(router, homeworkService) {
        this.router = router;
        this.homeworkService = homeworkService;
        this.iconCode = String.fromCharCode(0xeaa3);
    }
    HomeworkComponent.prototype.ngOnInit = function () {
        this.getHomeworks();
    };
    HomeworkComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeworkComponent.prototype.getHomeworks = function () {
        var _this = this;
        this.subscription = this.homeworkService.getHomeworks().subscribe(function (x) { return _this.homeworks = x; }, function (error) { return console.log("Error: ", error); }, function () {
            _this.homeworks = _this.homeworks.filter(function (all) { return all.status !== homework_model_1.HomeworkStatus.removed; });
            _this.homeworks_todo = _this.homeworks.filter(function (all) { return all.status === homework_model_1.HomeworkStatus.todo; });
            _this.homeworks_done = _this.homeworks.filter(function (all) { return all.status === homework_model_1.HomeworkStatus.done; });
            _this.homeworksTab = [
                {
                    title: 'All',
                    items: _this.homeworks
                },
                {
                    title: homework_model_1.HomeworkStatus.todo,
                    items: _this.homeworks_todo
                },
                {
                    title: homework_model_1.HomeworkStatus.done,
                    items: _this.homeworks_done
                }
            ];
        });
    };
    HomeworkComponent.prototype.onItemTap = function (args) {
        this.router.navigate(["/homeworkdetails/" + args.id]);
    };
    HomeworkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'homework',
            templateUrl: './homework.component.html',
            styleUrls: ['./homework.component.less']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            homework_service_1.HomeworkService])
    ], HomeworkComponent);
    return HomeworkComponent;
}());
exports.HomeworkComponent = HomeworkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5QztBQUl6QyxnRUFBOEQ7QUFDOUQsMERBQW1FO0FBVW5FO0lBVUMsMkJBQW9CLE1BQWMsRUFDekIsZUFBZ0M7UUFEckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIekMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHTSxDQUFDO0lBRTlDLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBeUJDO1FBeEJBLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQ2hFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBQ3ZCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQ3RDO1lBQ0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxPQUFPLEVBQXJDLENBQXFDLENBQUMsQ0FBQztZQUNyRixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sS0FBSywrQkFBYyxDQUFDLElBQUksRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1lBQ3ZGLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsTUFBTSxLQUFLLCtCQUFjLENBQUMsSUFBSSxFQUFsQyxDQUFrQyxDQUFDLENBQUM7WUFFdkYsS0FBSSxDQUFDLFlBQVksR0FBRztnQkFDbkI7b0JBQ0MsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEtBQUksQ0FBQyxTQUFTO2lCQUNyQjtnQkFDRDtvQkFDQyxLQUFLLEVBQUUsK0JBQWMsQ0FBQyxJQUFJO29CQUMxQixLQUFLLEVBQUUsS0FBSSxDQUFDLGNBQWM7aUJBQzFCO2dCQUNEO29CQUNDLEtBQUssRUFBRSwrQkFBYyxDQUFDLElBQUk7b0JBQzFCLEtBQUssRUFBRSxLQUFJLENBQUMsY0FBYztpQkFDMUI7YUFDRCxDQUFDO1FBQ0gsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFvQixJQUFJLENBQUMsRUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBbERXLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQzt5Q0FZMkIsZUFBTTtZQUNSLGtDQUFlO09BWDdCLGlCQUFpQixDQW1EN0I7SUFBRCx3QkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtTdGF0dXMgfSBmcm9tICcuLi9tb2RlbC9ob21ld29yay5tb2RlbCc7XHJcbmltcG9ydCB7IFRhYiB9IGZyb20gJ34vbW9kZWwvdGFiLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdob21ld29yaycsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWV3b3JrLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9ob21ld29yay5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZXdvcmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb24gOiBTdWJzY3JpcHRpb247XHJcblxyXG5cdGhvbWV3b3JrczogSG9tZXdvcmtbXTtcclxuXHRob21ld29ya3NfdG9kbzogSG9tZXdvcmtbXTtcclxuXHRob21ld29ya3NfZG9uZTogSG9tZXdvcmtbXTtcclxuXHRob21ld29ya3NUYWI6IFRhYjxIb21ld29yaz5bXTtcclxuXHRcclxuXHRpY29uQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYWEzKTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkgeyBcclxuXHRcdHRoaXMuZ2V0SG9tZXdvcmtzKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRnZXRIb21ld29ya3MoKTogdm9pZCB7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrcygpLnN1YnNjcmliZShcclxuXHRcdFx0eCA9PiB0aGlzLmhvbWV3b3JrcyA9IHgsXHJcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvciksXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmhvbWV3b3JrcyA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyAhPT0gSG9tZXdvcmtTdGF0dXMucmVtb3ZlZCk7XHJcblx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kbyA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbyk7XHJcblx0XHRcdFx0dGhpcy5ob21ld29ya3NfZG9uZSA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMuZG9uZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuaG9tZXdvcmtzVGFiID0gW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FsbCcsXHJcblx0XHRcdFx0XHRcdGl0ZW1zOiB0aGlzLmhvbWV3b3Jrc1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IEhvbWV3b3JrU3RhdHVzLnRvZG8sXHJcblx0XHRcdFx0XHRcdGl0ZW1zOiB0aGlzLmhvbWV3b3Jrc190b2RvXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogSG9tZXdvcmtTdGF0dXMuZG9uZSxcclxuXHRcdFx0XHRcdFx0aXRlbXM6IHRoaXMuaG9tZXdvcmtzX2RvbmVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwKGFyZ3MpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2hvbWV3b3JrZGV0YWlscy8ke2FyZ3MuaWR9YF0pO1xyXG5cdH1cclxufSJdfQ==
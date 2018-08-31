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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5QztBQUl6QyxnRUFBOEQ7QUFDOUQsMERBQW1FO0FBVW5FO0lBVUMsMkJBQW9CLE1BQWMsRUFDekIsZUFBZ0M7UUFEckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIekMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHTSxDQUFDO0lBRTlDLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBeUJDO1FBeEJBLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQ2hFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBQ3ZCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQ3RDO1lBQ0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxPQUFPLEVBQXJDLENBQXFDLENBQUMsQ0FBQztZQUNyRixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sS0FBSywrQkFBYyxDQUFDLElBQUksRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1lBQ3ZGLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsTUFBTSxLQUFLLCtCQUFjLENBQUMsSUFBSSxFQUFsQyxDQUFrQyxDQUFDLENBQUM7WUFFdkYsS0FBSSxDQUFDLFlBQVksR0FBRztnQkFDbkI7b0JBQ0MsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEtBQUksQ0FBQyxTQUFTO2lCQUNyQjtnQkFDRDtvQkFDQyxLQUFLLEVBQUUsK0JBQWMsQ0FBQyxJQUFJO29CQUMxQixLQUFLLEVBQUUsS0FBSSxDQUFDLGNBQWM7aUJBQzFCO2dCQUNEO29CQUNDLEtBQUssRUFBRSwrQkFBYyxDQUFDLElBQUk7b0JBQzFCLEtBQUssRUFBRSxLQUFJLENBQUMsY0FBYztpQkFDMUI7YUFDRCxDQUFDO1FBQ0gsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFvQixJQUFJLENBQUMsRUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBbERXLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQzt5Q0FZMkIsZUFBTTtZQUNSLGtDQUFlO09BWDdCLGlCQUFpQixDQW1EN0I7SUFBRCx3QkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZSc7XG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtTdGF0dXMgfSBmcm9tICcuLi9tb2RlbC9ob21ld29yay5tb2RlbCc7XG5pbXBvcnQgeyBUYWIgfSBmcm9tICd+L21vZGVsL3RhYi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrJyxcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWV3b3JrLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vaG9tZXdvcmsuY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcblxuXHRob21ld29ya3M6IEhvbWV3b3JrW107XG5cdGhvbWV3b3Jrc190b2RvOiBIb21ld29ya1tdO1xuXHRob21ld29ya3NfZG9uZTogSG9tZXdvcmtbXTtcblx0aG9tZXdvcmtzVGFiOiBUYWI8SG9tZXdvcms+W107XG5cdFxuXHRpY29uQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYWEzKTtcblx0XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMuZ2V0SG9tZXdvcmtzKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0Z2V0SG9tZXdvcmtzKCk6IHZvaWQge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtzKCkuc3Vic2NyaWJlKFxuXHRcdFx0eCA9PiB0aGlzLmhvbWV3b3JrcyA9IHgsXG5cdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IpLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHR0aGlzLmhvbWV3b3JrcyA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyAhPT0gSG9tZXdvcmtTdGF0dXMucmVtb3ZlZCk7XG5cdFx0XHRcdHRoaXMuaG9tZXdvcmtzX3RvZG8gPSB0aGlzLmhvbWV3b3Jrcy5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLnRvZG8pO1xuXHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lID0gdGhpcy5ob21ld29ya3MuZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy5kb25lKTtcblx0XHRcdFxuXHRcdFx0XHR0aGlzLmhvbWV3b3Jrc1RhYiA9IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FsbCcsXG5cdFx0XHRcdFx0XHRpdGVtczogdGhpcy5ob21ld29ya3Ncblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiBIb21ld29ya1N0YXR1cy50b2RvLFxuXHRcdFx0XHRcdFx0aXRlbXM6IHRoaXMuaG9tZXdvcmtzX3RvZG9cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiBIb21ld29ya1N0YXR1cy5kb25lLFxuXHRcdFx0XHRcdFx0aXRlbXM6IHRoaXMuaG9tZXdvcmtzX2RvbmVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG9uSXRlbVRhcChhcmdzKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvaG9tZXdvcmtkZXRhaWxzLyR7YXJncy5pZH1gXSk7XG5cdH1cbn0iXX0=
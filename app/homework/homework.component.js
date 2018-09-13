"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-listview/angular");
var homework_model_1 = require("../model/homework.model");
var homework_service_1 = require("../service/homework.service");
var HomeworkComponent = /** @class */ (function () {
    function HomeworkComponent(router, homeworkService) {
        this.router = router;
        this.homeworkService = homeworkService;
        this.subscriptions = [];
        this.tabViewSelectedIndex = 0;
        this.swipeText = 'Complete';
        this.homeworks = [];
        this.homeworks_todo = [];
        this.homeworks_done = [];
        this.isLoading = true;
        this.warningIconCode = String.fromCharCode(0xea08);
    }
    HomeworkComponent.prototype.ngOnInit = function () {
        this.getHomeworks();
    };
    HomeworkComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription.unsubscribe();
            }
        }
    };
    HomeworkComponent.prototype.getHomeworks = function () {
        var _this = this;
        this.subscriptions.push(this.homeworkService.getHomeworks()
            .subscribe(function (x) {
            _this.homeworks = x.filter(function (all) { return all.status !== homework_model_1.HomeworkStatus.removed; }).sort(_this.sortHomeworkByDueDate);
            _this.homeworks_todo = _this.homeworks.filter(function (all) { return all.status === homework_model_1.HomeworkStatus.todo; }).sort(_this.sortHomeworkByDueDate);
            _this.homeworks_done = _this.homeworks.filter(function (all) { return all.status === homework_model_1.HomeworkStatus.done; }).sort(_this.sortHomeworkByDueDate);
            _this.sortHomeworkList();
        }, function (error) { return console.log("Error: ", error); }, function () {
            _this.isLoading = false;
        }));
    };
    HomeworkComponent.prototype.isNearDueDate = function (homework) {
        return this.homeworkService.isNearDueDate(homework);
    };
    HomeworkComponent.prototype.sortHomeworkList = function () {
        this.homeworks = this.homeworks.sort(this.sortHomeworkByDueDate);
        this.homeworks_todo = this.homeworks_todo.sort(this.sortHomeworkByDueDate);
        this.homeworks_done = this.homeworks_done.sort(this.sortHomeworkByDueDate);
    };
    HomeworkComponent.prototype.sortHomeworkByDueDate = function (a, b) {
        if (a.dueDate < b.dueDate)
            return -1;
        if (a.dueDate > b.dueDate)
            return 1;
        return 0;
    };
    HomeworkComponent.prototype.markComplete = function (args) {
        var _this = this;
        var item = args.object.bindingContext;
        item.status = homework_model_1.HomeworkStatus.done;
        this.subscriptions.push(this.homeworkService.updateUserHomework(item)
            .subscribe(function () { }, function () { }, function () {
            _this.homeworks_todo.splice(_this.homeworks_todo.indexOf(item), 1);
            _this.homeworks_done.push(item);
            _this.sortHomeworkList();
        }));
        this.listViewComponent_todo.listView.notifySwipeToExecuteFinished();
        this.listViewComponent_done.listView.notifySwipeToExecuteFinished();
        this.listViewComponent_all.listView.notifySwipeToExecuteFinished();
    };
    HomeworkComponent.prototype.markTodo = function (args) {
        var _this = this;
        var item = args.object.bindingContext;
        item.status = homework_model_1.HomeworkStatus.todo;
        this.subscriptions.push(this.homeworkService.updateUserHomework(item)
            .subscribe(function () { }, function () { }, function () {
            _this.homeworks_done.splice(_this.homeworks_done.indexOf(item), 1);
            _this.homeworks_todo.push(item);
            _this.sortHomeworkList();
        }));
        this.listViewComponent_todo.listView.notifySwipeToExecuteFinished();
        this.listViewComponent_done.listView.notifySwipeToExecuteFinished();
        this.listViewComponent_all.listView.notifySwipeToExecuteFinished();
    };
    HomeworkComponent.prototype.onTabViewClicked = function (args) {
        this.tabViewSelectedIndex = args;
    };
    HomeworkComponent.prototype.onItemTap_todo = function (args) {
        this.onItemTap(args, homework_model_1.HomeworkStatus.todo);
    };
    HomeworkComponent.prototype.onItemTap_done = function (args) {
        this.onItemTap(args, homework_model_1.HomeworkStatus.done);
    };
    HomeworkComponent.prototype.onItemTap_all = function (args) {
        this.onItemTap(args, "ALL");
    };
    HomeworkComponent.prototype.onItemTap = function (args, tabText) {
        var homework = new homework_model_1.Homework();
        if (tabText === homework_model_1.HomeworkStatus.todo) {
            homework = this.homeworks_todo[args.index];
        }
        else if (tabText === homework_model_1.HomeworkStatus.done) {
            homework = this.homeworks_done[args.index];
        }
        else {
            homework = this.homeworks[args.index];
        }
        this.router.navigate(["/homeworkdetails/" + homework.id]);
    };
    HomeworkComponent.prototype.onItemSwiping = function (args) {
    };
    HomeworkComponent.prototype.onItemSwiping_all = function (args) {
        var item = this.homeworks[args.index];
        if (item.status === homework_model_1.HomeworkStatus.todo) {
            this.swipeText = 'Complete';
        }
        else {
            this.swipeText = 'To Do';
        }
    };
    HomeworkComponent.prototype.onSwipeCellFinished = function (args) {
    };
    HomeworkComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('attach-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
        var rightItem = swipeView.getViewById('complete-view');
        swipeLimits.right = rightItem.getMeasuredWidth();
    };
    HomeworkComponent.prototype.onCellSwiping = function (args) {
        // const swipeLimits = args.data.swipeLimits;
        // const currentItemView = args.object;
        // if (args.data.x > 200) {
        //     console.log("Notify perform left action");
        // } else if (args.data.x < -200) {
        //     console.log("Notify perform right action");
        // }
    };
    HomeworkComponent.prototype.onLeftSwipeClick = function (args) {
        console.log("Left swipe click");
        this.listViewComponent_todo.listView.notifySwipeToExecuteFinished();
        this.listViewComponent_done.listView.notifySwipeToExecuteFinished();
        this.listViewComponent_all.listView.notifySwipeToExecuteFinished();
    };
    __decorate([
        core_1.ViewChild("listView_todo"),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], HomeworkComponent.prototype, "listViewComponent_todo", void 0);
    __decorate([
        core_1.ViewChild("listView_done"),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], HomeworkComponent.prototype, "listViewComponent_done", void 0);
    __decorate([
        core_1.ViewChild("listView_all"),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], HomeworkComponent.prototype, "listViewComponent_all", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5QztBQUl6Qyw0REFBd0U7QUFJeEUsMERBQW1FO0FBQ25FLGdFQUE4RDtBQVM5RDtJQWlCQywyQkFBb0IsTUFBYyxFQUN6QixlQUFnQztRQURyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWpCakMsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQ3JDLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBRTlCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFFaEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQU1qQixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHRCxDQUFDO0lBRTlDLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNSLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFF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LENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBbEwyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBeUIsOEJBQW9CO3FFQUFDO0lBQzdDO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDO2tDQUF5Qiw4QkFBb0I7cUVBQUM7SUFDOUM7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQXdCLDhCQUFvQjtvRUFBQztJQWIzRCxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBbUIyQixlQUFNO1lBQ1Isa0NBQWU7T0FsQjdCLGlCQUFpQixDQThMN0I7SUFBRCx3QkFBQztDQUFBLEFBOUxELElBOExDO0FBOUxZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgU3dpcGVBY3Rpb25zRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcblxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xuaW1wb3J0IHsgSG9tZXdvcmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9ob21ld29yay5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaG9tZXdvcmsnLFxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZXdvcmsuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9ob21ld29yay5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZXdvcmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdHByaXZhdGUgc3Vic2NyaXB0aW9ucyA6IFN1YnNjcmlwdGlvbltdID0gW107XG5cdHB1YmxpYyB0YWJWaWV3U2VsZWN0ZWRJbmRleCA9IDA7XG5cdHB1YmxpYyBzd2lwZVRleHQgPSAnQ29tcGxldGUnO1xuXG5cdGhvbWV3b3JrczogSG9tZXdvcmtbXSA9IFtdO1xuXHRob21ld29ya3NfdG9kbzogSG9tZXdvcmtbXSA9IFtdO1xuXHRob21ld29ya3NfZG9uZTogSG9tZXdvcmtbXSA9IFtdO1xuXG5cdGlzTG9hZGluZyA9IHRydWU7XG5cblx0QFZpZXdDaGlsZChcImxpc3RWaWV3X3RvZG9cIikgbGlzdFZpZXdDb21wb25lbnRfdG9kbzogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cdEBWaWV3Q2hpbGQoXCJsaXN0Vmlld19kb25lXCIpIGxpc3RWaWV3Q29tcG9uZW50X2RvbmU6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXHRAVmlld0NoaWxkKFwibGlzdFZpZXdfYWxsXCIpIGxpc3RWaWV3Q29tcG9uZW50X2FsbDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cdFxuXHR3YXJuaW5nSWNvbkNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZWEwOCk7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgaG9tZXdvcmtTZXJ2aWNlOiBIb21ld29ya1NlcnZpY2UpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyBcblx0XHR0aGlzLmdldEhvbWV3b3JrcygpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgZm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG5cblx0Z2V0SG9tZXdvcmtzKCkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuXHRcdFx0dGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtzKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHggPT4ge1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzID0geC5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgIT09IEhvbWV3b3JrU3RhdHVzLnJlbW92ZWQpLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX3RvZG8gPSB0aGlzLmhvbWV3b3Jrcy5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLnRvZG8pLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUgPSB0aGlzLmhvbWV3b3Jrcy5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLmRvbmUpLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IpLFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxuXHRpc05lYXJEdWVEYXRlKGhvbWV3b3JrOiBIb21ld29yaykgOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ob21ld29ya1NlcnZpY2UuaXNOZWFyRHVlRGF0ZShob21ld29yayk7XG5cdH1cblxuXHRzb3J0SG9tZXdvcmtMaXN0KCkge1xuXHRcdHRoaXMuaG9tZXdvcmtzID0gdGhpcy5ob21ld29ya3Muc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XG5cdFx0dGhpcy5ob21ld29ya3NfdG9kbyA9IHRoaXMuaG9tZXdvcmtzX3RvZG8uc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XG5cdFx0dGhpcy5ob21ld29ya3NfZG9uZSA9IHRoaXMuaG9tZXdvcmtzX2RvbmUuc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XG5cdH1cblxuXHRzb3J0SG9tZXdvcmtCeUR1ZURhdGUoYSwgYikge1xuXHRcdGlmIChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpXG5cdFx0ICByZXR1cm4gLTE7XG5cdFx0aWYgKGEuZHVlRGF0ZSA+IGIuZHVlRGF0ZSlcblx0XHQgIHJldHVybiAxO1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0bWFya0NvbXBsZXRlKGFyZ3MpIHtcblx0XHRsZXQgaXRlbSA9IGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0IGFzIEhvbWV3b3JrO1xuXHRcdGl0ZW0uc3RhdHVzID0gSG9tZXdvcmtTdGF0dXMuZG9uZTtcblx0XHRcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLnVwZGF0ZVVzZXJIb21ld29yayhpdGVtKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCkgPT4geyB9LFxuXHRcdFx0XHQoKSA9PiB7IH0sXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc190b2RvLnNwbGljZSh0aGlzLmhvbWV3b3Jrc190b2RvLmluZGV4T2YoaXRlbSksIDEpO1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUucHVzaChpdGVtKTtcblx0XHRcdFx0XHR0aGlzLnNvcnRIb21ld29ya0xpc3QoKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfZG9uZS5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9hbGwubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHR9XG5cblx0bWFya1RvZG8oYXJncykge1xuXHRcdGxldCBpdGVtID0gYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQgYXMgSG9tZXdvcms7XG5cdFx0aXRlbS5zdGF0dXMgPSBIb21ld29ya1N0YXR1cy50b2RvO1xuXHRcdFxuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuXHRcdFx0dGhpcy5ob21ld29ya1NlcnZpY2UudXBkYXRlVXNlckhvbWV3b3JrKGl0ZW0pXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoKSA9PiB7IH0sXG5cdFx0XHRcdCgpID0+IHsgfSxcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUuc3BsaWNlKHRoaXMuaG9tZXdvcmtzX2RvbmUuaW5kZXhPZihpdGVtKSwgMSk7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kby5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2FsbC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdH1cblxuXHRvblRhYlZpZXdDbGlja2VkKGFyZ3MpIHsgXG5cdFx0dGhpcy50YWJWaWV3U2VsZWN0ZWRJbmRleCA9IGFyZ3M7XG5cdH1cblxuXHRvbkl0ZW1UYXBfdG9kbyhhcmdzKSB7XG5cdFx0dGhpcy5vbkl0ZW1UYXAoYXJncywgSG9tZXdvcmtTdGF0dXMudG9kbyk7XG5cdH1cblxuXHRvbkl0ZW1UYXBfZG9uZShhcmdzKSB7XG5cdFx0dGhpcy5vbkl0ZW1UYXAoYXJncywgSG9tZXdvcmtTdGF0dXMuZG9uZSk7XG5cdH1cblxuXHRvbkl0ZW1UYXBfYWxsKGFyZ3MpIHtcblx0XHR0aGlzLm9uSXRlbVRhcChhcmdzLCBcIkFMTFwiKTtcblx0fVxuXG5cdG9uSXRlbVRhcChhcmdzLCB0YWJUZXh0KSB7XG5cdFx0bGV0IGhvbWV3b3JrID0gbmV3IEhvbWV3b3JrKCk7XG5cdFx0aWYodGFiVGV4dCA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xuXHRcdFx0aG9tZXdvcmsgPSB0aGlzLmhvbWV3b3Jrc190b2RvW2FyZ3MuaW5kZXhdO1xuXHRcdH1cblx0XHRlbHNlIGlmKHRhYlRleHQgPT09IEhvbWV3b3JrU3RhdHVzLmRvbmUpIHtcblx0XHRcdGhvbWV3b3JrID0gdGhpcy5ob21ld29ya3NfZG9uZVthcmdzLmluZGV4XTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRob21ld29yayA9IHRoaXMuaG9tZXdvcmtzW2FyZ3MuaW5kZXhdO1xuXHRcdH1cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9ob21ld29ya2RldGFpbHMvJHtob21ld29yay5pZH1gXSk7XG5cdH1cblx0XG5cdG9uSXRlbVN3aXBpbmcoYXJncykge1xuXG5cdH1cblxuXHRvbkl0ZW1Td2lwaW5nX2FsbChhcmdzKSB7XG5cdFx0bGV0IGl0ZW0gPSB0aGlzLmhvbWV3b3Jrc1thcmdzLmluZGV4XTtcblx0XHRpZihpdGVtLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xuXHRcdFx0dGhpcy5zd2lwZVRleHQgPSAnQ29tcGxldGUnO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuc3dpcGVUZXh0ID0gJ1RvIERvJztcblx0XHR9XG5cdH1cblx0XG5cdG9uU3dpcGVDZWxsRmluaXNoZWQoYXJncykge1xuXG5cdH1cblxuXHRvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogU3dpcGVBY3Rpb25zRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuXHRcdGNvbnN0IHN3aXBlVmlldyA9IGFyZ3NbJ29iamVjdCddO1xuXHRcdFxuICAgICAgICBjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignYXR0YWNoLXZpZXcnKTtcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcblx0XHRzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuXHRcdFxuICAgICAgICBjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2NvbXBsZXRlLXZpZXcnKTtcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuXHR9XG5cblx0b25DZWxsU3dpcGluZyhhcmdzOiBTd2lwZUFjdGlvbnNFdmVudERhdGEpIHtcbiAgICAgICAgLy8gY29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgICAgIC8vIGNvbnN0IGN1cnJlbnRJdGVtVmlldyA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIC8vIGlmIChhcmdzLmRhdGEueCA+IDIwMCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSBsZWZ0IGFjdGlvblwiKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChhcmdzLmRhdGEueCA8IC0yMDApIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTm90aWZ5IHBlcmZvcm0gcmlnaHQgYWN0aW9uXCIpO1xuICAgICAgICAvLyB9XG5cdH1cblxuXHRvbkxlZnRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG5cdFx0Y29uc29sZS5sb2coXCJMZWZ0IHN3aXBlIGNsaWNrXCIpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2FsbC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdH1cbn0iXX0=
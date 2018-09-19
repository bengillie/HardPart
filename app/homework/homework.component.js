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
    HomeworkComponent.prototype.isDue = function (homework) {
        return this.homeworkService.isDue(homework);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5QztBQUl6Qyw0REFBd0U7QUFJeEUsMERBQW1FO0FBQ25FLGdFQUE4RDtBQVM5RDtJQWlCQywyQkFBb0IsTUFBYyxFQUN6QixlQUFnQztRQURyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWpCakMsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQ3JDLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBRTlCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFFaEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQU1qQixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHRCxDQUFDO0lBRTlDLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNSLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFF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RDtRQUNqRCxtQ0FBbUM7UUFDbkMsa0RBQWtEO1FBQ2xELElBQUk7SUFDWCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLElBQXVCO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBdEwyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBeUIsOEJBQW9CO3FFQUFDO0lBQzdDO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDO2tDQUF5Qiw4QkFBb0I7cUVBQUM7SUFDOUM7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQXdCLDhCQUFvQjtvRUFBQztJQWIzRCxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBbUIyQixlQUFNO1lBQ1Isa0NBQWU7T0FsQjdCLGlCQUFpQixDQWtNN0I7SUFBRCx3QkFBQztDQUFBLEFBbE1ELElBa01DO0FBbE1ZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgU3dpcGVBY3Rpb25zRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcblxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xuaW1wb3J0IHsgSG9tZXdvcmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9ob21ld29yay5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaG9tZXdvcmsnLFxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZXdvcmsuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9ob21ld29yay5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZXdvcmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdHByaXZhdGUgc3Vic2NyaXB0aW9ucyA6IFN1YnNjcmlwdGlvbltdID0gW107XG5cdHB1YmxpYyB0YWJWaWV3U2VsZWN0ZWRJbmRleCA9IDA7XG5cdHB1YmxpYyBzd2lwZVRleHQgPSAnQ29tcGxldGUnO1xuXG5cdGhvbWV3b3JrczogSG9tZXdvcmtbXSA9IFtdO1xuXHRob21ld29ya3NfdG9kbzogSG9tZXdvcmtbXSA9IFtdO1xuXHRob21ld29ya3NfZG9uZTogSG9tZXdvcmtbXSA9IFtdO1xuXG5cdGlzTG9hZGluZyA9IHRydWU7XG5cblx0QFZpZXdDaGlsZChcImxpc3RWaWV3X3RvZG9cIikgbGlzdFZpZXdDb21wb25lbnRfdG9kbzogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cdEBWaWV3Q2hpbGQoXCJsaXN0Vmlld19kb25lXCIpIGxpc3RWaWV3Q29tcG9uZW50X2RvbmU6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXHRAVmlld0NoaWxkKFwibGlzdFZpZXdfYWxsXCIpIGxpc3RWaWV3Q29tcG9uZW50X2FsbDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cdFxuXHR3YXJuaW5nSWNvbkNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZWEwOCk7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgaG9tZXdvcmtTZXJ2aWNlOiBIb21ld29ya1NlcnZpY2UpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyBcblx0XHR0aGlzLmdldEhvbWV3b3JrcygpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgZm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG5cblx0Z2V0SG9tZXdvcmtzKCkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuXHRcdFx0dGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtzKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHggPT4ge1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzID0geC5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgIT09IEhvbWV3b3JrU3RhdHVzLnJlbW92ZWQpLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX3RvZG8gPSB0aGlzLmhvbWV3b3Jrcy5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLnRvZG8pLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUgPSB0aGlzLmhvbWV3b3Jrcy5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLmRvbmUpLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IpLFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxuXHRpc0R1ZShob21ld29yazogSG9tZXdvcmspIDogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmlzRHVlKGhvbWV3b3JrKTtcblx0fVxuXG5cdGlzTmVhckR1ZURhdGUoaG9tZXdvcms6IEhvbWV3b3JrKSA6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhvbWV3b3JrU2VydmljZS5pc05lYXJEdWVEYXRlKGhvbWV3b3JrKTtcblx0fVxuXG5cdHNvcnRIb21ld29ya0xpc3QoKSB7XG5cdFx0dGhpcy5ob21ld29ya3MgPSB0aGlzLmhvbWV3b3Jrcy5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0XHR0aGlzLmhvbWV3b3Jrc190b2RvID0gdGhpcy5ob21ld29ya3NfdG9kby5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0XHR0aGlzLmhvbWV3b3Jrc19kb25lID0gdGhpcy5ob21ld29ya3NfZG9uZS5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0fVxuXG5cdHNvcnRIb21ld29ya0J5RHVlRGF0ZShhLCBiKSB7XG5cdFx0aWYgKGEuZHVlRGF0ZSA8IGIuZHVlRGF0ZSlcblx0XHQgIHJldHVybiAtMTtcblx0XHRpZiAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKVxuXHRcdCAgcmV0dXJuIDE7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRtYXJrQ29tcGxldGUoYXJncykge1xuXHRcdGxldCBpdGVtID0gYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQgYXMgSG9tZXdvcms7XG5cdFx0aXRlbS5zdGF0dXMgPSBIb21ld29ya1N0YXR1cy5kb25lO1xuXHRcdFxuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuXHRcdFx0dGhpcy5ob21ld29ya1NlcnZpY2UudXBkYXRlVXNlckhvbWV3b3JrKGl0ZW0pXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoKSA9PiB7IH0sXG5cdFx0XHRcdCgpID0+IHsgfSxcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX3RvZG8uc3BsaWNlKHRoaXMuaG9tZXdvcmtzX3RvZG8uaW5kZXhPZihpdGVtKSwgMSk7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfZG9uZS5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2FsbC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdH1cblxuXHRtYXJrVG9kbyhhcmdzKSB7XG5cdFx0bGV0IGl0ZW0gPSBhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCBhcyBIb21ld29yaztcblx0XHRpdGVtLnN0YXR1cyA9IEhvbWV3b3JrU3RhdHVzLnRvZG87XG5cdFx0XG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG5cdFx0XHR0aGlzLmhvbWV3b3JrU2VydmljZS51cGRhdGVVc2VySG9tZXdvcmsoaXRlbSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCgpID0+IHsgfSxcblx0XHRcdFx0KCkgPT4geyB9LFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfZG9uZS5zcGxpY2UodGhpcy5ob21ld29ya3NfZG9uZS5pbmRleE9mKGl0ZW0pLCAxKTtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc190b2RvLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5zb3J0SG9tZXdvcmtMaXN0KCk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF90b2RvLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0fVxuXG5cdG9uVGFiVmlld0NsaWNrZWQoYXJncykgeyBcblx0XHR0aGlzLnRhYlZpZXdTZWxlY3RlZEluZGV4ID0gYXJncztcblx0fVxuXG5cdG9uSXRlbVRhcF90b2RvKGFyZ3MpIHtcblx0XHR0aGlzLm9uSXRlbVRhcChhcmdzLCBIb21ld29ya1N0YXR1cy50b2RvKTtcblx0fVxuXG5cdG9uSXRlbVRhcF9kb25lKGFyZ3MpIHtcblx0XHR0aGlzLm9uSXRlbVRhcChhcmdzLCBIb21ld29ya1N0YXR1cy5kb25lKTtcblx0fVxuXG5cdG9uSXRlbVRhcF9hbGwoYXJncykge1xuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIFwiQUxMXCIpO1xuXHR9XG5cblx0b25JdGVtVGFwKGFyZ3MsIHRhYlRleHQpIHtcblx0XHRsZXQgaG9tZXdvcmsgPSBuZXcgSG9tZXdvcmsoKTtcblx0XHRpZih0YWJUZXh0ID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XG5cdFx0XHRob21ld29yayA9IHRoaXMuaG9tZXdvcmtzX3RvZG9bYXJncy5pbmRleF07XG5cdFx0fVxuXHRcdGVsc2UgaWYodGFiVGV4dCA9PT0gSG9tZXdvcmtTdGF0dXMuZG9uZSkge1xuXHRcdFx0aG9tZXdvcmsgPSB0aGlzLmhvbWV3b3Jrc19kb25lW2FyZ3MuaW5kZXhdO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGhvbWV3b3JrID0gdGhpcy5ob21ld29ya3NbYXJncy5pbmRleF07XG5cdFx0fVxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2hvbWV3b3JrZGV0YWlscy8ke2hvbWV3b3JrLmlkfWBdKTtcblx0fVxuXHRcblx0b25JdGVtU3dpcGluZyhhcmdzKSB7XG5cblx0fVxuXG5cdG9uSXRlbVN3aXBpbmdfYWxsKGFyZ3MpIHtcblx0XHRsZXQgaXRlbSA9IHRoaXMuaG9tZXdvcmtzW2FyZ3MuaW5kZXhdO1xuXHRcdGlmKGl0ZW0uc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XG5cdFx0XHR0aGlzLnN3aXBlVGV4dCA9ICdDb21wbGV0ZSc7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zd2lwZVRleHQgPSAnVG8gRG8nO1xuXHRcdH1cblx0fVxuXHRcblx0b25Td2lwZUNlbGxGaW5pc2hlZChhcmdzKSB7XG5cblx0fVxuXG5cdG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBTd2lwZUFjdGlvbnNFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG5cdFx0Y29uc3Qgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XG5cdFx0XG4gICAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdhdHRhY2gtdmlldycpO1xuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuXHRcdHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG5cdFx0XG4gICAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignY29tcGxldGUtdmlldycpO1xuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG5cdH1cblxuXHRvbkNlbGxTd2lwaW5nKGFyZ3M6IFN3aXBlQWN0aW9uc0V2ZW50RGF0YSkge1xuICAgICAgICAvLyBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgICAgLy8gY29uc3QgY3VycmVudEl0ZW1WaWV3ID0gYXJncy5vYmplY3Q7XG5cbiAgICAgICAgLy8gaWYgKGFyZ3MuZGF0YS54ID4gMjAwKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIGxlZnQgYWN0aW9uXCIpO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLTIwMCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSByaWdodCBhY3Rpb25cIik7XG4gICAgICAgIC8vIH1cblx0fVxuXG5cdG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcblx0XHRjb25zb2xlLmxvZyhcIkxlZnQgc3dpcGUgY2xpY2tcIik7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF90b2RvLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0fVxufSJdfQ==
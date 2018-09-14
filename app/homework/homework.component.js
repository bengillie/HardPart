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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5QztBQUl6Qyw0REFBd0U7QUFJeEUsMERBQW1FO0FBQ25FLGdFQUE4RDtBQVM5RDtJQWlCQywyQkFBb0IsTUFBYyxFQUN6QixlQUFnQztRQURyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWpCakMsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQ3JDLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBRTlCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFFaEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQU1qQixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHRCxDQUFDO0lBRTlDLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNSLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFF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LENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBbEwyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBeUIsOEJBQW9CO3FFQUFDO0lBQzdDO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDO2tDQUF5Qiw4QkFBb0I7cUVBQUM7SUFDOUM7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQXdCLDhCQUFvQjtvRUFBQztJQWIzRCxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBbUIyQixlQUFNO1lBQ1Isa0NBQWU7T0FsQjdCLGlCQUFpQixDQThMN0I7SUFBRCx3QkFBQztDQUFBLEFBOUxELElBOExDO0FBOUxZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBTd2lwZUFjdGlvbnNFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XHJcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XHJcblxyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xyXG5cclxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZXdvcmsuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2hvbWV3b3JrLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21ld29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbnMgOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cdHB1YmxpYyB0YWJWaWV3U2VsZWN0ZWRJbmRleCA9IDA7XHJcblx0cHVibGljIHN3aXBlVGV4dCA9ICdDb21wbGV0ZSc7XHJcblxyXG5cdGhvbWV3b3JrczogSG9tZXdvcmtbXSA9IFtdO1xyXG5cdGhvbWV3b3Jrc190b2RvOiBIb21ld29ya1tdID0gW107XHJcblx0aG9tZXdvcmtzX2RvbmU6IEhvbWV3b3JrW10gPSBbXTtcclxuXHJcblx0aXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0QFZpZXdDaGlsZChcImxpc3RWaWV3X3RvZG9cIikgbGlzdFZpZXdDb21wb25lbnRfdG9kbzogUmFkTGlzdFZpZXdDb21wb25lbnQ7XHJcblx0QFZpZXdDaGlsZChcImxpc3RWaWV3X2RvbmVcIikgbGlzdFZpZXdDb21wb25lbnRfZG9uZTogUmFkTGlzdFZpZXdDb21wb25lbnQ7XHJcblx0QFZpZXdDaGlsZChcImxpc3RWaWV3X2FsbFwiKSBsaXN0Vmlld0NvbXBvbmVudF9hbGw6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG5cdFxyXG5cdHdhcm5pbmdJY29uQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYTA4KTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkgeyBcclxuXHRcdHRoaXMuZ2V0SG9tZXdvcmtzKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRnZXRIb21ld29ya3MoKSB7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuXHRcdFx0dGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtzKClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHR4ID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzID0geC5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgIT09IEhvbWV3b3JrU3RhdHVzLnJlbW92ZWQpLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kbyA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykuc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lID0gdGhpcy5ob21ld29ya3MuZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy5kb25lKS5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcclxuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGlzTmVhckR1ZURhdGUoaG9tZXdvcms6IEhvbWV3b3JrKSA6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmlzTmVhckR1ZURhdGUoaG9tZXdvcmspO1xyXG5cdH1cclxuXHJcblx0c29ydEhvbWV3b3JrTGlzdCgpIHtcclxuXHRcdHRoaXMuaG9tZXdvcmtzID0gdGhpcy5ob21ld29ya3Muc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XHJcblx0XHR0aGlzLmhvbWV3b3Jrc190b2RvID0gdGhpcy5ob21ld29ya3NfdG9kby5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcclxuXHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUgPSB0aGlzLmhvbWV3b3Jrc19kb25lLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xyXG5cdH1cclxuXHJcblx0c29ydEhvbWV3b3JrQnlEdWVEYXRlKGEsIGIpIHtcclxuXHRcdGlmIChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpXHJcblx0XHQgIHJldHVybiAtMTtcclxuXHRcdGlmIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpXHJcblx0XHQgIHJldHVybiAxO1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cclxuXHRtYXJrQ29tcGxldGUoYXJncykge1xyXG5cdFx0bGV0IGl0ZW0gPSBhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCBhcyBIb21ld29yaztcclxuXHRcdGl0ZW0uc3RhdHVzID0gSG9tZXdvcmtTdGF0dXMuZG9uZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLnVwZGF0ZVVzZXJIb21ld29yayhpdGVtKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdCgpID0+IHsgfSxcclxuXHRcdFx0XHQoKSA9PiB7IH0sXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kby5zcGxpY2UodGhpcy5ob21ld29ya3NfdG9kby5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHR9XHJcblxyXG5cdG1hcmtUb2RvKGFyZ3MpIHtcclxuXHRcdGxldCBpdGVtID0gYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQgYXMgSG9tZXdvcms7XHJcblx0XHRpdGVtLnN0YXR1cyA9IEhvbWV3b3JrU3RhdHVzLnRvZG87XHJcblx0XHRcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG5cdFx0XHR0aGlzLmhvbWV3b3JrU2VydmljZS51cGRhdGVVc2VySG9tZXdvcmsoaXRlbSlcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoKSA9PiB7IH0sXHJcblx0XHRcdFx0KCkgPT4geyB9LFxyXG5cdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUuc3BsaWNlKHRoaXMuaG9tZXdvcmtzX2RvbmUuaW5kZXhPZihpdGVtKSwgMSk7XHJcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc190b2RvLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR0aGlzLnNvcnRIb21ld29ya0xpc3QoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF90b2RvLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfZG9uZS5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2FsbC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcblx0fVxyXG5cclxuXHRvblRhYlZpZXdDbGlja2VkKGFyZ3MpIHsgXHJcblx0XHR0aGlzLnRhYlZpZXdTZWxlY3RlZEluZGV4ID0gYXJncztcclxuXHR9XHJcblxyXG5cdG9uSXRlbVRhcF90b2RvKGFyZ3MpIHtcclxuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIEhvbWV3b3JrU3RhdHVzLnRvZG8pO1xyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwX2RvbmUoYXJncykge1xyXG5cdFx0dGhpcy5vbkl0ZW1UYXAoYXJncywgSG9tZXdvcmtTdGF0dXMuZG9uZSk7XHJcblx0fVxyXG5cclxuXHRvbkl0ZW1UYXBfYWxsKGFyZ3MpIHtcclxuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIFwiQUxMXCIpO1xyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwKGFyZ3MsIHRhYlRleHQpIHtcclxuXHRcdGxldCBob21ld29yayA9IG5ldyBIb21ld29yaygpO1xyXG5cdFx0aWYodGFiVGV4dCA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xyXG5cdFx0XHRob21ld29yayA9IHRoaXMuaG9tZXdvcmtzX3RvZG9bYXJncy5pbmRleF07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHRhYlRleHQgPT09IEhvbWV3b3JrU3RhdHVzLmRvbmUpIHtcclxuXHRcdFx0aG9tZXdvcmsgPSB0aGlzLmhvbWV3b3Jrc19kb25lW2FyZ3MuaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGhvbWV3b3JrID0gdGhpcy5ob21ld29ya3NbYXJncy5pbmRleF07XHJcblx0XHR9XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9ob21ld29ya2RldGFpbHMvJHtob21ld29yay5pZH1gXSk7XHJcblx0fVxyXG5cdFxyXG5cdG9uSXRlbVN3aXBpbmcoYXJncykge1xyXG5cclxuXHR9XHJcblxyXG5cdG9uSXRlbVN3aXBpbmdfYWxsKGFyZ3MpIHtcclxuXHRcdGxldCBpdGVtID0gdGhpcy5ob21ld29ya3NbYXJncy5pbmRleF07XHJcblx0XHRpZihpdGVtLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xyXG5cdFx0XHR0aGlzLnN3aXBlVGV4dCA9ICdDb21wbGV0ZSc7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5zd2lwZVRleHQgPSAnVG8gRG8nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRvblN3aXBlQ2VsbEZpbmlzaGVkKGFyZ3MpIHtcclxuXHJcblx0fVxyXG5cclxuXHRvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogU3dpcGVBY3Rpb25zRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XHJcblx0XHRjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcclxuXHRcdFxyXG4gICAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdhdHRhY2gtdmlldycpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XHJcblx0XHRzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xyXG5cdFx0XHJcbiAgICAgICAgY29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdjb21wbGV0ZS12aWV3Jyk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xyXG5cdH1cclxuXHJcblx0b25DZWxsU3dpcGluZyhhcmdzOiBTd2lwZUFjdGlvbnNFdmVudERhdGEpIHtcclxuICAgICAgICAvLyBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuICAgICAgICAvLyBjb25zdCBjdXJyZW50SXRlbVZpZXcgPSBhcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgLy8gaWYgKGFyZ3MuZGF0YS54ID4gMjAwKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTm90aWZ5IHBlcmZvcm0gbGVmdCBhY3Rpb25cIik7XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChhcmdzLmRhdGEueCA8IC0yMDApIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSByaWdodCBhY3Rpb25cIik7XHJcbiAgICAgICAgLy8gfVxyXG5cdH1cclxuXHJcblx0b25MZWZ0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJMZWZ0IHN3aXBlIGNsaWNrXCIpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF90b2RvLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfZG9uZS5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2FsbC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcblx0fVxyXG59Il19
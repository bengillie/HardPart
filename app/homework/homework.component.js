"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-listview/angular");
var view_1 = require("tns-core-modules/ui/core/view");
var homework_model_1 = require("../shared/model/homework.model");
var homework_service_1 = require("./homework.service");
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
        this.scrollOffset_all = 0;
        this.scrollOffset_todo = 0;
        this.scrollOffset_done = 0;
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
        this.subscriptions.push(this.homeworkService.getHomeworks().subscribe(function (x) {
            _this.homeworks = x.filter(function (all) { return all.status !== homework_model_1.HomeworkStatus.removed; });
            _this.homeworks_todo = _this.homeworks.filter(function (all) { return all.status === homework_model_1.HomeworkStatus.todo; });
            _this.homeworks_done = _this.homeworks.filter(function (all) { return all.status === homework_model_1.HomeworkStatus.done; });
            _this.sortHomeworkList();
        }, function (error) { return console.log('Error: ', error); }, function () {
            _this.isLoading = false;
        }));
    };
    HomeworkComponent.prototype.getHomeworkDeadlineStatus = function (homework) {
        return this.homeworkService.getHomeworkDeadlineStatus(homework);
    };
    HomeworkComponent.prototype.onScrollEnded_all = function (args) {
        this.scrollOffset_all = args.scrollOffset;
    };
    HomeworkComponent.prototype.onScrollEnded_todo = function (args) {
        this.scrollOffset_todo = args.scrollOffset;
    };
    HomeworkComponent.prototype.onScrollEnded_done = function (args) {
        this.scrollOffset_done = args.scrollOffset;
    };
    HomeworkComponent.prototype.sortHomeworkList = function () {
        var _this = this;
        this.homeworks = this.homeworks.sort(this.sortHomeworkByDueDate);
        this.homeworks_todo = this.homeworks_todo.sort(this.sortHomeworkByDueDate);
        this.homeworks_done = this.homeworks_done.sort(this.sortHomeworkByDueDate);
        if (view_1.isIOS) {
            // required on iOS to redraw the ListView
            this.listViewComponent_all.nativeElement.refresh();
            this.listViewComponent_todo.nativeElement.refresh();
            this.listViewComponent_done.nativeElement.refresh();
        }
        setTimeout(function () {
            _this.listViewComponent_all.listView.scrollWithAmount(_this.scrollOffset_all, false);
            _this.listViewComponent_todo.listView.scrollWithAmount(_this.scrollOffset_todo, false);
            _this.listViewComponent_done.listView.scrollWithAmount(_this.scrollOffset_done, false);
        }, 10);
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
        this.subscriptions.push(this.homeworkService.updateUserHomework(item).subscribe(function () { }, function () { }, function () {
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
        this.subscriptions.push(this.homeworkService.updateUserHomework(item).subscribe(function () { }, function () { }, function () {
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
        this.onItemTap(args, 'ALL');
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
    HomeworkComponent.prototype.onItemSwiping = function (args) { };
    HomeworkComponent.prototype.onItemSwiping_all = function (args) {
        var item = this.homeworks[args.index];
        if (item.status === homework_model_1.HomeworkStatus.todo) {
            this.swipeText = 'Complete';
        }
        else {
            this.swipeText = 'To Do';
        }
    };
    HomeworkComponent.prototype.onSwipeCellFinished = function (args) { };
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
        this.listViewComponent_todo.listView.notifySwipeToExecuteFinished();
        this.listViewComponent_done.listView.notifySwipeToExecuteFinished();
        this.listViewComponent_all.listView.notifySwipeToExecuteFinished();
    };
    __decorate([
        core_1.ViewChild('listView_todo'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], HomeworkComponent.prototype, "listViewComponent_todo", void 0);
    __decorate([
        core_1.ViewChild('listView_done'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], HomeworkComponent.prototype, "listViewComponent_done", void 0);
    __decorate([
        core_1.ViewChild('listView_all'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], HomeworkComponent.prototype, "listViewComponent_all", void 0);
    HomeworkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'homework',
            templateUrl: './homework.component.html',
            styleUrls: ['./homework.component.less'],
        }),
        __metadata("design:paramtypes", [router_1.Router, homework_service_1.HomeworkService])
    ], HomeworkComponent);
    return HomeworkComponent;
}());
exports.HomeworkComponent = HomeworkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5QztBQUl6Qyw0REFBd0U7QUFFeEUsc0RBQTREO0FBRTVELGlFQUFrRztBQUNsRyx1REFBcUQ7QUFRckQ7SUF3QkMsMkJBQW9CLE1BQWMsRUFBVSxlQUFnQztRQUF4RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBdkJwRSxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDcEMseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxVQUFVLENBQUM7UUFFOUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUNoQyxtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUVoQyxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQUU5QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBU2pCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVpQyxDQUFDO0lBRWhGLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4QixHQUFHLENBQUMsQ0FBcUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQjtnQkFBdEMsSUFBSSxZQUFZLFNBQUE7Z0JBQ3BCLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzQjtRQUNGLENBQUM7SUFDRixD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QUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUE3TEQ7UUFEQyxnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FDSCw4QkFBb0I7cUVBQUM7SUFFN0M7UUFEQyxnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FDSCw4QkFBb0I7cUVBQUM7SUFFN0M7UUFEQyxnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FDSCw4QkFBb0I7b0VBQUM7SUFwQmhDLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQzt5Q0F5QjJCLGVBQU0sRUFBMkIsa0NBQWU7T0F4QmhFLGlCQUFpQixDQThNN0I7SUFBRCx3QkFBQztDQUFBLEFBOU1ELElBOE1DO0FBOU1ZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBMaXN0Vmlld1Njcm9sbEV2ZW50RGF0YSwgU3dpcGVBY3Rpb25zRXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcclxuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBWaWV3LCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcclxuXHJcbmltcG9ydCB7IEhvbWV3b3JrLCBIb21ld29ya0RlYWRsaW5lU3RhdHVzLCBIb21ld29ya1N0YXR1cyB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9ob21ld29yay5tb2RlbCc7XHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4vaG9tZXdvcmsuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnaG9tZXdvcmsnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9ob21ld29yay5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vaG9tZXdvcmsuY29tcG9uZW50Lmxlc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHRwdWJsaWMgdGFiVmlld1NlbGVjdGVkSW5kZXggPSAwO1xyXG5cdHB1YmxpYyBzd2lwZVRleHQgPSAnQ29tcGxldGUnO1xyXG5cclxuXHRob21ld29ya3M6IEhvbWV3b3JrW10gPSBbXTtcclxuXHRob21ld29ya3NfdG9kbzogSG9tZXdvcmtbXSA9IFtdO1xyXG5cdGhvbWV3b3Jrc19kb25lOiBIb21ld29ya1tdID0gW107XHJcblxyXG5cdHNjcm9sbE9mZnNldF9hbGw6IG51bWJlciA9IDA7XHJcblx0c2Nyb2xsT2Zmc2V0X3RvZG86IG51bWJlciA9IDA7XHJcblx0c2Nyb2xsT2Zmc2V0X2RvbmU6IG51bWJlciA9IDA7XHJcblxyXG5cdGlzTG9hZGluZyA9IHRydWU7XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ2xpc3RWaWV3X3RvZG8nKVxyXG5cdGxpc3RWaWV3Q29tcG9uZW50X3RvZG86IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG5cdEBWaWV3Q2hpbGQoJ2xpc3RWaWV3X2RvbmUnKVxyXG5cdGxpc3RWaWV3Q29tcG9uZW50X2RvbmU6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG5cdEBWaWV3Q2hpbGQoJ2xpc3RWaWV3X2FsbCcpXHJcblx0bGlzdFZpZXdDb21wb25lbnRfYWxsOiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcclxuXHJcblx0d2FybmluZ0ljb25Db2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhMDgpO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGhvbWV3b3JrU2VydmljZTogSG9tZXdvcmtTZXJ2aWNlKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZ2V0SG9tZXdvcmtzKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuXHRcdFx0Zm9yIChsZXQgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG5cdFx0XHRcdHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRIb21ld29ya3MoKSB7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuXHRcdFx0dGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtzKCkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdHggPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3MgPSB4LmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyAhPT0gSG9tZXdvcmtTdGF0dXMucmVtb3ZlZCk7XHJcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc190b2RvID0gdGhpcy5ob21ld29ya3MuZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKTtcclxuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUgPSB0aGlzLmhvbWV3b3Jrcy5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLmRvbmUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zb3J0SG9tZXdvcmtMaXN0KCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMoaG9tZXdvcms6IEhvbWV3b3JrKTogSG9tZXdvcmtEZWFkbGluZVN0YXR1cyB7XHJcblx0XHRyZXR1cm4gdGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtEZWFkbGluZVN0YXR1cyhob21ld29yayk7XHJcblx0fVxyXG5cclxuXHRvblNjcm9sbEVuZGVkX2FsbChhcmdzOiBMaXN0Vmlld1Njcm9sbEV2ZW50RGF0YSkge1xyXG5cdFx0dGhpcy5zY3JvbGxPZmZzZXRfYWxsID0gYXJncy5zY3JvbGxPZmZzZXQ7XHJcblx0fVxyXG5cclxuXHRvblNjcm9sbEVuZGVkX3RvZG8oYXJnczogTGlzdFZpZXdTY3JvbGxFdmVudERhdGEpIHtcclxuXHRcdHRoaXMuc2Nyb2xsT2Zmc2V0X3RvZG8gPSBhcmdzLnNjcm9sbE9mZnNldDtcclxuXHR9XHJcblxyXG5cdG9uU2Nyb2xsRW5kZWRfZG9uZShhcmdzOiBMaXN0Vmlld1Njcm9sbEV2ZW50RGF0YSkge1xyXG5cdFx0dGhpcy5zY3JvbGxPZmZzZXRfZG9uZSA9IGFyZ3Muc2Nyb2xsT2Zmc2V0O1xyXG5cdH1cclxuXHJcblx0c29ydEhvbWV3b3JrTGlzdCgpIHtcclxuXHRcdHRoaXMuaG9tZXdvcmtzID0gdGhpcy5ob21ld29ya3Muc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XHJcblx0XHR0aGlzLmhvbWV3b3Jrc190b2RvID0gdGhpcy5ob21ld29ya3NfdG9kby5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcclxuXHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUgPSB0aGlzLmhvbWV3b3Jrc19kb25lLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xyXG5cclxuXHRcdGlmIChpc0lPUykge1xyXG5cdFx0XHQvLyByZXF1aXJlZCBvbiBpT1MgdG8gcmVkcmF3IHRoZSBMaXN0Vmlld1xyXG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2FsbC5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcclxuXHRcdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF90b2RvLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xyXG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3LnNjcm9sbFdpdGhBbW91bnQodGhpcy5zY3JvbGxPZmZzZXRfYWxsLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5saXN0Vmlldy5zY3JvbGxXaXRoQW1vdW50KHRoaXMuc2Nyb2xsT2Zmc2V0X3RvZG8sIGZhbHNlKTtcclxuXHRcdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3LnNjcm9sbFdpdGhBbW91bnQodGhpcy5zY3JvbGxPZmZzZXRfZG9uZSwgZmFsc2UpO1xyXG5cdFx0fSwgMTApO1xyXG5cdH1cclxuXHJcblx0c29ydEhvbWV3b3JrQnlEdWVEYXRlKGEsIGIpIHtcclxuXHRcdGlmIChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpIHJldHVybiAtMTtcclxuXHRcdGlmIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpIHJldHVybiAxO1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cclxuXHRtYXJrQ29tcGxldGUoYXJncykge1xyXG5cdFx0bGV0IGl0ZW0gPSBhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCBhcyBIb21ld29yaztcclxuXHRcdGl0ZW0uc3RhdHVzID0gSG9tZXdvcmtTdGF0dXMuZG9uZTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuXHRcdFx0dGhpcy5ob21ld29ya1NlcnZpY2UudXBkYXRlVXNlckhvbWV3b3JrKGl0ZW0pLnN1YnNjcmliZShcclxuXHRcdFx0XHQoKSA9PiB7fSxcclxuXHRcdFx0XHQoKSA9PiB7fSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc190b2RvLnNwbGljZSh0aGlzLmhvbWV3b3Jrc190b2RvLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfZG9uZS5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0dGhpcy5zb3J0SG9tZXdvcmtMaXN0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9hbGwubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdH1cclxuXHJcblx0bWFya1RvZG8oYXJncykge1xyXG5cdFx0bGV0IGl0ZW0gPSBhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCBhcyBIb21ld29yaztcclxuXHRcdGl0ZW0uc3RhdHVzID0gSG9tZXdvcmtTdGF0dXMudG9kbztcclxuXHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuXHRcdFx0dGhpcy5ob21ld29ya1NlcnZpY2UudXBkYXRlVXNlckhvbWV3b3JrKGl0ZW0pLnN1YnNjcmliZShcclxuXHRcdFx0XHQoKSA9PiB7fSxcclxuXHRcdFx0XHQoKSA9PiB7fSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lLnNwbGljZSh0aGlzLmhvbWV3b3Jrc19kb25lLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kby5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0dGhpcy5zb3J0SG9tZXdvcmtMaXN0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9hbGwubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdH1cclxuXHJcblx0b25UYWJWaWV3Q2xpY2tlZChhcmdzKSB7XHJcblx0XHR0aGlzLnRhYlZpZXdTZWxlY3RlZEluZGV4ID0gYXJncztcclxuXHR9XHJcblxyXG5cdG9uSXRlbVRhcF90b2RvKGFyZ3MpIHtcclxuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIEhvbWV3b3JrU3RhdHVzLnRvZG8pO1xyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwX2RvbmUoYXJncykge1xyXG5cdFx0dGhpcy5vbkl0ZW1UYXAoYXJncywgSG9tZXdvcmtTdGF0dXMuZG9uZSk7XHJcblx0fVxyXG5cclxuXHRvbkl0ZW1UYXBfYWxsKGFyZ3MpIHtcclxuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsICdBTEwnKTtcclxuXHR9XHJcblxyXG5cdG9uSXRlbVRhcChhcmdzLCB0YWJUZXh0KSB7XHJcblx0XHRsZXQgaG9tZXdvcmsgPSBuZXcgSG9tZXdvcmsoKTtcclxuXHRcdGlmICh0YWJUZXh0ID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XHJcblx0XHRcdGhvbWV3b3JrID0gdGhpcy5ob21ld29ya3NfdG9kb1thcmdzLmluZGV4XTtcclxuXHRcdH0gZWxzZSBpZiAodGFiVGV4dCA9PT0gSG9tZXdvcmtTdGF0dXMuZG9uZSkge1xyXG5cdFx0XHRob21ld29yayA9IHRoaXMuaG9tZXdvcmtzX2RvbmVbYXJncy5pbmRleF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRob21ld29yayA9IHRoaXMuaG9tZXdvcmtzW2FyZ3MuaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvaG9tZXdvcmtkZXRhaWxzLyR7aG9tZXdvcmsuaWR9YF0pO1xyXG5cdH1cclxuXHJcblx0b25JdGVtU3dpcGluZyhhcmdzKSB7fVxyXG5cclxuXHRvbkl0ZW1Td2lwaW5nX2FsbChhcmdzKSB7XHJcblx0XHRsZXQgaXRlbSA9IHRoaXMuaG9tZXdvcmtzW2FyZ3MuaW5kZXhdO1xyXG5cdFx0aWYgKGl0ZW0uc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XHJcblx0XHRcdHRoaXMuc3dpcGVUZXh0ID0gJ0NvbXBsZXRlJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc3dpcGVUZXh0ID0gJ1RvIERvJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uU3dpcGVDZWxsRmluaXNoZWQoYXJncykge31cclxuXHJcblx0b25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IFN3aXBlQWN0aW9uc0V2ZW50RGF0YSkge1xyXG5cdFx0Y29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XHJcblx0XHRjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcclxuXHJcblx0XHRjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignYXR0YWNoLXZpZXcnKTtcclxuXHRcdHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XHJcblx0XHRzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xyXG5cclxuXHRcdGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignY29tcGxldGUtdmlldycpO1xyXG5cdFx0c3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xyXG5cdH1cclxuXHJcblx0b25DZWxsU3dpcGluZyhhcmdzOiBTd2lwZUFjdGlvbnNFdmVudERhdGEpIHtcclxuXHRcdC8vIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xyXG5cdFx0Ly8gY29uc3QgY3VycmVudEl0ZW1WaWV3ID0gYXJncy5vYmplY3Q7XHJcblx0XHQvLyBpZiAoYXJncy5kYXRhLnggPiAyMDApIHtcclxuXHRcdC8vICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIGxlZnQgYWN0aW9uXCIpO1xyXG5cdFx0Ly8gfSBlbHNlIGlmIChhcmdzLmRhdGEueCA8IC0yMDApIHtcclxuXHRcdC8vICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIHJpZ2h0IGFjdGlvblwiKTtcclxuXHRcdC8vIH1cclxuXHR9XHJcblxyXG5cdG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9hbGwubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdH1cclxufVxyXG4iXX0=
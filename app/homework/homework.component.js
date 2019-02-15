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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5QztBQUl6Qyw0REFBd0U7QUFFeEUsc0RBQTREO0FBRTVELGlFQUFrRztBQUNsRyx1REFBcUQ7QUFRckQ7SUF3QkMsMkJBQW9CLE1BQWMsRUFBVSxlQUFnQztRQUF4RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBdkJwRSxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDcEMseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxVQUFVLENBQUM7UUFFOUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUNoQyxtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUVoQyxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQUU5QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBU2pCLG9CQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVpQyxDQUFDO0lBRWhGLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsS0FBeUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO2dCQUF4QyxJQUFJLFlBQVksU0FBQTtnQkFDcEIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1NBQ0Q7SUFDRixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUFBLGlCQWVD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QVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBeUIyQixlQUFNLEVBQTJCLGtDQUFlO09BeEJoRSxpQkFBaUIsQ0E4TTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlNRCxJQThNQztBQTlNWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgTGlzdFZpZXdTY3JvbGxFdmVudERhdGEsIFN3aXBlQWN0aW9uc0V2ZW50RGF0YSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldyc7XHJcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHsgVmlldywgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XHJcblxyXG5pbXBvcnQgeyBIb21ld29yaywgSG9tZXdvcmtEZWFkbGluZVN0YXR1cywgSG9tZXdvcmtTdGF0dXMgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICcuL2hvbWV3b3JrLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZXdvcmsuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2hvbWV3b3JrLmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21ld29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblx0cHVibGljIHRhYlZpZXdTZWxlY3RlZEluZGV4ID0gMDtcclxuXHRwdWJsaWMgc3dpcGVUZXh0ID0gJ0NvbXBsZXRlJztcclxuXHJcblx0aG9tZXdvcmtzOiBIb21ld29ya1tdID0gW107XHJcblx0aG9tZXdvcmtzX3RvZG86IEhvbWV3b3JrW10gPSBbXTtcclxuXHRob21ld29ya3NfZG9uZTogSG9tZXdvcmtbXSA9IFtdO1xyXG5cclxuXHRzY3JvbGxPZmZzZXRfYWxsOiBudW1iZXIgPSAwO1xyXG5cdHNjcm9sbE9mZnNldF90b2RvOiBudW1iZXIgPSAwO1xyXG5cdHNjcm9sbE9mZnNldF9kb25lOiBudW1iZXIgPSAwO1xyXG5cclxuXHRpc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHRAVmlld0NoaWxkKCdsaXN0Vmlld190b2RvJylcclxuXHRsaXN0Vmlld0NvbXBvbmVudF90b2RvOiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcclxuXHRAVmlld0NoaWxkKCdsaXN0Vmlld19kb25lJylcclxuXHRsaXN0Vmlld0NvbXBvbmVudF9kb25lOiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcclxuXHRAVmlld0NoaWxkKCdsaXN0Vmlld19hbGwnKVxyXG5cdGxpc3RWaWV3Q29tcG9uZW50X2FsbDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XHJcblxyXG5cdHdhcm5pbmdJY29uQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYTA4KTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmdldEhvbWV3b3JrcygpO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcblx0XHRcdGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuXHRcdFx0XHRzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0SG9tZXdvcmtzKCkge1xyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrcygpLnN1YnNjcmliZShcclxuXHRcdFx0XHR4ID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzID0geC5maWx0ZXIoYWxsID0+IGFsbC5zdGF0dXMgIT09IEhvbWV3b3JrU3RhdHVzLnJlbW92ZWQpO1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kbyA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbyk7XHJcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lID0gdGhpcy5ob21ld29ya3MuZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy5kb25lKTtcclxuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvciksXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRIb21ld29ya0RlYWRsaW5lU3RhdHVzKGhvbWV3b3JrOiBIb21ld29yayk6IEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMge1xyXG5cdFx0cmV0dXJuIHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrRGVhZGxpbmVTdGF0dXMoaG9tZXdvcmspO1xyXG5cdH1cclxuXHJcblx0b25TY3JvbGxFbmRlZF9hbGwoYXJnczogTGlzdFZpZXdTY3JvbGxFdmVudERhdGEpIHtcclxuXHRcdHRoaXMuc2Nyb2xsT2Zmc2V0X2FsbCA9IGFyZ3Muc2Nyb2xsT2Zmc2V0O1xyXG5cdH1cclxuXHJcblx0b25TY3JvbGxFbmRlZF90b2RvKGFyZ3M6IExpc3RWaWV3U2Nyb2xsRXZlbnREYXRhKSB7XHJcblx0XHR0aGlzLnNjcm9sbE9mZnNldF90b2RvID0gYXJncy5zY3JvbGxPZmZzZXQ7XHJcblx0fVxyXG5cclxuXHRvblNjcm9sbEVuZGVkX2RvbmUoYXJnczogTGlzdFZpZXdTY3JvbGxFdmVudERhdGEpIHtcclxuXHRcdHRoaXMuc2Nyb2xsT2Zmc2V0X2RvbmUgPSBhcmdzLnNjcm9sbE9mZnNldDtcclxuXHR9XHJcblxyXG5cdHNvcnRIb21ld29ya0xpc3QoKSB7XHJcblx0XHR0aGlzLmhvbWV3b3JrcyA9IHRoaXMuaG9tZXdvcmtzLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xyXG5cdFx0dGhpcy5ob21ld29ya3NfdG9kbyA9IHRoaXMuaG9tZXdvcmtzX3RvZG8uc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XHJcblx0XHR0aGlzLmhvbWV3b3Jrc19kb25lID0gdGhpcy5ob21ld29ya3NfZG9uZS5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcclxuXHJcblx0XHRpZiAoaXNJT1MpIHtcclxuXHRcdFx0Ly8gcmVxdWlyZWQgb24gaU9TIHRvIHJlZHJhdyB0aGUgTGlzdFZpZXdcclxuXHRcdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9hbGwubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XHJcblx0XHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcclxuXHRcdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2FsbC5saXN0Vmlldy5zY3JvbGxXaXRoQW1vdW50KHRoaXMuc2Nyb2xsT2Zmc2V0X2FsbCwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcuc2Nyb2xsV2l0aEFtb3VudCh0aGlzLnNjcm9sbE9mZnNldF90b2RvLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfZG9uZS5saXN0Vmlldy5zY3JvbGxXaXRoQW1vdW50KHRoaXMuc2Nyb2xsT2Zmc2V0X2RvbmUsIGZhbHNlKTtcclxuXHRcdH0sIDEwKTtcclxuXHR9XHJcblxyXG5cdHNvcnRIb21ld29ya0J5RHVlRGF0ZShhLCBiKSB7XHJcblx0XHRpZiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKSByZXR1cm4gLTE7XHJcblx0XHRpZiAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKSByZXR1cm4gMTtcclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblx0bWFya0NvbXBsZXRlKGFyZ3MpIHtcclxuXHRcdGxldCBpdGVtID0gYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQgYXMgSG9tZXdvcms7XHJcblx0XHRpdGVtLnN0YXR1cyA9IEhvbWV3b3JrU3RhdHVzLmRvbmU7XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLnVwZGF0ZVVzZXJIb21ld29yayhpdGVtKS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KCkgPT4ge30sXHJcblx0XHRcdFx0KCkgPT4ge30sXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kby5zcGxpY2UodGhpcy5ob21ld29ya3NfdG9kby5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHR9XHJcblxyXG5cdG1hcmtUb2RvKGFyZ3MpIHtcclxuXHRcdGxldCBpdGVtID0gYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQgYXMgSG9tZXdvcms7XHJcblx0XHRpdGVtLnN0YXR1cyA9IEhvbWV3b3JrU3RhdHVzLnRvZG87XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLnVwZGF0ZVVzZXJIb21ld29yayhpdGVtKS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KCkgPT4ge30sXHJcblx0XHRcdFx0KCkgPT4ge30sXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfZG9uZS5zcGxpY2UodGhpcy5ob21ld29ya3NfZG9uZS5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX3RvZG8ucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdHRoaXMuc29ydEhvbWV3b3JrTGlzdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHR9XHJcblxyXG5cdG9uVGFiVmlld0NsaWNrZWQoYXJncykge1xyXG5cdFx0dGhpcy50YWJWaWV3U2VsZWN0ZWRJbmRleCA9IGFyZ3M7XHJcblx0fVxyXG5cclxuXHRvbkl0ZW1UYXBfdG9kbyhhcmdzKSB7XHJcblx0XHR0aGlzLm9uSXRlbVRhcChhcmdzLCBIb21ld29ya1N0YXR1cy50b2RvKTtcclxuXHR9XHJcblxyXG5cdG9uSXRlbVRhcF9kb25lKGFyZ3MpIHtcclxuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIEhvbWV3b3JrU3RhdHVzLmRvbmUpO1xyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwX2FsbChhcmdzKSB7XHJcblx0XHR0aGlzLm9uSXRlbVRhcChhcmdzLCAnQUxMJyk7XHJcblx0fVxyXG5cclxuXHRvbkl0ZW1UYXAoYXJncywgdGFiVGV4dCkge1xyXG5cdFx0bGV0IGhvbWV3b3JrID0gbmV3IEhvbWV3b3JrKCk7XHJcblx0XHRpZiAodGFiVGV4dCA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xyXG5cdFx0XHRob21ld29yayA9IHRoaXMuaG9tZXdvcmtzX3RvZG9bYXJncy5pbmRleF07XHJcblx0XHR9IGVsc2UgaWYgKHRhYlRleHQgPT09IEhvbWV3b3JrU3RhdHVzLmRvbmUpIHtcclxuXHRcdFx0aG9tZXdvcmsgPSB0aGlzLmhvbWV3b3Jrc19kb25lW2FyZ3MuaW5kZXhdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aG9tZXdvcmsgPSB0aGlzLmhvbWV3b3Jrc1thcmdzLmluZGV4XTtcclxuXHRcdH1cclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2hvbWV3b3JrZGV0YWlscy8ke2hvbWV3b3JrLmlkfWBdKTtcclxuXHR9XHJcblxyXG5cdG9uSXRlbVN3aXBpbmcoYXJncykge31cclxuXHJcblx0b25JdGVtU3dpcGluZ19hbGwoYXJncykge1xyXG5cdFx0bGV0IGl0ZW0gPSB0aGlzLmhvbWV3b3Jrc1thcmdzLmluZGV4XTtcclxuXHRcdGlmIChpdGVtLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykge1xyXG5cdFx0XHR0aGlzLnN3aXBlVGV4dCA9ICdDb21wbGV0ZSc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnN3aXBlVGV4dCA9ICdUbyBEbyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvblN3aXBlQ2VsbEZpbmlzaGVkKGFyZ3MpIHt9XHJcblxyXG5cdG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBTd2lwZUFjdGlvbnNFdmVudERhdGEpIHtcclxuXHRcdGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xyXG5cdFx0Y29uc3Qgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XHJcblxyXG5cdFx0Y29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2F0dGFjaC12aWV3Jyk7XHJcblx0XHRzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xyXG5cdFx0c3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcclxuXHJcblx0XHRjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2NvbXBsZXRlLXZpZXcnKTtcclxuXHRcdHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcclxuXHR9XHJcblxyXG5cdG9uQ2VsbFN3aXBpbmcoYXJnczogU3dpcGVBY3Rpb25zRXZlbnREYXRhKSB7XHJcblx0XHQvLyBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuXHRcdC8vIGNvbnN0IGN1cnJlbnRJdGVtVmlldyA9IGFyZ3Mub2JqZWN0O1xyXG5cdFx0Ly8gaWYgKGFyZ3MuZGF0YS54ID4gMjAwKSB7XHJcblx0XHQvLyAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSBsZWZ0IGFjdGlvblwiKTtcclxuXHRcdC8vIH0gZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XHJcblx0XHQvLyAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSByaWdodCBhY3Rpb25cIik7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRvbkxlZnRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHR9XHJcbn1cclxuIl19
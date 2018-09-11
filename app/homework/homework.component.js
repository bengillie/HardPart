"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-listview/angular");
var homework_service_1 = require("../service/homework.service");
var homework_model_1 = require("../model/homework.model");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5QztBQUl6Qyw0REFBd0U7QUFHeEUsZ0VBQThEO0FBQzlELDBEQUFtRTtBQVNuRTtJQWlCQywyQkFBb0IsTUFBYyxFQUN6QixlQUFnQztRQURyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWpCakMsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQ3JDLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBRTlCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFFaEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQU1qQixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHRCxDQUFDO0lBRTlDLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNSLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFF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M0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQXlCLDhCQUFvQjtxRUFBQztJQUM3QztRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBeUIsOEJBQW9CO3FFQUFDO0lBQzlDO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUF3Qiw4QkFBb0I7b0VBQUM7SUFiM0QsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN4QyxDQUFDO3lDQW1CMkIsZUFBTTtZQUNSLGtDQUFlO09BbEI3QixpQkFBaUIsQ0FzTDdCO0lBQUQsd0JBQUM7Q0FBQSxBQXRMRCxJQXNMQztBQXRMWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIFN3aXBlQWN0aW9uc0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2UnO1xuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdob21ld29yaycsXG5cdHRlbXBsYXRlVXJsOiAnLi9ob21ld29yay5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2hvbWV3b3JrLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21ld29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb25zIDogU3Vic2NyaXB0aW9uW10gPSBbXTtcblx0cHVibGljIHRhYlZpZXdTZWxlY3RlZEluZGV4ID0gMDtcblx0cHVibGljIHN3aXBlVGV4dCA9ICdDb21wbGV0ZSc7XG5cblx0aG9tZXdvcmtzOiBIb21ld29ya1tdID0gW107XG5cdGhvbWV3b3Jrc190b2RvOiBIb21ld29ya1tdID0gW107XG5cdGhvbWV3b3Jrc19kb25lOiBIb21ld29ya1tdID0gW107XG5cblx0aXNMb2FkaW5nID0gdHJ1ZTtcblxuXHRAVmlld0NoaWxkKFwibGlzdFZpZXdfdG9kb1wiKSBsaXN0Vmlld0NvbXBvbmVudF90b2RvOiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblx0QFZpZXdDaGlsZChcImxpc3RWaWV3X2RvbmVcIikgbGlzdFZpZXdDb21wb25lbnRfZG9uZTogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cdEBWaWV3Q2hpbGQoXCJsaXN0Vmlld19hbGxcIikgbGlzdFZpZXdDb21wb25lbnRfYWxsOiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblx0XG5cdHdhcm5pbmdJY29uQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYTA4KTtcblx0XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMuZ2V0SG9tZXdvcmtzKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdH1cblxuXHRnZXRIb21ld29ya3MoKSB7XG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG5cdFx0XHR0aGlzLmhvbWV3b3JrU2VydmljZS5nZXRIb21ld29ya3MoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0eCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3MgPSB4LmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyAhPT0gSG9tZXdvcmtTdGF0dXMucmVtb3ZlZCkuc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kbyA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbykuc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfZG9uZSA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMuZG9uZSkuc29ydCh0aGlzLnNvcnRIb21ld29ya0J5RHVlRGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5zb3J0SG9tZXdvcmtMaXN0KCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvciksXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG5cdHNvcnRIb21ld29ya0xpc3QoKSB7XG5cdFx0dGhpcy5ob21ld29ya3MgPSB0aGlzLmhvbWV3b3Jrcy5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0XHR0aGlzLmhvbWV3b3Jrc190b2RvID0gdGhpcy5ob21ld29ya3NfdG9kby5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0XHR0aGlzLmhvbWV3b3Jrc19kb25lID0gdGhpcy5ob21ld29ya3NfZG9uZS5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0fVxuXG5cdHNvcnRIb21ld29ya0J5RHVlRGF0ZShhLCBiKSB7XG5cdFx0aWYgKGEuZHVlRGF0ZSA8IGIuZHVlRGF0ZSlcblx0XHQgIHJldHVybiAtMTtcblx0XHRpZiAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKVxuXHRcdCAgcmV0dXJuIDE7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRvblRhYlZpZXdDbGlja2VkKGFyZ3MpeyBcblx0XHR0aGlzLnRhYlZpZXdTZWxlY3RlZEluZGV4ID0gYXJncztcblx0fVxuXG5cdG9uSXRlbVRhcF90b2RvKGFyZ3MpIHtcblx0XHR0aGlzLm9uSXRlbVRhcChhcmdzLCBIb21ld29ya1N0YXR1cy50b2RvKTtcblx0fVxuXG5cdG9uSXRlbVRhcF9kb25lKGFyZ3MpIHtcblx0XHR0aGlzLm9uSXRlbVRhcChhcmdzLCBIb21ld29ya1N0YXR1cy5kb25lKTtcblx0fVxuXG5cdG9uSXRlbVRhcF9hbGwoYXJncykge1xuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIFwiQUxMXCIpO1xuXHR9XG5cblx0b25JdGVtVGFwKGFyZ3MsIHRhYlRleHQpIHtcblx0XHRsZXQgaG9tZXdvcmsgPSBuZXcgSG9tZXdvcmsoKTtcblx0XHRpZih0YWJUZXh0ID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XG5cdFx0XHRob21ld29yayA9IHRoaXMuaG9tZXdvcmtzX3RvZG9bYXJncy5pbmRleF07XG5cdFx0fVxuXHRcdGVsc2UgaWYodGFiVGV4dCA9PT0gSG9tZXdvcmtTdGF0dXMuZG9uZSkge1xuXHRcdFx0aG9tZXdvcmsgPSB0aGlzLmhvbWV3b3Jrc19kb25lW2FyZ3MuaW5kZXhdO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGhvbWV3b3JrID0gdGhpcy5ob21ld29ya3NbYXJncy5pbmRleF07XG5cdFx0fVxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2hvbWV3b3JrZGV0YWlscy8ke2hvbWV3b3JrLmlkfWBdKTtcblx0fVxuXHRcblx0b25JdGVtU3dpcGluZyhhcmdzKSB7XG5cblx0fVxuXG5cdG9uSXRlbVN3aXBpbmdfYWxsKGFyZ3MpIHtcblx0XHRsZXQgaXRlbSA9IHRoaXMuaG9tZXdvcmtzW2FyZ3MuaW5kZXhdO1xuXHRcdGlmKGl0ZW0uc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XG5cdFx0XHR0aGlzLnN3aXBlVGV4dCA9ICdDb21wbGV0ZSc7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zd2lwZVRleHQgPSAnVG8gRG8nO1xuXHRcdH1cblx0fVxuXHRcblx0b25Td2lwZUNlbGxGaW5pc2hlZChhcmdzKSB7XG5cblx0fVxuXG5cdG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBTd2lwZUFjdGlvbnNFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG5cdFx0Y29uc3Qgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XG5cdFx0XG4gICAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdhdHRhY2gtdmlldycpO1xuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuXHRcdHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG5cdFx0XG4gICAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignY29tcGxldGUtdmlldycpO1xuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG5cdH1cblxuXHRvbkNlbGxTd2lwaW5nKGFyZ3M6IFN3aXBlQWN0aW9uc0V2ZW50RGF0YSkge1xuICAgICAgICAvLyBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgICAgLy8gY29uc3QgY3VycmVudEl0ZW1WaWV3ID0gYXJncy5vYmplY3Q7XG5cbiAgICAgICAgLy8gaWYgKGFyZ3MuZGF0YS54ID4gMjAwKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIGxlZnQgYWN0aW9uXCIpO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLTIwMCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSByaWdodCBhY3Rpb25cIik7XG4gICAgICAgIC8vIH1cblx0fVxuXG5cdG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcblx0XHRjb25zb2xlLmxvZyhcIkxlZnQgc3dpcGUgY2xpY2tcIik7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF90b2RvLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0fVxuXG5cdG1hcmtDb21wbGV0ZShhcmdzKSB7XG5cdFx0bGV0IGl0ZW0gPSBhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCBhcyBIb21ld29yaztcblx0XHRpdGVtLnN0YXR1cyA9IEhvbWV3b3JrU3RhdHVzLmRvbmU7XG5cdFx0XG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG5cdFx0XHR0aGlzLmhvbWV3b3JrU2VydmljZS51cGRhdGVVc2VySG9tZXdvcmsoaXRlbSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCgpID0+IHsgfSxcblx0XHRcdFx0KCkgPT4geyB9LFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kby5zcGxpY2UodGhpcy5ob21ld29ya3NfdG9kby5pbmRleE9mKGl0ZW0pLCAxKTtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5zb3J0SG9tZXdvcmtMaXN0KCk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfdG9kby5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0fVxuXG5cdG1hcmtUb2RvKGFyZ3MpIHtcblx0XHRsZXQgaXRlbSA9IGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0IGFzIEhvbWV3b3JrO1xuXHRcdGl0ZW0uc3RhdHVzID0gSG9tZXdvcmtTdGF0dXMudG9kbztcblx0XHRcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLnVwZGF0ZVVzZXJIb21ld29yayhpdGVtKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCkgPT4geyB9LFxuXHRcdFx0XHQoKSA9PiB7IH0sXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lLnNwbGljZSh0aGlzLmhvbWV3b3Jrc19kb25lLmluZGV4T2YoaXRlbSksIDEpO1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX3RvZG8ucHVzaChpdGVtKTtcblx0XHRcdFx0XHR0aGlzLnNvcnRIb21ld29ya0xpc3QoKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF90b2RvLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHR9XG59Il19
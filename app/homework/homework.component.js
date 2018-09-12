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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5QztBQUl6Qyw0REFBd0U7QUFHeEUsMERBQW1FO0FBQ25FLGdFQUE4RDtBQVM5RDtJQWlCQywyQkFBb0IsTUFBYyxFQUN6QixlQUFnQztRQURyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWpCakMsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQ3JDLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBRTlCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFFaEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQU1qQixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHRCxDQUFDO0lBRTlDLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFxQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxhQUFhLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO2dCQUF0QyxJQUFJLFlBQVksU0FBQTtnQkFFakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztJQUNSLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFF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LENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBbEwyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBeUIsOEJBQW9CO3FFQUFDO0lBQzdDO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDO2tDQUF5Qiw4QkFBb0I7cUVBQUM7SUFDOUM7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQXdCLDhCQUFvQjtvRUFBQztJQWIzRCxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBbUIyQixlQUFNO1lBQ1Isa0NBQWU7T0FsQjdCLGlCQUFpQixDQThMN0I7SUFBRCx3QkFBQztDQUFBLEFBOUxELElBOExDO0FBOUxZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgU3dpcGVBY3Rpb25zRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5cbmltcG9ydCB7IEhvbWV3b3JrLCBIb21ld29ya1N0YXR1cyB9IGZyb20gJy4uL21vZGVsL2hvbWV3b3JrLm1vZGVsJztcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrJyxcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWV3b3JrLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vaG9tZXdvcmsuY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWV3b3JrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRwcml2YXRlIHN1YnNjcmlwdGlvbnMgOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXHRwdWJsaWMgdGFiVmlld1NlbGVjdGVkSW5kZXggPSAwO1xuXHRwdWJsaWMgc3dpcGVUZXh0ID0gJ0NvbXBsZXRlJztcblxuXHRob21ld29ya3M6IEhvbWV3b3JrW10gPSBbXTtcblx0aG9tZXdvcmtzX3RvZG86IEhvbWV3b3JrW10gPSBbXTtcblx0aG9tZXdvcmtzX2RvbmU6IEhvbWV3b3JrW10gPSBbXTtcblxuXHRpc0xvYWRpbmcgPSB0cnVlO1xuXG5cdEBWaWV3Q2hpbGQoXCJsaXN0Vmlld190b2RvXCIpIGxpc3RWaWV3Q29tcG9uZW50X3RvZG86IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXHRAVmlld0NoaWxkKFwibGlzdFZpZXdfZG9uZVwiKSBsaXN0Vmlld0NvbXBvbmVudF9kb25lOiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblx0QFZpZXdDaGlsZChcImxpc3RWaWV3X2FsbFwiKSBsaXN0Vmlld0NvbXBvbmVudF9hbGw6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXHRcblx0d2FybmluZ0ljb25Db2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhMDgpO1xuXHRcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGhvbWV3b3JrU2VydmljZTogSG9tZXdvcmtTZXJ2aWNlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0dGhpcy5nZXRIb21ld29ya3MoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0fVxuXG5cdGdldEhvbWV3b3JrcygpIHtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrcygpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHR4ID0+IHtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3JrcyA9IHguZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzICE9PSBIb21ld29ya1N0YXR1cy5yZW1vdmVkKS5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc190b2RvID0gdGhpcy5ob21ld29ya3MuZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKS5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lID0gdGhpcy5ob21ld29ya3MuZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy5kb25lKS5zb3J0KHRoaXMuc29ydEhvbWV3b3JrQnlEdWVEYXRlKTtcblx0XHRcdFx0XHR0aGlzLnNvcnRIb21ld29ya0xpc3QoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKSxcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0aXNOZWFyRHVlRGF0ZShob21ld29yazogSG9tZXdvcmspIDogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmlzTmVhckR1ZURhdGUoaG9tZXdvcmspO1xuXHR9XG5cblx0c29ydEhvbWV3b3JrTGlzdCgpIHtcblx0XHR0aGlzLmhvbWV3b3JrcyA9IHRoaXMuaG9tZXdvcmtzLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHRcdHRoaXMuaG9tZXdvcmtzX3RvZG8gPSB0aGlzLmhvbWV3b3Jrc190b2RvLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHRcdHRoaXMuaG9tZXdvcmtzX2RvbmUgPSB0aGlzLmhvbWV3b3Jrc19kb25lLnNvcnQodGhpcy5zb3J0SG9tZXdvcmtCeUR1ZURhdGUpO1xuXHR9XG5cblx0c29ydEhvbWV3b3JrQnlEdWVEYXRlKGEsIGIpIHtcblx0XHRpZiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKVxuXHRcdCAgcmV0dXJuIC0xO1xuXHRcdGlmIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpXG5cdFx0ICByZXR1cm4gMTtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdG1hcmtDb21wbGV0ZShhcmdzKSB7XG5cdFx0bGV0IGl0ZW0gPSBhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCBhcyBIb21ld29yaztcblx0XHRpdGVtLnN0YXR1cyA9IEhvbWV3b3JrU3RhdHVzLmRvbmU7XG5cdFx0XG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG5cdFx0XHR0aGlzLmhvbWV3b3JrU2VydmljZS51cGRhdGVVc2VySG9tZXdvcmsoaXRlbSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCgpID0+IHsgfSxcblx0XHRcdFx0KCkgPT4geyB9LFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kby5zcGxpY2UodGhpcy5ob21ld29ya3NfdG9kby5pbmRleE9mKGl0ZW0pLCAxKTtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5zb3J0SG9tZXdvcmtMaXN0KCk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF90b2RvLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X2RvbmUubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcblx0fVxuXG5cdG1hcmtUb2RvKGFyZ3MpIHtcblx0XHRsZXQgaXRlbSA9IGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0IGFzIEhvbWV3b3JrO1xuXHRcdGl0ZW0uc3RhdHVzID0gSG9tZXdvcmtTdGF0dXMudG9kbztcblx0XHRcblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcblx0XHRcdHRoaXMuaG9tZXdvcmtTZXJ2aWNlLnVwZGF0ZVVzZXJIb21ld29yayhpdGVtKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCkgPT4geyB9LFxuXHRcdFx0XHQoKSA9PiB7IH0sXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lLnNwbGljZSh0aGlzLmhvbWV3b3Jrc19kb25lLmluZGV4T2YoaXRlbSksIDEpO1xuXHRcdFx0XHRcdHRoaXMuaG9tZXdvcmtzX3RvZG8ucHVzaChpdGVtKTtcblx0XHRcdFx0XHR0aGlzLnNvcnRIb21ld29ya0xpc3QoKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfZG9uZS5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9hbGwubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHR9XG5cblx0b25UYWJWaWV3Q2xpY2tlZChhcmdzKSB7IFxuXHRcdHRoaXMudGFiVmlld1NlbGVjdGVkSW5kZXggPSBhcmdzO1xuXHR9XG5cblx0b25JdGVtVGFwX3RvZG8oYXJncykge1xuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIEhvbWV3b3JrU3RhdHVzLnRvZG8pO1xuXHR9XG5cblx0b25JdGVtVGFwX2RvbmUoYXJncykge1xuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIEhvbWV3b3JrU3RhdHVzLmRvbmUpO1xuXHR9XG5cblx0b25JdGVtVGFwX2FsbChhcmdzKSB7XG5cdFx0dGhpcy5vbkl0ZW1UYXAoYXJncywgXCJBTExcIik7XG5cdH1cblxuXHRvbkl0ZW1UYXAoYXJncywgdGFiVGV4dCkge1xuXHRcdGxldCBob21ld29yayA9IG5ldyBIb21ld29yaygpO1xuXHRcdGlmKHRhYlRleHQgPT09IEhvbWV3b3JrU3RhdHVzLnRvZG8pIHtcblx0XHRcdGhvbWV3b3JrID0gdGhpcy5ob21ld29ya3NfdG9kb1thcmdzLmluZGV4XTtcblx0XHR9XG5cdFx0ZWxzZSBpZih0YWJUZXh0ID09PSBIb21ld29ya1N0YXR1cy5kb25lKSB7XG5cdFx0XHRob21ld29yayA9IHRoaXMuaG9tZXdvcmtzX2RvbmVbYXJncy5pbmRleF07XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aG9tZXdvcmsgPSB0aGlzLmhvbWV3b3Jrc1thcmdzLmluZGV4XTtcblx0XHR9XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvaG9tZXdvcmtkZXRhaWxzLyR7aG9tZXdvcmsuaWR9YF0pO1xuXHR9XG5cdFxuXHRvbkl0ZW1Td2lwaW5nKGFyZ3MpIHtcblxuXHR9XG5cblx0b25JdGVtU3dpcGluZ19hbGwoYXJncykge1xuXHRcdGxldCBpdGVtID0gdGhpcy5ob21ld29ya3NbYXJncy5pbmRleF07XG5cdFx0aWYoaXRlbS5zdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLnRvZG8pIHtcblx0XHRcdHRoaXMuc3dpcGVUZXh0ID0gJ0NvbXBsZXRlJztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnN3aXBlVGV4dCA9ICdUbyBEbyc7XG5cdFx0fVxuXHR9XG5cdFxuXHRvblN3aXBlQ2VsbEZpbmlzaGVkKGFyZ3MpIHtcblxuXHR9XG5cblx0b25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IFN3aXBlQWN0aW9uc0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcblx0XHRjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcblx0XHRcbiAgICAgICAgY29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2F0dGFjaC12aWV3Jyk7XG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG5cdFx0c3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcblx0XHRcbiAgICAgICAgY29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdjb21wbGV0ZS12aWV3Jyk7XG4gICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcblx0fVxuXG5cdG9uQ2VsbFN3aXBpbmcoYXJnczogU3dpcGVBY3Rpb25zRXZlbnREYXRhKSB7XG4gICAgICAgIC8vIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICAvLyBjb25zdCBjdXJyZW50SXRlbVZpZXcgPSBhcmdzLm9iamVjdDtcblxuICAgICAgICAvLyBpZiAoYXJncy5kYXRhLnggPiAyMDApIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTm90aWZ5IHBlcmZvcm0gbGVmdCBhY3Rpb25cIik7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIHJpZ2h0IGFjdGlvblwiKTtcbiAgICAgICAgLy8gfVxuXHR9XG5cblx0b25MZWZ0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuXHRcdGNvbnNvbGUubG9nKFwiTGVmdCBzd2lwZSBjbGlja1wiKTtcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfZG9uZS5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9hbGwubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuXHR9XG59Il19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-listview/angular");
var homework_service_1 = require("../service/homework.service");
var homework_model_1 = require("../model/homework.model");
var HomeworkComponent = /** @class */ (function () {
    // iconCode = String.fromCharCode(0xeaa3);
    function HomeworkComponent(router, homeworkService) {
        this.router = router;
        this.homeworkService = homeworkService;
        this.tabViewSelectedIndex = 0;
        this.homeworks = [];
        this.homeworks_todo = [];
        this.homeworks_done = [];
        this.isLoading = true;
    }
    HomeworkComponent.prototype.ngOnInit = function () {
        this.getHomeworks();
    };
    HomeworkComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeworkComponent.prototype.getHomeworks = function () {
        var _this = this;
        this.subscription = this.homeworkService.getHomeworks().subscribe(function (x) {
            _this.homeworks = x.filter(function (all) { return all.status !== homework_model_1.HomeworkStatus.removed; });
            _this.homeworks_todo = _this.homeworks.filter(function (all) { return all.status === homework_model_1.HomeworkStatus.todo; });
            _this.homeworks_done = _this.homeworks.filter(function (all) { return all.status === homework_model_1.HomeworkStatus.done; });
        }, function (error) { return console.log("Error: ", error); }, function () {
            _this.isLoading = false;
        });
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
    HomeworkComponent.prototype.onItemTap = function (args, homeworkStatus) {
        var homework = new homework_model_1.Homework();
        if (homeworkStatus === homework_model_1.HomeworkStatus.todo) {
            homework = this.homeworks_todo[args.index];
        }
        else if (homeworkStatus === homework_model_1.HomeworkStatus.done) {
            homework = this.homeworks_done[args.index];
        }
        else {
            homework = this.homeworks[args.index];
        }
        this.router.navigate(["/homeworkdetails/" + homework.id]);
    };
    HomeworkComponent.prototype.onItemSwiping = function (args) {
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
    HomeworkComponent.prototype.onRightSwipeClick = function (args) {
        console.log("Right swipe click");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5QztBQUl6Qyw0REFBd0U7QUFHeEUsZ0VBQThEO0FBQzlELDBEQUFtRTtBQVNuRTtJQWNDLDBDQUEwQztJQUUxQywyQkFBb0IsTUFBYyxFQUN6QixlQUFnQztRQURyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWZsQyx5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFaEMsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUNoQyxtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUVoQyxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBUzRCLENBQUM7SUFFOUMsb0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQ2hFLFVBQUEsQ0FBQztZQUNBLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxPQUFPLEVBQXJDLENBQXFDLENBQUMsQ0FBQztZQUN4RSxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sS0FBSywrQkFBYyxDQUFDLElBQUks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QSxBQW5IRCxJQW1IQztBQW5IWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgU3dpcGVBY3Rpb25zRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xyXG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xyXG5cclxuaW1wb3J0IHsgSG9tZXdvcmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9ob21ld29yay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZXdvcmsuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2hvbWV3b3JrLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21ld29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcclxuXHRwdWJsaWMgdGFiVmlld1NlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuXHRob21ld29ya3M6IEhvbWV3b3JrW10gPSBbXTtcclxuXHRob21ld29ya3NfdG9kbzogSG9tZXdvcmtbXSA9IFtdO1xyXG5cdGhvbWV3b3Jrc19kb25lOiBIb21ld29ya1tdID0gW107XHJcblxyXG5cdGlzTG9hZGluZyA9IHRydWU7XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJsaXN0Vmlld190b2RvXCIpIGxpc3RWaWV3Q29tcG9uZW50X3RvZG86IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG5cdEBWaWV3Q2hpbGQoXCJsaXN0Vmlld19kb25lXCIpIGxpc3RWaWV3Q29tcG9uZW50X2RvbmU6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG5cdEBWaWV3Q2hpbGQoXCJsaXN0Vmlld19hbGxcIikgbGlzdFZpZXdDb21wb25lbnRfYWxsOiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcclxuXHRcclxuXHQvLyBpY29uQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYWEzKTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBob21ld29ya1NlcnZpY2U6IEhvbWV3b3JrU2VydmljZSkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkgeyBcclxuXHRcdHRoaXMuZ2V0SG9tZXdvcmtzKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRnZXRIb21ld29ya3MoKSB7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuaG9tZXdvcmtTZXJ2aWNlLmdldEhvbWV3b3JrcygpLnN1YnNjcmliZShcclxuXHRcdFx0eCA9PiB7XHJcblx0XHRcdFx0dGhpcy5ob21ld29ya3MgPSB4LmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyAhPT0gSG9tZXdvcmtTdGF0dXMucmVtb3ZlZCk7XHJcblx0XHRcdFx0dGhpcy5ob21ld29ya3NfdG9kbyA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMudG9kbyk7XHJcblx0XHRcdFx0dGhpcy5ob21ld29ya3NfZG9uZSA9IHRoaXMuaG9tZXdvcmtzLmZpbHRlcihhbGwgPT4gYWxsLnN0YXR1cyA9PT0gSG9tZXdvcmtTdGF0dXMuZG9uZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvciksXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b25UYWJWaWV3Q2xpY2tlZChhcmdzKXsgXHJcblx0XHR0aGlzLnRhYlZpZXdTZWxlY3RlZEluZGV4ID0gYXJncztcclxuXHR9XHJcblxyXG5cdG9uSXRlbVRhcF90b2RvKGFyZ3MpIHtcclxuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIEhvbWV3b3JrU3RhdHVzLnRvZG8pO1xyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwX2RvbmUoYXJncykge1xyXG5cdFx0dGhpcy5vbkl0ZW1UYXAoYXJncywgSG9tZXdvcmtTdGF0dXMuZG9uZSk7XHJcblx0fVxyXG5cclxuXHRvbkl0ZW1UYXBfYWxsKGFyZ3MpIHtcclxuXHRcdHRoaXMub25JdGVtVGFwKGFyZ3MsIFwiQUxMXCIpO1xyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwKGFyZ3MsIGhvbWV3b3JrU3RhdHVzKSB7XHJcblx0XHRsZXQgaG9tZXdvcmsgPSBuZXcgSG9tZXdvcmsoKTtcclxuXHRcdGlmKGhvbWV3b3JrU3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKSB7XHJcblx0XHRcdGhvbWV3b3JrID0gdGhpcy5ob21ld29ya3NfdG9kb1thcmdzLmluZGV4XTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoaG9tZXdvcmtTdGF0dXMgPT09IEhvbWV3b3JrU3RhdHVzLmRvbmUpIHtcclxuXHRcdFx0aG9tZXdvcmsgPSB0aGlzLmhvbWV3b3Jrc19kb25lW2FyZ3MuaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGhvbWV3b3JrID0gdGhpcy5ob21ld29ya3NbYXJncy5pbmRleF07XHJcblx0XHR9XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9ob21ld29ya2RldGFpbHMvJHtob21ld29yay5pZH1gXSk7XHJcblx0fVxyXG5cdFxyXG5cdG9uSXRlbVN3aXBpbmcoYXJncykge1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdG9uU3dpcGVDZWxsRmluaXNoZWQoYXJncykge1xyXG5cclxuXHR9XHJcblxyXG5cdG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBTd2lwZUFjdGlvbnNFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuXHRcdGNvbnN0IHN3aXBlVmlldyA9IGFyZ3NbJ29iamVjdCddO1xyXG5cdFx0XHJcbiAgICAgICAgY29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2F0dGFjaC12aWV3Jyk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcclxuXHRcdHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XHJcblx0XHRcclxuICAgICAgICBjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2NvbXBsZXRlLXZpZXcnKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XHJcblx0fVxyXG5cclxuXHRvbkNlbGxTd2lwaW5nKGFyZ3M6IFN3aXBlQWN0aW9uc0V2ZW50RGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xyXG4gICAgICAgIC8vIGNvbnN0IGN1cnJlbnRJdGVtVmlldyA9IGFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICAvLyBpZiAoYXJncy5kYXRhLnggPiAyMDApIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSBsZWZ0IGFjdGlvblwiKTtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLTIwMCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIHJpZ2h0IGFjdGlvblwiKTtcclxuICAgICAgICAvLyB9XHJcblx0fVxyXG5cclxuXHRvbkxlZnRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkxlZnQgc3dpcGUgY2xpY2tcIik7XHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHR9XHJcblxyXG5cdG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3MpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiUmlnaHQgc3dpcGUgY2xpY2tcIik7XHJcblx0XHR0aGlzLmxpc3RWaWV3Q29tcG9uZW50X3RvZG8ubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG5cdFx0dGhpcy5saXN0Vmlld0NvbXBvbmVudF9kb25lLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHRcdHRoaXMubGlzdFZpZXdDb21wb25lbnRfYWxsLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuXHR9XHJcbn0iXX0=
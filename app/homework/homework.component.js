"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var homework_service_1 = require("../service/homework.service");
var homework_model_1 = require("../model/homework.model");
var HomeworkComponent = /** @class */ (function () {
    // iconCode = String.fromCharCode(0xeaa3);
    function HomeworkComponent(router, homeworkService) {
        this.router = router;
        this.homeworkService = homeworkService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXdvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5QztBQUl6QyxnRUFBOEQ7QUFDOUQsMERBQW1FO0FBU25FO0lBU0MsMENBQTBDO0lBRTFDLDJCQUFvQixNQUFjLEVBQ3pCLGVBQWdDO1FBRHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVHpDLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFFaEMsY0FBUyxHQUFHLElBQUksQ0FBQztJQUs0QixDQUFDO0lBRTlDLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBWUM7UUFYQSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUNoRSxVQUFBLENBQUM7WUFDQSxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsTUFBTSxLQUFLLCtCQUFjLENBQUMsT0FBTyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7WUFDeEUsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEtBQUssK0JBQWMsQ0FBQyxJQUFJLEVBQWxDLENBQWtDLENBQUMsQ0FBQztZQUN2RixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sS0FBSywrQkFBYyxDQUFDLElBQUksRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUN0QztZQUNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBb0IsSUFBSSxDQUFDLEVBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQXRDVyxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBYTJCLGVBQU07WUFDUixrQ0FBZTtPQVo3QixpQkFBaUIsQ0F1QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSG9tZXdvcmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9ob21ld29yay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWwvaG9tZXdvcmsubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2hvbWV3b3JrJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZXdvcmsuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2hvbWV3b3JrLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21ld29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbiA6IFN1YnNjcmlwdGlvbjtcclxuXHJcblx0aG9tZXdvcmtzOiBIb21ld29ya1tdID0gW107XHJcblx0aG9tZXdvcmtzX3RvZG86IEhvbWV3b3JrW10gPSBbXTtcclxuXHRob21ld29ya3NfZG9uZTogSG9tZXdvcmtbXSA9IFtdO1xyXG5cclxuXHRpc0xvYWRpbmcgPSB0cnVlO1xyXG5cdFxyXG5cdC8vIGljb25Db2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGVhYTMpO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIGhvbWV3b3JrU2VydmljZTogSG9tZXdvcmtTZXJ2aWNlKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IFxyXG5cdFx0dGhpcy5nZXRIb21ld29ya3MoKTtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblxyXG5cdGdldEhvbWV3b3JrcygpIHtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5ob21ld29ya1NlcnZpY2UuZ2V0SG9tZXdvcmtzKCkuc3Vic2NyaWJlKFxyXG5cdFx0XHR4ID0+IHtcclxuXHRcdFx0XHR0aGlzLmhvbWV3b3JrcyA9IHguZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzICE9PSBIb21ld29ya1N0YXR1cy5yZW1vdmVkKTtcclxuXHRcdFx0XHR0aGlzLmhvbWV3b3Jrc190b2RvID0gdGhpcy5ob21ld29ya3MuZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy50b2RvKTtcclxuXHRcdFx0XHR0aGlzLmhvbWV3b3Jrc19kb25lID0gdGhpcy5ob21ld29ya3MuZmlsdGVyKGFsbCA9PiBhbGwuc3RhdHVzID09PSBIb21ld29ya1N0YXR1cy5kb25lKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKSxcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRvbkl0ZW1UYXAoYXJncykge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvaG9tZXdvcmtkZXRhaWxzLyR7YXJncy5pZH1gXSk7XHJcblx0fVxyXG59Il19
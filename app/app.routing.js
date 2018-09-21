"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var achievement_component_1 = require("~/achievement/achievement.component");
var attendance_component_1 = require("~/attendance/attendance.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var forgot_password_component_1 = require("~/forgot-password/forgot-password.component");
var login_component_1 = require("./login/login.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var student_selection_component_1 = require("./student-selection/student-selection.component");
var timetable_component_1 = require("./timetable/timetable.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: '', redirectTo: '/forgotpassword', pathMatch: 'full' },
    { path: "achievement", component: achievement_component_1.AchievementComponent },
    { path: "attendance", component: attendance_component_1.AttendanceComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "forgotpassword", component: forgot_password_component_1.ForgotPasswordComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "homework", component: homework_component_1.HomeworkComponent },
    { path: "homeworkdetails/:id", component: homework_detail_component_1.HomeworkDetailComponent },
    { path: "studentselection", component: student_selection_component_1.StudentSelectionComponent },
    { path: "timetable", component: timetable_component_1.TimetableComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            exports: [router_1.NativeScriptRouterModule],
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QyxzREFBdUU7QUFFdkUsNkVBQTJFO0FBQzNFLDBFQUF3RTtBQUN4RSx1RUFBcUU7QUFDckUseUZBQXNGO0FBQ3RGLDJEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLCtGQUE0RjtBQUM1Rix1RUFBcUU7QUFFckUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxpRUFBaUU7SUFFakUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBQztJQUN2RCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFDO0lBQ3JELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUM7SUFDbkQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFO0lBQzlELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsdURBQXlCLEVBQUU7SUFDbEUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztDQUN0RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEQsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEFjaGlldmVtZW50Q29tcG9uZW50IH0gZnJvbSBcIn4vYWNoaWV2ZW1lbnQvYWNoaWV2ZW1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VDb21wb25lbnQgfSBmcm9tIFwifi9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCJ+L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIn4vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmtDb21wb25lbnQgfSBmcm9tIFwiLi9ob21ld29yay9ob21ld29yay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3R1ZGVudFNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1zZWxlY3Rpb24vc3R1ZGVudC1zZWxlY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90aW1ldGFibGUvdGltZXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvbG9naW4nLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgLy97IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2ZvcmdvdHBhc3N3b3JkJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwiYWNoaWV2ZW1lbnRcIiwgY29tcG9uZW50OiBBY2hpZXZlbWVudENvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwiYXR0ZW5kYW5jZVwiLCBjb21wb25lbnQ6IEF0dGVuZGFuY2VDb21wb25lbnR9LFxyXG4gICAgeyBwYXRoOiBcImRhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwiZm9yZ290cGFzc3dvcmRcIiwgY29tcG9uZW50OiBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJob21ld29ya1wiLCBjb21wb25lbnQ6IEhvbWV3b3JrQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiaG9tZXdvcmtkZXRhaWxzLzppZFwiLCBjb21wb25lbnQ6IEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic3R1ZGVudHNlbGVjdGlvblwiLCBjb21wb25lbnQ6IFN0dWRlbnRTZWxlY3Rpb25Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJ0aW1ldGFibGVcIiwgY29tcG9uZW50OiBUaW1ldGFibGVDb21wb25lbnR9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19
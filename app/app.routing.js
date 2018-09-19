"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var achievement_component_1 = require("~/achievement/achievement.component");
var attendance_component_1 = require("~/attendance/attendance.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var login_component_1 = require("./login/login.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var student_selection_component_1 = require("./student-selection/student-selection.component");
var timetable_component_1 = require("./timetable/timetable.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: '', redirectTo: '/achievement', pathMatch: 'full' },
    { path: "achievement", component: achievement_component_1.AchievementComponent },
    { path: "attendance", component: attendance_component_1.AttendanceComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QyxzREFBdUU7QUFFdkUsNkVBQTJFO0FBQzNFLDBFQUF3RTtBQUN4RSx1RUFBcUU7QUFDckUsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSx5RkFBc0Y7QUFDdEYsK0ZBQTRGO0FBQzVGLHVFQUFxRTtBQUVyRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELDhEQUE4RDtJQUU5RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFDO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUM7SUFDckQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztJQUNuRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLHVEQUF5QixFQUFFO0lBQ2xFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUM7Q0FDdEQsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RELENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBBY2hpZXZlbWVudENvbXBvbmVudCB9IGZyb20gXCJ+L2FjaGlldmVtZW50L2FjaGlldmVtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdHRlbmRhbmNlQ29tcG9uZW50IH0gZnJvbSBcIn4vYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwifi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gXCIuL2hvbWV3b3JrL2hvbWV3b3JrLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmstZGV0YWlsL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHVkZW50U2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LXNlbGVjdGlvbi9zdHVkZW50LXNlbGVjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9sb2dpbicsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAvL3sgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvYWNoaWV2ZW1lbnQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG5cclxuICAgIHsgcGF0aDogXCJhY2hpZXZlbWVudFwiLCBjb21wb25lbnQ6IEFjaGlldmVtZW50Q29tcG9uZW50fSxcclxuICAgIHsgcGF0aDogXCJhdHRlbmRhbmNlXCIsIGNvbXBvbmVudDogQXR0ZW5kYW5jZUNvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwiZGFzaGJvYXJkXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50fSxcclxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiaG9tZXdvcmtcIiwgY29tcG9uZW50OiBIb21ld29ya0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWV3b3JrZGV0YWlscy86aWRcIiwgY29tcG9uZW50OiBIb21ld29ya0RldGFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInN0dWRlbnRzZWxlY3Rpb25cIiwgY29tcG9uZW50OiBTdHVkZW50U2VsZWN0aW9uQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwidGltZXRhYmxlXCIsIGNvbXBvbmVudDogVGltZXRhYmxlQ29tcG9uZW50fVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==
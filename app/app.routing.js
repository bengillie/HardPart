"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var login_component_1 = require("./login/login.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var timetable_component_1 = require("./timetable/timetable.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "login", component: login_component_1.LoginComponent },
    // { path: '', redirectTo: '/homeworkdetails/1', pathMatch: 'full' },
    { path: "homework", component: homework_component_1.HomeworkComponent },
    { path: "homeworkdetails/:id", component: homework_detail_component_1.HomeworkDetailComponent },
    { path: "timetable/:id", component: timetable_component_1.TimetableComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QyxzREFBdUU7QUFFdkUsdUVBQXFFO0FBQ3JFLDJEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLHVFQUFxRTtBQUVyRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBRXJELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUM7SUFDbkQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLHFFQUFxRTtJQUNyRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO0NBQzFELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RCxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmtDb21wb25lbnQgfSBmcm9tIFwiLi9ob21ld29yay9ob21ld29yay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90aW1ldGFibGUvdGltZXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvbG9naW4nLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG5cclxuICAgIHsgcGF0aDogXCJkYXNoYm9hcmRcIiwgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnR9LFxyXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICAgIC8vIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvaG9tZXdvcmtkZXRhaWxzLzEnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWV3b3JrXCIsIGNvbXBvbmVudDogSG9tZXdvcmtDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJob21ld29ya2RldGFpbHMvOmlkXCIsIGNvbXBvbmVudDogSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJ0aW1ldGFibGUvOmlkXCIsIGNvbXBvbmVudDogVGltZXRhYmxlQ29tcG9uZW50fVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==
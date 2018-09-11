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
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/homework', pathMatch: 'full' },
    // { path: '', redirectTo: 'homeworkdetails/1', pathMatch: 'full' },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "homework", component: homework_component_1.HomeworkComponent },
    { path: "homeworkdetails/:id", component: homework_detail_component_1.HomeworkDetailComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QyxzREFBdUU7QUFFdkUsdUVBQXFFO0FBQ3JFLDJEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLHVFQUFxRTtBQUVyRSxJQUFNLE1BQU0sR0FBVztJQUNuQix5REFBeUQ7SUFDekQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN4RCxvRUFBb0U7SUFFcEUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztJQUNuRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztDQUN0RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEQsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCJ+L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWV3b3JrQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9ob21ld29yay1kZXRhaWwvaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWV0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICAvLyB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvaG9tZXdvcmsnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWV3b3JrZGV0YWlscy8xJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwiZGFzaGJvYXJkXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50fSxcclxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiaG9tZXdvcmtcIiwgY29tcG9uZW50OiBIb21ld29ya0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWV3b3JrZGV0YWlscy86aWRcIiwgY29tcG9uZW50OiBIb21ld29ya0RldGFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInRpbWV0YWJsZVwiLCBjb21wb25lbnQ6IFRpbWV0YWJsZUNvbXBvbmVudH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=
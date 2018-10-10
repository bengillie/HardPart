"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var account_security_component_1 = require("./account-security/account-security.component");
var achievement_component_1 = require("~/achievement/achievement.component");
var advert_component_1 = require("~/advert/advert.component");
var attendance_component_1 = require("~/attendance/attendance.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var forgot_password_component_1 = require("~/forgot-password/forgot-password.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var login_component_1 = require("./login/login.component");
var message_page_component_1 = require("./message-page/message-page.component");
var navigationbar_component_1 = require("~/navigationbar/navigationbar.component");
var notification_component_1 = require("~/notification/notification.component");
var notification_login_component_1 = require("~/notification-login/notification-login.component");
var student_selection_component_1 = require("./student-selection/student-selection.component");
var timetable_component_1 = require("./timetable/timetable.component");
var update_security_details_component_1 = require("./update-security-details/update-security-details.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: '', redirectTo: '/attendance', pathMatch: 'full' },
    { path: "accountsecurity", component: account_security_component_1.AccountSecurityComponent },
    { path: "achievement", component: achievement_component_1.AchievementComponent },
    { path: "advert", component: advert_component_1.AdvertComponent },
    { path: "attendance", component: attendance_component_1.AttendanceComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "forgotpassword", component: forgot_password_component_1.ForgotPasswordComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "homework", component: homework_component_1.HomeworkComponent },
    { path: "homeworkdetails/:id", component: homework_detail_component_1.HomeworkDetailComponent },
    { path: "messagepage", component: message_page_component_1.MessagePageComponent },
    { path: "navigationbar", component: navigationbar_component_1.NavigationBarComponent },
    { path: "notification", component: notification_component_1.NotificationComponent },
    { path: "notificationlogin", component: notification_login_component_1.NotificationLoginComponent },
    { path: "studentselection", component: student_selection_component_1.StudentSelectionComponent },
    { path: "timetable", component: timetable_component_1.TimetableComponent },
    { path: "updatesecuritydetails", component: update_security_details_component_1.UpdateSecurityDetailsComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QyxzREFBdUU7QUFFdkUsNEZBQXlGO0FBQ3pGLDZFQUEyRTtBQUMzRSw4REFBNEQ7QUFDNUQsMEVBQXdFO0FBQ3hFLHVFQUFxRTtBQUNyRSx5RkFBc0Y7QUFDdEYsb0VBQWtFO0FBQ2xFLHlGQUFzRjtBQUN0RiwyREFBeUQ7QUFDekQsZ0ZBQTZFO0FBQzdFLG1GQUFpRjtBQUNqRixnRkFBOEU7QUFDOUUsa0dBQStGO0FBQy9GLCtGQUE0RjtBQUM1Rix1RUFBcUU7QUFDckUsaUhBQTZHO0FBRTdHLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDckQsNkRBQTZEO0lBRTdELEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBQztJQUMvRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFDO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFDO0lBQ3JELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUM7SUFDbkQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFO0lBQzlELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUU7SUFDNUQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBQztJQUN6RCxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUseURBQTBCLEVBQUU7SUFDcEUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLHVEQUF5QixFQUFFO0lBQ2xFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUM7SUFDbkQsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGtFQUE4QixFQUFDO0NBQzlFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RCxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQWNjb3VudFNlY3VyaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vYWNjb3VudC1zZWN1cml0eS9hY2NvdW50LXNlY3VyaXR5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBY2hpZXZlbWVudENvbXBvbmVudCB9IGZyb20gXCJ+L2FjaGlldmVtZW50L2FjaGlldmVtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZHZlcnRDb21wb25lbnQgfSBmcm9tICd+L2FkdmVydC9hZHZlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZUNvbXBvbmVudCB9IGZyb20gXCJ+L2F0dGVuZGFuY2UvYXR0ZW5kYW5jZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwifi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gXCIuL2hvbWV3b3JrL2hvbWV3b3JrLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmstZGV0YWlsL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlUGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2UtcGFnZS9tZXNzYWdlLXBhZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25CYXJDb21wb25lbnQgfSBmcm9tICd+L25hdmlnYXRpb25iYXIvbmF2aWdhdGlvbmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tIFwifi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Mb2dpbkNvbXBvbmVudCB9IGZyb20gJ34vbm90aWZpY2F0aW9uLWxvZ2luL25vdGlmaWNhdGlvbi1sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHVkZW50U2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LXNlbGVjdGlvbi9zdHVkZW50LXNlbGVjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXBkYXRlU2VjdXJpdHlEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtc2VjdXJpdHktZGV0YWlscy91cGRhdGUtc2VjdXJpdHktZGV0YWlscy5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgIC8veyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9hdHRlbmRhbmNlJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwiYWNjb3VudHNlY3VyaXR5XCIsIGNvbXBvbmVudDogQWNjb3VudFNlY3VyaXR5Q29tcG9uZW50fSxcclxuICAgIHsgcGF0aDogXCJhY2hpZXZlbWVudFwiLCBjb21wb25lbnQ6IEFjaGlldmVtZW50Q29tcG9uZW50fSxcclxuICAgIHsgcGF0aDogXCJhZHZlcnRcIiwgY29tcG9uZW50OiBBZHZlcnRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJhdHRlbmRhbmNlXCIsIGNvbXBvbmVudDogQXR0ZW5kYW5jZUNvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwiZGFzaGJvYXJkXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50fSxcclxuICAgIHsgcGF0aDogXCJmb3Jnb3RwYXNzd29yZFwiLCBjb21wb25lbnQ6IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWV3b3JrXCIsIGNvbXBvbmVudDogSG9tZXdvcmtDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJob21ld29ya2RldGFpbHMvOmlkXCIsIGNvbXBvbmVudDogSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtZXNzYWdlcGFnZVwiLCBjb21wb25lbnQ6IE1lc3NhZ2VQYWdlQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmF2aWdhdGlvbmJhclwiLCBjb21wb25lbnQ6IE5hdmlnYXRpb25CYXJDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJub3RpZmljYXRpb25cIiwgY29tcG9uZW50OiBOb3RpZmljYXRpb25Db21wb25lbnR9LFxyXG4gICAgeyBwYXRoOiBcIm5vdGlmaWNhdGlvbmxvZ2luXCIsIGNvbXBvbmVudDogTm90aWZpY2F0aW9uTG9naW5Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzdHVkZW50c2VsZWN0aW9uXCIsIGNvbXBvbmVudDogU3R1ZGVudFNlbGVjdGlvbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInRpbWV0YWJsZVwiLCBjb21wb25lbnQ6IFRpbWV0YWJsZUNvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwidXBkYXRlc2VjdXJpdHlkZXRhaWxzXCIsIGNvbXBvbmVudDogVXBkYXRlU2VjdXJpdHlEZXRhaWxzQ29tcG9uZW50fVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==
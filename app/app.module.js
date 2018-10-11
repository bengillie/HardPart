"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var forms_2 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-gauge/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-sidedrawer/angular");
var app_component_1 = require("./app.component");
var account_security_component_1 = require("./account-security/account-security.component");
var achievement_component_1 = require("~/achievement/achievement.component");
var actionbar_component_1 = require("~/actionbar/actionbar.component");
var advert_component_1 = require("~/advert/advert.component");
var attendance_component_1 = require("./attendance/attendance.component");
var behaviour_component_1 = require("~/behaviour/behaviour.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var forgot_password_component_1 = require("~/forgot-password/forgot-password.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var login_component_1 = require("./login/login.component");
var message_page_component_1 = require("./message-page/message-page.component");
var navigationbar_component_1 = require("~/navigationbar/navigationbar.component");
var notification_component_1 = require("~/notification/notification.component");
var notification_login_component_1 = require("~/notification-login/notification-login.component");
var progressbar_circular_component_1 = require("~/progressbar-circular/progressbar-circular.component");
var student_selection_component_1 = require("~/student-selection/student-selection.component");
var timetable_component_1 = require("./timetable/timetable.component");
var update_security_details_component_1 = require("./update-security-details/update-security-details.component");
var achievement_service_1 = require("~/service/achievement.service");
var advert_service_1 = require("~/service/advert.service");
var appvalues_service_1 = require("~/service/appvalues.service");
var attendance_service_1 = require("~/service/attendance.service");
var behaviour_service_1 = require("~/service/behaviour.service");
var data_service_1 = require("./database/data.service");
var error_service_1 = require("./service/error.service");
var helper_service_1 = require("./service/helper.service");
var httpservice_service_1 = require("./service/httpservice.service");
var homework_service_1 = require("~/service/homework.service");
var logging_service_1 = require("./service/logging.service");
var login_service_1 = require("./service/login.service");
var notification_service_1 = require("~/service/notification.service");
var timetable_service_1 = require("./service/timetable.service");
var user_service_1 = require("./service/user.service");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                forms_1.FormsModule,
                forms_2.NativeScriptFormsModule,
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(data_service_1.DataService, { dataEncapsulation: false }),
                angular_1.NativeScriptUIGaugeModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUISideDrawerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                account_security_component_1.AccountSecurityComponent,
                achievement_component_1.AchievementComponent,
                actionbar_component_1.ActionbarComponent,
                advert_component_1.AdvertComponent,
                attendance_component_1.AttendanceComponent,
                behaviour_component_1.BehaviourComponent,
                dashboard_component_1.DashboardComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                homework_component_1.HomeworkComponent,
                homework_detail_component_1.HomeworkDetailComponent,
                login_component_1.LoginComponent,
                message_page_component_1.MessagePageComponent,
                navigationbar_component_1.NavigationBarComponent,
                notification_component_1.NotificationComponent,
                notification_login_component_1.NotificationLoginComponent,
                progressbar_circular_component_1.ProgressbarCircularComponent,
                student_selection_component_1.StudentSelectionComponent,
                timetable_component_1.TimetableComponent,
                update_security_details_component_1.UpdateSecurityDetailsComponent
            ],
            providers: [
                achievement_service_1.AchievementService,
                advert_service_1.AdvertService,
                appvalues_service_1.AppValuesService,
                attendance_service_1.AttendanceService,
                behaviour_service_1.BehaviourService,
                error_service_1.ErrorService,
                helper_service_1.HelperService,
                httpservice_service_1.HttpService,
                homework_service_1.HomeworkService,
                logging_service_1.LoggingService,
                login_service_1.LoginService,
                notification_service_1.NotificationService,
                timetable_service_1.TimetableService,
                user_service_1.UserService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx5REFBeUU7QUFDekUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUVwRixpREFBK0M7QUFDL0MsNEZBQXlGO0FBQ3pGLDZFQUEyRTtBQUMzRSx1RUFBcUU7QUFDckUsOERBQTREO0FBQzVELDBFQUF3RTtBQUN4RSx1RUFBcUU7QUFDckUsdUVBQXFFO0FBQ3JFLHlGQUFzRjtBQUN0RixvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLDJEQUF5RDtBQUN6RCxnRkFBNkU7QUFDN0UsbUZBQWlGO0FBQ2pGLGdGQUE4RTtBQUM5RSxrR0FBK0Y7QUFDL0Ysd0dBQXFHO0FBQ3JHLCtGQUE0RjtBQUM1Rix1RUFBcUU7QUFDckUsaUhBQTZHO0FBRTdHLHFFQUFtRTtBQUNuRSwyREFBeUQ7QUFDekQsaUVBQStEO0FBQy9ELG1FQUFpRTtBQUNqRSxpRUFBK0Q7QUFDL0Qsd0RBQXVEO0FBQ3ZELHlEQUF1RDtBQUN2RCwyREFBeUQ7QUFDekQscUVBQTREO0FBQzVELCtEQUE2RDtBQUM3RCw2REFBMkQ7QUFDM0QseURBQXVEO0FBQ3ZELHVFQUFxRTtBQUNyRSxpRUFBK0Q7QUFDL0QsdURBQXFEO0FBRXJELHVFQUEyRTtBQWlFM0U7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQS9EckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gsK0JBQXVCO2dCQUN2Qix3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwwREFBOEIsQ0FBQyxPQUFPLENBQ2xDLDBCQUFXLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FDNUM7Z0JBQ0QsbUNBQXlCO2dCQUN6QixzQ0FBNEI7Z0JBQzVCLHdDQUE4QjthQUNqQztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixxREFBd0I7Z0JBQ3hCLDRDQUFvQjtnQkFDcEIsd0NBQWtCO2dCQUNsQixrQ0FBZTtnQkFDZiwwQ0FBbUI7Z0JBQ25CLHdDQUFrQjtnQkFDbEIsd0NBQWtCO2dCQUNsQixtREFBdUI7Z0JBQ3ZCLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixnQ0FBYztnQkFDZCw2Q0FBb0I7Z0JBQ3BCLGdEQUFzQjtnQkFDdEIsOENBQXFCO2dCQUNyQix5REFBMEI7Z0JBQzFCLDZEQUE0QjtnQkFDNUIsdURBQXlCO2dCQUN6Qix3Q0FBa0I7Z0JBQ2xCLGtFQUE4QjthQUNqQztZQUNELFNBQVMsRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQixvQ0FBZ0I7Z0JBQ2hCLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGlDQUFXO2dCQUNYLGtDQUFlO2dCQUNmLGdDQUFjO2dCQUNkLDRCQUFZO2dCQUNaLDBDQUFtQjtnQkFDbkIsb0NBQWdCO2dCQUNoQiwwQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRSxFQUVSO1NBQ0osQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCJcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VjdXJpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9hY2NvdW50LXNlY3VyaXR5L2FjY291bnQtc2VjdXJpdHkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjaGlldmVtZW50Q29tcG9uZW50IH0gZnJvbSAnfi9hY2hpZXZlbWVudC9hY2hpZXZlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25iYXJDb21wb25lbnQgfSBmcm9tICd+L2FjdGlvbmJhci9hY3Rpb25iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWR2ZXJ0Q29tcG9uZW50IH0gZnJvbSAnfi9hZHZlcnQvYWR2ZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VDb21wb25lbnQgfSBmcm9tIFwiLi9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJlaGF2aW91ckNvbXBvbmVudCB9IGZyb20gXCJ+L2JlaGF2aW91ci9iZWhhdmlvdXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCJ+L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIn4vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmtDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrL2hvbWV3b3JrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9ob21ld29yay1kZXRhaWwvaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VQYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVzc2FnZS1wYWdlL21lc3NhZ2UtcGFnZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9IGZyb20gXCJ+L25hdmlnYXRpb25iYXIvbmF2aWdhdGlvbmJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSBcIn4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uTG9naW5Db21wb25lbnQgfSBmcm9tICd+L25vdGlmaWNhdGlvbi1sb2dpbi9ub3RpZmljYXRpb24tbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDaXJjdWxhckNvbXBvbmVudCB9IGZyb20gXCJ+L3Byb2dyZXNzYmFyLWNpcmN1bGFyL3Byb2dyZXNzYmFyLWNpcmN1bGFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdHVkZW50U2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSBcIn4vc3R1ZGVudC1zZWxlY3Rpb24vc3R1ZGVudC1zZWxlY3Rpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpbWV0YWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVwZGF0ZVNlY3VyaXR5RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL3VwZGF0ZS1zZWN1cml0eS1kZXRhaWxzL3VwZGF0ZS1zZWN1cml0eS1kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQWNoaWV2ZW1lbnRTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL2FjaGlldmVtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZHZlcnRTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL2FkdmVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwVmFsdWVzU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9hcHB2YWx1ZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL2F0dGVuZGFuY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW91clNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYmVoYXZpb3VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICBmcm9tICcuL2RhdGFiYXNlL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9oZWxwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2h0dHBzZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbG9nZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGltZXRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZS90aW1ldGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3VzZXIuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgRGF0YVNlcnZpY2UsIHsgZGF0YUVuY2Fwc3VsYXRpb246IGZhbHNlIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgQWNjb3VudFNlY3VyaXR5Q29tcG9uZW50LFxyXG4gICAgICAgIEFjaGlldmVtZW50Q29tcG9uZW50LFxyXG4gICAgICAgIEFjdGlvbmJhckNvbXBvbmVudCxcclxuICAgICAgICBBZHZlcnRDb21wb25lbnQsXHJcbiAgICAgICAgQXR0ZW5kYW5jZUNvbXBvbmVudCxcclxuICAgICAgICBCZWhhdmlvdXJDb21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWV3b3JrQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIE1lc3NhZ2VQYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmlnYXRpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbkxvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFByb2dyZXNzYmFyQ2lyY3VsYXJDb21wb25lbnQsXHJcbiAgICAgICAgU3R1ZGVudFNlbGVjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBUaW1ldGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgVXBkYXRlU2VjdXJpdHlEZXRhaWxzQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQWNoaWV2ZW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgIEFkdmVydFNlcnZpY2UsXHJcbiAgICAgICAgQXBwVmFsdWVzU2VydmljZSxcclxuICAgICAgICBBdHRlbmRhbmNlU2VydmljZSxcclxuICAgICAgICBCZWhhdmlvdXJTZXJ2aWNlLFxyXG4gICAgICAgIEVycm9yU2VydmljZSxcclxuICAgICAgICBIZWxwZXJTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBTZXJ2aWNlLFxyXG4gICAgICAgIEhvbWV3b3JrU2VydmljZSxcclxuICAgICAgICBMb2dnaW5nU2VydmljZSxcclxuICAgICAgICBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBUaW1ldGFibGVTZXJ2aWNlLFxyXG4gICAgICAgIFVzZXJTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
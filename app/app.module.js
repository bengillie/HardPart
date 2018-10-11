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
var contactus_component_1 = require("./contactus/contactus.component");
var contactus_form_component_1 = require("./contactus-form/contactus-form.component");
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
var contactus_service_1 = require("./service/contactus.service");
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
                contactus_component_1.ContactUsComponent,
                contactus_form_component_1.ContactusFormComponent,
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
                contactus_service_1.ContactUsService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx5REFBeUU7QUFDekUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUVwRixpREFBK0M7QUFDL0MsNEZBQXlGO0FBQ3pGLDZFQUEyRTtBQUMzRSx1RUFBcUU7QUFDckUsOERBQTREO0FBQzVELDBFQUF3RTtBQUN4RSx1RUFBcUU7QUFDckUsdUVBQXFFO0FBQ3JFLHNGQUFtRjtBQUNuRix1RUFBcUU7QUFDckUseUZBQXNGO0FBQ3RGLG9FQUFrRTtBQUNsRSx5RkFBc0Y7QUFDdEYsMkRBQXlEO0FBQ3pELGdGQUE2RTtBQUM3RSxtRkFBaUY7QUFDakYsZ0ZBQThFO0FBQzlFLGtHQUErRjtBQUMvRix3R0FBcUc7QUFDckcsK0ZBQTRGO0FBQzVGLHVFQUFxRTtBQUNyRSxpSEFBNkc7QUFFN0cscUVBQW1FO0FBQ25FLDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsbUVBQWlFO0FBQ2pFLGlFQUErRDtBQUMvRCxpRUFBK0Q7QUFDL0Qsd0RBQXVEO0FBQ3ZELHlEQUF1RDtBQUN2RCwyREFBeUQ7QUFDekQscUVBQTREO0FBQzVELCtEQUE2RDtBQUM3RCw2REFBMkQ7QUFDM0QseURBQXVEO0FBQ3ZELHVFQUFxRTtBQUNyRSxpRUFBK0Q7QUFDL0QsdURBQXFEO0FBRXJELHVFQUEyRTtBQW9FM0U7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWxFckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gsK0JBQXVCO2dCQUN2Qix3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwwREFBOEIsQ0FBQyxPQUFPLENBQ2xDLDBCQUFXLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FDNUM7Z0JBQ0QsbUNBQXlCO2dCQUN6QixzQ0FBNEI7Z0JBQzVCLHdDQUE4QjthQUNqQztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixxREFBd0I7Z0JBQ3hCLDRDQUFvQjtnQkFDcEIsd0NBQWtCO2dCQUNsQixrQ0FBZTtnQkFDZiwwQ0FBbUI7Z0JBQ25CLHdDQUFrQjtnQkFDbEIsd0NBQWtCO2dCQUNsQixpREFBc0I7Z0JBQ3RCLHdDQUFrQjtnQkFDbEIsbURBQXVCO2dCQUN2QixzQ0FBaUI7Z0JBQ2pCLG1EQUF1QjtnQkFDdkIsZ0NBQWM7Z0JBQ2QsNkNBQW9CO2dCQUNwQixnREFBc0I7Z0JBQ3RCLDhDQUFxQjtnQkFDckIseURBQTBCO2dCQUMxQiw2REFBNEI7Z0JBQzVCLHVEQUF5QjtnQkFDekIsd0NBQWtCO2dCQUNsQixrRUFBOEI7YUFDakM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjtnQkFDakIsb0NBQWdCO2dCQUNoQixvQ0FBZ0I7Z0JBQ2hCLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGlDQUFXO2dCQUNYLGtDQUFlO2dCQUNmLGdDQUFjO2dCQUNkLDRCQUFZO2dCQUNaLDBDQUFtQjtnQkFDbkIsb0NBQWdCO2dCQUNoQiwwQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRSxFQUVSO1NBQ0osQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCJcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VjdXJpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9hY2NvdW50LXNlY3VyaXR5L2FjY291bnQtc2VjdXJpdHkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjaGlldmVtZW50Q29tcG9uZW50IH0gZnJvbSAnfi9hY2hpZXZlbWVudC9hY2hpZXZlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25iYXJDb21wb25lbnQgfSBmcm9tICd+L2FjdGlvbmJhci9hY3Rpb25iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWR2ZXJ0Q29tcG9uZW50IH0gZnJvbSAnfi9hZHZlcnQvYWR2ZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VDb21wb25lbnQgfSBmcm9tIFwiLi9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJlaGF2aW91ckNvbXBvbmVudCB9IGZyb20gXCJ+L2JlaGF2aW91ci9iZWhhdmlvdXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbnRhY3RVc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbnRhY3R1c0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9jb250YWN0dXMtZm9ybS9jb250YWN0dXMtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwifi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlLXBhZ2UvbWVzc2FnZS1wYWdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSBcIn4vbmF2aWdhdGlvbmJhci9uYXZpZ2F0aW9uYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tIFwifi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Mb2dpbkNvbXBvbmVudCB9IGZyb20gJ34vbm90aWZpY2F0aW9uLWxvZ2luL25vdGlmaWNhdGlvbi1sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc2JhckNpcmN1bGFyQ29tcG9uZW50IH0gZnJvbSBcIn4vcHJvZ3Jlc3NiYXItY2lyY3VsYXIvcHJvZ3Jlc3NiYXItY2lyY3VsYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0dWRlbnRTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tIFwifi9zdHVkZW50LXNlbGVjdGlvbi9zdHVkZW50LXNlbGVjdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBkYXRlU2VjdXJpdHlEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vdXBkYXRlLXNlY3VyaXR5LWRldGFpbHMvdXBkYXRlLXNlY3VyaXR5LWRldGFpbHMuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBY2hpZXZlbWVudFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYWNoaWV2ZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFkdmVydFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYWR2ZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZVNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYXR0ZW5kYW5jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3VyU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9iZWhhdmlvdXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRhY3RVc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvY29udGFjdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICBmcm9tICcuL2RhdGFiYXNlL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9oZWxwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2h0dHBzZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbG9nZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGltZXRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZS90aW1ldGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3VzZXIuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgRGF0YVNlcnZpY2UsIHsgZGF0YUVuY2Fwc3VsYXRpb246IGZhbHNlIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgQWNjb3VudFNlY3VyaXR5Q29tcG9uZW50LFxyXG4gICAgICAgIEFjaGlldmVtZW50Q29tcG9uZW50LFxyXG4gICAgICAgIEFjdGlvbmJhckNvbXBvbmVudCxcclxuICAgICAgICBBZHZlcnRDb21wb25lbnQsXHJcbiAgICAgICAgQXR0ZW5kYW5jZUNvbXBvbmVudCxcclxuICAgICAgICBCZWhhdmlvdXJDb21wb25lbnQsXHJcbiAgICAgICAgQ29udGFjdFVzQ29tcG9uZW50LFxyXG4gICAgICAgIENvbnRhY3R1c0Zvcm1Db21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWV3b3JrQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIE1lc3NhZ2VQYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmlnYXRpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbkxvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFByb2dyZXNzYmFyQ2lyY3VsYXJDb21wb25lbnQsXHJcbiAgICAgICAgU3R1ZGVudFNlbGVjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBUaW1ldGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgVXBkYXRlU2VjdXJpdHlEZXRhaWxzQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQWNoaWV2ZW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgIEFkdmVydFNlcnZpY2UsXHJcbiAgICAgICAgQXBwVmFsdWVzU2VydmljZSxcclxuICAgICAgICBBdHRlbmRhbmNlU2VydmljZSxcclxuICAgICAgICBCZWhhdmlvdXJTZXJ2aWNlLFxyXG4gICAgICAgIENvbnRhY3RVc1NlcnZpY2UsXHJcbiAgICAgICAgRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgIEhlbHBlclNlcnZpY2UsXHJcbiAgICAgICAgSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgSG9tZXdvcmtTZXJ2aWNlLFxyXG4gICAgICAgIExvZ2dpbmdTZXJ2aWNlLFxyXG4gICAgICAgIExvZ2luU2VydmljZSxcclxuICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIFRpbWV0YWJsZVNlcnZpY2UsXHJcbiAgICAgICAgVXNlclNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
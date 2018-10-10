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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx5REFBeUU7QUFDekUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUVwRixpREFBK0M7QUFDL0MsNEZBQXlGO0FBQ3pGLDZFQUEyRTtBQUMzRSx1RUFBcUU7QUFDckUsOERBQTREO0FBQzVELDBFQUF3RTtBQUN4RSx1RUFBcUU7QUFDckUsc0ZBQW1GO0FBQ25GLHVFQUFxRTtBQUNyRSx5RkFBc0Y7QUFDdEYsb0VBQWtFO0FBQ2xFLHlGQUFzRjtBQUN0RiwyREFBeUQ7QUFDekQsZ0ZBQTZFO0FBQzdFLG1GQUFpRjtBQUNqRixnRkFBOEU7QUFDOUUsa0dBQStGO0FBQy9GLHdHQUFxRztBQUNyRywrRkFBNEY7QUFDNUYsdUVBQXFFO0FBQ3JFLGlIQUE2RztBQUU3RyxxRUFBbUU7QUFDbkUsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCxtRUFBaUU7QUFDakUsaUVBQStEO0FBQy9ELHdEQUF1RDtBQUN2RCx5REFBdUQ7QUFDdkQsMkRBQXlEO0FBQ3pELHFFQUE0RDtBQUM1RCwrREFBNkQ7QUFDN0QsNkRBQTJEO0FBQzNELHlEQUF1RDtBQUN2RCx1RUFBcUU7QUFDckUsaUVBQStEO0FBQy9ELHVEQUFxRDtBQUVyRCx1RUFBMkU7QUFrRTNFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFoRXJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG1CQUFXO2dCQUNYLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHVCQUFnQjtnQkFDaEIsMERBQThCLENBQUMsT0FBTyxDQUNsQywwQkFBVyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQzVDO2dCQUNELG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1Qix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1oscURBQXdCO2dCQUN4Qiw0Q0FBb0I7Z0JBQ3BCLHdDQUFrQjtnQkFDbEIsa0NBQWU7Z0JBQ2YsMENBQW1CO2dCQUNuQix3Q0FBa0I7Z0JBQ2xCLGlEQUFzQjtnQkFDdEIsd0NBQWtCO2dCQUNsQixtREFBdUI7Z0JBQ3ZCLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixnQ0FBYztnQkFDZCw2Q0FBb0I7Z0JBQ3BCLGdEQUFzQjtnQkFDdEIsOENBQXFCO2dCQUNyQix5REFBMEI7Z0JBQzFCLDZEQUE0QjtnQkFDNUIsdURBQXlCO2dCQUN6Qix3Q0FBa0I7Z0JBQ2xCLGtFQUE4QjthQUNqQztZQUNELFNBQVMsRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQixvQ0FBZ0I7Z0JBQ2hCLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGlDQUFXO2dCQUNYLGtDQUFlO2dCQUNmLGdDQUFjO2dCQUNkLDRCQUFZO2dCQUNaLDBDQUFtQjtnQkFDbkIsb0NBQWdCO2dCQUNoQiwwQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRSxFQUVSO1NBQ0osQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCJcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VjdXJpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9hY2NvdW50LXNlY3VyaXR5L2FjY291bnQtc2VjdXJpdHkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjaGlldmVtZW50Q29tcG9uZW50IH0gZnJvbSAnfi9hY2hpZXZlbWVudC9hY2hpZXZlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25iYXJDb21wb25lbnQgfSBmcm9tICd+L2FjdGlvbmJhci9hY3Rpb25iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWR2ZXJ0Q29tcG9uZW50IH0gZnJvbSAnfi9hZHZlcnQvYWR2ZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VDb21wb25lbnQgfSBmcm9tIFwiLi9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbnRhY3RVc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbnRhY3R1c0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9jb250YWN0dXMtZm9ybS9jb250YWN0dXMtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwifi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlLXBhZ2UvbWVzc2FnZS1wYWdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSBcIn4vbmF2aWdhdGlvbmJhci9uYXZpZ2F0aW9uYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tIFwifi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Mb2dpbkNvbXBvbmVudCB9IGZyb20gJ34vbm90aWZpY2F0aW9uLWxvZ2luL25vdGlmaWNhdGlvbi1sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc2JhckNpcmN1bGFyQ29tcG9uZW50IH0gZnJvbSBcIn4vcHJvZ3Jlc3NiYXItY2lyY3VsYXIvcHJvZ3Jlc3NiYXItY2lyY3VsYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0dWRlbnRTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tIFwifi9zdHVkZW50LXNlbGVjdGlvbi9zdHVkZW50LXNlbGVjdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBkYXRlU2VjdXJpdHlEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vdXBkYXRlLXNlY3VyaXR5LWRldGFpbHMvdXBkYXRlLXNlY3VyaXR5LWRldGFpbHMuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBY2hpZXZlbWVudFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYWNoaWV2ZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFkdmVydFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYWR2ZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZVNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYXR0ZW5kYW5jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udGFjdFVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9jb250YWN0dXMuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gIGZyb20gJy4vZGF0YWJhc2UvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2hlbHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvaHR0cHNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2Uvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3RpbWV0YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvdXNlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KFxyXG4gICAgICAgICAgICBEYXRhU2VydmljZSwgeyBkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBBY2NvdW50U2VjdXJpdHlDb21wb25lbnQsXHJcbiAgICAgICAgQWNoaWV2ZW1lbnRDb21wb25lbnQsXHJcbiAgICAgICAgQWN0aW9uYmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEFkdmVydENvbXBvbmVudCxcclxuICAgICAgICBBdHRlbmRhbmNlQ29tcG9uZW50LFxyXG4gICAgICAgIENvbnRhY3RVc0NvbXBvbmVudCxcclxuICAgICAgICBDb250YWN0dXNGb3JtQ29tcG9uZW50LFxyXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCxcclxuICAgICAgICBIb21ld29ya0NvbXBvbmVudCxcclxuICAgICAgICBIb21ld29ya0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBNZXNzYWdlUGFnZUNvbXBvbmVudCxcclxuICAgICAgICBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBOb3RpZmljYXRpb25Mb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBQcm9ncmVzc2JhckNpcmN1bGFyQ29tcG9uZW50LFxyXG4gICAgICAgIFN0dWRlbnRTZWxlY3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgVGltZXRhYmxlQ29tcG9uZW50LFxyXG4gICAgICAgIFVwZGF0ZVNlY3VyaXR5RGV0YWlsc0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEFjaGlldmVtZW50U2VydmljZSxcclxuICAgICAgICBBZHZlcnRTZXJ2aWNlLFxyXG4gICAgICAgIEFwcFZhbHVlc1NlcnZpY2UsXHJcbiAgICAgICAgQXR0ZW5kYW5jZVNlcnZpY2UsXHJcbiAgICAgICAgQ29udGFjdFVzU2VydmljZSxcclxuICAgICAgICBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgSGVscGVyU2VydmljZSxcclxuICAgICAgICBIdHRwU2VydmljZSxcclxuICAgICAgICBIb21ld29ya1NlcnZpY2UsXHJcbiAgICAgICAgTG9nZ2luZ1NlcnZpY2UsXHJcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgVGltZXRhYmxlU2VydmljZSxcclxuICAgICAgICBVc2VyU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
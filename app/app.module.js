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
var progressbar_circular_component_1 = require("~/progressbar-circular/progressbar-circular.component");
var student_selection_component_1 = require("~/student-selection/student-selection.component");
var timetable_component_1 = require("./timetable/timetable.component");
var update_security_details_component_1 = require("./update-security-details/update-security-details.component");
var achievement_service_1 = require("~/service/achievement.service");
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
                progressbar_circular_component_1.ProgressbarCircularComponent,
                student_selection_component_1.StudentSelectionComponent,
                timetable_component_1.TimetableComponent,
                update_security_details_component_1.UpdateSecurityDetailsComponent
            ],
            providers: [
                achievement_service_1.AchievementService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx5REFBeUU7QUFDekUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUVwRixpREFBK0M7QUFDL0MsNEZBQXlGO0FBQ3pGLDZFQUEyRTtBQUMzRSx1RUFBcUU7QUFDckUsMEVBQXdFO0FBQ3hFLHVFQUFxRTtBQUNyRSxzRkFBbUY7QUFDbkYsdUVBQXFFO0FBQ3JFLHlGQUFzRjtBQUN0RixvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLDJEQUF5RDtBQUN6RCxnRkFBNkU7QUFDN0UsbUZBQWlGO0FBQ2pGLGdGQUE4RTtBQUM5RSx3R0FBcUc7QUFDckcsK0ZBQTRGO0FBQzVGLHVFQUFxRTtBQUNyRSxpSEFBNkc7QUFFN0cscUVBQW1FO0FBQ25FLGlFQUErRDtBQUMvRCxtRUFBaUU7QUFDakUsaUVBQStEO0FBQy9ELHdEQUF1RDtBQUN2RCx5REFBdUQ7QUFDdkQsMkRBQXlEO0FBQ3pELHFFQUE0RDtBQUM1RCwrREFBNkQ7QUFDN0QsNkRBQTJEO0FBQzNELHlEQUF1RDtBQUN2RCx1RUFBcUU7QUFDckUsaUVBQStEO0FBQy9ELHVEQUFxRDtBQUVyRCx1RUFBMkU7QUErRDNFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE3RHJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG1CQUFXO2dCQUNYLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHVCQUFnQjtnQkFDaEIsMERBQThCLENBQUMsT0FBTyxDQUNsQywwQkFBVyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQzVDO2dCQUNELG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1Qix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1oscURBQXdCO2dCQUN4Qiw0Q0FBb0I7Z0JBQ3BCLHdDQUFrQjtnQkFDbEIsMENBQW1CO2dCQUNuQix3Q0FBa0I7Z0JBQ2xCLGlEQUFzQjtnQkFDdEIsd0NBQWtCO2dCQUNsQixtREFBdUI7Z0JBQ3ZCLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixnQ0FBYztnQkFDZCw2Q0FBb0I7Z0JBQ3BCLGdEQUFzQjtnQkFDdEIsOENBQXFCO2dCQUNyQiw2REFBNEI7Z0JBQzVCLHVEQUF5QjtnQkFDekIsd0NBQWtCO2dCQUNsQixrRUFBOEI7YUFDakM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQixvQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjtnQkFDakIsb0NBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixpQ0FBVztnQkFDWCxrQ0FBZTtnQkFDZixnQ0FBYztnQkFDZCw0QkFBWTtnQkFDWiwwQ0FBbUI7Z0JBQ25CLG9DQUFnQjtnQkFDaEIsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsRUFFUjtTQUNKLENBQUM7T0FFVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWNjb3VudFNlY3VyaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vYWNjb3VudC1zZWN1cml0eS9hY2NvdW50LXNlY3VyaXR5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBY2hpZXZlbWVudENvbXBvbmVudCB9IGZyb20gJ34vYWNoaWV2ZW1lbnQvYWNoaWV2ZW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aW9uYmFyQ29tcG9uZW50IH0gZnJvbSAnfi9hY3Rpb25iYXIvYWN0aW9uYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VDb21wb25lbnQgfSBmcm9tIFwiLi9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbnRhY3RVc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbnRhY3R1c0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9jb250YWN0dXMtZm9ybS9jb250YWN0dXMtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwifi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlLXBhZ2UvbWVzc2FnZS1wYWdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSBcIn4vbmF2aWdhdGlvbmJhci9uYXZpZ2F0aW9uYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tIFwifi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc2JhckNpcmN1bGFyQ29tcG9uZW50IH0gZnJvbSBcIn4vcHJvZ3Jlc3NiYXItY2lyY3VsYXIvcHJvZ3Jlc3NiYXItY2lyY3VsYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0dWRlbnRTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tIFwifi9zdHVkZW50LXNlbGVjdGlvbi9zdHVkZW50LXNlbGVjdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBkYXRlU2VjdXJpdHlEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vdXBkYXRlLXNlY3VyaXR5LWRldGFpbHMvdXBkYXRlLXNlY3VyaXR5LWRldGFpbHMuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBY2hpZXZlbWVudFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYWNoaWV2ZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYXBwdmFsdWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdHRlbmRhbmNlU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9hdHRlbmRhbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb250YWN0VXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2NvbnRhY3R1cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgZnJvbSAnLi9kYXRhYmFzZS9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZXJyb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvaGVscGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9odHRwc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSG9tZXdvcmtTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZS9ob21ld29yay5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9ub3RpZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbWV0YWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvdGltZXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZS91c2VyLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoXHJcbiAgICAgICAgICAgIERhdGFTZXJ2aWNlLCB7IGRhdGFFbmNhcHN1bGF0aW9uOiBmYWxzZSB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEFjY291bnRTZWN1cml0eUNvbXBvbmVudCxcclxuICAgICAgICBBY2hpZXZlbWVudENvbXBvbmVudCxcclxuICAgICAgICBBY3Rpb25iYXJDb21wb25lbnQsXHJcbiAgICAgICAgQXR0ZW5kYW5jZUNvbXBvbmVudCxcclxuICAgICAgICBDb250YWN0VXNDb21wb25lbnQsXHJcbiAgICAgICAgQ29udGFjdHVzRm9ybUNvbXBvbmVudCxcclxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICAgICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZXdvcmtDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgTWVzc2FnZVBhZ2VDb21wb25lbnQsXHJcbiAgICAgICAgTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBOb3RpZmljYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgUHJvZ3Jlc3NiYXJDaXJjdWxhckNvbXBvbmVudCxcclxuICAgICAgICBTdHVkZW50U2VsZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIFRpbWV0YWJsZUNvbXBvbmVudCxcclxuICAgICAgICBVcGRhdGVTZWN1cml0eURldGFpbHNDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBBY2hpZXZlbWVudFNlcnZpY2UsXHJcbiAgICAgICAgQXBwVmFsdWVzU2VydmljZSxcclxuICAgICAgICBBdHRlbmRhbmNlU2VydmljZSxcclxuICAgICAgICBDb250YWN0VXNTZXJ2aWNlLFxyXG4gICAgICAgIEVycm9yU2VydmljZSxcclxuICAgICAgICBIZWxwZXJTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBTZXJ2aWNlLFxyXG4gICAgICAgIEhvbWV3b3JrU2VydmljZSxcclxuICAgICAgICBMb2dnaW5nU2VydmljZSxcclxuICAgICAgICBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBUaW1ldGFibGVTZXJ2aWNlLFxyXG4gICAgICAgIFVzZXJTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
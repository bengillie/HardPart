"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var forms_2 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_client_1 = require("nativescript-angular/http-client");
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
var achievement_service_1 = require("./achievement/achievement.service");
var advert_service_1 = require("./advert/advert.service");
var appvalues_service_1 = require("./shared/service/appvalues.service");
var attendance_service_1 = require("./attendance/attendance.service");
var behaviour_service_1 = require("./behaviour/behaviour.service");
var contactus_service_1 = require("./contactus/contactus.service");
// import { DataService } from "./database/data.service";
var error_service_1 = require("./shared/service/error.service");
var helper_service_1 = require("./shared/service/helper.service");
var httpservice_service_1 = require("./shared/service/httpservice.service");
var homework_service_1 = require("./homework/homework.service");
var logging_service_1 = require("./shared/service/logging.service");
var login_service_1 = require("./login/login.service");
var notification_service_1 = require("./notification/notification.service");
var timetable_service_1 = require("./timetable/timetable.service");
var user_service_1 = require("./shared/service/user.service");
// import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                forms_1.FormsModule,
                forms_2.NativeScriptFormsModule,
                nativescript_module_1.NativeScriptModule,
                http_client_1.NativeScriptHttpClientModule,
                app_routing_1.AppRoutingModule,
                http_1.HttpClientModule,
                // HttpClientInMemoryWebApiModule.forRoot(
                //     DataService, { dataEncapsulation: false }
                // ),
                angular_1.NativeScriptUIGaugeModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUISideDrawerModule,
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
                update_security_details_component_1.UpdateSecurityDetailsComponent,
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
                user_service_1.UserService,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            exports: [],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxnRUFBZ0Y7QUFDaEYseURBQTBFO0FBQzFFLDREQUFnRjtBQUNoRiw4REFBb0Y7QUFFcEYsaURBQStDO0FBQy9DLDRGQUF5RjtBQUN6Riw2RUFBMkU7QUFDM0UsdUVBQXFFO0FBQ3JFLDhEQUE0RDtBQUM1RCwwRUFBd0U7QUFDeEUsdUVBQXFFO0FBQ3JFLHVFQUFxRTtBQUNyRSxzRkFBbUY7QUFDbkYsdUVBQXFFO0FBQ3JFLHlGQUFzRjtBQUN0RixvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLDJEQUF5RDtBQUN6RCxnRkFBNkU7QUFDN0UsbUZBQWlGO0FBQ2pGLGdGQUE4RTtBQUM5RSxrR0FBK0Y7QUFDL0Ysd0dBQXFHO0FBQ3JHLCtGQUE0RjtBQUM1Rix1RUFBcUU7QUFDckUsaUhBQTZHO0FBRTdHLHlFQUF1RTtBQUN2RSwwREFBd0Q7QUFDeEQsd0VBQXNFO0FBQ3RFLHNFQUFvRTtBQUNwRSxtRUFBaUU7QUFDakUsbUVBQWlFO0FBQ2pFLHlEQUF5RDtBQUN6RCxnRUFBOEQ7QUFDOUQsa0VBQWdFO0FBQ2hFLDRFQUFtRTtBQUNuRSxnRUFBOEQ7QUFDOUQsb0VBQWtFO0FBQ2xFLHVEQUFxRDtBQUNyRCw0RUFBMEU7QUFDMUUsbUVBQWlFO0FBQ2pFLDhEQUE0RDtBQUU1RCw4RUFBOEU7QUE4RDlFO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUE1RHJCLGVBQVEsQ0FBQztZQUNULFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNSLG1CQUFXO2dCQUNYLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQiwwQ0FBNEI7Z0JBQzVCLDhCQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwwQ0FBMEM7Z0JBQzFDLGdEQUFnRDtnQkFDaEQsS0FBSztnQkFDTCxtQ0FBeUI7Z0JBQ3pCLHNDQUE0QjtnQkFDNUIsd0NBQThCO2FBQzlCO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLDRCQUFZO2dCQUNaLHFEQUF3QjtnQkFDeEIsNENBQW9CO2dCQUNwQix3Q0FBa0I7Z0JBQ2xCLGtDQUFlO2dCQUNmLDBDQUFtQjtnQkFDbkIsd0NBQWtCO2dCQUNsQix3Q0FBa0I7Z0JBQ2xCLGlEQUFzQjtnQkFDdEIsd0NBQWtCO2dCQUNsQixtREFBdUI7Z0JBQ3ZCLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixnQ0FBYztnQkFDZCw2Q0FBb0I7Z0JBQ3BCLGdEQUFzQjtnQkFDdEIsOENBQXFCO2dCQUNyQix5REFBMEI7Z0JBQzFCLDZEQUE0QjtnQkFDNUIsdURBQXlCO2dCQUN6Qix3Q0FBa0I7Z0JBQ2xCLGtFQUE4QjthQUM5QjtZQUNELFNBQVMsRUFBRTtnQkFDVix3Q0FBa0I7Z0JBQ2xCLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQixvQ0FBZ0I7Z0JBQ2hCLG9DQUFnQjtnQkFDaEIsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsaUNBQVc7Z0JBQ1gsa0NBQWU7Z0JBQ2YsZ0NBQWM7Z0JBQ2QsNEJBQVk7Z0JBQ1osMENBQW1CO2dCQUNuQixvQ0FBZ0I7Z0JBQ2hCLDBCQUFXO2FBQ1g7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztZQUMzQixPQUFPLEVBQUUsRUFBRTtTQUNYLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY291bnRTZWN1cml0eUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3VudC1zZWN1cml0eS9hY2NvdW50LXNlY3VyaXR5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjaGlldmVtZW50Q29tcG9uZW50IH0gZnJvbSAnfi9hY2hpZXZlbWVudC9hY2hpZXZlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25iYXJDb21wb25lbnQgfSBmcm9tICd+L2FjdGlvbmJhci9hY3Rpb25iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWR2ZXJ0Q29tcG9uZW50IH0gZnJvbSAnfi9hZHZlcnQvYWR2ZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VDb21wb25lbnQgfSBmcm9tICcuL2F0dGVuZGFuY2UvYXR0ZW5kYW5jZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCZWhhdmlvdXJDb21wb25lbnQgfSBmcm9tICd+L2JlaGF2aW91ci9iZWhhdmlvdXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGFjdFVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRhY3R1c0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3R1cy1mb3JtL2NvbnRhY3R1cy1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJ34vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJ34vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLXBhZ2UvbWVzc2FnZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25CYXJDb21wb25lbnQgfSBmcm9tICd+L25hdmlnYXRpb25iYXIvbmF2aWdhdGlvbmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICd+L25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uTG9naW5Db21wb25lbnQgfSBmcm9tICd+L25vdGlmaWNhdGlvbi1sb2dpbi9ub3RpZmljYXRpb24tbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDaXJjdWxhckNvbXBvbmVudCB9IGZyb20gJ34vcHJvZ3Jlc3NiYXItY2lyY3VsYXIvcHJvZ3Jlc3NiYXItY2lyY3VsYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3R1ZGVudFNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJ34vc3R1ZGVudC1zZWxlY3Rpb24vc3R1ZGVudC1zZWxlY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90aW1ldGFibGUvdGltZXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwZGF0ZVNlY3VyaXR5RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlLXNlY3VyaXR5LWRldGFpbHMvdXBkYXRlLXNlY3VyaXR5LWRldGFpbHMuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEFjaGlldmVtZW50U2VydmljZSB9IGZyb20gJy4vYWNoaWV2ZW1lbnQvYWNoaWV2ZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFkdmVydFNlcnZpY2UgfSBmcm9tICcuL2FkdmVydC9hZHZlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlL2FwcHZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZVNlcnZpY2UgfSBmcm9tICcuL2F0dGVuZGFuY2UvYXR0ZW5kYW5jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3VyU2VydmljZSB9IGZyb20gJy4vYmVoYXZpb3VyL2JlaGF2aW91ci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udGFjdFVzU2VydmljZSB9IGZyb20gJy4vY29udGFjdHVzL2NvbnRhY3R1cy5zZXJ2aWNlJztcclxuLy8gaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9kYXRhYmFzZS9kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2UvaGVscGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2UvaHR0cHNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gJy4vaG9tZXdvcmsvaG9tZXdvcmsuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVTZXJ2aWNlIH0gZnJvbSAnLi90aW1ldGFibGUvdGltZXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2UvdXNlci5zZXJ2aWNlJztcclxuXHJcbi8vIGltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuXHRcdE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuXHRcdE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRBcHBSb3V0aW5nTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdC8vIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KFxyXG5cdFx0Ly8gICAgIERhdGFTZXJ2aWNlLCB7IGRhdGFFbmNhcHN1bGF0aW9uOiBmYWxzZSB9XHJcblx0XHQvLyApLFxyXG5cdFx0TmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcclxuXHRcdE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXHJcblx0XHROYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEFwcENvbXBvbmVudCxcclxuXHRcdEFjY291bnRTZWN1cml0eUNvbXBvbmVudCxcclxuXHRcdEFjaGlldmVtZW50Q29tcG9uZW50LFxyXG5cdFx0QWN0aW9uYmFyQ29tcG9uZW50LFxyXG5cdFx0QWR2ZXJ0Q29tcG9uZW50LFxyXG5cdFx0QXR0ZW5kYW5jZUNvbXBvbmVudCxcclxuXHRcdEJlaGF2aW91ckNvbXBvbmVudCxcclxuXHRcdENvbnRhY3RVc0NvbXBvbmVudCxcclxuXHRcdENvbnRhY3R1c0Zvcm1Db21wb25lbnQsXHJcblx0XHREYXNoYm9hcmRDb21wb25lbnQsXHJcblx0XHRGb3Jnb3RQYXNzd29yZENvbXBvbmVudCxcclxuXHRcdEhvbWV3b3JrQ29tcG9uZW50LFxyXG5cdFx0SG9tZXdvcmtEZXRhaWxDb21wb25lbnQsXHJcblx0XHRMb2dpbkNvbXBvbmVudCxcclxuXHRcdE1lc3NhZ2VQYWdlQ29tcG9uZW50LFxyXG5cdFx0TmF2aWdhdGlvbkJhckNvbXBvbmVudCxcclxuXHRcdE5vdGlmaWNhdGlvbkNvbXBvbmVudCxcclxuXHRcdE5vdGlmaWNhdGlvbkxvZ2luQ29tcG9uZW50LFxyXG5cdFx0UHJvZ3Jlc3NiYXJDaXJjdWxhckNvbXBvbmVudCxcclxuXHRcdFN0dWRlbnRTZWxlY3Rpb25Db21wb25lbnQsXHJcblx0XHRUaW1ldGFibGVDb21wb25lbnQsXHJcblx0XHRVcGRhdGVTZWN1cml0eURldGFpbHNDb21wb25lbnQsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdEFjaGlldmVtZW50U2VydmljZSxcclxuXHRcdEFkdmVydFNlcnZpY2UsXHJcblx0XHRBcHBWYWx1ZXNTZXJ2aWNlLFxyXG5cdFx0QXR0ZW5kYW5jZVNlcnZpY2UsXHJcblx0XHRCZWhhdmlvdXJTZXJ2aWNlLFxyXG5cdFx0Q29udGFjdFVzU2VydmljZSxcclxuXHRcdEVycm9yU2VydmljZSxcclxuXHRcdEhlbHBlclNlcnZpY2UsXHJcblx0XHRIdHRwU2VydmljZSxcclxuXHRcdEhvbWV3b3JrU2VydmljZSxcclxuXHRcdExvZ2dpbmdTZXJ2aWNlLFxyXG5cdFx0TG9naW5TZXJ2aWNlLFxyXG5cdFx0Tm90aWZpY2F0aW9uU2VydmljZSxcclxuXHRcdFRpbWV0YWJsZVNlcnZpY2UsXHJcblx0XHRVc2VyU2VydmljZSxcclxuXHRdLFxyXG5cdHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxuXHRleHBvcnRzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXX0=
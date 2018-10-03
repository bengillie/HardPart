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
var achievement_component_1 = require("~/achievement/achievement.component");
var actionbar_component_1 = require("~/actionbar/actionbar.component");
var attendance_component_1 = require("./attendance/attendance.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var forgot_password_component_1 = require("~/forgot-password/forgot-password.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var login_component_1 = require("./login/login.component");
var navigationbar_component_1 = require("~/navigationbar/navigationbar.component");
var notification_component_1 = require("~/notification/notification.component");
var progressbar_circular_component_1 = require("~/progressbar-circular/progressbar-circular.component");
var student_selection_component_1 = require("~/student-selection/student-selection.component");
var timetable_component_1 = require("./timetable/timetable.component");
var achievement_service_1 = require("~/service/achievement.service");
var appvalues_service_1 = require("~/service/appvalues.service");
var attendance_service_1 = require("~/service/attendance.service");
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
                achievement_component_1.AchievementComponent,
                actionbar_component_1.ActionbarComponent,
                attendance_component_1.AttendanceComponent,
                dashboard_component_1.DashboardComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                homework_component_1.HomeworkComponent,
                homework_detail_component_1.HomeworkDetailComponent,
                login_component_1.LoginComponent,
                navigationbar_component_1.NavigationBarComponent,
                notification_component_1.NotificationComponent,
                progressbar_circular_component_1.ProgressbarCircularComponent,
                student_selection_component_1.StudentSelectionComponent,
                timetable_component_1.TimetableComponent
            ],
            providers: [
                achievement_service_1.AchievementService,
                appvalues_service_1.AppValuesService,
                attendance_service_1.AttendanceService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx5REFBeUU7QUFDekUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUVwRixpREFBK0M7QUFDL0MsNkVBQTJFO0FBQzNFLHVFQUFxRTtBQUNyRSwwRUFBd0U7QUFDeEUsdUVBQXFFO0FBQ3JFLHlGQUFzRjtBQUN0RixvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLDJEQUF5RDtBQUN6RCxtRkFBaUY7QUFDakYsZ0ZBQThFO0FBQzlFLHdHQUFxRztBQUNyRywrRkFBNEY7QUFDNUYsdUVBQXFFO0FBRXJFLHFFQUFtRTtBQUNuRSxpRUFBK0Q7QUFDL0QsbUVBQWlFO0FBQ2pFLHdEQUF1RDtBQUN2RCx5REFBdUQ7QUFDdkQsMkRBQXlEO0FBQ3pELHFFQUE0RDtBQUM1RCwrREFBNkQ7QUFDN0QsNkRBQTJEO0FBQzNELHlEQUF1RDtBQUN2RCx1RUFBcUU7QUFDckUsaUVBQStEO0FBQy9ELHVEQUFxRDtBQUVyRCx1RUFBMkU7QUF5RDNFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF2RHJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG1CQUFXO2dCQUNYLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHVCQUFnQjtnQkFDaEIsMERBQThCLENBQUMsT0FBTyxDQUNsQywwQkFBVyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQzVDO2dCQUNELG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1Qix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osNENBQW9CO2dCQUNwQix3Q0FBa0I7Z0JBQ2xCLDBDQUFtQjtnQkFDbkIsd0NBQWtCO2dCQUNsQixtREFBdUI7Z0JBQ3ZCLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixnQ0FBYztnQkFDZCxnREFBc0I7Z0JBQ3RCLDhDQUFxQjtnQkFDckIsNkRBQTRCO2dCQUM1Qix1REFBeUI7Z0JBQ3pCLHdDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixpQ0FBVztnQkFDWCxrQ0FBZTtnQkFDZixnQ0FBYztnQkFDZCw0QkFBWTtnQkFDWiwwQ0FBbUI7Z0JBQ25CLG9DQUFnQjtnQkFDaEIsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsRUFFUjtTQUNKLENBQUM7T0FFVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWNoaWV2ZW1lbnRDb21wb25lbnQgfSBmcm9tICd+L2FjaGlldmVtZW50L2FjaGlldmVtZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbmJhckNvbXBvbmVudCB9IGZyb20gJ34vYWN0aW9uYmFyL2FjdGlvbmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdHRlbmRhbmNlQ29tcG9uZW50IH0gZnJvbSBcIi4vYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwifi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCJ+L2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWV3b3JrQ29tcG9uZW50IH0gZnJvbSAnLi9ob21ld29yay9ob21ld29yay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21ld29ya0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmstZGV0YWlsL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSBcIn4vbmF2aWdhdGlvbmJhci9uYXZpZ2F0aW9uYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tIFwifi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc2JhckNpcmN1bGFyQ29tcG9uZW50IH0gZnJvbSBcIn4vcHJvZ3Jlc3NiYXItY2lyY3VsYXIvcHJvZ3Jlc3NiYXItY2lyY3VsYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0dWRlbnRTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tIFwifi9zdHVkZW50LXNlbGVjdGlvbi9zdHVkZW50LXNlbGVjdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEFjaGlldmVtZW50U2VydmljZSB9IGZyb20gJ34vc2VydmljZS9hY2hpZXZlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwVmFsdWVzU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9hcHB2YWx1ZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlL2F0dGVuZGFuY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gIGZyb20gJy4vZGF0YWJhc2UvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2hlbHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvaHR0cHNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2Uvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3RpbWV0YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvdXNlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KFxyXG4gICAgICAgICAgICBEYXRhU2VydmljZSwgeyBkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBBY2hpZXZlbWVudENvbXBvbmVudCxcclxuICAgICAgICBBY3Rpb25iYXJDb21wb25lbnQsXHJcbiAgICAgICAgQXR0ZW5kYW5jZUNvbXBvbmVudCxcclxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICAgICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZXdvcmtDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBOb3RpZmljYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgUHJvZ3Jlc3NiYXJDaXJjdWxhckNvbXBvbmVudCxcclxuICAgICAgICBTdHVkZW50U2VsZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIFRpbWV0YWJsZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEFjaGlldmVtZW50U2VydmljZSxcclxuICAgICAgICBBcHBWYWx1ZXNTZXJ2aWNlLFxyXG4gICAgICAgIEF0dGVuZGFuY2VTZXJ2aWNlLFxyXG4gICAgICAgIEVycm9yU2VydmljZSxcclxuICAgICAgICBIZWxwZXJTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBTZXJ2aWNlLFxyXG4gICAgICAgIEhvbWV3b3JrU2VydmljZSxcclxuICAgICAgICBMb2dnaW5nU2VydmljZSxcclxuICAgICAgICBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBUaW1ldGFibGVTZXJ2aWNlLFxyXG4gICAgICAgIFVzZXJTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
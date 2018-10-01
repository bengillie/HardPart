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
// import { registerElement } from 'nativescript-angular/element-registry'
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
var notifications_component_1 = require("~/notifications/notifications.component");
var progressbar_circular_component_1 = require("~/progressbar-circular/progressbar-circular.component");
var student_selection_component_1 = require("~/student-selection/student-selection.component");
var timetable_component_1 = require("./timetable/timetable.component");
var achievement_service_1 = require("~/service/achievement.service");
var appvalues_service_1 = require("~/service/appvalues.service");
var attendance_service_1 = require("~/service/attendance.service");
var data_service_1 = require("./database/data.service");
var error_service_1 = require("./service/error.service");
var helper_service_1 = require("./service/helper.service");
var homework_service_1 = require("~/service/homework.service");
var logging_service_1 = require("./service/logging.service");
var login_service_1 = require("./service/login.service");
var timetable_service_1 = require("./service/timetable.service");
var user_service_1 = require("./service/user.service");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
// registerElement('AnimatedCircle', () => require('nativescript-animated-circle').AnimatedCircle);
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
                notifications_component_1.NotificationsComponent,
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
                homework_service_1.HomeworkService,
                logging_service_1.LoggingService,
                login_service_1.LoginService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx5REFBeUU7QUFDekUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUNwRiwwRUFBMEU7QUFFMUUsaURBQStDO0FBQy9DLDZFQUEyRTtBQUMzRSx1RUFBcUU7QUFDckUsMEVBQXdFO0FBQ3hFLHVFQUFxRTtBQUNyRSx5RkFBc0Y7QUFDdEYsb0VBQWtFO0FBQ2xFLHlGQUFzRjtBQUN0RiwyREFBeUQ7QUFDekQsbUZBQWlGO0FBQ2pGLG1GQUFpRjtBQUNqRix3R0FBcUc7QUFDckcsK0ZBQTRGO0FBQzVGLHVFQUFxRTtBQUVyRSxxRUFBbUU7QUFDbkUsaUVBQStEO0FBQy9ELG1FQUFpRTtBQUNqRSx3REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELDJEQUF5RDtBQUN6RCwrREFBNkQ7QUFDN0QsNkRBQTJEO0FBQzNELHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsdURBQXFEO0FBRXJELHVFQUEyRTtBQUUzRSxtR0FBbUc7QUF1RG5HO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFyRHJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG1CQUFXO2dCQUNYLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHVCQUFnQjtnQkFDaEIsMERBQThCLENBQUMsT0FBTyxDQUNsQywwQkFBVyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQzVDO2dCQUNELG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1Qix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osNENBQW9CO2dCQUNwQix3Q0FBa0I7Z0JBQ2xCLDBDQUFtQjtnQkFDbkIsd0NBQWtCO2dCQUNsQixtREFBdUI7Z0JBQ3ZCLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixnQ0FBYztnQkFDZCxnREFBc0I7Z0JBQ3RCLGdEQUFzQjtnQkFDdEIsNkRBQTRCO2dCQUM1Qix1REFBeUI7Z0JBQ3pCLHdDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZixnQ0FBYztnQkFDZCw0QkFBWTtnQkFDWixvQ0FBZ0I7Z0JBQ2hCLDBCQUFXO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFLEVBRVI7U0FDSixDQUFDO09BRVcsU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIlxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbi8vIGltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknXHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjaGlldmVtZW50Q29tcG9uZW50IH0gZnJvbSAnfi9hY2hpZXZlbWVudC9hY2hpZXZlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25iYXJDb21wb25lbnQgfSBmcm9tICd+L2FjdGlvbmJhci9hY3Rpb25iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZUNvbXBvbmVudCB9IGZyb20gXCIuL2F0dGVuZGFuY2UvYXR0ZW5kYW5jZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwifi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9IGZyb20gXCJ+L25hdmlnYXRpb25iYXIvbmF2aWdhdGlvbmJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc0NvbXBvbmVudCB9IGZyb20gXCJ+L25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDaXJjdWxhckNvbXBvbmVudCB9IGZyb20gXCJ+L3Byb2dyZXNzYmFyLWNpcmN1bGFyL3Byb2dyZXNzYmFyLWNpcmN1bGFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdHVkZW50U2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSBcIn4vc3R1ZGVudC1zZWxlY3Rpb24vc3R1ZGVudC1zZWxlY3Rpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpbWV0YWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBY2hpZXZlbWVudFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYWNoaWV2ZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcFZhbHVlc1NlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYXBwdmFsdWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdHRlbmRhbmNlU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9hdHRlbmRhbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICBmcm9tICcuL2RhdGFiYXNlL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9oZWxwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbWV0YWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvdGltZXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZS91c2VyLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XHJcblxyXG4vLyByZWdpc3RlckVsZW1lbnQoJ0FuaW1hdGVkQ2lyY2xlJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWFuaW1hdGVkLWNpcmNsZScpLkFuaW1hdGVkQ2lyY2xlKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgRGF0YVNlcnZpY2UsIHsgZGF0YUVuY2Fwc3VsYXRpb246IGZhbHNlIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgQWNoaWV2ZW1lbnRDb21wb25lbnQsXHJcbiAgICAgICAgQWN0aW9uYmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEF0dGVuZGFuY2VDb21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWV3b3JrQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmlnYXRpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uc0NvbXBvbmVudCxcclxuICAgICAgICBQcm9ncmVzc2JhckNpcmN1bGFyQ29tcG9uZW50LFxyXG4gICAgICAgIFN0dWRlbnRTZWxlY3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgVGltZXRhYmxlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQWNoaWV2ZW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgIEFwcFZhbHVlc1NlcnZpY2UsXHJcbiAgICAgICAgQXR0ZW5kYW5jZVNlcnZpY2UsXHJcbiAgICAgICAgRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgIEhlbHBlclNlcnZpY2UsXHJcbiAgICAgICAgSG9tZXdvcmtTZXJ2aWNlLFxyXG4gICAgICAgIExvZ2dpbmdTZXJ2aWNlLFxyXG4gICAgICAgIExvZ2luU2VydmljZSxcclxuICAgICAgICBUaW1ldGFibGVTZXJ2aWNlLFxyXG4gICAgICAgIFVzZXJTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
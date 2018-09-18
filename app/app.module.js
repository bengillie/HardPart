"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var forms_2 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var element_registry_1 = require("nativescript-angular/element-registry");
var app_component_1 = require("./app.component");
var achievement_component_1 = require("~/achievement/achievement.component");
var attendance_component_1 = require("./attendance/attendance.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var navigationbar_component_1 = require("~/navigationbar/navigationbar.component");
var login_component_1 = require("./login/login.component");
var timetable_component_1 = require("./timetable/timetable.component");
var achievement_service_1 = require("~/service/achievement.service");
var attendance_service_1 = require("~/service/attendance.service");
var data_service_1 = require("./database/data.service");
var error_service_1 = require("./service/error.service");
var helper_service_1 = require("./service/helper.service");
var homework_service_1 = require("~/service/homework.service");
var login_service_1 = require("./service/login.service");
var logging_service_1 = require("./service/logging.service");
var timetable_service_1 = require("./service/timetable.service");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
element_registry_1.registerElement('AnimatedCircle', function () { return require('nativescript-animated-circle').AnimatedCircle; });
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
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                app_component_1.AppComponent,
                achievement_component_1.AchievementComponent,
                attendance_component_1.AttendanceComponent,
                dashboard_component_1.DashboardComponent,
                homework_component_1.HomeworkComponent,
                homework_detail_component_1.HomeworkDetailComponent,
                navigationbar_component_1.NavigationBarComponent,
                login_component_1.LoginComponent,
                timetable_component_1.TimetableComponent
            ],
            providers: [
                achievement_service_1.AchievementService,
                attendance_service_1.AttendanceService,
                error_service_1.ErrorService,
                helper_service_1.HelperService,
                homework_service_1.HomeworkService,
                login_service_1.LoginService,
                logging_service_1.LoggingService,
                timetable_service_1.TimetableService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw0REFBZ0Y7QUFDaEYsMEVBQXVFO0FBRXZFLGlEQUErQztBQUMvQyw2RUFBMkU7QUFDM0UsMEVBQXdFO0FBQ3hFLHVFQUFxRTtBQUNyRSxvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLG1GQUFpRjtBQUNqRiwyREFBeUQ7QUFDekQsdUVBQXFFO0FBRXJFLHFFQUFtRTtBQUNuRSxtRUFBaUU7QUFDakUsd0RBQXVEO0FBQ3ZELHlEQUF1RDtBQUN2RCwyREFBeUQ7QUFDekQsK0RBQTZEO0FBQzdELHlEQUF1RDtBQUN2RCw2REFBMkQ7QUFDM0QsaUVBQStEO0FBRS9ELHVFQUEyRTtBQUUzRSxrQ0FBZSxDQUFDLGdCQUFnQixFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxjQUFjLEVBQXRELENBQXNELENBQUMsQ0FBQztBQStDaEc7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTdDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gsK0JBQXVCO2dCQUN2Qix3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwwREFBOEIsQ0FBQyxPQUFPLENBQ2xDLDBCQUFXLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FDNUM7Z0JBQ0Qsc0NBQTRCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUVaLDRDQUFvQjtnQkFDcEIsMENBQW1CO2dCQUNuQix3Q0FBa0I7Z0JBQ2xCLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixnREFBc0I7Z0JBQ3RCLGdDQUFjO2dCQUNkLHdDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLHNDQUFpQjtnQkFDakIsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRSxFQUVSO1NBQ0osQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknXHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjaGlldmVtZW50Q29tcG9uZW50IH0gZnJvbSAnfi9hY2hpZXZlbWVudC9hY2hpZXZlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdHRlbmRhbmNlQ29tcG9uZW50IH0gZnJvbSBcIi4vYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwifi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9IGZyb20gXCJ+L25hdmlnYXRpb25iYXIvbmF2aWdhdGlvbmJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEFjaGlldmVtZW50U2VydmljZSB9IGZyb20gJ34vc2VydmljZS9hY2hpZXZlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZVNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2UvYXR0ZW5kYW5jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgZnJvbSAnLi9kYXRhYmFzZS9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZXJyb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvaGVscGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3RpbWV0YWJsZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KCdBbmltYXRlZENpcmNsZScsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1hbmltYXRlZC1jaXJjbGUnKS5BbmltYXRlZENpcmNsZSk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoXHJcbiAgICAgICAgICAgIERhdGFTZXJ2aWNlLCB7IGRhdGFFbmNhcHN1bGF0aW9uOiBmYWxzZSB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG5cclxuICAgICAgICBBY2hpZXZlbWVudENvbXBvbmVudCxcclxuICAgICAgICBBdHRlbmRhbmNlQ29tcG9uZW50LFxyXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICBIb21ld29ya0NvbXBvbmVudCxcclxuICAgICAgICBIb21ld29ya0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFRpbWV0YWJsZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEFjaGlldmVtZW50U2VydmljZSxcclxuICAgICAgICBBdHRlbmRhbmNlU2VydmljZSxcclxuICAgICAgICBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgSGVscGVyU2VydmljZSxcclxuICAgICAgICBIb21ld29ya1NlcnZpY2UsXHJcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIExvZ2dpbmdTZXJ2aWNlLFxyXG4gICAgICAgIFRpbWV0YWJsZVNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
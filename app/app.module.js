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
var attendance_component_1 = require("./attendance/attendance.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var navigationbar_component_1 = require("~/navigationbar/navigationbar.component");
var login_component_1 = require("./login/login.component");
var timetable_component_1 = require("./timetable/timetable.component");
var attendance_service_1 = require("~/service/attendance.service");
var data_service_1 = require("./database/data.service");
var error_service_1 = require("./service/error.service");
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
                attendance_component_1.AttendanceComponent,
                dashboard_component_1.DashboardComponent,
                homework_component_1.HomeworkComponent,
                homework_detail_component_1.HomeworkDetailComponent,
                navigationbar_component_1.NavigationBarComponent,
                login_component_1.LoginComponent,
                timetable_component_1.TimetableComponent
            ],
            providers: [
                attendance_service_1.AttendanceService,
                error_service_1.ErrorService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw0REFBZ0Y7QUFDaEYsMEVBQXVFO0FBRXZFLGlEQUErQztBQUMvQywwRUFBd0U7QUFDeEUsdUVBQXFFO0FBQ3JFLG9FQUFrRTtBQUNsRSx5RkFBc0Y7QUFDdEYsbUZBQWlGO0FBQ2pGLDJEQUF5RDtBQUN6RCx1RUFBcUU7QUFFckUsbUVBQWlFO0FBQ2pFLHdEQUF1RDtBQUN2RCx5REFBdUQ7QUFDdkQsK0RBQTZEO0FBQzdELHlEQUF1RDtBQUN2RCw2REFBMkQ7QUFDM0QsaUVBQStEO0FBRS9ELHVFQUEyRTtBQUUzRSxrQ0FBZSxDQUFDLGdCQUFnQixFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxjQUFjLEVBQXRELENBQXNELENBQUMsQ0FBQztBQTJDaEc7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXpDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gsK0JBQXVCO2dCQUN2Qix3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwwREFBOEIsQ0FBQyxPQUFPLENBQ2xDLDBCQUFXLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FDNUM7Z0JBQ0Qsc0NBQTRCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDBDQUFtQjtnQkFDbkIsd0NBQWtCO2dCQUNsQixzQ0FBaUI7Z0JBQ2pCLG1EQUF1QjtnQkFDdkIsZ0RBQXNCO2dCQUN0QixnQ0FBYztnQkFDZCx3Q0FBa0I7YUFDckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asc0NBQWlCO2dCQUNqQiw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZiw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxvQ0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFLEVBRVI7U0FDSixDQUFDO09BRVcsU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSdcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZUNvbXBvbmVudCB9IGZyb20gXCIuL2F0dGVuZGFuY2UvYXR0ZW5kYW5jZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmtDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrL2hvbWV3b3JrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWV3b3JrRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9ob21ld29yay1kZXRhaWwvaG9tZXdvcmstZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25CYXJDb21wb25lbnQgfSBmcm9tIFwifi9uYXZpZ2F0aW9uYmFyL25hdmlnYXRpb25iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpbWV0YWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBdHRlbmRhbmNlU2VydmljZSB9IGZyb20gJ34vc2VydmljZS9hdHRlbmRhbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICBmcm9tICcuL2RhdGFiYXNlL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSG9tZXdvcmtTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZS9ob21ld29yay5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbG9nZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGltZXRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZS90aW1ldGFibGUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcclxuXHJcbnJlZ2lzdGVyRWxlbWVudCgnQW5pbWF0ZWRDaXJjbGUnLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtYW5pbWF0ZWQtY2lyY2xlJykuQW5pbWF0ZWRDaXJjbGUpO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KFxyXG4gICAgICAgICAgICBEYXRhU2VydmljZSwgeyBkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBBdHRlbmRhbmNlQ29tcG9uZW50LFxyXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICBIb21ld29ya0NvbXBvbmVudCxcclxuICAgICAgICBIb21ld29ya0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFRpbWV0YWJsZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEF0dGVuZGFuY2VTZXJ2aWNlLFxyXG4gICAgICAgIEVycm9yU2VydmljZSxcclxuICAgICAgICBIb21ld29ya1NlcnZpY2UsXHJcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgIExvZ2dpbmdTZXJ2aWNlLFxyXG4gICAgICAgIFRpbWV0YWJsZVNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
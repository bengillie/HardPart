"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var forms_2 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var navigationbar_component_1 = require("~/navigationbar/navigationbar.component");
var login_component_1 = require("./login/login.component");
var timetable_component_1 = require("./timetable/timetable.component");
var data_service_1 = require("./database/data.service");
var error_service_1 = require("./service/error.service");
var homework_service_1 = require("~/service/homework.service");
var login_service_1 = require("./service/login.service");
var logging_service_1 = require("./service/logging.service");
var timetable_service_1 = require("./service/timetable.service");
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
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                homework_component_1.HomeworkComponent,
                homework_detail_component_1.HomeworkDetailComponent,
                navigationbar_component_1.NavigationBarComponent,
                login_component_1.LoginComponent,
                timetable_component_1.TimetableComponent
            ],
            providers: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw0REFBZ0Y7QUFFaEYsaURBQStDO0FBQy9DLHVFQUFxRTtBQUNyRSxvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLG1GQUFpRjtBQUNqRiwyREFBeUQ7QUFDekQsdUVBQXFFO0FBRXJFLHdEQUF1RDtBQUN2RCx5REFBdUQ7QUFDdkQsK0RBQTZEO0FBQzdELHlEQUF1RDtBQUN2RCw2REFBMkQ7QUFDM0QsaUVBQStEO0FBRS9ELHVFQUEyRTtBQXlDM0U7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXZDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gsK0JBQXVCO2dCQUN2Qix3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwwREFBOEIsQ0FBQyxPQUFPLENBQ2xDLDBCQUFXLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FDNUM7Z0JBQ0Qsc0NBQTRCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLHdDQUFrQjtnQkFDbEIsc0NBQWlCO2dCQUNqQixtREFBdUI7Z0JBQ3ZCLGdEQUFzQjtnQkFDdEIsZ0NBQWM7Z0JBQ2Qsd0NBQWtCO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLG9DQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsRUFFUjtTQUNKLENBQUM7T0FFVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwifi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9IGZyb20gXCJ+L25hdmlnYXRpb25iYXIvbmF2aWdhdGlvbmJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gIGZyb20gJy4vZGF0YWJhc2UvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2Vycm9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21ld29ya1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlL2hvbWV3b3JrLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3RpbWV0YWJsZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KFxyXG4gICAgICAgICAgICBEYXRhU2VydmljZSwgeyBkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZXdvcmtDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBUaW1ldGFibGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgSG9tZXdvcmtTZXJ2aWNlLFxyXG4gICAgICAgIExvZ2luU2VydmljZSxcclxuICAgICAgICBMb2dnaW5nU2VydmljZSxcclxuICAgICAgICBUaW1ldGFibGVTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
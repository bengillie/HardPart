"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var forms_2 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var login_component_1 = require("./login/login.component");
var timetable_component_1 = require("./timetable/timetable.component");
var data_service_1 = require("./database/data.service");
var error_service_1 = require("./service/error.service");
var homework_service_1 = require("~/service/homework.service");
var login_service_1 = require("./service/login.service");
var logging_service_1 = require("./service/logging.service");
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
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(data_service_1.DataService, { dataEncapsulation: false })
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                homework_component_1.HomeworkComponent,
                homework_detail_component_1.HomeworkDetailComponent,
                login_component_1.LoginComponent,
                timetable_component_1.TimetableComponent
            ],
            providers: [
                error_service_1.ErrorService,
                homework_service_1.HomeworkService,
                login_service_1.LoginService,
                logging_service_1.LoggingService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0MsNkNBQXdEO0FBQ3hELHNDQUEyRDtBQUUzRCw2Q0FBaUQ7QUFDakQsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUU5RSxpREFBK0M7QUFDL0MsdUVBQXFFO0FBQ3JFLG9FQUFrRTtBQUNsRSx5RkFBc0Y7QUFDdEYsMkRBQXlEO0FBQ3pELHVFQUFxRTtBQUVyRSx3REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELCtEQUE2RDtBQUM3RCx5REFBdUQ7QUFDdkQsNkRBQTJEO0FBRTNELHVFQUEyRTtBQXNDM0U7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gsK0JBQXVCO2dCQUN2Qix3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwwREFBOEIsQ0FBQyxPQUFPLENBQ2xDLDBCQUFXLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FDNUM7YUFDSjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWix3Q0FBa0I7Z0JBQ2xCLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixnQ0FBYztnQkFDZCx3Q0FBa0I7YUFDckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFLEVBRVI7U0FDSixDQUFDO09BRVcsU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCJ+L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWV3b3JrQ29tcG9uZW50IH0gZnJvbSAnLi9ob21ld29yay9ob21ld29yay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21ld29ya0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaG9tZXdvcmstZGV0YWlsL2hvbWV3b3JrLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUaW1ldGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi90aW1ldGFibGUvdGltZXRhYmxlLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgZnJvbSAnLi9kYXRhYmFzZS9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZXJyb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWV3b3JrU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2UvaG9tZXdvcmsuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2xvZ2dpbmcuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgRGF0YVNlcnZpY2UsIHsgZGF0YUVuY2Fwc3VsYXRpb246IGZhbHNlIH1cclxuICAgICAgICApXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICBIb21ld29ya0NvbXBvbmVudCxcclxuICAgICAgICBIb21ld29ya0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBUaW1ldGFibGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgSG9tZXdvcmtTZXJ2aWNlLFxyXG4gICAgICAgIExvZ2luU2VydmljZSxcclxuICAgICAgICBMb2dnaW5nU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
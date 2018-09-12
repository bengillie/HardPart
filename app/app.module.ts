import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { AppComponent } from "./app.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { DashboardComponent } from "~/dashboard/dashboard.component";
import { HomeworkComponent } from './homework/homework.component';
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { LoginComponent } from "./login/login.component";
import { TimetableComponent } from "./timetable/timetable.component";

import { AttendanceService } from '~/service/attendance.service';
import { DataService }  from './database/data.service';
import { ErrorService } from './service/error.service';
import { HomeworkService } from "~/service/homework.service";
import { LoginService } from './service/login.service';
import { LoggingService } from './service/logging.service';
import { TimetableService } from './service/timetable.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        FormsModule,
        NativeScriptFormsModule,
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            DataService, { dataEncapsulation: false }
        ),
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        AttendanceComponent,
        DashboardComponent,
        HomeworkComponent,
        HomeworkDetailComponent,
        LoginComponent,
        TimetableComponent
    ],
    providers: [
        AttendanceService,
        ErrorService,
        HomeworkService,
        LoginService,
        LoggingService,
        TimetableService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        
    ]
})

export class AppModule { }

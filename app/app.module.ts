import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular"
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
// import { registerElement } from 'nativescript-angular/element-registry'

import { AppComponent } from "./app.component";
import { AchievementComponent } from '~/achievement/achievement.component';
import { ActionbarComponent } from '~/actionbar/actionbar.component';
import { AttendanceComponent } from "./attendance/attendance.component";
import { DashboardComponent } from "~/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "~/forgot-password/forgot-password.component";
import { HomeworkComponent } from './homework/homework.component';
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { LoginComponent } from "./login/login.component";
import { NavigationBarComponent } from "~/navigationbar/navigationbar.component";
import { ProgressbarCircularComponent } from "~/progressbar-circular/progressbar-circular.component";
import { StudentSelectionComponent } from "~/student-selection/student-selection.component";
import { TimetableComponent } from "./timetable/timetable.component";

import { AchievementService } from '~/service/achievement.service';
import { AppValuesService } from '~/service/appvalues.service';
import { AttendanceService } from '~/service/attendance.service';
import { DataService }  from './database/data.service';
import { ErrorService } from './service/error.service';
import { HelperService } from './service/helper.service';
import { HomeworkService } from "~/service/homework.service";
import { LoginService } from './service/login.service';
import { LoggingService } from './service/logging.service';
import { TimetableService } from './service/timetable.service';
import { UserService } from './service/user.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// registerElement('AnimatedCircle', () => require('nativescript-animated-circle').AnimatedCircle);

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
        NativeScriptUIGaugeModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,

        AchievementComponent,
        ActionbarComponent,
        AttendanceComponent,
        DashboardComponent,
        ForgotPasswordComponent,
        HomeworkComponent,
        HomeworkDetailComponent,
        NavigationBarComponent,
        LoginComponent,
        ProgressbarCircularComponent,
        StudentSelectionComponent,
        TimetableComponent
    ],
    providers: [
        AchievementService,
        AppValuesService,
        AttendanceService,
        ErrorService,
        HelperService,
        HomeworkService,
        LoginService,
        LoggingService,
        TimetableService,
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        
    ]
})

export class AppModule { }

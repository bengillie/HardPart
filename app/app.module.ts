import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular"
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppComponent } from "./app.component";
import { AccountSecurityComponent } from "./account-security/account-security.component";
import { AchievementComponent } from '~/achievement/achievement.component';
import { ActionbarComponent } from '~/actionbar/actionbar.component';
import { AdvertComponent } from '~/advert/advert.component';
import { AttendanceComponent } from "./attendance/attendance.component";
import { BehaviourComponent } from "~/behaviour/behaviour.component";
import { DashboardComponent } from "~/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "~/forgot-password/forgot-password.component";
import { HomeworkComponent } from './homework/homework.component';
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { LoginComponent } from "./login/login.component";
import { MessagePageComponent } from "./message-page/message-page.component";
import { NavigationBarComponent } from "~/navigationbar/navigationbar.component";
import { NotificationComponent } from "~/notification/notification.component";
import { NotificationLoginComponent } from '~/notification-login/notification-login.component';
import { ProgressbarCircularComponent } from "~/progressbar-circular/progressbar-circular.component";
import { StudentSelectionComponent } from "~/student-selection/student-selection.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { UpdateSecurityDetailsComponent } from "./update-security-details/update-security-details.component";

import { AchievementService } from '~/service/achievement.service';
import { AdvertService } from '~/service/advert.service';
import { AppValuesService } from '~/service/appvalues.service';
import { AttendanceService } from '~/service/attendance.service';
import { BehaviourService } from '~/service/behaviour.service';
import { DataService }  from './database/data.service';
import { ErrorService } from './service/error.service';
import { HelperService } from './service/helper.service';
import { HttpService } from './service/httpservice.service';
import { HomeworkService } from "~/service/homework.service";
import { LoggingService } from './service/logging.service';
import { LoginService } from './service/login.service';
import { NotificationService } from '~/service/notification.service';
import { TimetableService } from './service/timetable.service';
import { UserService } from './service/user.service';

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
        NativeScriptUIGaugeModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        AccountSecurityComponent,
        AchievementComponent,
        ActionbarComponent,
        AdvertComponent,
        AttendanceComponent,
        BehaviourComponent,
        DashboardComponent,
        ForgotPasswordComponent,
        HomeworkComponent,
        HomeworkDetailComponent,
        LoginComponent,
        MessagePageComponent,
        NavigationBarComponent,
        NotificationComponent,
        NotificationLoginComponent,
        ProgressbarCircularComponent,
        StudentSelectionComponent,
        TimetableComponent,
        UpdateSecurityDetailsComponent
    ],
    providers: [
        AchievementService,
        AdvertService,
        AppValuesService,
        AttendanceService,
        BehaviourService,
        ErrorService,
        HelperService,
        HttpService,
        HomeworkService,
        LoggingService,
        LoginService,
        NotificationService,
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

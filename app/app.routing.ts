import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AccountSecurityComponent } from "./account-security/account-security.component";
import { AchievementComponent } from "~/achievement/achievement.component";
import { AttendanceComponent } from "~/attendance/attendance.component";
import { DashboardComponent } from "~/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "~/forgot-password/forgot-password.component";
import { HomeworkComponent } from "./homework/homework.component";
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { LoginComponent } from "./login/login.component";
import { MessagePageComponent } from "./message-page/message-page.component";
import { NotificationComponent } from "~/notification/notification.component";
import { StudentSelectionComponent } from './student-selection/student-selection.component';
import { TimetableComponent } from './timetable/timetable.component';
import { UpdateSecurityDetailsComponent } from './update-security-details/update-security-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: '', redirectTo: '/attendance', pathMatch: 'full' },

    { path: "accountsecurity", component: AccountSecurityComponent},
    { path: "achievement", component: AchievementComponent},
    { path: "attendance", component: AttendanceComponent},
    { path: "dashboard", component: DashboardComponent},
    { path: "forgotpassword", component: ForgotPasswordComponent },
    { path: "login", component: LoginComponent },
    { path: "homework", component: HomeworkComponent },
    { path: "homeworkdetails/:id", component: HomeworkDetailComponent },
    { path: "messagepage", component: MessagePageComponent },
    { path: "notification", component: NotificationComponent},
    { path: "studentselection", component: StudentSelectionComponent },
    { path: "timetable", component: TimetableComponent},
    { path: "updatesecuritydetails", component: UpdateSecurityDetailsComponent}
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
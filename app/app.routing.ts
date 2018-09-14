import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AchievementComponent } from "~/achievement/achievement.component";
import { AttendanceComponent } from "~/attendance/attendance.component";
import { DashboardComponent } from "~/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { HomeworkComponent } from "./homework/homework.component";
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
<<<<<<< HEAD
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/achievement', pathMatch: 'full' },
=======
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    /* { path: '', redirectTo: '/attendance', pathMatch: 'full' }, */
>>>>>>> 7319842f7d9cf007fc59828f7094623838784221

    { path: "achievement", component: AchievementComponent},
    { path: "attendance", component: AttendanceComponent},
    { path: "dashboard", component: DashboardComponent},
    { path: "login", component: LoginComponent },
    { path: "homework", component: HomeworkComponent },
    { path: "homeworkdetails/:id", component: HomeworkDetailComponent },
    { path: "timetable", component: TimetableComponent}
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
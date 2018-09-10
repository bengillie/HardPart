import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DashboardComponent } from "~/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { HomeworkComponent } from "./homework/homework.component";
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: '', redirectTo: '/homeworkdetails/1', pathMatch: 'full' },

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
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DashboardComponent } from "~/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { HomeworkComponent } from "./homework/homework.component";
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/homework', pathMatch: 'full' },
    // { path: '', redirectTo: '/homeworkdetails/1', pathMatch: 'full' },

    { path: "dashboard", component: DashboardComponent},
    { path: "login", component: LoginComponent },
    { path: "homework", component: HomeworkComponent },
    { path: "homeworkdetails/:id", component: HomeworkDetailComponent }
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
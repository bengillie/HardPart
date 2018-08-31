import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomeworkComponent } from "./homework/homework.component";
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';

const routes: Routes = [
    // { path: '', redirectTo: '/homeworkdetails/1', pathMatch: 'full' },
    { path: '', redirectTo: '/homework', pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "homework", component: HomeworkComponent },
    { path: "homeworkdetails/:id", component: HomeworkDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
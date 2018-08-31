import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeworkComponent } from './homework/homework.component';
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';

import { DataService }  from './database/data.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HomeworkService } from "~/service/homework.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(DataService, { dataEncapsulation: false })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeworkComponent,
        HomeworkDetailComponent
    ],
    providers: [
        HomeworkService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        
    ]
})

export class AppModule { }

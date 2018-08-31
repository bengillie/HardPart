import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './database/data.service';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "~/dashboard/dashboard.component";
import { LoginService } from './service/login.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        FormsModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
        HttpClientModule,

        HttpClientInMemoryWebApiModule.forRoot(
            DataService, { dataEncapsulation: false }
          )
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent
    ],
    providers: [
        LoginService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        
    ]
})

export class AppModule { }

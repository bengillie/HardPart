import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'

import { UserModel } from "../model/user.model"

import { MatInputModule } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    isLoggingIn = true;
    user: UserModel;
    input: any;

    @ViewChild('scrollView') scrollView: ElementRef

    private isLoading = true

    constructor(private router: RouterExtensions) { 
        this.input = {
            "username": "",
            "password": "",
            "birthdate": ""
        }
    }

    ngOnInit() { }

    public login() {
        if (this.input.username && this.input.password && this.input.birthdate) {

        }
    }
}

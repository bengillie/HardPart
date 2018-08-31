import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'

import { UserModel } from "../model/user.model"

@Component({
    moduleId: module.id,
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    title = "Login";
    isLoggingIn = true;
    user: UserModel;

    @ViewChild('scrollView') scrollView: ElementRef

    private isLoading = true

    constructor(
        private router: RouterExtensions,
    ) { }

    ngOnInit() { }

    public login() {
    }
}

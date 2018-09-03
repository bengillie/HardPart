import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'

import { UserModel } from "../model/user.model"
import { LoginService } from '../service/login.service';

@Component({
    moduleId: module.id,
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    user: UserModel;

    errorMessage = "";

    @ViewChild("username") username: ElementRef;
    @ViewChild("password") password: ElementRef;
    @ViewChild("dob") dob: ElementRef;

    constructor(
        private loginService: LoginService,
        private router: RouterExtensions
    ) { }

    ngOnInit() { 
        this.user = new UserModel(); 
    }

    login() {
        this.errorMessage = "";
        let isEmpty = this.checkUserInput(this.user);

        if (isEmpty != false) {
            this.loginService.getUser(this.user)
                .subscribe(user => {
                    this.checkUser(user);
                })
        }
    }

    private checkUserInput(user): boolean {
        if ((!user.username) || (!user.password) || (!user.birthdate)) {
            this.errorMessage = "Required fields";
            if (!user.username) {
                this.username.nativeElement.borderColor = "red";
            }
            
            if (!user.password) {
                this.password.nativeElement.borderColor = "red";
            } 
            
            if (!user.birthdate) {
                this.dob.nativeElement.borderColor = "red";
            }
            
            return false;
        }
    }

    private checkUser(user: UserModel): void {
        if (!user || !user.username ) {
            this.errorMessage = "User not found";
        } else {
            this.router.navigate(["dashboard"]);
        }
    }
}

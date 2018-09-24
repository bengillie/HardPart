import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { User } from "../model/user.model"

import { AppValuesService } from '../service/appvalues.service';
import { LoginService } from '../service/login.service';

@Component({
    moduleId: module.id,
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit, OnDestroy {
    private subscription : Subscription;
    logIn: User;

    errorMessage = "";

    @ViewChild("username") username: ElementRef;
    @ViewChild("password") password: ElementRef;
    @ViewChild("dob") dob: ElementRef;

    constructor(
        private appValuesService: AppValuesService,
        private loginService: LoginService,
        private router: RouterExtensions,
    ) { }

    ngOnInit() { 
        this.logIn = new User();
        // this.logIn.username = 'parent';
        // this.logIn.password = 'parent';
        // this.logIn.birthdate = '01/01/1950';
        // this.logIn.username = 'parent1';
        // this.logIn.password = 'parent';
        // this.logIn.birthdate = '01/02/1950';
        // this.login();
    }

    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }

    forgotPassword() {
        this.router.navigate([`forgotpassword`]);
    }

    login() {
        this.errorMessage = "";
        let isValid = this.validInput(this.logIn);

        if (isValid != false) {
            this.subscription = this.loginService.getUser(this.logIn)
                .subscribe(user => {
                    this.checkUser(user);
                })
        }
    }

    private validInput(logIn): boolean {
        if ((!logIn.username) || (!logIn.password) || (!logIn.birthdate)) {
            this.errorMessage = "Required fields";
            if (!logIn.username) {
                this.username.nativeElement.borderColor = "red";
            }
            
            if (!logIn.password) {
                this.password.nativeElement.borderColor = "red";
            } 
            
            if (!logIn.birthdate) {
                this.dob.nativeElement.borderColor = "red";
            }
            
            return false;
        }

        return true;
    }

    private checkUser(login: User): void {
        if ((login === undefined) ||
            (login.username != this.logIn.username) ||
            (login.password != this.logIn.password) ||
            (login.birthdate != this.logIn.birthdate)) {
            this.errorMessage = "User not found";
        } else {
            this.appValuesService.setLoggedInUser(login);
            this.router.navigate([`dashboard`]);
        }
    }
}

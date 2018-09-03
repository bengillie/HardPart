import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { UserModel } from "../model/user.model"
import { LoginService } from '../service/login.service';

@Component({
    moduleId: module.id,
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
    private subscription : Subscription;
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

    ngOnDestroy() {
        console.log("ngOnDestroy");
        this.subscription.unsubscribe();
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
        if ((user === undefined) ||
            (user.username != this.user.username) ||
            (user.password != this.user.password) ||
            (user.birthdate != this.user.birthdate)) {
            this.errorMessage = "User not found";
        } else {
            this.router.navigate(["dashboard"]);
        }
    }
}

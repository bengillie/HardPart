import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs';

import { User } from '../shared/model/user.model';

import { AppValuesService } from '../shared/service/appvalues.service';
import { LoginService } from '../shared/service/login.service';
import { AuthorizationService } from '~/shared/service/authorization.service';
import { UserService } from '~/shared/service/user.service';

@Component({
	moduleId: module.id,
	selector: 'ns-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit, OnDestroy {
	private subscription: Subscription;
	logIn: User;
	isLoginBusy: boolean = false;

	errorMessage = '';

	@ViewChild('username')
	username: ElementRef;
	@ViewChild('password')
	password: ElementRef;

	constructor(
		private appValuesService: AppValuesService,
		private loginService: LoginService,
		private router: RouterExtensions,
		private authorizationService: AuthorizationService,
		private userService: UserService
	) {}

	ngOnInit() {
		this.logIn = new User();

		// this.logIn.username = 'parent';
		// this.logIn.password = 'parent';
		// this.logIn.birthdate = '01/01/1950';

		// this.logIn.username = 'student1';
		// this.logIn.password = 'password';
		// this.logIn.birthdate = '02/03/2001';

		// this.logIn.username = '1';
		// this.logIn.password = '1';
		// this.logIn.birthdate = '1';

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

	async login() {
		if (this.isLoginBusy) {
			return;
		}

		this.isLoginBusy = true;
		this.errorMessage = '';
		let isValid = this.validInput(this.logIn);

		if (!isValid) {
			this.isLoginBusy = false;
			return;
		}

		await this.authorizationService.Login(this.logIn.username, this.logIn.password);
		await this.loginService.HandleLogin(this.logIn.username);
		this.isLoginBusy = false;

		if (!this.authorizationService.IsLoggedIn()) {
			return;
		}
	}

	private validInput(logIn): boolean {
		if (!logIn.username || !logIn.password || !logIn.birthdate) {
			this.errorMessage = 'Required fields';
			if (!logIn.username) {
				this.username.nativeElement.borderColor = 'red';
			}

			if (!logIn.password) {
				this.password.nativeElement.borderColor = 'red';
			}
			return false;
		}

		return true;
	}
}

import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as auth0 from 'auth0-js';

import { AuthorizationService } from '../service/authorization.service';
import { HttpService } from '../service/httpservice.service';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

import { Auth0Config } from './Auth0Config.model';
import { Auth0ResponseData, IdTokenPayload } from './auth0ResponseData.model';

@Injectable({
	providedIn: 'root',
})
export class Auth0Service {
	private url = 'authorization';

	private auth0: any;

	public Auth0Loading = true;
	public DisplayLoginChoice = true;
	public Auth0Available = false;

	public Auth0LoginChosen = false;
	public FlytdexLoginChosen = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private authorizationService: AuthorizationService,
		private httpService: HttpService,
		private loginService: LoginService,
		private userService: UserService
	) {}

	public async GetAuth0Credentials(): Promise<void> {
		const fullUrl = `${this.url}/GetAuth0Params`;

		return new Promise<void>((resolve, reject) => {
			this.authorizationService
				.GetForAuth0<Auth0Config>(fullUrl)
				.then((result: Auth0Config) => {
					if (result) {
						this.auth0 = new auth0.WebAuth({
							clientID: result.clientId,
							domain: result.domain,
							responseType: result.responseType,
							redirectUri: result.callbackUrl,
						});
						sessionStorage.setItem('auth0Cred', JSON.stringify(result));
						this.DisplayLoginChoice = true;
						this.Auth0Available = true;
						this.Auth0Loading = false;
						resolve();
					} else {
						// const snackBarRef = this.snackBar.open('An error occurred: Only Flytdex-based login is possible', 'Dismiss');
						// snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
						this.DisplayLoginChoice = false;
						this.FlytdexLoginChosen = true;
						this.Auth0Available = false;
						this.Auth0Loading = false;
						reject('API response was null');
					}
				})
				.catch(error => {
					// const snackBarRef = this.snackBar.open('An error occurred: Only Flytdex-based login is possible', 'Dismiss');
					// snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
					console.log(error.message);
					this.DisplayLoginChoice = false;
					this.FlytdexLoginChosen = true;
					this.Auth0Available = false;
					this.Auth0Loading = false;
					reject(`An error occurred: ${error.message}`);
				});
		});
	}

	public FlytdexLoginClicked(): void {
		this.DisplayLoginChoice = false;
		this.FlytdexLoginChosen = true;
	}

	public Auth0LoginClicked(): void {
		this.DisplayLoginChoice = false;
		this.Auth0LoginChosen = true;
		this.LoginUsingAuth0();
	}

	public LoginUsingAuth0(): void {
		const cachedCredentials: Auth0Config = JSON.parse(sessionStorage.getItem('auth0Cred'));
		if (!cachedCredentials) {
			this.LoginFailed('An error occurred: Failed to get Auth0 Credentials. Please try again or use Flytdex login');
		}
		this.auth0 = new auth0.WebAuth({
			clientID: cachedCredentials.clientId,
			domain: cachedCredentials.domain,
			responseType: cachedCredentials.responseType,
			redirectUri: cachedCredentials.callbackUrl,
		});
		this.auth0.authorize({});
	}

	public ShowLoginOptions(): void {
		this.Auth0LoginChosen = false;
		this.FlytdexLoginChosen = false;
		this.DisplayLoginChoice = true;
	}

	public HandleAuthentication(): void {
		const cachedCredentials: Auth0Config = JSON.parse(sessionStorage.getItem('auth0Cred'));
		if (!cachedCredentials) {
			this.LoginFailed('An error occurred: Failed to get Auth0 Credentials. Please try again or use Flytdex login');
		}
		this.auth0 = new auth0.WebAuth({
			clientID: cachedCredentials.clientId,
			domain: cachedCredentials.domain,
			responseType: cachedCredentials.responseType,
			redirectUri: cachedCredentials.callbackUrl,
		});
		this.auth0.parseHash((err: any, authResponse: Auth0ResponseData) => {
			if (authResponse && authResponse.accessToken && authResponse.idToken && authResponse.idTokenPayload) {
				const payload: IdTokenPayload = authResponse.idTokenPayload;
				if (payload && payload.email) {
					this.loginForAuth0(authResponse);
				} else {
					this.LoginFailed('An error occurred: No email address available for matching. Please try again or use Flytdex login');
				}
			} else if (err) {
				this.router.navigate(['/login']);
				console.log(err);
				// const snackBarRef = this.snackBar.open('An error occurred: Single Sign On (SSO) failed.  Please try again or use Flytdex login', 'Dismiss');
				// snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
			}
			this.Auth0Loading = false;
		});
	}

	private async loginForAuth0(authResponse: Auth0ResponseData): Promise<void> {
		const successful = await this.authorizationService.LoginForAuth0(authResponse);
		if (!successful) {
			return;
		}
		this.loginService.HandleLogin(authResponse.idTokenPayload.email);
	}

	public LoginFailed(message: string): void {
		this.router.navigate(['/login']);
		// const snackBarRef = this.snackBar.open(message, 'Dismiss');
		// snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
	}
}

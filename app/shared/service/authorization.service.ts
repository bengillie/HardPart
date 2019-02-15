import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { ErrorService } from './error.service';

import { Auth0User } from '../auth0/auth0User.model';
import { Auth0ResponseData, IdTokenPayload } from '../Auth0/auth0ResponseData.model';
import { AuthSession } from '../model/authSession.model';
import { TokenRequest } from '../requests/token-request.model';
import { Token } from '../model/token.model';
import { ApiResult } from '../model/apiResult.model';
import { retry, tap } from 'rxjs/operators';
import { ResultType } from '../model/enums/resultType.model';
import { AppValuesService } from './appvalues.service';

@Injectable({
	providedIn: 'root',
})
export class AuthorizationService {
	public token: Token;

	private baseUrl = '';
	private serviceUrl = 'authorization/';
	private session: AuthSession;

	constructor(private router: Router, private http: HttpClient, private errorService: ErrorService, private appValuesService: AppValuesService) {
		this.baseUrl = this.appValuesService.ApiUrl;
	}

	private async getAuthorizeTokenFromAPI(url: string, body: any): Promise<Token> {
		const fullUrl = this.baseUrl + url;

		return new Promise<Token>((resolve, reject) => {
			this.http
				.post<Token>(fullUrl, body)
				.toPromise()
				.then(
					result => {
						resolve(result);
					},
					error => {
						this.errorService.HandleError(error);
						reject(error);
					}
				);
		});
	}

	public async GetForAuth0<T>(url: string): Promise<T> {
		const fullUrl = this.baseUrl + url;
		const httpOptions = {
			headers: new HttpHeaders().append('Content-Type', 'application/json'),
			params: new HttpParams(),
		};

		return new Promise<T>((resolve, reject) => {
			this.http
				.get<ApiResult<T>>(fullUrl, httpOptions)
				.pipe(
					retry(1),
					tap(() => console.log(`Http GET: ${fullUrl}`))
				)
				.toPromise()
				.then(
					result => {
						if (result.resultType === ResultType.Error) {
							this.errorService.HandleError(result.message);
							reject(result.message);
						}
						if (result.resultType === ResultType.Warning) {
							console.warn(result.message);
						}
						console.log('Success');
						resolve(result.result);
					},
					error => {
						this.errorService.HandleError(error);
						reject(error);
					}
				);
		});
	}

	public IsLoggedIn(): boolean {
		if (this.session) {
			return true;
		}
		// this.session = JSON.parse(sessionStorage.getItem('authSession'));
		// if (this.session) {
		// 	return true;
		// }
		return false;
	}

	public async Login(username: string, password: string) {
		const fullUrl = this.baseUrl + this.serviceUrl + 'requesttoken';
		const body = new TokenRequest(username, password);

		await this.getAuthorizeTokenFromAPI(fullUrl, body)
			.then(result => (this.token = result))
			.catch(error => {
				this.token = undefined;
				this.session = undefined;
				console.log('Could not get token');
			});

		if (!this.token) {
			return;
		}
		this.session = new AuthSession(username, this.token.token);
		// sessionStorage.setItem('authSession', JSON.stringify(this.session));
	}

	public async LoginForAuth0(authResponse: Auth0ResponseData): Promise<boolean> {
		const payload: IdTokenPayload = authResponse.idTokenPayload;
		const fullUrl = this.serviceUrl + 'RequestTokenForAuth0';
		const body = new Auth0User(payload.email, payload.given_name, payload.family_name);

		await this.getAuthorizeTokenFromAPI(fullUrl, body)
			.then(result => (this.token = result))
			.catch(error => {
				this.token = undefined;
				this.session = undefined;
				console.log('Could not get token');
			});

		if (!this.token) {
			return false;
		}
		this.session = new AuthSession(payload.email, this.token.token);
		// sessionStorage.setItem('authSession', JSON.stringify(this.session));
		return true;
	}

	public Logout() {
		this.session = undefined;
		// sessionStorage.clear();
	}

	public ReturnSessionToken(): string {
		return this.session.token;
	}
}

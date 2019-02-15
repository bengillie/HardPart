export class AuthSession {
	username: string;
	token: string;
	firstLogin: boolean;

	public constructor(username: string, token: string, firstLogin: boolean) {
		this.username = username;
		this.token = token;
		this.firstLogin = firstLogin;
	}
}

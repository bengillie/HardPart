export class Auth0ResponseData {
	accessToken: string;
	appState: string;
	expiresIn: number;
	idToken: string;
	idTokenPayload: IdTokenPayload;
	refreshToken: string;
	scope: any;
	state: string;
	tokenType: string;
}

export class IdTokenPayload {
	at_hash: string; // e.g. '0UC1znMaaCKDRNfBVnnsmg';
	aud: string; // e.g. 'v3wIiER6Y7xhr6dZysYMnng01akCRRog';
	email: string; // e.g. 'dan@flytdex.com';
	email_verified: boolean; // e.g. true;
	exp: number; // e.g. 1549624503;
	family_name: string; // e.g. 'Godfrey';
	middle_names: string;
	given_name: string; // e.g. 'Daniel';
	iat: number; // e.g. 154958850;
	iss: string; // e.g. "https://dan-oxford-edtech.eu.auth0.com/"
	locale: string; // e.g. "en-GB"
	name: string; // e.g. "Daniel Godfrey"
	nickname: string; // e.g. "dan"
	nonce: string; // e.g. "sD3MwX.KrkcqjceOvUUJSLqUYcfGKHtq"
	picture: string; // e.g. "https://lh4.googleusercontent.com/-HXKPatb_m_I/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQNJCGKqjzAScfSBdSGcEFfiVF6YwA/mo/photo.jpg"
	sub: string; // e.g. "google-oauth2|111031876097307929142"
	updatedAt: Date; // e.g.2019-02-08T01:15:03.762Z
}

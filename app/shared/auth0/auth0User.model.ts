export class Auth0User {
	forename: string;
	middleNames: string;
	surname: string;
	email: string;

	constructor(email: string, forename: string, surname: string, middleNames?: string) {
		this.email = email;
		this.forename = forename;
		this.surname = surname;
		this.middleNames = middleNames;
	}
}

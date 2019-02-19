export class UserRequest {
	id: string;
	password: string;
	preferredEmail: string;
	preferredPhone: string;

	constructor(id: string, password: string, preferredEmail: string, preferredPhone: string) {
		(this.id = id), (this.password = password), (this.preferredEmail = preferredEmail), (this.preferredPhone = preferredPhone);
	}
}

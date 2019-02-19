import { UserSchool } from './userschool.model';

export class UserSession {
	userId: string;
	username: string;
	userSchools: UserSchool[];
	lastLoginDateTime: Date;
	phoneNumber: string;
	image: string;

	public constructor(userId: string, username: string, userSchools: UserSchool[], lastLoginDateTime: Date) {
		this.userId = userId;
		this.username = username;
		this.userSchools = userSchools;
		this.lastLoginDateTime = lastLoginDateTime;
	}

	activeUserSchool: UserSchool;
}

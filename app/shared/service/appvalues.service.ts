import { Injectable } from '@angular/core';

import { Notification } from '~/shared/model/notification.model';
import { User } from '../model/user.model';
import { UserSession } from '../model/userSession.model';

@Injectable()
export class AppValuesService {
	constructor() {}

	public UserSession: UserSession;
	currentUser: User;
	selectedStudent: User;

	emergencyNotification: Notification[] = [];
	notification: Notification[] = [];
	totalNotif = 0;

	public ApiUrl = 'http://10.0.2.2:50007/api/';

	// getLoggedInUser(): User {
	// 	return this.currentUser;
	// }
	// setLoggedInUser(user: User) {
	// 	this.currentUser = user;
	// }

	getNotification(): Notification[] {
		return this.notification;
	}
	setNotification(notification: Notification[]) {
		this.notification = notification;
	}
	getTotalNotification() {
		return this.totalNotif;
	}
	setTotalNotification(total: number) {
		this.totalNotif = total;
	}
	getEmergencyNotification() {
		return this.emergencyNotification;
	}
	setEmergencyNotification(notification: Notification[]) {
		this.emergencyNotification = notification;
	}

	getSelectedStudent(): User {
		return this.selectedStudent;
	}
	setSelectedStudent(student: User) {
		this.selectedStudent = student;
	}

	clearValues() {
		this.currentUser = undefined;
		this.selectedStudent = undefined;
	}
}

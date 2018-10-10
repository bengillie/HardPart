import { Injectable } from '@angular/core';

import { Notification } from '~/model/notification.model';
import { User } from '../model/user.model';

@Injectable()
export class AppValuesService {
    constructor() { }
    
    currentUser: User;
    selectedStudent: User;

    emergencyNotification: Notification[] = [];
    notification: Notification[] = [];
    totalNotif = 0;
    
    getLoggedInUser(): User {
        return this.currentUser;
    }
    setLoggedInUser(user: User) {
        this.currentUser = user;
    }

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

    getSelectedStudent() : User {
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
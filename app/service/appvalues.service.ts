import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

@Injectable()
export class AppValuesService {
    constructor() { }
    
    currentUser: User;
    selectedStudent: User;
    
    getLoggedInUser(): User {
        return this.currentUser;
    }
    setLoggedInUser(user: User) {
        this.currentUser = user;
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
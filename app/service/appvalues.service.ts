import { Injectable } from '@angular/core';

import { StudentItem } from '~/model/studentitem.model';
import { User } from '../model/user.model';

@Injectable()
export class AppValuesService {
    constructor() { }
    
    currentUser: User;
    selectedStudent: StudentItem;
    
    getLoggedInUser(): User {
        return this.currentUser;
    }
    setLoggedInUser(user: User) {
        this.currentUser = user;
    }

    getSelectedStudent() : StudentItem {
        return this.selectedStudent;
    }
    setSelectedStudent(child: StudentItem) {
        this.selectedStudent = child;
    }
}
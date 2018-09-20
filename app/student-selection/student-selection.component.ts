import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';

import { User } from '~/model/user.model';

import { AppValuesService } from '../service/appvalues.service';
import { UserService } from '../service/user.service';

@Component({
	moduleId: module.id,
	selector: 'student-selection',
	templateUrl: './student-selection.component.html',
	styleUrls: ['./student-selection.component.css']
})

export class StudentSelectionComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

	students: User[] = [];
	selectedStudent: User = new User();

	isLoading = true;

	warningIconCode = String.fromCharCode(0xea08);

	constructor(private appValuesService: AppValuesService,
		private userService: UserService,
		private location: Location
		) { }

	ngOnInit() {
		this.getSelectedStudent();
		this.getStudents();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
	}

	getSelectedStudent() {
		let currentSelected = this.appValuesService.getSelectedStudent();
		if(currentSelected) { 
			this.selectedStudent = currentSelected;
		}
	}

	getStudents() {
		let currentUser = this.appValuesService.getLoggedInUser();
		this.students = currentUser.children;
		this.isLoading = false;
	}

	onTap(args: User) {
		this.selectedStudent = args;
		this.appValuesService.setSelectedStudent(args);
		this.location.back();
	}
}
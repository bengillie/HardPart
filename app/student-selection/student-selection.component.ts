import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { Subscription } from 'rxjs';

import { User } from '../shared/model/user.model';

import { AppValuesService } from '../shared/service/appvalues.service';

@Component({
	moduleId: module.id,
	selector: 'student-selection',
	templateUrl: './student-selection.component.html',
	styleUrls: ['./student-selection.component.css'],
})
export class StudentSelectionComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	// currentUser: User = new User();
	students: User[] = [];
	selectedStudent: User = new User();

	isLoading = true;

	warningIconCode = String.fromCharCode(0xea08);

	constructor(private appValuesService: AppValuesService, private routerExt: RouterExtensions) {}

	ngOnInit() {
		this.getSelectedStudent();
		this.getStudents();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	getSelectedStudent() {
		let currentSelected = this.appValuesService.getSelectedStudent();
		if (currentSelected) {
			this.selectedStudent = currentSelected;
		}
	}

	getStudents() {
		// this.currentUser = this.appValuesService.getLoggedInUser();
		// this.students = this.currentUser.children;
		this.isLoading = false;
	}

	onTap(args: User) {
		this.selectedStudent = args;
		this.appValuesService.setSelectedStudent(args);
		this.routerExt.navigate([`dashboard`]);
	}
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';

import { StudentItem } from '~/model/studentitem.model';

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

	parentId: number | null;
	students: StudentItem[] = [];
	selectedStudent: StudentItem = new StudentItem();

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
		this.parentId = currentUser.id;
		this.subscriptions.push(this.userService.getStudentItems(this.parentId)
			.subscribe(
				(x) => {
					this.students = x;
				},
				() => {},
				() => {
					this.isLoading = false;
				}
			)
		)
	}

	onTap(args: StudentItem) {
		this.selectedStudent = args;
		this.appValuesService.setSelectedStudent(args);
		this.location.back();
	}
}
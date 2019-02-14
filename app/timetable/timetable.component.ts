import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view';

import { Subject } from '~/shared/model/timetable.model';
import { User } from '~/shared/model/user.model';
import { Event } from '~/shared/model/event.model';
import { Period } from '~/shared/model/period.model';

import { AppValuesService } from '../shared/service/appvalues.service';
import { HomeworkService } from '~/homework/homework.service';
import { TimetableService } from './timetable.service';
import { Homework, HomeworkDeadlineStatus } from '~/shared/model/homework.model';
import { TimetableDay } from '~/shared/model/timetableDay.model';

@Component({
	moduleId: module.id,
	selector: 'ns-timetable',
	templateUrl: './timetable.component.html',
	styleUrls: ['./timetable.component.less'],
})
export class TimetableComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	homeworkIcon = '';

	selectedStudent: User;

	lessonDate: Date = new Date();
	startDate: Date = new Date();
	endDate: Date = new Date();

	allHomeworks: Homework[] = [];
	allDueHomeworks: Homework[] = [];

	allTimetableDays: Array<TimetableDay> = [];
	timetableDaysForDate: Array<TimetableDay> = [];

	allPeriods: Period[] = [];
	periodsForDate: Period[] = [];

	current = false;
	hasLesson = true;
	isDueLesson = false;
	isLoading = true;
	lastLesson = false;
	showDetails = false;

	tabSelectedIndex: number;

	constructor(private appValuesService: AppValuesService, private homeworkService: HomeworkService, private router: Router, private timetableService: TimetableService) {
		this.selectedStudent = this.appValuesService.getSelectedStudent();

		this.startDate.setDate(this.startDate.getDate() - (this.startDate.getDay() + 7));
		this.endDate.setDate(this.endDate.getDate() - (this.endDate.getDay() - 14));

		this.getAllHomework();
		this.GetTimetableDays();
	}

	ngOnInit() {}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	getAllHomework() {
		this.homeworkService.getStudentHomework(this.selectedStudent.id).then(result => {
			this.allHomeworks = result;
		});
	}

	getCurrentEvent(event: Event): boolean {
		let today = new Date();

		if (today >= new Date(event.startDateTime) && today <= new Date(event.endDateTime)) {
			this.current = true;
			return true;
		} else {
			this.current = false;
			return false;
		}
	}

	public async GetTimetableDays() {
		await this.timetableService.GetTimetableDaysForDates(this.startDate, this.endDate);
	}

	getSubjectColour(event: Event): string {
		let subject = Subject;
		let color = '';

		switch (event.subjectName) {
			case subject.art: {
				color = '#8B0000';
				break;
			}
			case subject.computing: {
				color = '#8B4513';
				break;
			}
			case subject.design: {
				color = '#808000';
				break;
			}
			case subject.english: {
				color = '#2ECCFA';
				break;
			}
			case subject.geography: {
				color = '#FA58F4';
				break;
			}
			case subject.history: {
				color = '#04B404';
				break;
			}
			case subject.languages: {
				color = '#BF00FF';
				break;
			}
			case subject.math: {
				color = '#FF8000';
				break;
			}
			case subject.music: {
				color = '#642EFE';
				break;
			}
			case subject.pe: {
				color = '#FFFF00';
				break;
			}
			case subject.reg: {
				color = '#086A87';
				break;
			}
			case subject.science: {
				color = '#FF0000';
				break;
			}
		}

		return color;
	}

	onTabSwipe(args: SelectedIndexChangedEventData) {
		if (args.oldIndex !== -1) {
			return;
		}

		// for (let tabDate of this.tabDates) {
		// 	if (new Date(tabDate.date).getDate() === this.lessonDate.getDate()) {
		// 		setTimeout(() => {
		// 			this.tabSelectedIndex = this.dateRange.findIndex(x => x == tabDate.date);
		// 		}, 200);
		// 		return;
		// 	}
		// }
	}

	onTapHomework(event: Event) {
		const homework = this.allDueHomeworks.find(h => h.subject == event.subjectName);

		this.router.navigate([`/homeworkdetails/${homework.id}`]);
	}
}

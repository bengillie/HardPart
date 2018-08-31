import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from 'rxjs';

import { HomeworkService } from '../service/homework.service';
import { Homework, HomeworkStatus } from '../model/homework.model';
import { Tab } from '~/model/tab.model';

@Component({
	moduleId: module.id,
	selector: 'homework',
	templateUrl: './homework.component.html',
	styleUrls: ['./homework.component.less']
})

export class HomeworkComponent implements OnInit, OnDestroy {
	private subscription : Subscription;

	homeworks: Homework[];
	homeworks_todo: Homework[];
	homeworks_done: Homework[];
	homeworksTab: Tab<Homework>[];
	
	iconCode = String.fromCharCode(0xeaa3);
	
	constructor(private router: Router,
		private homeworkService: HomeworkService) { }

	ngOnInit() { 
		this.getHomeworks();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getHomeworks(): void {
		this.subscription = this.homeworkService.getHomeworks().subscribe(
			x => this.homeworks = x,
			error => console.log("Error: ", error),
			() => {
				this.homeworks = this.homeworks.filter(all => all.status !== HomeworkStatus.removed);
				this.homeworks_todo = this.homeworks.filter(all => all.status === HomeworkStatus.todo);
				this.homeworks_done = this.homeworks.filter(all => all.status === HomeworkStatus.done);
			
				this.homeworksTab = [
					{
						title: 'All',
						items: this.homeworks
					},
					{
						title: HomeworkStatus.todo,
						items: this.homeworks_todo
					},
					{
						title: HomeworkStatus.done,
						items: this.homeworks_done
					}
				];
			}
		);
	}

	onItemTap(args) {
		this.router.navigate([`/homeworkdetails/${args.id}`]);
	}
}
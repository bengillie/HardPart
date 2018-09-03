import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from 'rxjs';

import { HomeworkService } from '../service/homework.service';
import { Homework, HomeworkStatus } from '../model/homework.model';

@Component({
	moduleId: module.id,
	selector: 'homework',
	templateUrl: './homework.component.html',
	styleUrls: ['./homework.component.less']
})

export class HomeworkComponent implements OnInit, OnDestroy {
	private subscription : Subscription;

	homeworks: Homework[] = [];
	homeworks_todo: Homework[] = [];
	homeworks_done: Homework[] = [];

	isLoading = true;
	
	// iconCode = String.fromCharCode(0xeaa3);
	
	constructor(private router: Router,
		private homeworkService: HomeworkService) { }

	ngOnInit() { 
		this.getHomeworks();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getHomeworks() {
		this.subscription = this.homeworkService.getHomeworks().subscribe(
			x => {
				this.homeworks = x.filter(all => all.status !== HomeworkStatus.removed);
				this.homeworks_todo = this.homeworks.filter(all => all.status === HomeworkStatus.todo);
				this.homeworks_done = this.homeworks.filter(all => all.status === HomeworkStatus.done);
			},
			error => console.log("Error: ", error),
			() => {
				this.isLoading = false;
			}
		);
	}

	onItemTap(args) {
		this.router.navigate([`/homeworkdetails/${args.id}`]);
	}
}
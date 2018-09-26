import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';

import { HomeworkService } from '../service/homework.service';
import { Homework, HomeworkDeadlineStatus } from '../model/homework.model';

@Component({
	moduleId: module.id,
	selector: 'homework-detail',
	templateUrl: './homework-detail.component.html',
	styleUrls: ['./homework-detail.component.css']
})

export class HomeworkDetailComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

	homework: Homework = new Homework();
	isLoading = true;

	warningIconCode = String.fromCharCode(0xea08);

	constructor(private route: ActivatedRoute,
		private homeworkService: HomeworkService,
		private location: Location) { }

	ngOnInit() {
		this.getHomework();
	} 

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
	   
		}
	}

	getHomework(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.subscriptions.push(this.homeworkService.getHomework(id)
			.subscribe(
				(x) => {
					this.homework = x;
				},
				() => {},
				() => {
					this.isLoading = false;
				}
			)
		)
	}
	
	getHomeworkDeadlineStatus(homework: Homework): HomeworkDeadlineStatus {
		return this.homeworkService.getHomeworkDeadlineStatus(homework);
	}
}
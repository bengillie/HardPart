import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';

import { HomeworkService } from '../service/homework.service';
import { Homework } from '../model/homework.model';

@Component({
	moduleId: module.id,
	selector: 'homework-detail',
	templateUrl: './homework-detail.component.html',
	styleUrls: ['./homework-detail.component.css']
})

export class HomeworkDetailComponent implements OnInit, OnDestroy {
	private subscription : Subscription;

	homework: Homework = new Homework();

	isLoading = true;

	constructor(private route: ActivatedRoute,
		private homeworkService: HomeworkService,
		private location: Location) 
	{ }

	ngOnInit() {
		this.getHomework();
	} 

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getHomework(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.subscription = this.homeworkService.getHomework(id).subscribe(
			(x) => {
				this.homework = x;
			},
			() => {},
			() => {
				this.isLoading = false;
			}
		)
	}

	goBack(): void {
		this.location.back();
	}
}
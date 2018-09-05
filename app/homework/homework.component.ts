import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from 'rxjs';
import { ListViewEventData, RadListView, SwipeActionsEventData } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { View } from 'tns-core-modules/ui/core/view';

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
	public tabViewSelectedIndex = 0;

	homeworks: Homework[] = [];
	homeworks_todo: Homework[] = [];
	homeworks_done: Homework[] = [];

	isLoading = true;

	@ViewChild("listView_todo") listViewComponent_todo: RadListViewComponent;
	@ViewChild("listView_done") listViewComponent_done: RadListViewComponent;
	@ViewChild("listView_all") listViewComponent_all: RadListViewComponent;
	
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

	onTabViewClicked(args){ 
		this.tabViewSelectedIndex = args;
	}

	onItemTap_todo(args) {
		this.onItemTap(args, HomeworkStatus.todo);
	}

	onItemTap_done(args) {
		this.onItemTap(args, HomeworkStatus.done);
	}

	onItemTap_all(args) {
		this.onItemTap(args, "ALL");
	}

	onItemTap(args, homeworkStatus) {
		let homework = new Homework();
		if(homeworkStatus === HomeworkStatus.todo) {
			homework = this.homeworks_todo[args.index];
		}
		else if(homeworkStatus === HomeworkStatus.done) {
			homework = this.homeworks_done[args.index];
		}
		else {
			homework = this.homeworks[args.index];
		}
		this.router.navigate([`/homeworkdetails/${homework.id}`]);
	}
	
	onItemSwiping(args) {
		
	}
	
	onSwipeCellFinished(args) {

	}

	onSwipeCellStarted(args: SwipeActionsEventData) {
        const swipeLimits = args.data.swipeLimits;
		const swipeView = args['object'];
		
        const leftItem = swipeView.getViewById<View>('attach-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
		swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
		
        const rightItem = swipeView.getViewById<View>('complete-view');
        swipeLimits.right = rightItem.getMeasuredWidth();
	}

	onCellSwiping(args: SwipeActionsEventData) {
        // const swipeLimits = args.data.swipeLimits;
        // const currentItemView = args.object;

        // if (args.data.x > 200) {
        //     console.log("Notify perform left action");
        // } else if (args.data.x < -200) {
        //     console.log("Notify perform right action");
        // }
	}

	onLeftSwipeClick(args: ListViewEventData) {
		console.log("Left swipe click");
		this.listViewComponent_todo.listView.notifySwipeToExecuteFinished();
		this.listViewComponent_done.listView.notifySwipeToExecuteFinished();
		this.listViewComponent_all.listView.notifySwipeToExecuteFinished();
	}

	onRightSwipeClick(args) {
		console.log("Right swipe click");
		this.listViewComponent_todo.listView.notifySwipeToExecuteFinished();
		this.listViewComponent_done.listView.notifySwipeToExecuteFinished();
		this.listViewComponent_all.listView.notifySwipeToExecuteFinished();
	}
}
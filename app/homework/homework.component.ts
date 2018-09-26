import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from 'rxjs';
import { ListViewEventData, RadListView, SwipeActionsEventData } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";

import { View } from 'tns-core-modules/ui/core/view';

import { Homework, HomeworkDeadlineStatus, HomeworkStatus } from '../model/homework.model';
import { HomeworkService } from '../service/homework.service';

@Component({
	moduleId: module.id,
	selector: 'homework',
	templateUrl: './homework.component.html',
	styleUrls: ['./homework.component.less']
})

export class HomeworkComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];
	public tabViewSelectedIndex = 0;
	public swipeText = 'Complete';

	homeworks: Homework[] = [];
	homeworks_todo: Homework[] = [];
	homeworks_done: Homework[] = [];

	isLoading = true;

	@ViewChild("listView_todo") listViewComponent_todo: RadListViewComponent;
	@ViewChild("listView_done") listViewComponent_done: RadListViewComponent;
	@ViewChild("listView_all") listViewComponent_all: RadListViewComponent;
	
	warningIconCode = String.fromCharCode(0xea08);
	
	constructor(private router: Router,
		private homeworkService: HomeworkService) { }

	ngOnInit() { 
		this.getHomeworks();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
	}

	getHomeworks() {
		this.subscriptions.push(
			this.homeworkService.getHomeworks()
			.subscribe(
				x => {
					this.homeworks = x.filter(all => all.status !== HomeworkStatus.removed);
					this.homeworks_todo = this.homeworks.filter(all => all.status === HomeworkStatus.todo);
					this.homeworks_done = this.homeworks.filter(all => all.status === HomeworkStatus.done);
					this.sortHomeworkList();
				},
				error => console.log("Error: ", error),
				() => {
					this.isLoading = false;
				}
			)
		);
	}
	
	getHomeworkDeadlineStatus(homework: Homework): HomeworkDeadlineStatus {
		return this.homeworkService.getHomeworkDeadlineStatus(homework);
	}

	sortHomeworkList() {
		this.homeworks = this.homeworks.sort(this.sortHomeworkByDueDate);
		this.homeworks_todo = this.homeworks_todo.sort(this.sortHomeworkByDueDate);
		this.homeworks_done = this.homeworks_done.sort(this.sortHomeworkByDueDate);
	}

	sortHomeworkByDueDate(a, b) {
		if (a.dueDate < b.dueDate)
		  return -1;
		if (a.dueDate > b.dueDate)
		  return 1;
		return 0;
	}

	markComplete(args) {
		let item = args.object.bindingContext as Homework;
		item.status = HomeworkStatus.done;
		
		this.subscriptions.push(
			this.homeworkService.updateUserHomework(item)
			.subscribe(
				() => { },
				() => { },
				() => {
					this.homeworks_todo.splice(this.homeworks_todo.indexOf(item), 1);
					this.homeworks_done.push(item);
					this.sortHomeworkList();
				}
			)
		);

		this.listViewComponent_todo.listView.notifySwipeToExecuteFinished();
		this.listViewComponent_done.listView.notifySwipeToExecuteFinished();
		this.listViewComponent_all.listView.notifySwipeToExecuteFinished();
	}

	markTodo(args) {
		let item = args.object.bindingContext as Homework;
		item.status = HomeworkStatus.todo;
		
		this.subscriptions.push(
			this.homeworkService.updateUserHomework(item)
			.subscribe(
				() => { },
				() => { },
				() => {
					this.homeworks_done.splice(this.homeworks_done.indexOf(item), 1);
					this.homeworks_todo.push(item);
					this.sortHomeworkList();
				}
			)
		);

		this.listViewComponent_todo.listView.notifySwipeToExecuteFinished();
		this.listViewComponent_done.listView.notifySwipeToExecuteFinished();
		this.listViewComponent_all.listView.notifySwipeToExecuteFinished();
	}

	onTabViewClicked(args) { 
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

	onItemTap(args, tabText) {
		let homework = new Homework();
		if(tabText === HomeworkStatus.todo) {
			homework = this.homeworks_todo[args.index];
		}
		else if(tabText === HomeworkStatus.done) {
			homework = this.homeworks_done[args.index];
		}
		else {
			homework = this.homeworks[args.index];
		}
		this.router.navigate([`/homeworkdetails/${homework.id}`]);
	}
	
	onItemSwiping(args) {

	}

	onItemSwiping_all(args) {
		let item = this.homeworks[args.index];
		if(item.status === HomeworkStatus.todo) {
			this.swipeText = 'Complete';
		}
		else {
			this.swipeText = 'To Do';
		}
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
}
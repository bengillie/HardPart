import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { Lessons, Periods } from "../model/timetable.model";
import { LoginService } from "../service/login.service";
import { TimetableService } from "../service/timetable.service";
import { UserModel } from '~/model/user.model';

@Component({
    moduleId: module.id,
    selector: 'ns-timetable',
    templateUrl: './timetable.component.html',
    styleUrls: ['./timetable.component.less']
})
export class TimetableComponent implements OnInit, OnDestroy {
    private subscription : Subscription;

    isLoading = true;
    lesson: Lessons[] = [];
    period: Periods;
    user: UserModel;
    lessonDate: Date;
    hasLesson = true;
       
    constructor(
        private location: Location,
        private loginService: LoginService,
        private timetableService: TimetableService,
    ) { }

    ngOnInit() { 
        this.lessonDate = new Date();
        this.period = new Periods;
        /* this.user = this.getLoggedInUser(); */
        this.getLesson();
    }

    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }

    getLesson() {
        this.subscription = this.timetableService.getLesson(1)
            .subscribe(
                lesson => {
                    lesson = lesson.filter(all => new Date(all.startDate).toDateString() === this.lessonDate.toDateString());
                    lesson = lesson.sort ((obj1: Lessons, obj2: Lessons)  =>
                    {
                        return new Date(obj1.startDate).getHours() - new Date(obj2.startDate).getHours();
                    });
                    this.lesson = lesson;
                    
                    if (lesson.length === 0) {
                        this.hasLesson = false;
                    }

                    this.isLoading = false;
                },
            );
    }

    getLoggedInUser() {
        const user = this.loginService.getLoggedInUser();
        return user;
    }

    getPeriod(startDate: Date, endDate: Date): string {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        this.subscription = this.timetableService.getPeriod(startDate, endDate)
            .subscribe(
                period => { 
                    this.period = period;
                },
            );
        return this.period.name;
    }  

    goBack(): void {
		this.location.back();
    }  
    
    onLeftSwipeClick() {
        console.log ("swipe left");
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() - 1));
        this.getLesson();
    }

    onRightSwipeClick() {
        console.log ("swipe right");
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() + 1));
        this.getLesson();
    }
}

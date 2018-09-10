import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { Lessons, Periods } from "../model/timetable.model";
import { LoginService } from "../service/login.service";
import { TimetableService } from "../service/timetable.service";
import { UserModel } from '~/model/user.model';

import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { Color } from 'tns-core-modules/ui/content-view/content-view';

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

    @ViewChild("subjectColour") subjectColour: StackLayout;
       
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
                    
                    this.getTotalLesson(lesson);
                    this.getSubjectColour(lesson);
                    this.lesson = lesson;
                    this.isLoading = false;
                },
            );
    }

    getLoggedInUser() {
        const user = this.loginService.getLoggedInUser();
        return user;
    }

    /* for testing */
    getPeriod(startDate: Date, endDate: Date) {
        let pName = "";
        this.subscription = this.timetableService.getPeriod(new Date(startDate), new Date(endDate))
            .subscribe(
                period => { 
                    this.period = period;
                    if (this.period.name === undefined) {
                        pName = this.period.name;
                    } else {
                        pName = "ERROR";
                    }
                },
            );
        return pName;
    }  

    getTotalLesson(lesson: Lessons[]) {
        if (lesson.length === 0) {
            this.hasLesson = false;
        }
        else {
            this.hasLesson = true;
        }
    }

    goBack(): void {
		this.location.back();
    }  
    
    onLeftSwipeClick() {
        console.log ("swipe left");
        this.isLoading = true;
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() - 1));
        this.getLesson();
    }

    onRightSwipeClick() {
        console.log ("swipe right");
        this.isLoading = true;
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() + 1));
        this.getLesson();
    }   

    

    /* for testing */
    getSubjectColour(lesson: Lessons[]) {
        for (var i=0; i<lesson.length; i++) {
            switch (lesson[i].subject) {
                case "Science":
                    this.subjectColour.backgroundColor="green";
                default:
                    this.subjectColour.backgroundColor = "gray";
            }
        }
    }
}

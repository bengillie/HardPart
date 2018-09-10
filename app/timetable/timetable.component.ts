import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { Lessons, Periods } from "../model/timetable.model";
import { LoginService } from "../service/login.service";
import { Parent } from '../model/user.model';
import { TimetableService } from "../service/timetable.service";
import { UserModel, UserType } from '~/model/user.model';

import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';

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
    lessonDate: Date;
    parent: Parent;
    period: Periods;
    user: UserModel;
    userId: number;
    
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

        this.user = this.getLoggedInUser();
        this.getUserType();
        /* this.getParent(); */ // for testing
    }

    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }

    getChild(parent: Parent) {
        if (parent.childId.length > 1) {
            for (var i=0; i<parent.childId.length; i++) {
                console.log("student id: " + parent.childId[i]);
            }
        } else {
            this.userId = parent.childId[0];
            this.getLesson(this.userId);
        }
    }

    getLesson(userId: number) {
        this.subscription = this.timetableService.getLesson(userId)
            .subscribe(
                lesson => {
                    lesson = lesson.filter(all => new Date(all.startDate).toDateString() === this.lessonDate.toDateString());
                    lesson = lesson.sort ((obj1: Lessons, obj2: Lessons)  =>
                    {
                        return new Date(obj1.startDate).getHours() - new Date(obj2.startDate).getHours();
                    });
                    
                    this.getTotalLesson(lesson);
                    /* this.getSubjectColour(lesson); */
                    this.lesson = lesson;
                    this.isLoading = false;
                },
            );
    }

    getLoggedInUser() {
        const user = this.loginService.getLoggedInUser(); 
        return user;
    }

    getParent() {
        this.subscription = this.timetableService.getParent(3) //this.user.id
            .subscribe(
                parent => {
                    this.parent = parent;
                    this.getChild(parent);
                }
            )
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

    getUserType() {
        if (this.user.usertype === UserType.parent) {
            this.getParent();
        } else {
            this.userId = this.user.id;
            this.getLesson(this.userId);
        }
    }

    goBack(): void {
		this.location.back();
    }  
    
    onLeftSwipeClick() {
        this.isLoading = true;
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() - 1));
        this.getLesson(this.userId);
    }

    onRightSwipeClick() {
        this.isLoading = true;
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() + 1));
        this.getLesson(this.userId);
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

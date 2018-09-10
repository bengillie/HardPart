import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { Lesson, Period } from "../model/timetable.model";
import { LoginService } from "../service/login.service";
import { TimetableService } from "../service/timetable.service";
import { LoggingService } from '~/service/logging.service';
import { UserModel, UserType } from '~/model/user.model';

import { SwipeGestureEventData } from "ui/gestures";

@Component({
    moduleId: module.id,
    selector: 'ns-timetable',
    templateUrl: './timetable.component.html',
    styleUrls: ['./timetable.component.less']
})
export class TimetableComponent implements OnInit, OnDestroy {
    private subscriptions : Subscription[] = [];
    
    isLoading = true;
    
    lessonDate: Date = new Date();
    startDate: Date = new Date();
    endDate: Date = new Date();

    allLessons: Lesson[] = [];
    lessonsForDate: Lesson[] = [];

    allPeriods: Period[] = [];

    user: UserModel;
    hasLesson = true;

    @ViewChild("subjectColour") subjectColour: ElementRef;
       
    constructor(
        private location: Location,
        private loginService: LoginService,
        private loggingService: LoggingService,
        private timetableService: TimetableService,
    ) { }

    ngOnInit() { 
        this.startDate.setDate(this.startDate.getDate() - (this.startDate.getDay() - 7));
        this.endDate.setDate(this.endDate.getDate() - (this.endDate.getDay() + 7));

        this.getLessons();
        this.getPeriods();
    }

    ngOnDestroy() {
        if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }

        }
    }

    getLessons() {
        this.isLoading = true;
        this.subscriptions.push(this.timetableService.getLessons()
            .subscribe(
                lessons => {
                    lessons = lessons.sort ((obj1: Lesson, obj2: Lesson)  =>
                    {
                        return new Date(obj1.startDate).getHours() - new Date(obj2.startDate).getHours();
                    });

                    this.allLessons = lessons;
                    this.getLessonsForDate(this.lessonDate);
                    this.isLoading = false;
                },
            )
        );
    }

    getLessonsForDate(date: Date) {
        if (!this.allLessons) {
            this.lessonsForDate = [];
            return;
        }

        this.lessonsForDate = this.allLessons.filter(l => new Date(l.startDate).toDateString() === date.toDateString());
    }

    getPeriods() {
        this.isLoading = true;
        this.subscriptions.push(
            this.timetableService.getPeriods(new Date(this.startDate), new Date(this.endDate))
                .subscribe(p => { 
                    this.allPeriods = p;
                    this.isLoading = false;
                })
        );
    }

    getPeriodNameForLesson(lesson: Lesson): string {
        let name = "";

        const startLessonDay = new Date(lesson.startDate).getDay();
        const startLessonHour = new Date(lesson.startDate).getHours();
        const startLessonMinute = new Date(lesson.startDate).getMinutes();
        const endLessonDay = new Date(lesson.endDate).getDay();
        const endLessonHour = new Date(lesson.endDate).getHours();
        const endLessonMinute = new Date(lesson.endDate).getMinutes();

        const period = this.allPeriods.find(p => 
            new Date(p.startDate).getDay() == startLessonDay && 
            new Date(p.startDate).getHours() == startLessonHour && 
            new Date(p.startDate).getMinutes() == startLessonMinute && 
            new Date(p.endDate).getDay() == endLessonDay && 
            new Date(p.endDate).getHours() == endLessonHour && 
            new Date(p.endDate).getMinutes() == endLessonMinute
        );

        if (period){
            name = period.name;
        }

        return name;
    }  

    getSubjectColour(lesson: Lesson) {
            switch (lesson.subject) {
                case "Science":
                    this.subjectColour.nativeElement.backgroundColor="green";
                default:
                    this.subjectColour.nativeElement.backgroundColor = "gray";
            }
    }

    getTotalLesson(lesson: Lesson[]) {
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
        this.loggingService.log("swipe left");
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() - 1));
        this.getLessonsForDate(this.lessonDate);
    }

    onRightSwipeClick() {
        this.loggingService.log("swipe right");
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() + 1));
        this.getLessonsForDate(this.lessonDate);
    }   

        
    onSwipe(args: SwipeGestureEventData) {
        this.loggingService.log("timetable swipe direction" + args.direction.toString());
        if (args.direction === 1){
            this.onLeftSwipeClick();
        } else {
            this.onRightSwipeClick();
        }
    }
}

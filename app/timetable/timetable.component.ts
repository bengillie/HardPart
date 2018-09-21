import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SwipeGestureEventData } from "ui/gestures";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

import { Lesson, Period } from "../model/timetable.model";
import { Subject, Break } from '~/model/timetable.model';
import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';
import { HomeworkService } from '~/service/homework.service';
import { LoggingService } from '~/service/logging.service';
import { TimetableService } from "../service/timetable.service";
import { Homework } from '~/model/homework.model';

@Component({
    moduleId: module.id,
    selector: 'ns-timetable',
    templateUrl: './timetable.component.html',
    styleUrls: ['./timetable.component.less']
})
export class TimetableComponent implements OnInit, OnDestroy {
    private subscriptions : Subscription[] = [];
    
    breakPeriodLabel = "";
    homeworkIcon = "";

    loggedInUser: User;
    
    lessonDate: Date = new Date();
    startDate: Date = new Date();
    endDate: Date = new Date();

    allLessons: Lesson[] = [];
    lessonsForDate: Lesson[] = [];

    allPeriods: Period[] = [];
    periodsForDate: Period[] = [];

    allHomeworks: Homework[] = [];
    allDueHomeworks: Homework[] = [];

    current = false;
    hasLesson = true;
    isDueLesson = false;
    isLoading = true;
    lastLesson = false;
    showDetails = true;

    // region tab view time table
    tabDate = [];
    tabSelectedIndex: number;
    // end region
           
    constructor(
        private appValuesService: AppValuesService,
        private homeworkService: HomeworkService,
        private loggingService: LoggingService,
        private router: Router,
        private timetableService: TimetableService,
    ) { 
        this.tabSelectedIndex = 0;
    }

    ngOnInit() { 
        this.loggedInUser = this.appValuesService.getLoggedInUser();

        this.startDate.setDate(this.startDate.getDate() - (this.startDate.getDay() + 7));
        this.endDate.setDate(this.endDate.getDate() - (this.endDate.getDay() - 7));

        // region tab view time table
        this.getDate();
        // end region

        this.getAllHomework();
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

    getAllHomework() {
        this.subscriptions.push(this.homeworkService.getStudentHomework(this.loggedInUser.id)
            .subscribe(
                homework => {
                    this.allHomeworks = homework;
                }
            )
        )
    }

    getBreak(lesson: Lesson) {    
        let breakTime = Break;
        
        const regexp = new RegExp('B');
        const name = this.getPeriodNameForLesson(lesson);
        
        if ((new Date(lesson.startDate).getHours() < 12) && regexp.test(name)) {
            this.showDetails = false;
            this.breakPeriodLabel = breakTime.amBreak;
            return true;
        } else if ((new Date(lesson.startDate).getHours() >= 12) && regexp.test(name)) {
            this.showDetails = false;
            this.breakPeriodLabel = breakTime.pmBreak;
            return true;
        } else {
            this.showDetails =true;
            return false;
        }
    }

    getCurrentLesson(lesson: Lesson): boolean {
        let today = new Date();

        if ((today >= new Date(lesson.startDate)) && (today <= new Date(lesson.endDate))) {
            this.current = true;
            return true;
        } else {
            this.current = false;
            return false;
        }
    }

    getHomeworkDueDate(lesson: Lesson): boolean {
        const dueHomework = this.allHomeworks.find(h =>
            h.subject == lesson.subject
        );

        if (dueHomework != undefined) {
            this.allDueHomeworks.push(dueHomework);
            let isDue = this.homeworkService.isDue(dueHomework)

            if (isDue === true) {
                this.isDueLesson = true;
                this.homeworkIcon = String.fromCharCode(0xe91f);
                return true;
            }
        }

        return false;
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
        this.getTotalLesson();
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

    getSubjectColour(lesson: Lesson): string {
        let subject = Subject;
        let color = "";

        switch (lesson.subject) {
            case subject.art: {
                return color = "#8B0000";
            }
            case subject.computing: {
                return color = "#8B4513";
            }
            case subject.design: {
                return color = "#808000";
            }
            case subject.english: {
                return color = "#2ECCFA";
            }
            case subject.geography: {
                return color = "#FA58F4";
            }
            case subject.history: {
                return color = "#04B404";
            }
            case subject.languages: {
                return color = "#BF00FF";
            }
            case subject.math: {
                return color = "#FF8000";
            }
            case subject.music: {
                return color = "#642EFE";
            }
            case subject.pe: {
                return color = "#FFFF00";
            }
            case subject.reg: {
                return color = "#086A87";
            }
            case subject.science: {
                return color = "#FF0000";
            }
        }
    }

    getTotalLesson() {
        if (this.lessonsForDate.length === 0) {
            this.hasLesson = false;
        }
        else {
            this.hasLesson = true;
        }
    }

    onLeftSwipeClick() {
        let oneWeekPrev = new Date();
        oneWeekPrev.setDate(oneWeekPrev.getDate() - (oneWeekPrev.getDay() + 6));
        
        this.loggingService.log("swipe left");
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() - 1));
        if (oneWeekPrev < this.lessonDate) {
            this.getLessonsForDate(this.lessonDate);
            this.lastLesson = false;
        } else {
            this.loggingService.log("Last lesson for the previous week");
            this.lastLesson = true;
        }
    }

    onRightSwipeClick() {
        let twoWeeksFuture = new Date();
        twoWeeksFuture.setDate(twoWeeksFuture.getDate() - (twoWeeksFuture.getDay() - 20));

        this.loggingService.log("swipe right");
        this.lessonDate = new Date(this.lessonDate.setDate(this.lessonDate.getDate() + 1));
        if (twoWeeksFuture >= this.lessonDate) {
            this.getLessonsForDate(this.lessonDate);
            this.lastLesson = false;
        } else {
            this.loggingService.log("Last lesson for the next two weeks");
            this.lastLesson = true;
        }   
    }   
        
    onSwipe(args: SwipeGestureEventData) {
        if (this.lastLesson === false) {
            this.loggingService.log("timetable swipe direction" + args.direction.toString());
            if (args.direction === 1){
                this.onLeftSwipeClick();
            } else {
                this.onRightSwipeClick();
            }
        } else {
            this.loggingService.log("Lock Timetable swipe");
        }
    }

    onTapHomework(lesson: Lesson) {
        const homework = this.allDueHomeworks.find(h =>
            h.subject == lesson.subject
        );

        this.router.navigate([`/homeworkdetails/${homework.id}`]);
    }


    // region tab view time table
    getDate() {
        // one week previous date
        let minDate = new Date();
        minDate.setDate(minDate.getDate() - (minDate.getDay() + 7));

        // two weeks future date
        let maxDate = new Date();
        maxDate.setDate(maxDate.getDate() - (maxDate.getDay() - 6));

        let ctr = 0;
        let tabItemDate = new Date();
        do {
            tabItemDate = new Date(minDate.setDate(minDate.getDate() + 1));
            this.tabDate.push(tabItemDate);
            
            if (tabItemDate.getDate() === this.lessonDate.getDate()) {
                this.tabSelectedIndex = ctr;
            } else {
                ctr++;
            }
        } while (tabItemDate < maxDate);
    }
    
    onTabSwipe(args: SelectedIndexChangedEventData) {
        if (args.oldIndex !== -1) {
            this.getLessonsForDate(this.tabDate[args.newIndex]);
        }
    }
    // end region
}
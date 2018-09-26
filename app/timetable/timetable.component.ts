import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

import { Lesson, Period, TimetableTab } from "../model/timetable.model";
import { Subject, Break } from '~/model/timetable.model';
import { User } from '~/model/user.model';

import { AppValuesService } from '~/service/appvalues.service';
import { HomeworkService } from '~/service/homework.service';
import { LoggingService } from '~/service/logging.service';
import { TimetableService } from "../service/timetable.service";
import { Homework, HomeworkDeadlineStatus } from '~/model/homework.model';

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

    allHomeworks: Homework[] = [];
    allDueHomeworks: Homework[] = [];

    allLessons: Lesson[] = [];
    lessonsForDate: Lesson[] = [];

    allPeriods: Period[] = [];
    periodsForDate: Period[] = [];    

    tabDates: TimetableTab[] = [];
    
    current = false;
    hasLesson = true;
    isDueLesson = false;
    isLoading = true;
    lastLesson = false;
    showDetails = false;
    
    dateRange = [];
    tabSelectedIndex: number;
           
    constructor(
        private appValuesService: AppValuesService,
        private homeworkService: HomeworkService,
        private loggingService: LoggingService,
        private router: Router,
        private timetableService: TimetableService,
    ) { }

    ngOnInit() { 
        this.loggedInUser = this.appValuesService.getLoggedInUser();

        this.startDate.setDate(this.startDate.getDate() - (this.startDate.getDay() + 7));
        this.endDate.setDate(this.endDate.getDate() - (this.endDate.getDay() - 14));

        this.getAllHomework();
        this.getLessonsDateRange();
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

    getBreakPeriod(lesson: Lesson): boolean {    
        let breakTimeName = Break;

        this.breakPeriodLabel = "";
                
        const regexp = new RegExp('B');
        const name = this.getPeriodNameForLesson(lesson);
        
        if ((new Date(lesson.startDate).getHours() < 12) && regexp.test(name)) {
            this.breakPeriodLabel = breakTimeName.amBreak;
            this.showDetails = false;
            return true;
        } 
        
        if ((new Date(lesson.startDate).getHours() >= 12) && regexp.test(name)) {
            this.breakPeriodLabel = breakTimeName.pmBreak;
            this.showDetails = false;
            return true;
        }
        
        this.showDetails =true;
        return false;
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
            let isOverdue = this.homeworkService.getHomeworkDeadlineStatus(dueHomework) === HomeworkDeadlineStatus.overDue;

            if (isOverdue === true) {
                this.isDueLesson = true;
                this.homeworkIcon = String.fromCharCode(0xe91f);
                return true;
            }
        }

        return false;
    }

    getLessons() {
        this.subscriptions.push(this.timetableService.getLessons()
            .subscribe(
                lessons => {
                    lessons = lessons.sort ((obj1: Lesson, obj2: Lesson)  =>
                    {
                        return new Date(obj1.startDate).getHours() - new Date(obj2.startDate).getHours();
                    });
                    
                    this.allLessons = lessons;
                    //this.getLessonsForDate(this.lessonDate);
                    this.getTabDateLesson();
                    this.tabSelectedIndex++;
                },
            )
        );
    }

    getLessonsDateRange() {
        // one week previous date
        let minDate = new Date();
        minDate.setDate(minDate.getDate() - (minDate.getDay() + 7));

        // two weeks future date
        let maxDate = new Date();
        maxDate.setDate(maxDate.getDate() - (maxDate.getDay() - 13));
                
        let tabItemDate = new Date();
        do {
            tabItemDate = new Date(minDate.setDate(minDate.getDate() + 1));
            this.dateRange.push(tabItemDate);
            
            if (tabItemDate.getDate() === this.lessonDate.getDate()) {
                this.tabSelectedIndex = this.dateRange.findIndex(x => x == tabItemDate);
            }
        } while (tabItemDate < maxDate);
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
        this.subscriptions.push(
            this.timetableService.getPeriods(new Date(this.startDate), new Date(this.endDate))
                .subscribe(p => { 
                    this.allPeriods = p;
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
                color = "#8B0000";
                break;
            }
            case subject.computing: {
                color = "#8B4513";
                break;
            }
            case subject.design: {
                color = "#808000";
                break;
            }
            case subject.english: {
                color = "#2ECCFA";
                break;
            }
            case subject.geography: {
                color = "#FA58F4";
                break;
            }
            case subject.history: {
                color = "#04B404";
                break;
            }
            case subject.languages: {
                color = "#BF00FF";
                break;
            }
            case subject.math: {
                color = "#FF8000";
                break;
            }
            case subject.music: {
                color = "#642EFE";
                break;
            }
            case subject.pe: {
                color = "#FFFF00";
                break;
            }
            case subject.reg: {
                color = "#086A87";
                break;
            }
            case subject.science: {
                color = "#FF0000";
                break;
            }
        }

        return color;
    }

    getTabDateLesson() {
        for (let tabDate of this.dateRange) {
            this.getLessonsForDate(tabDate);
            let timetableTab = new TimetableTab;

            timetableTab.date = tabDate;
            timetableTab.lessons = this.lessonsForDate;
            this.tabDates.push(timetableTab);
        }

        this.isLoading = false;
    }

    getTotalLesson() {
        if (this.lessonsForDate.length === 0) {
            this.hasLesson = false;
        }
        else {
            this.hasLesson = true;
        }
    }

    onTabSwipe(args: SelectedIndexChangedEventData) {        
        if (args.oldIndex !== -1) {
            //this.getLessonsForDate(this.tabDate[args.newIndex]);
        }
    }

    onTapHomework(lesson: Lesson) {
        const homework = this.allDueHomeworks.find(h =>
            h.subject == lesson.subject
        );

        this.router.navigate([`/homeworkdetails/${homework.id}`]);
    }
}
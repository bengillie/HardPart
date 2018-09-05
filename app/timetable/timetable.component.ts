import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { Lessons, Periods } from "../model/timetable.model";
import { UserModel } from '~/model/user.model';

@Component({
    moduleId: module.id,
    selector: 'ns-timetable',
    templateUrl: './timetable.component.html',
    styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit, OnDestroy {
    private subscription : Subscription;
    user: UserModel;
    lesson: Lessons;
    period: Periods;
   
    constructor(
        private location: Location,
        private route: ActivatedRoute
    ) { }

    ngOnInit() { 
        this.lesson = new Lessons();
        this.period = new Periods();

        this.user = require("../service/login.service").data;

        var lessonDate = new Date();
        let monday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 1) );
        let tuesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 2));
        let wednesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 3));
        let thursday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 4));
        let friday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 5));

        console.log(monday.toDateString());
    }

    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }

    goBack(): void {
		this.location.back();
	}
}

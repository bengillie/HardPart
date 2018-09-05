import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { Lessons, Periods } from "../model/timetable.model";
import { LoginService } from "../service/login.service";
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
        private loginService: LoginService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() { 
        this.lesson = new Lessons();
        this.period = new Periods();
    }

    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }

    goBack(): void {
		this.location.back();
    }
    
    getLoggedUser() {
        const user = this.loginService.getLoggedInUser();
    }
}

import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Lessons, Periods } from "../model/timetable.model";
import { LoginService } from '../service/login.service';

@Component({
    moduleId: module.id,
    selector: 'ns-timetable',
    templateUrl: './timetable.component.html',
    styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit, OnDestroy {
    private subscription : Subscription;
    lesson: Lessons;
    period: Periods;
   
    constructor(
        private loginService: LoginService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() { 
        this.lesson = new Lessons();
        this.period = new Periods();
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
        this.subscription.unsubscribe();
    }

    getLoggedUser() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.loginService.getLoggedUser(id)
            .subscribe(user => {
                
            })
    }
}

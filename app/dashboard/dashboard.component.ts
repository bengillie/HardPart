import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'

@Component({
    moduleId: module.id,
    selector: 'ns-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

    private isLoading = true

    constructor(
        private router: RouterExtensions,
    ) { }

    ngOnInit() { }


}

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router'

import { Subscription } from 'rxjs';

@Component({
	moduleId: module.id,
	selector: 'message-page',
	templateUrl: './message-page.component.html',
	styleUrls: ['./message-page.component.css']
})

export class MessagePageComponent implements OnInit, OnDestroy {
	private subscriptions : Subscription[] = [];

	@Input() title: string;
	@Input() iconCode: string = String.fromCharCode(0xea10);
	@Input() icondBackgroundColor: string = "#4ca64c";
	@Input() messageHeader: string = "SUCCESS";
	@Input() messageHeaderColor: string = "4ca64c";
	@Input() messageSub: string = "Transaction successful.";
	@Input() nextModule: string;
	@Input() delayDurationToNext: number = 3000;

	isLoading = true;
	timeOut;

	constructor(private route: ActivatedRoute,
		private router: Router,
		private routerExt: RouterExtensions) { }

	ngOnInit() {
		this.subscriptions.push(
			this.route.queryParams
			.subscribe(
				params => {
					this.title = params['title'] || '';
					this.iconCode = params['iconCode'] || String.fromCharCode(0xea10);
					this.icondBackgroundColor = params['icondBackgroundColor'] || '#4ca64c';
					this.messageHeader = params['messageHeader'] || 'SUCCESS';
					this.messageHeaderColor = params['messageHeaderColor'] || '#4ca64c';
					this.messageSub = params['messageSub'] || 'Transaction successful.';
					this.nextModule = params['nextModule'];
					this.delayDurationToNext = +(params['delayDurationToNext'] || 3000);

					if(this.delayDurationToNext <= 0) {
						//do not auto browse to the next module
					} else { 
						this.timeOut = setTimeout(() => {
							this.goToNext();
						}, this.delayDurationToNext);
					}

					this.isLoading = false;
				}
			)
		);
	}

	ngOnDestroy() {
		if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
	}

	goToNext() {
		if(this.timeOut !== undefined) {
			clearTimeout(this.timeOut);
		}
		this.routerExt.navigate([this.nextModule]);
	}
}
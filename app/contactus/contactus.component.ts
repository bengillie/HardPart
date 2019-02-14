import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs';

import { ContactDetails } from '../shared/model/contactus.model';
import { ContactUsService } from './contactus.service';

@Component({
	moduleId: module.id,
	selector: 'contactus',
	templateUrl: './contactus.component.html',
	styleUrls: ['./contactus.component.css'],
})
export class ContactUsComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	contactDetails: ContactDetails = new ContactDetails();
	isLoading = true;

	phoneIconCode = String.fromCharCode(0xe942);
	emailIconCode = String.fromCharCode(0xe945);
	addressIconCode = String.fromCharCode(0xe947);

	constructor(private routerExt: RouterExtensions, private contactUsService: ContactUsService) {}

	ngOnInit() {
		this.getContactDetails();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	emailus() {
		this.routerExt.navigate([`contactusform`]);
	}

	getContactDetails() {
		this.subscriptions.push(
			this.contactUsService.getContactDetails().subscribe(
				x => {
					this.contactDetails = x;
				},
				error => console.log('Error: ', error),
				() => {
					this.isLoading = false;
				}
			)
		);
	}
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactDetails } from '../shared/model/contactus.model';
import { HttpService } from '../shared/service/httpservice.service';

@Injectable()
export class ContactUsService {
	url = 'contactdetail';

	constructor(private httpService: HttpService) {}

	getContactDetails(): Observable<ContactDetails> {
		return this.httpService.get<ContactDetails>(this.url);
	}
}

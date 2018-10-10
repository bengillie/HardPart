import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactDetails } from '../model/contactus.model';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class ContactUsService {
    url = "contactdetail";

    constructor(private httpService: HttpService) { }

    getContactDetails() : Observable<ContactDetails> {
        return this.httpService.get<ContactDetails>(this.url);
    }
}
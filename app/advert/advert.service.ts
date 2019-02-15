import { Injectable } from '@angular/core';

import { Advert } from '~/shared/model/advert.model';

import { HttpService } from '../shared/service/httpservice.service';

@Injectable()
export class AdvertService {
	private url = 'advert';

	public Adverts: Advert[] = [];

	private advert: Advert = {
		id: 1,
		title: 'After School Programs',
		subTitle: 'Learn, Engage, Play',
		description: 'We offer tutoring, intensive learning, homework help, arts and crafts, reading, math, and so much more. Admission is open from October to December, 2018. Register now.',
		image: '~/images/advert-afterschool.png',
		urlLink: 'https://www.google.com/',
		createdDate: new Date(),
		expiryDate: new Date(new Date().setDate(new Date().getDate() + 1)),
	};

	constructor(private httpService: HttpService) {}

	getAdvert(): Promise<Advert[]> {
		return new Promise<Advert[]>(resolve => {
			this.Adverts.push(this.advert);

			resolve(this.Adverts);
		});
	}

	// getAdvert(): Promise<Advert[]> {
	// 	return new Promise<Advert[]>(resolve => {
	// 		this.httpService
	// 			.Get<Advert[]>(this.url)
	// 			.then(result => {
	// 				if (result != null) {
	// 					this.Adverts = result;
	// 				} else {
	// 					this.Adverts = [];
	// 				}
	// 				resolve(result);
	// 			})
	// 			.catch(error => {
	// 				console.log('Could not get Adverts');
	// 			});
	// 	});
	// }
}

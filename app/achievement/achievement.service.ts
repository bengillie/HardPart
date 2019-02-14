import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Achievement } from '../shared/model/achievement.model';
import { HttpService } from '../shared/service/httpservice.service';

@Injectable()
export class AchievementService {
	url = 'achievement';

	constructor(private httpService: HttpService) {}

	getUserAchievements(): Observable<Achievement[]> {
		return this.httpService.get<Achievement[]>(this.url);
	}
}

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Achievement } from '../model/achievement.model';
import { HttpService } from '../service/httpservice.service';

@Injectable()
export class AchievementService {
    url = "achievement";

    constructor(private httpService: HttpService) { }

    getUserAchievements() : Observable<Achievement[]> {
        return this.httpService.get<Achievement[]>(this.url);
    }
}
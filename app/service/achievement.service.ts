import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Achievement } from '../model/achievement.model';

@Injectable()
export class AchievementService {
    private url = 'api/achievement';

    constructor(private http: HttpClient) { }

    getUserAchievements() : Observable<Achievement[]> {
        return this.http.get<Achievement[]>(this.url);
    }
}
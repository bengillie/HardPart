import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Achievement } from '../shared/model/achievement.model';
import { AchievementService } from './achievement.service';
import { HelperService } from '~/shared/service/helper.service';

@Component({
	moduleId: module.id,
	selector: 'achievement',
	templateUrl: './achievement.component.html',
	styleUrls: ['./achievement.component.css'],
})
export class AchievementComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];

	achievements: Achievement[] = [];
	groupedAchievements: any[] = [];

	isLoading = true;

	starIconCode = String.fromCharCode(0xe9d7);

	constructor(private achievementService: AchievementService, private helperService: HelperService) {}

	ngOnInit() {
		this.getUserAchiements();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	getUserAchiements() {
		this.subscriptions.push(
			this.achievementService.getUserAchievements().subscribe(
				x => {
					this.achievements = x;
				},
				error => console.log('Error: ', error),
				() => {
					this.groupedAchievements = this.helperService.arrGroupBy(this.achievements, 'type');
					this.groupedAchievements = this.groupedAchievements.map(i => {
						return {
							key: i.key,
							totalScore: i.values.reduce((a, b) => a + b['score'], 0),
							values: i.values,
						};
					});
					this.isLoading = false;
				}
			)
		);
	}
}

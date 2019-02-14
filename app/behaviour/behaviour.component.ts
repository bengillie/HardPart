import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs';

import { Behaviour, BehaviourType } from '~/shared/model/behaviour.model';

import { BehaviourService } from '~/behaviour/behaviour.service';
import { HelperService } from '~/shared/service/helper.service';

@Component({
	moduleId: module.id,
	selector: 'ns-behaviour',
	templateUrl: './behaviour.component.html',
	styleUrls: ['./behaviour.component.less'],
})
export class BehaviourComponent implements OnInit, OnDestroy {
	private subscriptions: Subscription[] = [];
	isLoading = true;

	groupedBehaviour: any[] = [];

	starIconCode = '';

	constructor(private behaviourService: BehaviourService, private helperService: HelperService) {}

	ngOnInit() {
		this.getBehaviour();
	}

	ngOnDestroy() {
		if (this.subscriptions) {
			for (let subscription of this.subscriptions) {
				subscription.unsubscribe();
			}
		}
	}

	async getBehaviour() {
		await this.behaviourService.getBehaviour();
		if (this.behaviourService.Behaviours && this.behaviourService.Behaviours.length > 0) {
			this.groupedBehaviour = this.helperService.arrGroupBy(this.behaviourService.Behaviours, 'type');
			this.groupedBehaviour = this.groupedBehaviour.map(i => {
				return {
					key: i.key,
					totalScore: i.values.reduce((a, b) => a + b['score'], 0),
					values: i.values,
				};
			});
		}
		this.isLoading = false;
	}

	getBehaviourIcon(type: string): string {
		switch (type) {
			case BehaviourType.disruption: {
				this.starIconCode = String.fromCharCode(0xe96d);
				break;
			}
			case BehaviourType.homework: {
				this.starIconCode = String.fromCharCode(0xe91f);
				break;
			}
			case BehaviourType.organisation: {
				this.starIconCode = String.fromCharCode(0xe920);
				break;
			}
		}
		return this.starIconCode;
	}
}

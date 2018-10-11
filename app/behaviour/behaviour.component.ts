import { Component, OnInit, OnDestroy } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { Behaviour, BehaviourType } from '~/model/behaviour.model';

import { BehaviourService } from '~/service/behaviour.service';
import { HelperService } from '~/service/helper.service';

@Component({
    moduleId: module.id,
    selector: 'ns-behaviour',
    templateUrl: './behaviour.component.html',
    styleUrls: ['./behaviour.component.less']
})
export class BehaviourComponent implements OnInit, OnDestroy {
    private subscriptions : Subscription[] = [];
    isLoading = true;

    behaviour: Behaviour[] = [];
    groupedBehaviour: any[] = [];

    starIconCode = "";

    constructor(
        private behaviourService: BehaviourService,
        private helperService: HelperService
    ) { }

    ngOnInit() {
        this.getBehaviour();
    }

    ngOnDestroy() {
        if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
    }

    getBehaviour() {
        this.subscriptions.push(this.behaviourService.getBehaviour()
			.subscribe(
                behaviour => {
                    this.behaviour = behaviour;
                    this.groupedBehaviour = this.helperService.arrGroupBy(this.behaviour, 'type');
                    this.groupedBehaviour = this.groupedBehaviour.map(i => {
						return {
							'key': i.key,
							'totalScore': i.values.reduce((a, b) => a + b['score'], 0),
							'values': i.values
						};
                    });
                    
					this.isLoading = false;
                },
			)
		);
    }

    getBehaviourIcon(type: string): string {
        switch(type) {
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

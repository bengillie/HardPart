import { Component, OnInit, OnDestroy } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Subscription } from 'rxjs';

import { Advert } from '~/model/advert.model';

import { AdvertService } from '~/service/advert.service';

@Component({
    moduleId: module.id,
    selector: 'ns-advert',
    templateUrl: './advert.component.html',
    styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit, OnDestroy {
    private subscriptions : Subscription[] = [];
    isLoading = true;
    
    allAdvert: Advert[] = [];

    constructor(
        private advertService: AdvertService,
        private router: RouterExtensions,
    ) { }

    ngOnInit() { 
        this.getAdvert();
    }

    ngOnDestroy() {
        if (this.subscriptions) {
            for (let subscription of this.subscriptions)
            {
                subscription.unsubscribe();
            }
        }
    }

    getAdvert() {
        this.subscriptions.push(this.advertService.getAdvert()
            .subscribe (
                advert => {
                    advert = advert.sort((a, b) => new Date(a.createdDate) > new Date(b.createdDate) ? -1 : 1);
                    this.allAdvert = advert;
                    this.isLoading = false;
                })
        )
    }

    getUrl() {
        let utilityModule = require("utils/utils");
        utilityModule.openUrl(this.allAdvert[0].urlLink);
    }
}

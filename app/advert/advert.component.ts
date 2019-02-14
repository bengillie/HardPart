import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AdvertService } from "~/shared/service/advert.service";

@Component({
  moduleId: module.id,
  selector: "ns-advert",
  templateUrl: "./advert.component.html",
  styleUrls: ["./advert.component.css"]
})
export class AdvertComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  isLoading = true;

  constructor(private advertService: AdvertService) {}

  ngOnInit() {
    this.getAdvert();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      for (let subscription of this.subscriptions) {
        subscription.unsubscribe();
      }
    }
  }

  async getAdvert() {
    await this.advertService.getAdvert();
    this.isLoading = false;
  }

  getUrl() {
    let utilityModule = require("utils/utils");
    utilityModule.openUrl(this.advertService.Adverts[0].urlLink);
  }
}

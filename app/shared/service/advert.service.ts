import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";

import { Advert } from "~/shared/model/advert.model";

import { ErrorService } from "../service/error.service";
import { HttpService } from "../service/httpservice.service";

@Injectable()
export class AdvertService {
  private url = "advert";

  public Adverts: Advert[] = [];

  constructor(private httpService: HttpService) {}

  getAdvert(): Promise<Advert[]> {
    return new Promise<Advert[]>(resolve => {
      this.httpService
        .Get<Advert[]>(this.url)
        .then(result => {
          if (result != null) {
            this.Adverts = result;
          } else {
            this.Adverts = [];
          }
          resolve(result);
        })
        .catch(error => {
          console.log("Could not get Adverts");
        });
    });
  }
}

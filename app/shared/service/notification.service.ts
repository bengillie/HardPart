import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";

import { Notification } from "~/shared/model/notification.model";

import { HttpService } from "../service/httpservice.service";
import { UserService } from "./user.service";
import { UpdateNotificationRequest } from "../requests/update-notification-request.model";

@Injectable()
export class NotificationService {
  private url = "notification/";

  public EmergencyNotifications: Notification[] = [];
  public Notifications: Notification[] = [];

  constructor(
    private httpService: HttpService,
    private userService: UserService
  ) {}

  getEmergencyNotification(): Promise<Notification[]> {
    const fullUrl = this.url + "GetEmergencyNotifications";

    const httpParams = new HttpParams()
      .set(
        "schoolId",
        this.userService.ReturnUserSession().activeUserSchool.schoolId
      )
      .set(
        "studentId",
        this.userService.ReturnUserSession().activeUserSchool.studentId
      );

    return new Promise<Notification[]>(resolve => {
      this.httpService
        .GetWithParams<Notification[]>(fullUrl, httpParams)
        .then(result => {
          if (result) {
            this.EmergencyNotifications = result;
          } else {
            this.EmergencyNotifications = [];
          }
        })
        .catch(error => {
          console.log(`Error getting Emergency Notifications: ${error}`);
        });
    });
  }

  getNotification(): Promise<Notification[]> {
    const fullUrl = this.url + "GetNotifications";

    const httpParams = new HttpParams()
      .set(
        "schoolId",
        this.userService.ReturnUserSession().activeUserSchool.schoolId
      )
      .set(
        "studentId",
        this.userService.ReturnUserSession().activeUserSchool.studentId
      );

    return new Promise<Notification[]>(resolve => {
      this.httpService
        .GetWithParams<Notification[]>(fullUrl, httpParams)
        .then(result => {
          if (result) {
            this.Notifications = result;
          } else {
            this.Notifications = [];
          }
        })
        .catch(error => {
          console.log(`Error getting Notifications: ${error}`);
        });
    });
  }

  async updateNotification(notification: Notification): Promise<boolean> {
    const fullUrl = this.url + "GetNotifications";
    const body = new UpdateNotificationRequest(notification);

    let update = false;

    await this.httpService
      .Post<Notification[]>(fullUrl, body)
      .then(result => {
        if (result) {
          update = true;
        } else {
          update = false;
        }
      })
      .catch(error => {
        console.log(`Error updating Notification: ${error}`);
        update = false;
      });

    return update;
  }
}

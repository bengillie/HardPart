import { Notification } from "~/shared/model/notification.model";

export class UpdateNotificationRequest {
  notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }
}

import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { User } from "../model/user.model";

import { HelperService } from "../service/helper.service";
import { HttpService } from "../service/httpservice.service";
import { UserSession } from "../model/userSession.model";

@Injectable()
export class UserService {
  private url = "user";

  public UserSession: UserSession;

  constructor(
    private httpService: HttpService,
    private helperService: HelperService
  ) {}

  getUserByPrimaryEmail(emailAddress: string): Observable<User> {
    let params = new HttpParams();
    params = params.append("emailprimary", encodeURIComponent(emailAddress));

    return this.httpService.get<User[]>(this.url, params).pipe(map(x => x[0]));
  }

  getUserBySecondaryEmail(emailAddress: string): Observable<User> {
    let params = new HttpParams();
    params = params.append("emailsecondary", encodeURIComponent(emailAddress));

    return this.httpService.get<User[]>(this.url, params).pipe(map(x => x[0]));
  }

  getUserById(userId: number): Observable<User> {
    const newUrl = `${this.url}/${userId}`;
    return this.httpService.get<User>(newUrl);
  }

  public async GetUserSession(username: string) {
    const httpParams = new HttpParams().set("username", username);

    await this.httpService
      .GetWithParams<UserSession>(this.url + "GetUserSession", httpParams)
      .then(result => {
        this.UserSession = result;

        if (this.UserSession.userSchools.length === 1) {
          this.UserSession.activeUserSchool = this.UserSession.userSchools[0];
        }

        sessionStorage.setItem("userSession", JSON.stringify(this.UserSession));
      })
      .catch(error => {
        this.UserSession = undefined;
        console.log("Could not get User Session");
      });
  }

  public HasSession(): boolean {
    if (this.UserSession) {
      return true;
    }

    this.UserSession = JSON.parse(sessionStorage.getItem("userSession"));
    if (this.UserSession) {
      return true;
    }

    return false;
  }

  public HasActiveSchool(): boolean {
    if (this.ReturnUserSession().activeUserSchool) {
      return true;
    }

    return false;
  }

  public ReturnUserSession(): UserSession {
    if (!this.UserSession) {
      this.UserSession = JSON.parse(sessionStorage.getItem("userSession"));
    }

    return this.UserSession;
  }

  updateUser(user: User): Observable<any> {
    return this.httpService.put(this.url, user);
  }

  validatePassword(passwordNew: string, passwordConfirm: string) {
    if (passwordNew.trim().length === 0) {
      return {
        control: "newpassword",
        message: "New password is required."
      };
    } else if (passwordNew.length < 6) {
      return {
        control: "newpassword",
        message: "Password must have atleast 6 characters."
      };
    } else if (!this.helperService.isAlphaNumeric(passwordNew)) {
      return {
        control: "newpassword",
        message: "Password must be alphanumeric."
      };
    } else if (passwordConfirm.trim().length === 0) {
      return {
        control: "confirmpassword",
        message: "Confirm password is required."
      };
    } else if (passwordNew !== passwordConfirm) {
      return {
        control: "confirmpassword",
        message: "New password and confirm password do not match."
      };
    } else {
      return null;
    }
  }
}

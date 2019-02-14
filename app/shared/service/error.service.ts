import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ErrorService {
  constructor(private router: Router) {}

  public HandleError(error: any) {
    console.error("Error Occured - see log");

    if (error instanceof HttpErrorResponse) {
      console.error(
        `API Error. Status: ${error.status} - ${error.statusText}. Message: ${
          error.error
        }`
      );
    }
    if (error.status === 401) {
      this.router.navigate(["/login"]);
    }
  }
}

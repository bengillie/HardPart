import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { retry, tap, debounceTime } from "rxjs/operators";

import { ErrorService } from "./error.service";

import { AuthorizationService } from "./authorization.service";
import { ApiResult } from "../model/apiResult.model";
import { ResultType } from "../model/enums/resultType.model";
import { UserSession } from "../model/userSession.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders(),
    params: new HttpParams()
  };

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private authorizationService: AuthorizationService,
    @Inject("baseUrl") private baseUrl: string
  ) {}

  get<T>(url: string, params?: HttpParams): Observable<T> {
    const fullUrl = this.baseUrl + url;
    return this.http.get<T>(fullUrl, { params: params });
  }

  put(url: string, model: any): Observable<any> {
    const fullUrl = this.baseUrl + url;
    return this.http.put(fullUrl, model, this.httpOptions);
  }

  private configureHeaders(params: HttpParams) {
    this.httpOptions.headers = new HttpHeaders()
      .append("Content-Type", "application/json")
      .append(
        "Authorization",
        `Bearer ${this.authorizationService.ReturnSessionToken()}`
      );

    const userSession: UserSession = JSON.parse(
      sessionStorage.getItem("userSession")
    );
    if (userSession !== null && userSession.activeUserSchool) {
      if (!params.keys().find(p => p.toUpperCase() === "SCHOOLID")) {
        params = params.set("schoolId", userSession.activeUserSchool.schoolId);
      }
    }

    this.httpOptions.params = params;
  }

  public async Get<T>(url: string): Promise<T> {
    const fullUrl = this.baseUrl + url;
    this.configureHeaders(new HttpParams());

    return new Promise<T>((resolve, reject) => {
      this.http
        .get<ApiResult<T>>(fullUrl, this.httpOptions)
        .pipe(
          retry(1),
          tap(() => console.log(`Http GET: ${fullUrl}`))
        )
        .toPromise()
        .then(
          result => {
            if (result.resultType === ResultType.Error) {
              this.errorService.HandleError(result.message);
              reject(result.message);
            }

            if (result.resultType === ResultType.Warning) {
              console.warn(result.message);
            }

            console.log("Success");
            resolve(result.result);
          },
          error => {
            this.errorService.HandleError(error);
            reject(error);
          }
        );
    });
  }

  public async GetWithParams<T>(url: string, params: HttpParams): Promise<T> {
    const fullUrl = this.baseUrl + url;
    this.configureHeaders(params);

    return new Promise<T>((resolve, reject) => {
      this.http
        .get<ApiResult<T>>(fullUrl, this.httpOptions)
        .pipe(
          tap(() => console.log(`Http GET: ${fullUrl},, ${params.toString()}`)),
          retry(1)
        )
        .toPromise()
        .then(
          result => {
            if (result.resultType === ResultType.Error) {
              this.errorService.HandleError(result.message);
              reject(result.message);
            }

            if (result.resultType === ResultType.Warning) {
              console.warn(result.message);
            }

            console.log("Success");
            resolve(result.result);
          },
          error => {
            this.errorService.HandleError(error);
            reject(error);
          }
        );
    });
  }

  public async Post<T>(
    url: string,
    body: any,
    DebounceTime?: number
  ): Promise<T> {
    const fullUrl = this.baseUrl + url;
    this.configureHeaders(new HttpParams());

    return new Promise<T>((resolve, reject) => {
      this.http
        .post<ApiResult<T>>(fullUrl, body, this.httpOptions)
        .pipe(
          retry(1),
          DebounceTime ? debounceTime(3000) : debounceTime(0),
          tap(() => console.log(`Http POST: ${fullUrl},, ${body}`))
        )
        .toPromise()
        .then(
          result => {
            if (result.resultType === ResultType.Error) {
              this.errorService.HandleError(result.message);
              reject(result.message);
            }

            if (result.resultType === ResultType.Warning) {
              console.warn(result.message);
            }

            console.log("Success");
            resolve(result.result);
          },
          error => {
            this.errorService.HandleError(error);
            reject(error);
          }
        );
    });
  }

  public async PostWithParams<T>(
    url: string,
    body: any,
    params: HttpParams
  ): Promise<T> {
    const fullUrl = this.baseUrl + url;
    this.configureHeaders(params);

    return new Promise<T>((resolve, reject) => {
      this.http
        .post<ApiResult<T>>(fullUrl, body, this.httpOptions)
        .pipe(
          retry(1),
          tap(() => console.log(`Http POST: ${fullUrl},, ${params},, ${body}`))
        )
        .toPromise()
        .then(
          result => {
            if (result.resultType === ResultType.Error) {
              this.errorService.HandleError(result.message);
              reject(result.message);
            }

            if (result.resultType === ResultType.Warning) {
              console.warn(result.message);
            }

            console.log("Success");
            resolve(result.result);
          },
          error => {
            this.errorService.HandleError(error);
            reject(error);
          }
        );
    });
  }

  public async Delete<T>(url: string, params: HttpParams): Promise<T> {
    const fullUrl = this.baseUrl + url;
    this.configureHeaders(params);

    return new Promise<T>((resolve, reject) => {
      this.http
        .delete<ApiResult<T>>(fullUrl, this.httpOptions)
        .pipe(
          retry(1),
          tap(() => console.log(`Http DELETE: ${fullUrl},, ${params}`))
        )
        .toPromise()
        .then(
          result => {
            if (result.resultType === ResultType.Error) {
              this.errorService.HandleError(result.message);
              reject(result.message);
            }

            if (result.resultType === ResultType.Warning) {
              console.warn(result.message);
            }

            console.log("Success");
            resolve(result.result);
          },
          error => {
            this.errorService.HandleError(error);
            reject(error);
          }
        );
    });
  }
}

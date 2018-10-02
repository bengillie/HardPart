import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {
    baseUrl = "api/";

    constructor(private http: HttpClient) { }

    get<T>(url: string, params?: HttpParams): Observable<T> {
        const fullUrl = this.baseUrl + url;
        return this.http.get<T>(fullUrl, {params: params});
    }

    put(url: string, model: any): Observable<any> {
        const fullUrl = this.baseUrl + url;
        return this.http.put(fullUrl, model, httpOptions);
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { HttpRequestInterface } from "./http-request-interface";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  /**
   * @param httpRequest request
   * @return an observable built on a GET request
   */
  public get(httpRequest: HttpRequestInterface): Observable<any> {
    let apiUrl: string = this.buildApiUrl(httpRequest);
    return this.http.get(apiUrl);
  }

  /**
   * @param httpRequest request
   * @return an observable built on a GET request
   */
  public post(httpRequest: HttpRequestInterface): Observable<any> {
    return of(true);
  }

  /**
   * @param httpRequest request
   * @return an observable built on a GET request
   */
  public put(httpRequest: HttpRequestInterface): Observable<any> {
    return of(true);
  }

  /**
   * @param httpRequest request
   * @return an observable built on a GET request
   */
  public delete(httpRequest: HttpRequestInterface): Observable<any> {
    return of(true);
  }

  private buildApiUrl(httpRequest: HttpRequestInterface): string {
    let apiUrl: string = environment.baseUrlApi;
    if (httpRequest.baseApiUrl) {
      apiUrl = httpRequest.baseApiUrl;
    }
    apiUrl += httpRequest.endpoint;
    return apiUrl;
  }
}

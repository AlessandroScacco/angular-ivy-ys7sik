import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpRequestInterface } from './http-request-interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  /**
   * Number used to indicate the delay to wait before retry a failed networ call
   */
  private delayBeforeRetryNetworkCall = 2000;

  /**
   * Number used to indicate the number of attempts to retry a network call if it fails
   */
  private maxNumberOfAttemptForNetworkErrorCall = 3;

  constructor() {}

  /**
   * @param httpRequest request
   * @return an observable built on a GET request
   */
  public get(httpRequest: HttpRequestInterface): Observable<any> {
    return of(true);
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
}

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * The http interceptor used to automatically manage the http requests
 */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  /**
   * Intercepts the request adding the authentication token if it is present
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
  }
}

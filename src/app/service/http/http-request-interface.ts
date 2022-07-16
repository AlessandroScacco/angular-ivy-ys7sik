import { HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * The http request interface
 */
export interface HttpRequestInterface {
  endpoint?: string;
  baseApiUrl?: string;  
  body?: any;
  params?: HttpParams;
  responseType?: 'response' | 'arraybuffer' | 'blob' | 'json';
  isForcedMock?: boolean;
  customHeaders?: HttpHeaders;
  contentType?: string;
}

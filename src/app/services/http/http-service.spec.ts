import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpRequestInterface } from './http-request-interface';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpMock: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Get', () => {
    it('get return a Observable<any>', () => {
      const endpoint = '/test/post';

      const stubValue = [
        {
          key1: 'value 1',
        },
        {
          key2: 'value 2',
        },
      ];

      const request: HttpRequestInterface  = {
        endpoint: endpoint
      }

      // service
      //   .get(request)
      //   .subscribe((response: any) => {
      //      expect(response).toBeTrue()
      //   });

      // let req = httpMock.expectOne((req: HttpRequest<any>) => req.url.includes(endpoint));
      // expect(req.request.method).toBe('GET');
      // req.flush(stubValue);
      // httpMock.verify();

      // TODO Usare metodo precedente quando si svilupperanno i metodi GET/POST/PUT/DELETE
      service.get(request).subscribe((response)=>{
        expect(response).toBe(true);
      });
    });
  });

  describe('Post', () => {
    it('get return a Observable<any>', () => {
      const endpoint = '/test/post';

      const stubValue = [
        {
          key1: 'value 1',
        },
        {
          key2: 'value 2',
        },
      ];

      const request: HttpRequestInterface  = {
        endpoint: endpoint
      }

      // service
      //   .get(request)
      //   .subscribe((response: any) => {
      //      expect(response).toBeTrue()
      //   });

      // let req = httpMock.expectOne((req: HttpRequest<any>) => req.url.includes(endpoint));
      // expect(req.request.method).toBe('GET');
      // req.flush(stubValue);
      // httpMock.verify();

      // TODO Usare metodo precedente quando si svilupperanno i metodi GET/POST/PUT/DELETE
      service.post(request).subscribe((response)=>{
        expect(response).toBe(true);
      });
    });
  });

  describe('Put', () => {
    it('get return a Observable<any>', () => {
      const endpoint = '/test/post';

      const stubValue = [
        {
          key1: 'value 1',
        },
        {
          key2: 'value 2',
        },
      ];

      const request: HttpRequestInterface  = {
        endpoint: endpoint
      }

      // service
      //   .get(request)
      //   .subscribe((response: any) => {
      //      expect(response).toBeTrue()
      //   });

      // let req = httpMock.expectOne((req: HttpRequest<any>) => req.url.includes(endpoint));
      // expect(req.request.method).toBe('GET');
      // req.flush(stubValue);
      // httpMock.verify();

      // TODO Usare metodo precedente quando si svilupperanno i metodi GET/POST/PUT/DELETE
      service.put(request).subscribe((response)=>{
        expect(response).toBe(true);
      });
    });
  });

  describe('Delete', () => {
    it('get return a Observable<any>', () => {
      const endpoint = '/test/post';

      const stubValue = [
        {
          key1: 'value 1',
        },
        {
          key2: 'value 2',
        },
      ];

      const request: HttpRequestInterface  = {
        endpoint: endpoint
      }

      // service
      //   .get(request)
      //   .subscribe((response: any) => {
      //      expect(response).toBeTrue()
      //   });

      // let req = httpMock.expectOne((req: HttpRequest<any>) => req.url.includes(endpoint));
      // expect(req.request.method).toBe('GET');
      // req.flush(stubValue);
      // httpMock.verify();

      // TODO Usare metodo precedente quando si svilupperanno i metodi GET/POST/PUT/DELETE
      service.delete(request).subscribe((response)=>{
        expect(response).toBe(true);
      });
    });
  });

});

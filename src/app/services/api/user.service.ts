import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { HttpRequestInterface } from '../http/http-request-interface';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpService: HttpService) { }

public getUsers(): Observable<Array<User>> {
  const httpRequest: HttpRequestInterface = {
    endpoint: 'users'
  }
  return this.httpService.get(httpRequest);
}

}

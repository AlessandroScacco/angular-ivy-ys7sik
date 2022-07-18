import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EndPoint } from "../../common/constants/endpoint";
import { User } from "../../interfaces/user.interface";
import { HttpRequestInterface } from "../http/http-request-interface";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class UserApiService {
  constructor(private httpService: HttpService) {}

  public getUsers(): Observable<Array<User>> {
    const httpRequest: HttpRequestInterface = {
      endpoint: EndPoint.Users,
    };
    return this.httpService.get(httpRequest);
  }

  public getUserById(id: string): Observable<User> {
    const httpRequest: HttpRequestInterface = {
      endpoint: EndPoint.UsersById(id),
    };
    return this.httpService.get(httpRequest);
  }
}

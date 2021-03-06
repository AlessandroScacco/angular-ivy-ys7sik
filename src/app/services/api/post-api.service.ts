import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EndPoint } from "../../common/constants/endpoint";
import { Post } from "../../interfaces/post.interface";
import { HttpRequestInterface } from "../http/http-request-interface";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class PostApiService {
  constructor(private httpService: HttpService) {}

  public getPosts(): Observable<Array<Post>> {
    const httpRequest: HttpRequestInterface = {
      endpoint: EndPoint.Posts,
    };
    return this.httpService.get(httpRequest);
  }

  public getPostById(id: string): Observable<Post> {
    const httpRequest: HttpRequestInterface = {
      endpoint: EndPoint.PostById(id),
    };
    return this.httpService.get(httpRequest);
  }
}

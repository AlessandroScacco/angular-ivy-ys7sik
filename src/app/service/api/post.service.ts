import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/post.interface';
import { HttpRequestInterface } from '../http/http-request-interface';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private httpService: HttpService) { }

public getPosts(): Observable<Array<Post>> {
  const httpRequest: HttpRequestInterface = {
    endpoint: 'posts'
  }
  return this.httpService.get(httpRequest);
}

}

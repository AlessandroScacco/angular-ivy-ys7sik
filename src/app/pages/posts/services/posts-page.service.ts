import { Injectable } from "@angular/core";
import { Observable, zip } from "rxjs";
import { Post } from "../../../interfaces/post.interface";
import { User } from "../../../interfaces/user.interface";
import { PostApiService } from "../../../services/api/post-api.service";
import { UserApiService } from "../../../services/api/user-api.service";


@Injectable({
  providedIn: "root",
})
export class PostsPageService {
  constructor(
    private postService: PostApiService,
    private userService: UserApiService
  ) {}

  getPostsUsers(): Observable<[Array<Post>, Array<User>]> {
    const posts: Observable<Array<Post>> = this.postService.getPosts();
    const users: Observable<Array<User>> = this.userService.getUsers();
    return zip(posts, users);
  }
}

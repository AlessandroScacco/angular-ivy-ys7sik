import { Injectable } from "@angular/core";
import { Observable, zip } from "rxjs";
import { Post } from "../../../interfaces/post.interface";
import { User } from "../../../interfaces/user.interface";
import { PostService } from "../../../services/api/post.service";
import { UserService } from "../../../services/api/user.service";

@Injectable({
  providedIn: "root",
})
export class PostsPageService {
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  getPostsUsers(): Observable<[Array<Post>, Array<User>]> {
    const posts: Observable<Array<Post>> = this.postService.getPosts();
    const users: Observable<Array<User>> = this.userService.getUsers();
    return zip(posts, users);
  }
}

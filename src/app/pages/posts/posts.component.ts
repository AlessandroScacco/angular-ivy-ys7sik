import { Component, OnInit } from "@angular/core";
import { Post } from "../../interfaces/post.interface";
import { User } from "../../interfaces/user.interface";
import { PostsPageService } from "./services/posts-page.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: Array<Post> = [];
  users: Array<User> = [];

  constructor(private postPageService: PostsPageService) {}

  ngOnInit(): void {
    this.retrieveData();
  }

  private retrieveData(): void {
    this.postPageService
      .getPostsUsers()
      .subscribe(([posts, users]: [Array<Post>, Array<User>]) => {        
        this.posts = posts;
        this.users = users;
      });
  }
}

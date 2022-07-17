import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime } from "rxjs";
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

  postSelected: Post;
  titleFilter: string = "";

  searchFormGroup: FormGroup = new FormGroup({
    title: new FormControl(),
  });

  constructor(
    private postPageService: PostsPageService,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.retrieveData();
    this.initializeFormGroup();
  }

  private retrieveData(): void {
    this.postPageService
      .getPostsUsers()
      .subscribe(([posts, users]: [Array<Post>, Array<User>]) => {
        this.posts = posts;
        this.users = users;
      });
  }

  private initializeFormGroup(): void {
    this.searchFormGroup.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value: any) => (this.titleFilter = value.title));
  }

  handleProfileClicked(post: Post): void {
    this.postSelected = post;
    setTimeout(() => {
      this.scroller.scrollToAnchor("targetPostSelected");
    }, 10);
  }
}

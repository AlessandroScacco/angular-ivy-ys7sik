import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PathPage } from "../../common/constants/path-page";
import { Post } from "../../interfaces/post.interface";
import { User } from "../../interfaces/user.interface";
import { PostApiService } from "../../services/api/post-api.service";
import { UserApiService } from "../../services/api/user-api.service";
import { LoggerService } from "../../services/logger/logger.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: Post;
  author: User;

  PathPage = PathPage;

  constructor(
    private loggerService: LoggerService,
    private userApiService: UserApiService,
    private postApiService: PostApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idByUrl: string = this.route.snapshot.params["id"];
    if (idByUrl) {
      this.postByidService(idByUrl);
    }
  }

  private postByidService(id: string): void {
    this.postApiService.getPostById(id).subscribe({
      next: (post: Post) => {
        this.post = post;
        if (this.post) {
          this.userByidService(String(this.post.userId));
        }
      },
      error: (error) => {
        this.loggerService.warn("Error during retrieve Post By Id", error);
      },
    });
  }

  private userByidService(id: string): void {
    this.userApiService.getUserById(id).subscribe({
      next: (user: User) => {
        this.author = user;
      },
      error: (error) => {
        this.loggerService.warn("Error during retrieve UserById", error);
      },
    });
  }
}

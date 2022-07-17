import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PathPage } from "../../common/constants/path-page";
import { Post } from "../../interfaces/post.interface";
import { User } from "../../interfaces/user.interface";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() user: User;

  @Output() profileClicked: EventEmitter<void> = new EventEmitter<void>();

  PathPage = PathPage;

  constructor() {}

  ngOnInit(): void {}

  handleProfileClicked(): void {
    this.profileClicked.emit();
  }
}

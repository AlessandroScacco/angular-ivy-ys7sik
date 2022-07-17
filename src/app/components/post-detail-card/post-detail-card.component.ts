import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PathPage } from '../../common/constants/path-page';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-post-detail-card',
  templateUrl: './post-detail-card.component.html',
  styleUrls: ['./post-detail-card.component.scss']
})
export class PostDetailCardComponent implements OnInit {

  @Input() post: Post;
  @Input() user: User;

  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();

  PathPage = PathPage;

  constructor() { }

  ngOnInit(): void {
  }

  handleClose(): void {
    this.closeClicked.emit();
  }
}

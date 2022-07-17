import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  
  @Input() post: Post;
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}

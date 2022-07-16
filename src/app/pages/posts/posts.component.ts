import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../service/api/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<Post> = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }

  private retrievePosts(): void {
    this.postService.getPosts().subscribe((response: Array<Post>)=>{
      this.posts = response;
    }); 
  }

}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/api/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts();
  }

  private posts(): void {
    this.postService.getPosts().subscribe(k=>{
      console.warn('Response : ', k);
    }); 
  }

}

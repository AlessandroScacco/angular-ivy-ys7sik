import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/api/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

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

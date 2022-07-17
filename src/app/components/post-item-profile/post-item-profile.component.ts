import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item-profile',
  templateUrl: './post-item-profile.component.html',
  styleUrls: ['./post-item-profile.component.scss']
})
export class PostItemProfileComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}

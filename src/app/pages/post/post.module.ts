import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PostModule { }

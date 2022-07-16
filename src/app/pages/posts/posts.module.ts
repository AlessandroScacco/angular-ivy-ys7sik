import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ComponentsModule,
    TranslateModule.forChild()
  ]
})
export class PostsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PostItemComponent } from './post-item/post-item.component';
import { PostItemProfileComponent } from './post-item-profile/post-item-profile.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),    
  ],
  declarations: [
    PostItemComponent,
    PostItemProfileComponent
  ],
  exports: [PostItemComponent, PostItemProfileComponent]
})
export class ComponentsModule { }

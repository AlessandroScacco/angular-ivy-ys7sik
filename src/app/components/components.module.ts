import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PostItemComponent } from './post-item/post-item.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),    
  ],
  declarations: [
    PostItemComponent
  ],
  exports: [PostItemComponent]
})
export class ComponentsModule { }

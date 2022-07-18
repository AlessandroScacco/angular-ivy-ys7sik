import { NgModule } from '@angular/core';
import { UserFindPipe, UserInitialNamePipe } from './user-filter.pipe';
import { PostsFilterPipe } from './posts.pipe';

@NgModule({
  declarations: [		
      UserFindPipe,
      UserInitialNamePipe,
      PostsFilterPipe
   ],
  exports: [
    UserFindPipe,
    UserInitialNamePipe,
    PostsFilterPipe
  ]
})
export class CommonPipeModule { }

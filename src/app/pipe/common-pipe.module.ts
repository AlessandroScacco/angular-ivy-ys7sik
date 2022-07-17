import { NgModule } from '@angular/core';
import { UserFindPipe, UserInitialNamePipe } from './user-filter.pipe';

@NgModule({
  declarations: [	
      UserFindPipe,
      UserInitialNamePipe
   ],
  exports: [
    UserFindPipe,
    UserInitialNamePipe
  ]
})
export class CommonPipeModule { }

import { NgModule } from '@angular/core';
import { UserFindPipe } from './user-filter.pipe';

@NgModule({
  declarations: [	
      UserFindPipe
   ],
  exports: [
    UserFindPipe   
  ]
})
export class CommonPipeModule { }

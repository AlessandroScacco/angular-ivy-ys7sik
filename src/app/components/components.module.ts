import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { PostItemComponent } from "./post-item/post-item.component";
import { PostItemProfileComponent } from "./post-item-profile/post-item-profile.component";
import { CommonPipeModule } from "../pipe/common-pipe.module";
import { PostDetailCardComponent } from "./post-detail-card/post-detail-card.component";
import { CustomButtonComponent } from "./custom-button/custom-button.component";

@NgModule({
  imports: [CommonModule, CommonPipeModule, TranslateModule.forChild()],
  declarations: [
    PostItemComponent,
    PostItemProfileComponent,
    PostDetailCardComponent,
    CustomButtonComponent,
  ],
  exports: [
    PostItemComponent,
    PostItemProfileComponent,
    PostDetailCardComponent,
    CustomButtonComponent,
  ],
})
export class ComponentsModule {}

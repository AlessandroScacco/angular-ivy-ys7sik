import { Component } from '@angular/core';
import { pic, picMod1, picMod2 } from '../assets/exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pic = pic;
  picMod1 = picMod1;
  picMod2 = picMod2;
}

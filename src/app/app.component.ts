import { Component } from '@angular/core';
import { pic, picMod1, picMod2 } from '../assets/exercise';
import { TranslateUtilService } from './services/translate-util/translate-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pic = pic;
  picMod1 = picMod1;
  picMod2 = picMod2;

  constructor(translateService: TranslateUtilService) {
    translateService.initializeTranslate();
  }

  ngOnInit(): void {
  }
}

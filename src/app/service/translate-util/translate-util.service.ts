import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class TranslateUtilService {
  constructor(private translateService: TranslateService) {}

  /**
   * @param key to translate
   */
  public getValue(key: string, params?: object): string {
    const result: string = this.translateService.instant(key, params);
    return result;
  }

  /**
   * @param key to translate
   */
  public get(key: string, params?: object): Observable<string | any> {
    return this.translateService.get(key, params);
  }

  /**
   *
   * @param key
   * @returns
   */
  public hasExistsKey(key: string): boolean {
    return this.getValue(key) !== key;
  }

  /**
   * Initialize the browsers default language.
   * If the browser's language is not Italian or English , it 'll set the default language
   */
  public initializeTranslate(): void {
    this.translateService.addLangs(Constants.LANGUAGES);
    this.translateService.use(Constants.DEFAULT_LANGUAGE);
  }
}

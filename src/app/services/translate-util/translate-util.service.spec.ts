import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { TranslateUtilService } from './translate-util.service';

describe('TranslateUtilService', () => {
  let translateUtilService: TranslateUtilService;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    translateServiceSpy = jasmine.createSpyObj('TranslateService', [
      'instant',
      'get',
      'getBrowserLang',
      'addLangs',
      'setDefaultLang',
      'use',
    ]);
    TestBed.configureTestingModule({
      providers: [TranslateUtilService, { provide: TranslateService, useValue: translateServiceSpy }],
    });

    translateUtilService = TestBed.inject(TranslateUtilService);
    translateServiceSpy = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  it('getValue should return value from translate instance', () => {
    const stubValue = 'Stub text value';
    const stubValueWithParameter = 'Stub text value';
    const params = {
      title: 'titolo',
    };
    translateServiceSpy.instant.withArgs('keyTranslate', undefined).and.returnValue(stubValue);
    translateServiceSpy.instant.withArgs('keyTranslate', params).and.returnValue(stubValueWithParameter);

    expect(translateUtilService.getValue('keyTranslate')).toBe(stubValue);
    expect(translateUtilService.getValue('keyTranslate', params)).toBe(stubValueWithParameter);
  });

  it('get should return value from translate get', () => {
    const stubValue = 'Stub text value';
    const stubValueWithParameter = 'Stub text value with parameter';
    const params = {
      title: 'titolo',
    };
    translateServiceSpy.get.withArgs('keyTranslate', undefined).and.returnValue(of(stubValue));
    translateServiceSpy.get.withArgs('keyTranslate', params).and.returnValue(of(stubValueWithParameter));

    translateUtilService.get('keyTranslate').subscribe((value) => {
      expect(value).toBe(stubValue);
    });

    translateUtilService.get('keyTranslate', params).subscribe((value) => {
      expect(value).toBe(stubValueWithParameter);
    });
  });

  it('set initialize translate', () => {
    translateServiceSpy.getBrowserLang.and.returnValue('ze');
    translateUtilService.initializeTranslate();
    expect(translateServiceSpy.use).toHaveBeenCalledWith('it');
  });

  it('hasExistsKey', () => {
    translateServiceSpy.get.withArgs('keyTranslate', undefined).and.returnValue(of('keyTranslate'));
    const existsKey: boolean = translateUtilService.hasExistsKey('keyTranslate');
    expect(existsKey).toBeTrue();
  });
});

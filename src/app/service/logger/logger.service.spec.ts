/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { LOG_LEVEL } from './log-level.enum';
import { LoggerService } from './logger.service';

describe('Service: Logger', () => {
  let service: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should ...', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));

  describe('WriteLog', () => {
    it('calls info', () => {
      spyOn(console, 'info');
      service.writeLog(LOG_LEVEL.INFO, '');
      expect(console.info).toHaveBeenCalled();
    });
    it('calls debug', () => {
      spyOn(console, 'debug');
      service.writeLog(LOG_LEVEL.DEBUG, '');
      expect(console.debug).toHaveBeenCalled();
    });
    it('calls warn', () => {
      spyOn(console, 'warn');
      service.writeLog(LOG_LEVEL.WARN, '');
      expect(console.warn).toHaveBeenCalled();
    });   
  });
});

import { Injectable } from '@angular/core';
import { LOG_LEVEL } from './log-level.enum';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  public info(message: any, ...params: any[]) {
    console.info(LOG_LEVEL.INFO, message, params);
  }

  public debug(message: any, ...params: any[]) {
    console.debug(LOG_LEVEL.DEBUG, message, params);
  }

  public warn(message: any, ...params: any[]) {
    console.warn(LOG_LEVEL.WARN, message, params);
  }

  public writeLog(level: LOG_LEVEL, message: string, ...params: any): void {
    switch (level) {
      case LOG_LEVEL.INFO:
        this.info(message, params);
        break;
      case LOG_LEVEL.DEBUG:
        this.debug(message, params);
        break;
      case LOG_LEVEL.WARN:
        this.warn(message, params);
        break;    
    }
  }
}

import { EmitEvent } from './emit-event.interface';
import { TestBed } from '@angular/core/testing';

import { EventBusService } from './event-bus.service';

describe('EventBusService', () => {
  let service: EventBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('emit and on', () => {
    const event: EmitEvent = {
      name: 'NOME_EVENTO',
      value: 'valore',
    };
    service.on('NOME_EVENTO').subscribe((t) => {
      console.warn('', t);
      expect(t).toBe(event.value);
    });
    service.emit(event);
  });
});

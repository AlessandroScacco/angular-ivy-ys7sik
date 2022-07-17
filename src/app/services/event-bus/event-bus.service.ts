import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmitEvent } from './emit-event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject<EmitEvent>();

  constructor() {}

  emit(event: EmitEvent): void {
    this.subject$.next(event);
  }

  on(eventName: string): Observable<any> {
    return this.subject$.pipe(
      filter((emiEvent: EmitEvent) => emiEvent.name === eventName),
      map((emitEvent: EmitEvent) => emitEvent.value)
    );
  }
}

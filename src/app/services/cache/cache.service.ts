import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  // BehaviorSubject that will contain the updated cache data.
  public cache$ = new BehaviorSubject<any>(null);

  constructor() {}

  alert() {
    alert('hello');
  }

  set(message: string) {
    this.cache$.next(message);
  }

  cachedata() {
    return this.cache$ as Observable<any>;
  }
}

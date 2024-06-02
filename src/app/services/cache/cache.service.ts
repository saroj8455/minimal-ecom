import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  // BehaviorSubject that will contain the updated cache data.
  public cache$ = new BehaviorSubject<any>(null);

  private cachingInfo = new Map<string, any[]>();

  constructor(private httpClient: HttpClient) {}

  products(url: string) {
    return this.httpClient.get(url);
  }

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

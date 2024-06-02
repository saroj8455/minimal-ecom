import { Component, OnDestroy, OnInit } from '@angular/core';
import { CacheService } from '../../services/cache/cache.service';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe],
  providers: [CacheService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit, OnDestroy {
  cacheSubscription!: Subscription;
  data: any;
  apiUrl = 'https://fakestoreapi.com/products';

  constructor(private cacheService: CacheService) {}
  ngOnInit(): void {
    console.log('about called');
    // this.ch.alert();

    // make api call for data
    this.cacheService.products(this.apiUrl);

    this.cacheService.set('Hello World App');
    this.cacheSubscription = this.cacheService.cache$.subscribe((data) => {
      this.data = data;
    });

    this.cacheService.cache$.subscribe((data) => {
      // console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.cacheSubscription.unsubscribe();
  }
}

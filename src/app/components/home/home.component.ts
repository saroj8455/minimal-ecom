import { Component, OnDestroy, OnInit } from '@angular/core';
import { CacheService } from '../../services/cache/cache.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [CacheService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  headerMessage = 'inital message';
  cacheSubscription!: Subscription;

  constructor(private cacheService: CacheService) {}

  ngOnInit(): void {
    this.cacheService.set('Home Page Component');
    this.cacheSubscription = this.cacheService.cache$.subscribe((data) => {
      this.headerMessage = data;
    });
  }

  ngOnDestroy(): void {
    this.cacheSubscription.unsubscribe();
  }
}

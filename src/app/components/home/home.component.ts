import { Component, OnDestroy, OnInit } from '@angular/core';
import { CacheService } from '../../services/cache/cache.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { PrimeconfigModule } from '../../primeconfig/primeconfig.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimeconfigModule],
  providers: [CacheService, CartService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  headerMessage = 'inital message';
  cacheSubscription!: Subscription;

  constructor(
    private cacheService: CacheService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cacheService.set('Home Page Component');
    this.cacheSubscription = this.cacheService.cache$.subscribe((data) => {
      this.headerMessage = data;
    });
  }

  ngOnDestroy(): void {
    this.cacheSubscription.unsubscribe();
  }

  addItemToCart() {
    this.cartService.addToCart('A');
  }
}

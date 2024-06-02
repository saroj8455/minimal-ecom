import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();

  test$ = new Subject();

  private items: any[] = [];

  public get count(): number {
    return this.items.reduce((c, t1) => t1.qty + c, 0);
  }

  addTest(params: string) {
    debugger;
    this.test$.next('test');
  }

  addToCart(item: any) {
    this.items.push(item);
    console.log(this.items.length);
    this.cartItemCount.next(this.items.length);
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }
}

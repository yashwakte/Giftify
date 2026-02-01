import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gift } from '../core/models/gift.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<{ gift: Gift; count: number }[]>([]);
  public cart$ = this.cartSubject.asObservable();

  addToCart(gift: Gift): void {
    const cart = this.cartSubject.value;
    const idx = cart.findIndex((item) => item.gift.id === gift.id);
    if (idx > -1) {
      cart[idx].count += 1;
    } else {
      cart.push({ gift, count: 1 });
    }
    this.cartSubject.next([...cart]);
  }

  removeFromCart(giftId: string): void {
    const cart = this.cartSubject.value.filter((item) => item.gift.id !== giftId);
    this.cartSubject.next([...cart]);
  }

  updateCartCount(giftId: string, count: number): void {
    const cart = this.cartSubject.value.map((item) =>
      item.gift.id === giftId ? { ...item, count: Math.max(1, count) } : item,
    );
    this.cartSubject.next([...cart]);
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }

  getCartCount(): number {
    return this.cartSubject.value.reduce((sum, item) => sum + item.count, 0);
  }
}

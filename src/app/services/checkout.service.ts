import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gift } from '../core/models/gift.model';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  private checkoutSubject = new BehaviorSubject<{ gift: Gift; count: number }[]>([]);
  public checkout$ = this.checkoutSubject.asObservable();

  addToCheckout(gift: Gift): void {
    const checkout = this.checkoutSubject.value;
    const idx = checkout.findIndex((item) => item.gift.id === gift.id);
    if (idx > -1) {
      checkout[idx].count += 1;
    } else {
      checkout.push({ gift, count: 1 });
    }
    this.checkoutSubject.next([...checkout]);
  }

  removeFromCheckout(giftId: string): void {
    const checkout = this.checkoutSubject.value.filter((item) => item.gift.id !== giftId);
    this.checkoutSubject.next([...checkout]);
  }

  updateCheckoutCount(giftId: string, count: number): void {
    const checkout = this.checkoutSubject.value.map((item) =>
      item.gift.id === giftId ? { ...item, count: Math.max(1, count) } : item,
    );
    this.checkoutSubject.next([...checkout]);
  }

  clearCheckout(): void {
    this.checkoutSubject.next([]);
  }

  getCheckoutCount(): number {
    return this.checkoutSubject.value.reduce((sum, item) => sum + item.count, 0);
  }
}

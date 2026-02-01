import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gift } from '../models/gift.model';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  private giftsSubject = new BehaviorSubject<Gift[]>(this.getInitialGifts());
  gifts$: Observable<Gift[]> = this.giftsSubject.asObservable();

  private cartSubject = new BehaviorSubject<{ gift: Gift; count: number }[]>([]);
  cart$: Observable<{ gift: Gift; count: number }[]> = this.cartSubject.asObservable();

  private checkoutSubject = new BehaviorSubject<{ gift: Gift; count: number }[]>([]);
  checkout$: Observable<{ gift: Gift; count: number }[]> = this.checkoutSubject.asObservable();

  constructor() {}

  private getInitialGifts(): Gift[] {
    return [
      // Clients
      {
        id: 'client-1',
        name: 'Executive Pen Set',
        description: 'Premium leather pen set perfect for corporate gifts',
        price: 45.99,
        image: '/assets/client/LeatherPen.webp',
        category: 'Clients',
        subcategory: 'Corporate',
      },
      {
        id: 'client-2',
        name: 'Corporate Gift Box',
        description: 'Elegant gift hamper with premium items',
        price: 89.99,
        image: '/assets/client/CorporateBox.webp',
        category: 'Clients',
        subcategory: 'Premium',
      },
      {
        id: 'client-3',
        name: 'Personalized Mug',
        description: 'Custom ceramic mug with company branding',
        price: 15.99,
        image: '/assets/client/PersonalizedMug.webp',
        category: 'Clients',
        subcategory: 'Standard',
      },
      // ...rest of the gifts from the original service...
    ];
  }

  getGifts(): Observable<Gift[]> {
    return this.gifts$;
  }

  addGift(gift: Gift): void {
    const currentGifts = this.giftsSubject.value;
    this.giftsSubject.next([...currentGifts, gift]);
  }

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

  getGiftsByCategory(category: string): Observable<Gift[]> {
    return new Observable((observer) => {
      this.gifts$.subscribe((gifts) => {
        const filtered = gifts.filter((g) => g.category === category);
        observer.next(filtered);
      });
    });
  }

  filterGifts(
    category: string,
    subcategory?: string,
    role?: string,
    ageGroup?: string,
    gender?: string,
  ): Observable<Gift[]> {
    return new Observable((observer) => {
      this.gifts$.subscribe((gifts) => {
        let filtered = gifts.filter((g) => g.category === category);

        if (subcategory) {
          filtered = filtered.filter((g) => g.subcategory === subcategory);
        }
        if (role) {
          filtered = filtered.filter((g) => g.role === role);
        }
        if (ageGroup) {
          filtered = filtered.filter((g) => g.ageGroup === ageGroup);
        }
        if (gender && gender !== 'Any') {
          filtered = filtered.filter((g) => !g.gender || g.gender === gender || g.gender === 'Any');
        }

        observer.next(filtered);
      });
    });
  }

  sortGifts(gifts: Gift[], sortBy: 'price-asc' | 'price-desc' | 'name'): Gift[] {
    const sorted = [...gifts];
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  }
}

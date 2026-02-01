import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Gift {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  ageGroup?: string;
  gender?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  private gifts: Gift[] = [
    // Family
    {
      id: 'family-13',
      name: "Son's Gaming Set",
      description: 'Gaming accessories and gadgets',
      price: 85.99,
      image: 'https://via.placeholder.com/300x200?text=Gaming',
      category: 'Family',
      subcategory: 'Son',
    },
    {
      id: 'family-14',
      name: "Uncle's Book Collection",
      description: 'Curated set of popular books',
      price: 72.99,
      image: 'https://via.placeholder.com/300x200?text=Books',
      category: 'Family',
      subcategory: 'Uncle',
    },
    {
      id: 'family-15',
      name: 'Others Special Gift',
      description: 'Unique and thoughtful gift',
      price: 55.99,
      image: 'https://via.placeholder.com/300x200?text=Special',
      category: 'Family',
      subcategory: 'Others',
    },
    // Friends
    {
      id: 'friend-1',
      name: "Best Friend's Adventure Bracelet",
      description: 'Matching friendship bracelets',
      price: 24.99,
      image: 'https://via.placeholder.com/300x200?text=Bracelet',
      category: 'Friends',
      subcategory: 'Best Friend',
    },
    {
      id: 'friend-2',
      name: 'Casual Friend Gift Hamper',
      description: 'Nice assorted gift collection',
      price: 39.99,
      image: 'https://via.placeholder.com/300x200?text=Hamper',
      category: 'Friends',
      subcategory: 'Casual Friend',
    },
    {
      id: 'friend-3',
      name: 'Childhood Friend Memory Box',
      description: 'Personalized memory keepsake',
      price: 44.99,
      image: 'https://via.placeholder.com/300x200?text=Memory+Box',
      category: 'Friends',
      subcategory: 'Childhood Friend',
    },
    {
      id: 'friend-4',
      name: 'Close Friend Premium Gift',
      description: 'Luxury gift set',
      price: 79.99,
      image: 'https://via.placeholder.com/300x200?text=Luxury',
      category: 'Friends',
      subcategory: 'Close Friend',
    },
    {
      id: 'friend-5',
      name: 'Others - Fun Gift Bundle',
      description: 'Mix of fun and useful items',
      price: 34.99,
      image: 'https://via.placeholder.com/300x200?text=Bundle',
      category: 'Friends',
      subcategory: 'Others',
    },
    {
      id: 'friend-6',
      name: 'Work Friend Office Gift',
      description: 'Professional gift for work friend',
      price: 49.99,
      image: 'https://via.placeholder.com/300x200?text=Office',
      category: 'Friends',
      subcategory: 'Work Friend',
    },
    // Kids
    {
      id: 'kids-1',
      name: 'Building Blocks Set',
      description: 'Colorful educational building blocks',
      price: 29.99,
      image: 'https://via.placeholder.com/300x200?text=Blocks',
      category: 'Kids',
    },
    {
      id: 'kids-2',
      name: 'Educational Puzzle',
      description: 'Fun learning puzzle set',
      price: 19.99,
      image: 'https://via.placeholder.com/300x200?text=Puzzle',
      category: 'Kids',
    },
    {
      id: 'kids-3',
      name: 'Art & Craft Kit',
      description: 'Creative art supplies for kids',
      price: 34.99,
      image: 'https://via.placeholder.com/300x200?text=Art+Kit',
      category: 'Kids',
    },
    {
      id: 'kids-4',
      name: 'Action Figure',
      description: 'Popular character action figure',
      price: 22.99,
      image: 'https://via.placeholder.com/300x200?text=Action+Figure',
      category: 'Kids',
    },
    {
      id: 'kids-5',
      name: 'Robot Kit',
      description: 'STEM learning robot kit',
      price: 49.99,
      image: 'https://via.placeholder.com/300x200?text=Robot',
      category: 'Kids',
    },
    // Partners
    {
      id: 'partner-1',
      name: 'Boyfriend Gaming Headset',
      description: 'High-quality gaming headphones',
      price: 69.99,
      image: 'https://via.placeholder.com/300x200?text=Headset',
      category: 'Partners',
      subcategory: 'Boyfriend',
    },
    {
      id: 'partner-2',
      name: 'Fiancé Luxury Watch',
      description: 'Elegant premium watch',
      price: 149.99,
      image: 'https://via.placeholder.com/300x200?text=Watch',
      category: 'Partners',
      subcategory: 'Fiance',
    },
    {
      id: 'partner-3',
      name: 'Girlfriend Jewelry Set',
      description: 'Beautiful jewelry collection',
      price: 99.99,
      image: 'https://via.placeholder.com/300x200?text=Jewelry',
      category: 'Partners',
      subcategory: 'Girlfriend',
    },
    {
      id: 'partner-4',
      name: 'Husband Gift Bundle',
      description: 'Premium gift set for husband',
      price: 109.99,
      image: 'https://via.placeholder.com/300x200?text=Bundle',
      category: 'Partners',
      subcategory: 'Husband',
    },
    {
      id: 'partner-5',
      name: 'Long Distance Partner Gifts',
      description: 'Thoughtful long-distance couple gift',
      price: 79.99,
      image: 'https://via.placeholder.com/300x200?text=Distance',
      category: 'Partners',
      subcategory: 'Long distance partner',
    },
    {
      id: 'partner-6',
      name: 'Others Romantic Gift',
      description: 'Special romantic present',
      price: 89.99,
      image: 'https://via.placeholder.com/300x200?text=Romantic',
      category: 'Partners',
      subcategory: 'Others',
    },
    {
      id: 'partner-7',
      name: 'Wife Spa & Wellness Package',
      description: 'Luxurious relaxation gift set',
      price: 119.99,
      image: 'https://via.placeholder.com/300x200?text=Wellness',
      category: 'Partners',
      subcategory: 'Wife',
    },
    // Pets
    {
      id: 'pet-1',
      name: 'Pet Bed',
      description: 'Comfortable bed for pets',
      price: 39.99,
      image: 'https://via.placeholder.com/300x200?text=Pet+Bed',
      category: 'Pets',
    },
    {
      id: 'pet-2',
      name: 'Pet Toy Bundle',
      description: 'Fun collection of pet toys',
      price: 24.99,
      image: 'https://via.placeholder.com/300x200?text=Toys',
      category: 'Pets',
    },
    {
      id: 'pet-3',
      name: 'Pet Grooming Kit',
      description: 'Complete grooming set for pets',
      price: 54.99,
      image: 'https://via.placeholder.com/300x200?text=Grooming',
      category: 'Pets',
    },
    {
      id: 'pet-4',
      name: 'Pet Feeder',
      description: 'Automatic pet food dispenser',
      price: 64.99,
      image: 'https://via.placeholder.com/300x200?text=Feeder',
      category: 'Pets',
    },
    {
      id: 'pet-5',
      name: 'Pet Collar with GPS',
      description: 'Smart collar with location tracking',
      price: 79.99,
      image: 'https://via.placeholder.com/300x200?text=Collar',
      category: 'Pets',
    },
  ];

  private giftsSubject = new BehaviorSubject<Gift[]>(this.gifts);
  public gifts$ = this.giftsSubject.asObservable();

  private cartSubject = new BehaviorSubject<{ gift: Gift; count: number }[]>([]);
  public cart$ = this.cartSubject.asObservable();

  private checkoutSubject = new BehaviorSubject<{ gift: Gift; count: number }[]>([]);
  public checkout$ = this.checkoutSubject.asObservable();

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
    return new Observable((observer) => {});
  }
}

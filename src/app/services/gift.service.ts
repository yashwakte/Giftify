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
      },
      {
        id: 'client-2',
        name: 'Corporate Gift Box',
        description: 'Elegant gift hamper with premium items',
        price: 89.99,
        image: '/assets/client/CorporateBox.webp',
        category: 'Clients',
      },
      {
        id: 'client-3',
        name: 'Personalized Mug',
        description: 'Custom ceramic mug with company branding',
        price: 15.99,
        image: '/assets/client/PersonalizedMug.webp',
        category: 'Clients',
      },

      // Colleagues - different roles
      {
        id: 'colleague-1',
        name: 'Coffee Maker',
        description: 'Portable coffee maker for office breaks',
        price: 59.99,
        image: 'https://via.placeholder.com/300x200?text=Coffee+Maker',
        category: 'Colleagues',
        role: 'Manager',
        ageGroup: '25-35',
        gender: 'Any',
      },
      {
        id: 'colleague-2',
        name: 'Desk Organizer',
        description: 'Modern desk organizer set',
        price: 29.99,
        image: 'https://via.placeholder.com/300x200?text=Organizer',
        category: 'Colleagues',
        role: 'Developer',
        ageGroup: '20-30',
        gender: 'Any',
      },
      {
        id: 'colleague-3',
        name: 'Wireless Earbuds',
        description: 'Premium noise-cancelling earbuds',
        price: 79.99,
        image: 'https://via.placeholder.com/300x200?text=Earbuds',
        category: 'Colleagues',
        role: 'Designer',
        ageGroup: '22-35',
        gender: 'Any',
      },

      // Family - various relations
      {
        id: 'family-1',
        name: 'Silk Scarf',
        description: 'Elegant silk scarf in various colors',
        price: 35.99,
        image: 'https://via.placeholder.com/300x200?text=Scarf',
        category: 'Family',
        subcategory: 'Aunt',
      },
      {
        id: 'family-2',
        name: 'Watch',
        description: 'Classic analog watch',
        price: 99.99,
        image: 'https://via.placeholder.com/300x200?text=Watch',
        category: 'Family',
        subcategory: 'Brother',
      },
      {
        id: 'family-3',
        name: 'Jewelry Box',
        description: 'Ornate jewelry storage box',
        price: 49.99,
        image: 'https://via.placeholder.com/300x200?text=Jewelry+Box',
        category: 'Family',
        subcategory: 'Cousins',
      },
      {
        id: 'family-4',
        name: 'Personalized Photo Frame',
        description: 'Custom photo frame for cherished memories',
        price: 25.99,
        image: 'https://via.placeholder.com/300x200?text=Frame',
        category: 'Family',
        subcategory: 'Daughter',
      },
      {
        id: 'family-5',
        name: 'Perfume Bottle',
        description: 'Luxury fragrance collection',
        price: 65.99,
        image: 'https://via.placeholder.com/300x200?text=Perfume',
        category: 'Family',
        subcategory: 'Father-in-law',
      },
      {
        id: 'family-6',
        name: 'Wallet',
        description: 'Premium leather wallet',
        price: 39.99,
        image: 'https://via.placeholder.com/300x200?text=Wallet',
        category: 'Family',
        subcategory: 'Grandparents',
      },
      {
        id: 'family-7',
        name: "Mother's Day Bouquet",
        description: 'Beautiful fresh flower arrangement',
        price: 55.99,
        image: 'https://via.placeholder.com/300x200?text=Flowers',
        category: 'Family',
        subcategory: 'Mother',
      },
      {
        id: 'family-8',
        name: 'Wine Set',
        description: 'Premium wine with accessories',
        price: 75.99,
        image: 'https://via.placeholder.com/300x200?text=Wine',
        category: 'Family',
        subcategory: 'Mother-in-law',
      },
      {
        id: 'family-9',
        name: 'Niece Gift Basket',
        description: 'Colorful gift basket for niece',
        price: 45.99,
        image: 'https://via.placeholder.com/300x200?text=Basket',
        category: 'Family',
        subcategory: 'Niece',
      },
      {
        id: 'family-10',
        name: 'Toy Vehicle Set',
        description: 'Exciting toy collection for nephew',
        price: 35.99,
        image: 'https://via.placeholder.com/300x200?text=Toys',
        category: 'Family',
        subcategory: 'Nephew',
      },
      {
        id: 'family-11',
        name: "Father's Grooming Kit",
        description: 'Premium grooming set for father',
        price: 59.99,
        image: 'https://via.placeholder.com/300x200?text=Grooming',
        category: 'Family',
        subcategory: 'Father',
      },
      {
        id: 'family-12',
        name: "Sister's Spa Kit",
        description: 'Relaxing spa and wellness kit',
        price: 69.99,
        image: 'https://via.placeholder.com/300x200?text=Spa',
        category: 'Family',
        subcategory: 'Sister',
      },
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

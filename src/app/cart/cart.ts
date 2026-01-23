import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class Cart {
  cartItems$;

  constructor(private giftService: GiftService) {
    this.cartItems$ = this.giftService.cart$;
  }

  increaseCount(giftId: string, currentCount: number) {
    this.giftService.updateCartCount(giftId, currentCount + 1);
  }

  decreaseCount(giftId: string, currentCount: number) {
    if (currentCount > 1) {
      this.giftService.updateCartCount(giftId, currentCount - 1);
    }
  }

  removeItem(giftId: string) {
    this.giftService.removeFromCart(giftId);
  }
}

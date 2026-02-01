import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class Cart {
  cartItems$;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
  ) {
    this.cartItems$ = this.cartService.cart$;
  }

  increaseCount(giftId: string, currentCount: number) {
    this.cartService.updateCartCount(giftId, currentCount + 1);
  }

  decreaseCount(giftId: string, currentCount: number) {
    if (currentCount > 1) {
      this.cartService.updateCartCount(giftId, currentCount - 1);
    }
  }

  removeItem(giftId: string) {
    this.cartService.removeFromCart(giftId);
  }

  buyNow(gift: any) {
    this.checkoutService.addToCheckout(gift);
  }
}

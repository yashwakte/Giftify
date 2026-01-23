import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class Checkout {
  checkoutItems$;
  couponCode = '';
  discount = 0;
  appliedCoupon = '';

  constructor(private giftService: GiftService) {
    this.checkoutItems$ = this.giftService.checkout$;
  }

  getTotal(items: { gift: any; count: number }[] | null): number {
    if (!items) return 0;
    const subtotal = items.reduce((sum, item) => sum + item.gift.price * item.count, 0);
    return subtotal - this.discount;
  }

  applyCoupon() {
    // Example: Apply a flat 10% discount for code 'GIFT10'
    if (this.couponCode.trim().toUpperCase() === 'GIFT10') {
      this.discount = this.getSubtotal() * 0.1;
      this.appliedCoupon = 'GIFT10';
    } else {
      this.discount = 0;
      this.appliedCoupon = '';
      alert('Invalid coupon code');
    }
  }

  getSubtotal(): number {
    let subtotal = 0;
    let items: { gift: any; count: number }[] = [];
    this.checkoutItems$
      .subscribe((val) => {
        if (Array.isArray(val)) {
          items = val;
        }
      })
      .unsubscribe();
    items.forEach((item) => {
      subtotal += item.gift.price * item.count;
    });
    return subtotal;
  }

  proceedToCheckout() {
    alert('Proceeding to payment...');
    // Add payment logic here
  }
}

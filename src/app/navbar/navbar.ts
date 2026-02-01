import { Component, AfterViewInit, HostBinding } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  host: { class: 'navbar' },
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements AfterViewInit {
  @HostBinding('class.expanded') expanded = false;
  mobileMenuOpen = false;
  cartCount = 0;
  checkoutCount = 0;
  cartHighlight = false;
  checkoutHighlight = false;
  profileDropdownOpen = false;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router,
  ) {
    this.cartService.cart$.subscribe((cart) => {
      const newCount = cart.reduce((sum, item) => sum + item.count, 0);
      if (newCount > this.cartCount) {
        this.cartHighlight = true;
        setTimeout(() => (this.cartHighlight = false), 2000);
      }
      this.cartCount = newCount;
    });
    this.checkoutService.checkout$.subscribe((checkout) => {
      const newCount = checkout.reduce((sum, item) => sum + item.count, 0);
      if (newCount > this.checkoutCount) {
        this.checkoutHighlight = true;
        setTimeout(() => (this.checkoutHighlight = false), 2000);
      }
      this.checkoutCount = newCount;
    });
  }

  ngAfterViewInit(): void {
    // Small timeout so the browser can render, then set expanded to true.
    setTimeout(() => (this.expanded = true), 120);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  toggleProfileDropdown(): void {
    this.profileDropdownOpen = !this.profileDropdownOpen;
  }

  closeProfileDropdown(): void {
    this.profileDropdownOpen = false;
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  goToSettings(): void {
    this.router.navigate(['/settings']);
  }

  goToHelp(): void {
    this.router.navigate(['/help']);
  }

  logout(): void {
    // Dummy logout logic
    alert('Logged out!');
    this.router.navigate(['/']);
  }
}

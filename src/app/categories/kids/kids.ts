import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService, Gift } from '../../services/gift.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [CommonModule, FormsModule, GiftCardComponent],
  templateUrl: './kids.html',
  styleUrl: './kids.scss',
})
export class KidsComponent implements OnInit {
  gifts: Gift[] = [];
  displayedGifts: Gift[] = [];
  sortBy: 'name' | 'price-asc' | 'price-desc' = 'name';
  constructor(
    private giftService: GiftService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.giftService.getGiftsByCategory('Kids').subscribe((gifts) => {
      this.gifts = gifts;
      this.applyFiltersAndSort();
    });
  }

  onSortChange(): void {
    this.applyFiltersAndSort();
  }

  private applyFiltersAndSort(): void {
    this.displayedGifts = this.giftService.sortGifts(this.gifts, this.sortBy);
  }

  addToCart(gift: Gift): void {
    console.log('Added to cart:', gift);
    this.giftService.addToCart(gift);
    alert(`${gift.name} added to cart!`);
  }

  buyNow(gift: Gift): void {
    console.log('Buy now:', gift);
    this.giftService.addToCheckout(gift);
    this.router.navigate(['/checkout']);
  }
}

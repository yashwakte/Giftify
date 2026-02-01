import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService } from '../../services/gift.service';
import { sortGifts } from '../../shared/utils/sort-gifts';
import { Gift } from '../../core/models/gift.model';
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
    this.giftService.getGiftsByCategory('Kids').subscribe((gifts: Gift[]) => {
      this.gifts = gifts;
      this.applyFiltersAndSort();
    });
  }

  onSortChange(): void {
    this.applyFiltersAndSort();
  }

  private applyFiltersAndSort(): void {
    this.displayedGifts = sortGifts(this.gifts, this.sortBy);
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

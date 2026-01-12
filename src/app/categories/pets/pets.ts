import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService, Gift } from '../../services/gift.service';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CommonModule, FormsModule, GiftCardComponent],
  templateUrl: './pets.html',
  styleUrl: './pets.scss',
})
export class PetsComponent implements OnInit {
  gifts: Gift[] = [];
  displayedGifts: Gift[] = [];
  sortBy: 'name' | 'price-asc' | 'price-desc' = 'name';

  constructor(private giftService: GiftService) {}

  ngOnInit(): void {
    this.giftService.getGiftsByCategory('Pets').subscribe((gifts) => {
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
    alert(`${gift.name} added to cart!`);
  }

  buyNow(gift: Gift): void {
    console.log('Buy now:', gift);
    alert(`Proceeding to checkout for ${gift.name}!`);
  }
}

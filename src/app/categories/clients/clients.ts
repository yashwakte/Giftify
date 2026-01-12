import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService, Gift } from '../../services/gift.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, GiftCardComponent],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class ClientsComponent implements OnInit {
  gifts: Gift[] = [];
  displayedGifts: Gift[] = [];
  sortBy: 'name' | 'price-asc' | 'price-desc' = 'name';
  selectedCategory: string = '';

  constructor(private giftService: GiftService) {}

  ngOnInit(): void {
    this.giftService.getGiftsByCategory('Clients').subscribe((gifts) => {
      this.gifts = gifts;
      this.applyFiltersAndSort();
    });
  }

  onSortChange(): void {
    this.applyFiltersAndSort();
  }

  onFilterChange(): void {
    this.applyFiltersAndSort();
  }

  private applyFiltersAndSort(): void {
    let filtered = [...this.gifts];

    if (this.selectedCategory) {
      // You can add category filtering here based on gift properties
      // For now, we'll keep it flexible
    }

    this.displayedGifts = this.giftService.sortGifts(filtered, this.sortBy);
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

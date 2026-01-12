import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService, Gift } from '../../services/gift.service';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule, FormsModule, GiftCardComponent],
  templateUrl: './friends.html',
  styleUrl: './friends.scss',
})
export class FriendsComponent implements OnInit {
  // Sorted in ascending order
  availableCategories = [
    'Best Friend',
    'Casual Friend',
    'Childhood Friend',
    'Close Friend',
    'Others',
    'Work Friend',
  ];

  selectedSubcategory: string | null = null;
  gifts: Gift[] = [];
  displayedGifts: Gift[] = [];

  sortBy: 'name' | 'price-asc' | 'price-desc' = 'name';

  constructor(private giftService: GiftService) {}

  ngOnInit(): void {
    this.giftService.getGiftsByCategory('Friends').subscribe((gifts) => {
      this.gifts = gifts;
    });
  }

  selectSubcategory(category: string): void {
    this.selectedSubcategory = category;
    this.sortBy = 'name';
    this.applyFiltersAndSort();
  }

  goBack(): void {
    this.selectedSubcategory = null;
  }

  onSortChange(): void {
    this.applyFiltersAndSort();
  }

  private applyFiltersAndSort(): void {
    if (!this.selectedSubcategory) {
      this.displayedGifts = [];
      return;
    }

    let filtered = this.gifts.filter((g) => g.subcategory === this.selectedSubcategory);

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

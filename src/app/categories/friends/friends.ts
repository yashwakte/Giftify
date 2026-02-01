import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService } from '../../services/gift.service';
import { sortGifts } from '../../shared/utils/sort-gifts';
import { Gift } from '../../core/models/gift.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule, FormsModule, GiftCardComponent],
  templateUrl: './friends.html',
  styleUrl: './friends.scss',
})
export class FriendsComponent implements OnInit {
  // Sorted in ascending order - Others always last
  availableCategories = [
    'Best Friend',
    'Casual Friend',
    'Childhood Friend',
    'Close Friend',
    'Work Friend',
    'Others',
  ];
  selectedSubcategory: string | null = null;
  gifts: Gift[] = [];
  displayedGifts: Gift[] = [];
  sortBy: 'name' | 'price-asc' | 'price-desc' = 'name';
  constructor(
    private giftService: GiftService,
    private router: Router,
  ) {}

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

    this.displayedGifts = sortGifts(filtered, this.sortBy);
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

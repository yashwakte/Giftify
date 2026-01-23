import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService, Gift } from '../../services/gift.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [CommonModule, FormsModule, GiftCardComponent],
  templateUrl: './family.html',
  styleUrl: './family.scss',
})
export class FamilyComponent implements OnInit {
  // Sorted in ascending order
  availableCategories = [
    'Aunt',
    'Brother',
    'Cousins',
    'Daughter',
    'Father',
    'Father-in-law',
    'Grandparents',
    'Mother',
    'Mother-in-law',
    'Nephew',
    'Niece',
    'Sister',
    'Son',
    'Uncle',
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
    this.giftService.getGiftsByCategory('Family').subscribe((gifts) => {
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
    this.giftService.addToCart(gift);
    alert(`${gift.name} added to cart!`);
  }

  buyNow(gift: Gift): void {
    console.log('Buy now:', gift);
    this.giftService.addToCheckout(gift);
    this.router.navigate(['/checkout']);
  }
}

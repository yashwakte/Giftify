import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService, Gift } from '../../services/gift.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colleagues',
  standalone: true,
  imports: [CommonModule, FormsModule, GiftCardComponent],
  templateUrl: './colleagues.html',
  styleUrl: './colleagues.scss',
})
export class ColleaguesComponent implements OnInit {
  availableRoles = ['Developer', 'Designer', 'Manager'];
  selectedRole: string | null = null;
  gifts: Gift[] = [];
  displayedGifts: Gift[] = [];
  selectedAgeGroup: string = '';
  selectedGender: string = '';
  sortBy: 'name' | 'price-asc' | 'price-desc' = 'name';
  constructor(
    private giftService: GiftService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.giftService.getGiftsByCategory('Colleagues').subscribe((gifts) => {
      this.gifts = gifts;
    });
  }

  selectRole(role: string): void {
    this.selectedRole = role;
    this.selectedAgeGroup = '';
    this.selectedGender = '';
    this.sortBy = 'name';
    this.applyFiltersAndSort();
  }

  goBack(): void {
    this.selectedRole = null;
    this.selectedAgeGroup = '';
    this.selectedGender = '';
  }

  onSortChange(): void {
    this.applyFiltersAndSort();
  }

  onFilterChange(): void {
    this.applyFiltersAndSort();
  }

  private applyFiltersAndSort(): void {
    if (!this.selectedRole) {
      this.displayedGifts = [];
      return;
    }

    let filtered = this.gifts.filter((g) => g.role === this.selectedRole);

    if (this.selectedAgeGroup) {
      filtered = filtered.filter((g) => g.ageGroup === this.selectedAgeGroup);
    }

    if (this.selectedGender) {
      filtered = filtered.filter(
        (g) => !g.gender || g.gender === this.selectedGender || g.gender === 'Any',
      );
    }

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

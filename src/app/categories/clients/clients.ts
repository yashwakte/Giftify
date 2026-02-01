import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from '../../components/gift-card/gift-card';
import { GiftService } from '../../services/gift.service';
import { sortGifts } from '../../shared/utils/sort-gifts';
import { Gift } from '../../core/models/gift.model';

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

  constructor(
    private giftService: GiftService,
    private router: Router,
  ) {}

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

    this.displayedGifts = sortGifts(filtered, this.sortBy);
  }

  addToCart(gift: Gift): void {
    this.giftService.addToCart(gift);
    // Optionally show a toast/snackbar instead of alert
    alert(`${gift.name} added to cart!`);
  }

  buyNow(gift: Gift): void {
    this.giftService.addToCheckout(gift);
    this.router.navigate(['/checkout']);
  }
}

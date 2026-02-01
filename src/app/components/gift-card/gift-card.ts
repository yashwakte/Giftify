import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gift } from '../../core/models/gift.model';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gift-card.html',
  styleUrl: './gift-card.scss',
})
export class GiftCardComponent {
  @Input() gift!: Gift;
  @Output() addToCart = new EventEmitter<Gift>();
  @Output() buyNow = new EventEmitter<Gift>();

  onAddToCart(): void {
    this.addToCart.emit(this.gift);
  }

  onBuyNow(): void {
    this.buyNow.emit(this.gift);
  }
}

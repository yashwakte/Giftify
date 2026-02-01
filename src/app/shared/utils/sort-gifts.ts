import { Gift } from '../../core/models/gift.model';

export function sortGifts(gifts: Gift[], sortBy: 'price-asc' | 'price-desc' | 'name'): Gift[] {
  const sorted = [...gifts];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

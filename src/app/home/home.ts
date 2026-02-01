import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  showContent = true;
  showHello = false;
  selectedCategory: string | null = null;

  categories = ['Clients', 'Colleagues', 'Family', 'Friends', 'Kids', 'Partners', 'Pets'];

  occasions = [
    { label: 'Anniversary', img: 'assets/client/anniversary.jpg' },
    { label: 'Birthday', img: 'assets/client/birthday.jpg' },
    { label: 'Honeymoon', img: 'assets/client/honeymoon.jpg' },
    { label: 'House Warming', img: 'assets/client/housewarming.jpg' },
    { label: 'Baby Shower for Dads', img: 'assets/client/babyshower.jpg' },
  ];

  relationships = [
    { label: 'Husband', img: 'assets/client/husband.jpg' },
    { label: 'Wife', img: 'assets/client/wife.jpg' },
    { label: 'Girlfriend', img: 'assets/client/girlfriend.jpg' },
    { label: 'Boyfriend', img: 'assets/client/boyfriend.jpg' },
    { label: 'Brother', img: 'assets/client/brother.jpg' },
    { label: 'Sister', img: 'assets/client/sister.jpg' },
    { label: 'New Mom', img: 'assets/client/newmom.jpg' },
    { label: 'New Dad', img: 'assets/client/newdad.jpg' },
    { label: 'Father', img: 'assets/client/father.jpg' },
    { label: 'Mother', img: 'assets/client/mother.jpg' },
  ];

  @ViewChild('relationshipCircles', { static: false })
  relationshipCircles?: ElementRef<HTMLDivElement>;
  autoScrollTimeout: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Show "Hi!" message when page loads
    setTimeout(() => {
      this.showHello = true;
    }, 500);

    // Hide "Hi!" message after 2.5 seconds
    setTimeout(() => {
      this.showHello = false;
    }, 3000);
  }

  ngAfterViewInit() {
    // Auto-scroll after 10 seconds if overflow exists
    this.autoScrollTimeout = setTimeout(() => {
      this.autoScrollRelationshipRow();
    }, 10000);
  }

  autoScrollRelationshipRow() {
    const el = this.relationshipCircles?.nativeElement;
    if (el && el.scrollWidth > el.clientWidth) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    }
  }

  scrollRelationshipRow(direction: 'left' | 'right') {
    const el = this.relationshipCircles?.nativeElement;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.7;
    if (direction === 'left') {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  getCategoryIcon(category: string): string {
    switch (category.toLowerCase()) {
      case 'family':
        return '👨‍👩‍👧‍👦';
      case 'friends':
        return '🤝';
      case 'colleagues':
        return '💼';
      case 'partners':
        return '❤️';
      case 'kids':
        return '🧒';
      case 'pets':
        return '🐾';
      case 'clients':
        return '🏢';
      default:
        return '🎁';
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    const route = category.toLowerCase();
    this.router.navigate([`/categories/${route}`]);
  }
}

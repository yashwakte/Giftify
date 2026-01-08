import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  showContent = true; // Show immediately
  showHiddenP = true; // Show first p
  showSecondP = false;
  selectedCategory: string | null = null;

  categories = [
    'Clients',
    'Colleagues',
    'Family',
    'Friends',
    'Kids',
    'Partners',
    'Pets',
    'Siblings',
  ];

  ngOnInit() {
    // Swap paragraphs after 2 seconds
    setTimeout(() => {
      this.showHiddenP = false;
      this.showSecondP = true;
    }, 2000);
  }

  selectCategory(category: string) {
    this.selectedCategory = this.selectedCategory === category ? null : category;
  }
}

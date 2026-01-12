import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  categories = ['Clients', 'Colleagues', 'Family', 'Friends', 'Kids', 'Partners', 'Pets'];

  constructor(private router: Router) {}

  ngOnInit() {
    // Swap paragraphs after 2 seconds
    setTimeout(() => {
      this.showHiddenP = false;
      this.showSecondP = true;
    }, 2000);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    // Navigate to category route
    const route = category.toLowerCase();
    this.router.navigate([`/categories/${route}`]);
  }
}

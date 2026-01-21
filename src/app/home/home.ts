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
  showContent = true;
  showHello = false;
  selectedCategory: string | null = null;

  categories = ['Clients', 'Colleagues', 'Family', 'Friends', 'Kids', 'Partners', 'Pets'];

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

  selectCategory(category: string) {
    this.selectedCategory = category;
    const route = category.toLowerCase();
    this.router.navigate([`/categories/${route}`]);
  }
}

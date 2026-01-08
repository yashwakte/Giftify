import { Component, AfterViewInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  host: { class: 'navbar' },
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements AfterViewInit {
  @HostBinding('class.expanded') expanded = false;
  mobileMenuOpen = false;

  ngAfterViewInit() {
    // Small timeout so the browser can render, then set expanded to true.
    setTimeout(() => (this.expanded = true), 120);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}

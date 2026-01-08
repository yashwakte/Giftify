import { Component, AfterViewInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  host: { class: 'navbar' },
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements AfterViewInit {
  @HostBinding('class.expanded') expanded = false;

  ngAfterViewInit() {
    // Small timeout so the browser can render, then set expanded to true.
    setTimeout(() => (this.expanded = true), 120);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `<div class="dummy-page">
    <h2>Profile</h2>
    <p>This is a dummy profile page.</p>
  </div>`,
  styleUrls: ['./profile.scss'],
})
export class ProfileComponent {}

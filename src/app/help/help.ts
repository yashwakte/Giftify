import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  standalone: true,
  template: `<div class="dummy-page">
    <h2>Help & Support</h2>
    <p>This is a dummy help and support page.</p>
  </div>`,
  styleUrls: ['./help.scss'],
})
export class HelpComponent {}

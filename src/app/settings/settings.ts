import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `<div class="dummy-page">
    <h2>Settings</h2>
    <p>This is a dummy settings page.</p>
  </div>`,
  styleUrls: ['./settings.scss'],
})
export class SettingsComponent {}

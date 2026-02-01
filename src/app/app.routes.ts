import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ClientsComponent } from './categories/clients/clients';
import { ColleaguesComponent } from './categories/colleagues/colleagues';
import { FamilyComponent } from './categories/family/family';
import { FriendsComponent } from './categories/friends/friends';
import { KidsComponent } from './categories/kids/kids';
import { PartnersComponent } from './categories/partners/partners';
import { PetsComponent } from './categories/pets/pets';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'categories/clients', component: ClientsComponent },
  { path: 'categories/colleagues', component: ColleaguesComponent },
  { path: 'categories/family', component: FamilyComponent },
  { path: 'categories/friends', component: FriendsComponent },
  { path: 'categories/kids', component: KidsComponent },
  { path: 'categories/partners', component: PartnersComponent },
  { path: 'categories/pets', component: PetsComponent },
  { path: 'cart', loadComponent: () => import('./cart/cart').then((m) => m.Cart) },
  { path: 'checkout', loadComponent: () => import('./checkout/checkout').then((m) => m.Checkout) },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then((m) => m.ProfileComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings').then((m) => m.SettingsComponent),
  },
  { path: 'help', loadComponent: () => import('./help/help').then((m) => m.HelpComponent) },
];

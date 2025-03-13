import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then((c) => c.ProductListComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/register/register.component').then((c) => c.RegisterComponent),
  },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./components/product-details/product-details.component').then((c) => c.ProductDetailsComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./components/cart/cart.component').then((c) => c.CartComponent),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

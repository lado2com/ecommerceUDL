import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'catalog',
    loadComponent: () => import('./catalog/catalog.component').then(m => m.CatalogPage),
  },
  {
    path: 'product',
    loadComponent: () => import('./product/product.component').then(m => m.ProductPage),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then(m => m.CartPage),
  },
  {
    path: 'confirmation',
    loadComponent: () => import('./confirmation/confirmation.component').then(m => m.ConfirmationPage),
  },
];

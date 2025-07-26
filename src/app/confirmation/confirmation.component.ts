import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class ConfirmationPage {
  order: any;
  cartItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const state = history.state;
    this.order = state.order;
    this.cartItems = state.cartItems || [];

    if (!this.order) {
      this.router.navigate(['/catalog']);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  backToCatalog() {
    this.router.navigate(['/catalog']);
  }
}


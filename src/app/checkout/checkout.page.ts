import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class CheckoutPage {
  order = {
    name: '',
    address: '',
    contact: ''
  };

  cartItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cartItems = history.state.cartItems || [];

    if (this.cartItems.length === 0) {
      // Si se entra directo a esta página sin carrito
      this.router.navigate(['/catalog']);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  submitOrder() {
    this.router.navigate(['/confirmation'], {
      state: {
        order: this.order,
        cartItems: this.cartItems
      }
    });
  }
}

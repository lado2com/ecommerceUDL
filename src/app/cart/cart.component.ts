import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class CartPage {
  cartItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const product = history.state.product;
    if (product && product.name && product.price) {
      this.cartItems.push(product);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout'], { state: { cartItems: this.cartItems } });
  }
}
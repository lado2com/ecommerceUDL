import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class ProductPage {
  product: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.product = history.state.product;
    if (!this.product) {
      this.router.navigate(['/catalog']);
    }
  }

  addToCart() {
    this.router.navigate(['/cart'], { state: { product: this.product } });
  }
}
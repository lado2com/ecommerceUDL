import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class CatalogPage {
  products = [
    { id: 1, name: 'Camisa', price: 250, description: 'Camisa de algodón, manga larga.' },
    { id: 2, name: 'Pantalón', price: 450, description: 'Pantalón de mezclilla azul.' },
    { id: 3, name: 'Zapatos', price: 750, description: 'Zapatos de piel color negro.' }
  ];

  constructor(private router: Router) {}

  goToDetails(product: any) {
    this.router.navigate(['/product'], { state: { product } });
  }
}

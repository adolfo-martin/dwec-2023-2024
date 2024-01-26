import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../entities/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'select-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-product.component.html',
  styleUrl: './select-product.component.css'
})
export class SelectProductComponent {
  products: Array<Product>;

  constructor(private _service: ProductsService) {
    this.products = this._service.retrieveProducts();
  }
}

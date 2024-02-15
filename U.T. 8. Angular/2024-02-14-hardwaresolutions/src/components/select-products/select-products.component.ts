import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HardwaresolutionsMockService, ProductT } from '../../services/hardwaresolutions-mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'select-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-products.component.html',
  styleUrl: './select-products.component.css'
})
export class SelectProductsComponent {
  products$: Observable<ProductT[]>;

  constructor(
    private _service: HardwaresolutionsMockService,
    private _router: Router,
  ) {
    this.products$ = this._service.getProducts$();
  }

  gotoProduct(e: any) {
    const productId = e.target.value;
    this._router.navigate(['/products/', productId]);
  }
}

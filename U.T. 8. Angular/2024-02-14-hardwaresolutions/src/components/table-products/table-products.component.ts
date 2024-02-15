import { Component } from '@angular/core';
import { HardwaresolutionsMockService, ProductT } from '../../services/hardwaresolutions-mock.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'table-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent {
  products$: Observable<ProductT[]>;

  constructor(private _service: HardwaresolutionsMockService) {
    this.products$ = this._service.getProducts$();
  }
}

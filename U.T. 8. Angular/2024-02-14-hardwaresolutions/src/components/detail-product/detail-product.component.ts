import { Component, OnInit } from '@angular/core';
import { HardwaresolutionsMockService, ProductT } from '../../services/hardwaresolutions-mock.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detail-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {
  // @ts-ignore
  product$: Observable<ProductT> = {} as Observable<ProductT>;

  constructor(
    private _service: HardwaresolutionsMockService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    // @ts-ignore
    const productId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.product$ = this._service.getProductById$(productId);
  }
}

import { Component, OnInit } from '@angular/core';
import { TableProductsComponent } from "../table-products/table-products.component";
import { SelectProductsComponent } from '../select-products/select-products.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HardwaresolutionsMockService } from '../../services/hardwaresolutions-mock.service';

@Component({
  selector: 'tab-products',
  standalone: true,
  templateUrl: './tab-products.component.html',
  styleUrl: './tab-products.component.css',
  imports: [TableProductsComponent, SelectProductsComponent, CommonModule]
})
export class TabProductsComponent implements OnInit {
  categoryName = '';

  constructor(
    private _route: ActivatedRoute,
    private _service: HardwaresolutionsMockService,
  ) { }

  ngOnInit(): void {
    const categoryId = this._route.snapshot.paramMap.get('idCategory');
    if (categoryId) {
      this._service.getCategoryById$(parseInt(categoryId)).subscribe(category => this.categoryName = category.name);
    }
  }
}

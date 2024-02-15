import { Component } from '@angular/core';
import { CategoryT, HardwaresolutionsMockService } from '../../services/hardwaresolutions-mock.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'radios-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radios-categories.component.html',
  styleUrl: './radios-categories.component.css'
})
export class RadiosCategoriesComponent {
  categories$ = {} as Observable<CategoryT[]>;

  constructor(
    private _service: HardwaresolutionsMockService,
    private _router: Router,
  ) {
    this.categories$ = this._service.getCategories$();
  }

  // @ts-ignore
  gotoTabProducts(e) {
    const id = e.target.value;
    this._router.navigate(["/categories/", id, "products"])
  }
}

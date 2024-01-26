import { Injectable } from '@angular/core';
import { ProductsRepository } from '../repositories/products-repository';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _repository: ProductsRepository) { }

  public retrieveProducts(): Array<Product> {
    return this._repository.retrieveProducts();
  }
}

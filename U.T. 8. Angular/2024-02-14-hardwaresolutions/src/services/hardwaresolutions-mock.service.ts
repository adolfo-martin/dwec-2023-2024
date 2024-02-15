import { Injectable } from '@angular/core';
import { products } from './products';
import { categories } from './categories';
import { Observable, of } from 'rxjs';


export type ProductT = {
  id: number,
  name: string,
  description: string,
  cost: number,
  price: number,
  categoryId: number,
}

export type CategoryT = {
  id: number,
  name: string,
}


@Injectable({
  providedIn: 'root'
})
export class HardwaresolutionsMockService {

  constructor() { }

  public getProducts$(): Observable<ProductT[]> {
    return of(
      products.map(product => ({
        id: parseInt(product.product_id),
        name: product.product_name,
        description: product.description,
        cost: parseInt(product.standard_cost),
        price: parseInt(product.list_price),
        categoryId: parseInt(product.category_id),
      }))
    );
  }


  public getCategories$(): Observable<CategoryT[]> {
    const categoriesMapped = categories.map(category => ({
      id: parseInt(category.category_id),
      name: category.category_name,
    }));

    const categoriesMapped$ = of(categoriesMapped);
    return categoriesMapped$;
  }


  public getProductById$(productId: number): Observable<ProductT> {
    const product = products
      .map(product => ({
        id: parseInt(product.product_id),
        name: product.product_name,
        description: product.description,
        cost: parseInt(product.standard_cost),
        price: parseInt(product.list_price),
        categoryId: parseInt(product.category_id),
      }))
      .find(product => product.id === productId);

    // @ts-ignore
    return of(product);
  }


  public getCategoryById$(categoryId: number): Observable<CategoryT> {
    const category = categories
      .map(category => ({
        id: parseInt(category.category_id),
        name: category.category_name,
      }))
      .find(category => category.id === categoryId);

    // @ts-ignore
    return of(category);
  }
}

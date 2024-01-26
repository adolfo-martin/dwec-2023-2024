import { Injectable } from "@angular/core";
import { Product } from "../entities/product";
import { ProductsRepositoryI } from "./products-repository-i";

@Injectable({
    providedIn: 'root'
})
export class ProductsRepository implements ProductsRepositoryI {
    private static _products: Array<Product> = [
        new Product(crypto.randomUUID(), 'Ratón', 18.80),
        new Product(crypto.randomUUID(), 'Teclado', 25.50),
        new Product(crypto.randomUUID(), 'Monitor', 195.50),
        new Product(crypto.randomUUID(), 'Caja', 40.25),
        new Product(crypto.randomUUID(), 'Tarjeta gráfica', 495.95),
        new Product(crypto.randomUUID(), 'Placa base', 87.50),
        new Product(crypto.randomUUID(), 'Módulo de memoria', 74.90),
        new Product(crypto.randomUUID(), 'Procesador', 189.55),
        new Product(crypto.randomUUID(), 'Fuente de alimentación', 58.35),
    ];

    retrieveProducts(): Product[] {
        return ProductsRepository._products;
    }

    retrieveProductByUuid(uuid: string): Product {
        throw new Error("Method not implemented.");
    }

    createProduct(uuid: string, name: string, price: number): void {
        throw new Error("Method not implemented.");
    }

    updateProduct(uuid: string, name: string, price: number): void {
        throw new Error("Method not implemented.");
    }

    deleteProduct(uuid: string): void {
        throw new Error("Method not implemented.");
    }
}

import { Product } from "../entities/product";

export interface ProductsRepositoryI {
    retrieveProducts(): Array<Product>;
    retrieveProductByUuid(uuid: string): Product;
    createProduct(uuid: string, name: string, price: number): void;
    updateProduct(uuid: string, name: string, price: number): void;
    deleteProduct(uuid: string): void;
}

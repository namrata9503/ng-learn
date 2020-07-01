import {Subject} from 'rxjs';

export class ProductsService {
    private products = ['A book'];
    updatedProduct = new Subject();

    addProducts(productName: string) {
        this.products.push(productName);
        this.updatedProduct.next();
    }

    getProducts() {
        return [...this.products];
    }
    deleteProduct(product: string){
        this.products= this.products.filter(p=> p!== product);
        this.updatedProduct.next();
    }
}
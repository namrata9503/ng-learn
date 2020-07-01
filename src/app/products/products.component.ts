import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = "A tree";
  isDisabled = true;
  products = [];
   productSubscription : Subscription;
  constructor(private productService: ProductsService) {

    setTimeout(() => {
      // this.productName = "rass",
      this.isDisabled = false;
      //this.products= this.productService.getProducts();

    }, 2000);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productSubscription = this.productService.updatedProduct.subscribe(() => {

      this.products = this.productService.getProducts();

    });

  }
  addProduct(form) {
    // this.products.push(this.productName);
    if (form.valid) {
      // this.products.push(form.value.productName)
      this.productService.addProducts(form.value.productName);

    }
  }
  removeProduct(productName: string) {

    this.products = this.products.filter(p => p !== productName)
  }
  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public product: Products[] = [];
  public subscription: Subscription;

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.subscription = this._productService.getAllProduct().subscribe(data => {
      this.product = data;
    })
  }

  onDeletePhone(_id: string) {
    this.subscription = this._productService.deleteProductService(_id).subscribe(data => {
      this.updateAfterDelete(_id);
    });
  }

  updateAfterDelete(id: string) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i]._id == id) {
        this.product.splice(i, 1);
        break;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

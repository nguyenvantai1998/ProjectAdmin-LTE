import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Products } from 'src/app/models/product.model';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public product: Products = {};
  public subscription: Subscription;
  public subscriptionParams: Subscription;


  constructor(
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.subscription = this._productService.getAllProduct().subscribe(data => {
      this.product = data;
    })
  }

  onDeactive(id:string) {
    this.subscriptionParams = this._productService.getIdProduct(id).subscribe((product: Products) => {
      this.product = product;
      this.subscription = this._productService.deactiveProductService(this.product).subscribe(data => {
        this.loadProduct();
      })
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

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
  public productDeactive: Products = {};
  public subscription: Subscription;
  public subscriptionParams: Subscription;


  constructor(
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadProduct();
    this.loadProductDeactive();
  }

  loadProduct() {
    this.subscription = this._productService.getAllProduct().subscribe(data => {
      this.product = data;
    })
  }

  loadProductDeactive() {
    this.subscription = this._productService.getAllProductDeactive().subscribe(data => {
      this.productDeactive = data;
    })
  }

  onDeactive(id:string) {
    this.subscriptionParams = this._productService.getIdProduct(id).subscribe((product: Products) => {
      this.product = product;
      this.subscription = this._productService.deactiveProductService(this.product).subscribe(data => {
        this.loadProduct();
        this.loadProductDeactive();
      })
    })
  }

  onActive(id:string) {
    this.subscriptionParams = this._productService.getIdProduct(id).subscribe((product: Products) => {
      this.product = product;
      this.subscription = this._productService.activeProductService(this.product).subscribe(data => {
        this.loadProduct();
        this.loadProductDeactive();
      })
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/modules/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public product: Products;
  public subscription: Subscription;
  public subscriptionParams: Subscription;

  constructor(
    private _productService: ProductService,
    private _activatedRouteService: ActivatedRoute,
    private _routerService: Router
  ) { }

  ngOnInit() {
    this.product = new Products;
    this.loadProducts();
  }

  loadProducts() {
    this.subscriptionParams = this._activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this._productService.getIdProduct(id).subscribe((product: Products) => {
        this.product = product;
      })
    })
  }

  onEditPhone() {
    this.subscription = this._productService.editProductService(this.product).subscribe(data => {
      this._routerService.navigate(['admin']);
    })
  } 

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

}

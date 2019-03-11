import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Products } from 'src/app/models/product.model';
import Swal from 'sweetalert2';

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
    this.loadProducts();
  }

  loadProducts() {
    this.subscriptionParams = this._activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this._productService.getIdProduct(id).subscribe((product: Products) => {
        this.product = product;
        console.log(this.product);
        console.log(this.product['_id']);
      })
    })
  }

  onEditProduct() {
    this.subscription = this._productService.editProductService(this.product).subscribe(data => {
      this._routerService.navigate(['/admin/list']);
    })
  }

  onSubmit(frmAddProduct) {
    if (frmAddProduct.valid) {
      this.onEditProduct();
    }
    else {
      Swal.fire({
        type: 'error',
        title: "Can't add product",
        text: 'The fields required cannot be empty!!'
      })

    }
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

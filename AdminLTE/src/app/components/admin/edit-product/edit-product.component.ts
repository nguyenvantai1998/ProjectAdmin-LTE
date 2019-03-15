import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Products } from 'src/app/models/product.model';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public image : any;
  public product: Products;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  today = new Date();
  jstoday = '';

  constructor(
    private _productService: ProductService,
    private _activatedRouteService: ActivatedRoute,
    private _routerService: Router
  ) { }


  ngOnInit() {
    this.loadProducts();
    this.jstoday = formatDate(this.today, 'yyyy-MM-ddThh:mm:ss', 'en-VI', '+0700');
  }

  handleFileInput(event) {
    const oFReader = new FileReader();
    const image = event.target.files[0];
    oFReader.readAsDataURL(image);
    oFReader.onload = (oFREvent) => {
      this.product['images'] = oFREvent.target['result'];
    };
    this.image = image;
  }

  loadProducts() {
    this.subscriptionParams = this._activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this._productService.getIdProduct(id).subscribe((product: Products) => {
        this.product = product;
      })
    })
  }

  onEditProduct() {
    this.subscription = this._productService.editProductService(this.product).subscribe(data => {
      this._routerService.navigate(['/admin']);
    })
  }

  onSubmit(frmEditProduct) {
    if (frmEditProduct.valid) {
      this.onEditProduct();
    }
    else {
      Swal.fire({
        type: 'error',
        title: "Can't add product",
        text: 'The fields required cannot be empty!!',
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

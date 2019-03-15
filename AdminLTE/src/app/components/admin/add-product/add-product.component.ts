import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Products } from 'src/app/models/product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {

  public image: any;
  public product: Products = {};
  public subscription: Subscription;
  today = new Date();
  jstoday = '';

  constructor(
    private _productService: ProductService,
    private _routerService: Router
  ) { }

  ngOnInit() {
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

  onAddProduct() {
    this.subscription = this._productService.addProductService(this.product).subscribe(data => {
      if (data && data['_id']) {
        this._routerService.navigate(['/admin']);
      }
    })
  }

  onSubmit(frmAddProduct) {
    if (frmAddProduct.valid) {
      this.onAddProduct();
    }
    else {
      Swal.fire({
        type: 'error',
        title: "Can't add product",
        text: 'The fields required cannot be empty!!'
      })

    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit , OnDestroy{

  public product: Products;
  public subscription: Subscription;
  today= new Date();
  jstoday = '';
  constructor(
    private _productService: ProductService,
    private _routerService: Router
  ) { }

  ngOnInit() {
    this.product = new Products();
    this.jstoday = formatDate(this.today, 'yyyy-MM-ddThh:mm:ss', 'en-VI', '+0700');
  }

  onAddProduct(){
    this.subscription = this._productService.addProductService(this.product).subscribe(data =>{
      if(data && data['_id']){
        this._routerService.navigate(['admin']);
      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

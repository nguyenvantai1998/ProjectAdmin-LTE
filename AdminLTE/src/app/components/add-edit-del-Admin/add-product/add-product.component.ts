import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from 'src/app/modules/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit , OnDestroy{

  public product: Products;
  public subscription: Subscription;

  constructor(
    private _productService: ProductService,
    private _routerService: Router
  ) { }

  ngOnInit() {
    this.product = new Products();
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

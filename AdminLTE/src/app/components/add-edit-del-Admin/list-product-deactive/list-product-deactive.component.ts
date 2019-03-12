import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-product-deactive',
  templateUrl: './list-product-deactive.component.html',
  styleUrls: ['./list-product-deactive.component.css']
})
export class ListProductDeactiveComponent implements OnInit, OnDestroy {

  public product: Products = {};
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  public productDeactive: Products= {};

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProductDeactive();
  }

  loadProductDeactive(){
    this.subscription = this.productService.getAllProductDeactive().subscribe(data=>{
      this.productDeactive = data;
    })
  }

  onActive(id:string) {
    this.subscriptionParams = this.productService.getIdProduct(id).subscribe((product: Products) => {
      this.product = product;
      this.subscription = this.productService.activeProductService(this.product).subscribe(data => {
        this.router.navigate(['/admin']);
      })
    })
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}

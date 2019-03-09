import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Products } from 'src/app/models/product.model';

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
    private productService: ProductService,
    private activatedRouteService: ActivatedRoute,
    private routerService: Router
  ) { }

  ngOnInit() {
    this.product = new Products;
    this.loadProducts();
  }

  loadProducts() {
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.productService.getIdProduct(id).subscribe((productClient: Products) => {
        this.product = productClient;
        console.log(this.product);
      })
    })
  }

  onEdit() {
    this.subscription = this.productService.editProductService(this.product).subscribe(data => {
      this.routerService.navigate(['admin/list']);
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

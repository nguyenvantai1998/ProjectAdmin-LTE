import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Products } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  public subScriptionParam: Subscription;
  public subScription: Subscription;
  public showProduct : {};
  public productView: Products[] = [];
  constructor(
    private activateRoute: ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.showProductDetail();
  }
  ngOnDestroy(){
    if(this.subScription){
      this.subScription.unsubscribe();
    }
  }

  addToCart(id: string) {
    this.subScription = this.productService.getIdProduct(id).subscribe((products: Products) => {
      // this.product = products;
      this.productView.push(products);
      localStorage.setItem('Cart',JSON.stringify(this.productView));

    })
  }

  showProductDetail(){
    this.subScriptionParam = this.activateRoute.params.subscribe((data: Params)=>{
     let id = data['id'];
     this.subScription = this.productService.getIdProductDetail(id).subscribe((item: Products)=>{
       this.showProduct = item;
     })
    })
  }

}

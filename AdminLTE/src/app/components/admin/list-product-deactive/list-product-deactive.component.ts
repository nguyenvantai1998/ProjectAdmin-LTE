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
  public productView: Products[] =[];
  productsTrail: any;
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
 //remove item 
  removeById(_id: string){
    
    const remove = this.productView.findIndex((e: Products) =>
      e['_id'] === _id
    );
    this.productView.splice(remove,1);
    console.log(_id);
   }

  //choose product active
  chooseActive(id:string) {
    this.subscriptionParams = this.productService.getIdProduct(id).subscribe((product: Products) => {
      this.product = product;
      this.productView.push(product);
      this.showhiden(id, this.productView);
      // localStorage.setItem('Cart',JSON.stringify(this.productView));

    })
  }

  showhiden(id: String , productView){
    for(var i = 0 ; i < productView.length;i++)
    {
      if(productView[i]._id == id)
      {
           return true;
      } else {
        return false;
      }
    };
  }

  //Active product
  onActive(productView) {
    for(var i =0 ; i<this.productView.length;i++)
    {
    this.subscriptionParams = this.productService.getIdProduct(productView[i]._id).subscribe((product: Products) => {
      this.product = product;
      this.subscription = this.productService.activeProductService(this.product).subscribe(data => {
      });
    })
  }
  this.router.navigate(['/admin']);
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}

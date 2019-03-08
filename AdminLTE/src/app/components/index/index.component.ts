import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Products } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  public showProduct: Products[] = [];
  public subScription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.subScription = this.productService.getAllProduct().subscribe((data:Products[])=>{
      this.showProduct = data;
      console.log(data)
    })
  }

  ngOnDestroy(){
    if(this.subScription){
      this.subScription.unsubscribe();
    }
  }

}

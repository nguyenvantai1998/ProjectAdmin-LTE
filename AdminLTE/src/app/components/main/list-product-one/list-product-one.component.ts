import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

declare var $;

@Component({
  selector: 'app-list-product-one',
  templateUrl: './list-product-one.component.html',
  styleUrls: ['./list-product-one.component.css']
})
export class ListProductOneComponent implements OnInit {

  public showProduct: [];

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    this.showListProduct();
  }

  showListProduct(){
    this.productService.getAllProduct().subscribe(data=>{
      console.log(data.docs)
      this.showProduct = data.docs;
    })
  }

}

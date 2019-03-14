import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-list-product-three',
  templateUrl: './list-product-three.component.html',
  styleUrls: ['./list-product-three.component.css']
})
export class ListProductThreeComponent implements OnInit {

  public showProduct: [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.showListProduct();
  }

  showListProduct(){
    this.productService.getAllProduct().subscribe(data=>{
      this.showProduct = data.docs;
    })
  }

}

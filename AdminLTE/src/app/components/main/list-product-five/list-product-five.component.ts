import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-list-product-five',
  templateUrl: './list-product-five.component.html',
  styleUrls: ['./list-product-five.component.css']
})
export class ListProductFiveComponent implements OnInit {

  public showProduct: [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.showListProduct();
  }

  showListProduct(){
    this.productService.getAllProduct().subscribe(data=>{
      console.log(data.docs)
      this.showProduct = data.docs;
    })
  }

}

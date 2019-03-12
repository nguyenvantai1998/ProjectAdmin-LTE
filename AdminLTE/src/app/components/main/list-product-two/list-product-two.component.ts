import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-list-product-two',
  templateUrl: './list-product-two.component.html',
  styleUrls: ['./list-product-two.component.css']
})
export class ListProductTwoComponent implements OnInit {

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

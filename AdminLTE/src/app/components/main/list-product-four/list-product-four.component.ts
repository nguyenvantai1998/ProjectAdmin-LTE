import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-list-product-four',
  templateUrl: './list-product-four.component.html',
  styleUrls: ['./list-product-four.component.css']
})
export class ListProductFourComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import 'lodash';

declare var $;
declare var _:any;
declare var require: any;
var find = require('lodash.find');

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
      this.showProduct = _.filter(data.docs, ['category', ['Screen']]);
    })
  }

}

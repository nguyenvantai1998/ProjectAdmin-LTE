import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

import 'lodash';

declare var $;
declare var _:any;
declare var require: any;
var find = require('lodash.find');

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
      this.showProduct = _.filter(data.docs, ['status', 'Selling']);
    })
  }

}

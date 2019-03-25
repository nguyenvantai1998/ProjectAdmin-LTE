import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import 'lodash';

declare var $;
declare var _: any;
declare var require: any;
var find = require('lodash.find');

@Component({
  selector: 'app-list-product-two-tab2',
  templateUrl: './list-product-two-tab2.component.html',
  styleUrls: ['./list-product-two-tab2.component.css']
})
export class ListProductTwoTab2Component implements OnInit {

  public showProduct: [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    setTimeout(() => {
      this.showListProduct();
    }, 0);

  }

  showListProduct() {
    this.productService.getAllProduct().subscribe(data => {
      this.showProduct = _.filter(data.docs, ['category', ['Hard Disk']]);
    })
  }

}

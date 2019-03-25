import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import 'lodash';

declare var $;
declare var _: any;
declare var require: any;
var find = require('lodash.find');

@Component({
  selector: 'app-list-product-two',
  templateUrl: './list-product-two.component.html',
  styleUrls: ['./list-product-two.component.css']
})


export class ListProductTwoComponent implements OnInit {

  public showProduct: [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    setTimeout(() => {
      this.showListProduct();
    }, 0);

    setTimeout(() => {
      this.showSlider();
    }, 2900);
  }

  showListProduct() {
    this.productService.getAllProduct().subscribe(data => {
      this.showProduct = _.filter(data.docs, ['category', ['Mouse']]);
    })
  }

  showSlider() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })
  }

}

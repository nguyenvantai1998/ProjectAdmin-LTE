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
    setTimeout(() => {
      this.showListProduct();
    }, 0);

    setTimeout(() => {
      this.showSlider();
    }, 2900);
  }

  showListProduct(){
    this.productService.getAllProduct().subscribe(data=>{
      this.showProduct = _.filter(data.docs, ['category', ['Screen']]);
    })
  }

  showSlider(){
    $('.responsive2').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

}

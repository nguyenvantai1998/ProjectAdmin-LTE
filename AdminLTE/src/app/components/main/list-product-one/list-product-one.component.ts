import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import 'lodash';

declare var $;
declare var _:any;
declare var require: any;
var find = require('lodash.find');

@Component({
  selector: 'app-list-product-one',
  templateUrl: './list-product-one.component.html',
  styleUrls: ['./list-product-one.component.css']
})
export class ListProductOneComponent implements OnInit {

  public showProduct: [];

  constructor(private productService: ProductService) { }

  async ngOnInit() {
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
      console.log(data.docs)
    })
  }

  showSlider(){
    $('.responsive').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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

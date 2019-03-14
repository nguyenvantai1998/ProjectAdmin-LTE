import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

declare var $;

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
    }, 2000);
  }

  showListProduct(){
    this.productService.getAllProduct().subscribe(data=>{
      console.log(data.docs)
      this.showProduct = data.docs;
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Products } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';
import { ItemCart } from 'src/app/models/itemCart.model';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  public subScriptionParam: Subscription;
  public subScription: Subscription;
  public showProduct: {};
  private items: ItemCart[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    public productService: ProductService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    setTimeout(()=>{
      this.showProductDetail()
    },0)
    setTimeout(()=>{
      this.showTabImg()
    },2900)
  }

  showProductDetail() {
    this.subScriptionParam = this.activateRoute.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subScription = this.productService.getIdProductDetail(id).subscribe((item: Products) => {
        this.showProduct = item;
      })
    })
  }

  showTabImg(){
    $('.tabImgDetail').addClass(function(index){
      return "tabImgDetail_" + index;
    });
    $('.buttonTabImgDetail').addClass(function(index){
      return "buttonTabImgDetail_" + index;
    });
    $('.buttonTabImgDetail_0').click(function(){
      $('.tabImgDetail_0').show();
      $('.tabImgDetail_1').hide();
      $('.tabImgDetail_2').hide();
      $('.tabImgDetail_3').hide();
      $('.tabImgDetail_4').hide();
      $('.tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_1').click(function(){
      $('.tabImgDetail_1').show();
      $('.tabImgDetail_0').hide();
      $('.tabImgDetail_2').hide();
      $('.tabImgDetail_3').hide();
      $('.tabImgDetail_4').hide();
      $('.tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_2').click(function(){
      $('.tabImgDetail_2').show();
      $('.tabImgDetail_0').hide();
      $('.tabImgDetail_1').hide();
      $('.tabImgDetail_3').hide();
      $('.tabImgDetail_4').hide();
      $('.tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_3').click(function(){
      $('.tabImgDetail_3').show();
      $('.tabImgDetail_0').hide();
      $('.tabImgDetail_2').hide();
      $('.tabImgDetail_1').hide();
      $('.tabImgDetail_4').hide();
      $('.tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_4').click(function(){
      $('.tabImgDetail_4').show();
      $('.tabImgDetail_0').hide();
      $('.tabImgDetail_2').hide();
      $('.tabImgDetail_3').hide();
      $('.tabImgDetail_1').hide();
      $('.tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_5').click(function(){
      $('.tabImgDetail_5').show();
      $('.tabImgDetail_0').hide();
      $('.tabImgDetail_2').hide();
      $('.tabImgDetail_3').hide();
      $('.tabImgDetail_4').hide();
      $('.tabImgDetail_1').hide();
    })
  }

  ngOnDestroy() {
    if (this.subScription) {
      this.subScription.unsubscribe();
    }
  }

  addToCart(id: string) {
    if (id) {
      var item = {
        productCart: this.showProduct,
        quantity: 1
      };
      if (localStorage.getItem('cart') == null) {
        let cart = [];
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let cart: any = JSON.parse(localStorage.getItem('cart'));
        let index: number = -1;
        for (var i = 0; i < cart.length; i++) {
          let item: ItemCart = JSON.parse(cart[i]);
          if (item.productCart.id == id) {
            index = i;
            break;
          }
        }
        if (index == -1) {
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        }
         else {
          let item: ItemCart = JSON.parse(cart[index]);
          item.quantity += 1;
          console.log(item.quantity)
          cart[index] = JSON.stringify(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
      // console.log(item)
    }
    // $(window)[0].$(location).get(0).reload();
    // setTimeout(function() { window.location=window.location;},0);
    // this.spinner.show();
    // setTimeout(() => {
    //      window.location=window.location;
    //     this.spinner.hide();
    // }, 10);
  }

  contactTrackByFn(index, item){
    return item.id;
  }

}

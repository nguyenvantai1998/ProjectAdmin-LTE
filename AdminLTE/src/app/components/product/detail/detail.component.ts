import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Products } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';
import { ItemCart } from 'src/app/models/itemCart.model';

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
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.showProductDetail();
  }

  showProductDetail() {
    this.subScriptionParam = this.activateRoute.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subScription = this.productService.getIdProductDetail(id).subscribe((item: Products) => {
        this.showProduct = item;
      })
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
        } else {
          let item: ItemCart = JSON.parse(cart[index]);
          item.quantity += 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
      // console.log(item)
    }
    // $(window)[0].$(location).get(0).reload();
    setTimeout(function() { window.location=window.location;},0);
  }


}

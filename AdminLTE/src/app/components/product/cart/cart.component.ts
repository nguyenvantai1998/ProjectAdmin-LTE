import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/models/itemCart.model';
import 'lodash';
import { Products } from 'src/app/models/product.model';

declare var $;
declare var _: any;
declare var require: any;
var uniqWith = require('lodash.unzip');
// var uniqBy = require('lodash.uniqby');

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: ItemCart[] = [];
  public quantity: number;
  public listAddToCart: Products[] = [];
  private total: number = 0;
  public checkCartNull: boolean = false;

  constructor(
  ) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    this.quantity = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        productCart: item.productCart,
        quantity: item.quantity
      });
      this.total += item.productCart.price * item.quantity;
      this.quantity += item.quantity;
      this.checkCartNull = true;
      this.listAddToCart = _.uniqWith(this.items, _.isEqual);
      console.log(this.items)
      console.log(this.listAddToCart)
    }
  }

  // loadCart(): void {
  //   this.total = 0;
  //   this.items = [];
  //   this.quantity = 0;
  //   let cart = JSON.parse(localStorage.getItem('cart'));
  //   let item = JSON.parse(cart[cart.length-1]);
  //   for (var i = 0; i < cart.length; i++) {
  //     let Cart = cart[i];
  //     if(item.productCart._id == Cart.productCart._id)
  //     {
        
  //     }
  //     else{
  //       this.items.push({
  //         productCart: item.productCart,
  //         quantity: item.quantity
  //       });
  //       this.total += item.productCart.price * item.quantity;
  //       this.quantity += item.quantity;
  //       this.checkCartNull = true;
  //       this.listAddToCart = _.uniqWith(this.items, _.isEqual);
  //     }
  //   }
  // }


  addProduct(_id: string) {
    console.log(_id);
  }

  delProduct(id: string) {
    console.log(id);
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: ItemCart = JSON.parse(cart[i]);
      if (item.productCart.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
    $(window)[0].$(location).get(0).reload();
  }

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: ItemCart = JSON.parse(cart[i]);
      if (item.productCart.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
    // $(window)[0].$(location).get(0).reload();
    setTimeout(function() { window.location=window.location;},0);
  }



}
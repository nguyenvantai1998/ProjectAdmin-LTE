import { Component, OnInit } from '@angular/core';
import { Checkouts } from 'src/app/models/checkout.model';
import { NgForm } from '@angular/forms';
import { ItemCart } from 'src/app/models/itemCart.model';
import { Products } from 'src/app/models/product.model';
import 'lodash';

declare var $;
declare var _: any;
declare var require: any;
var uniqWith = require('lodash.unzip');

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public checkout: Checkouts = new Checkouts();
  public items: ItemCart[] = [];
  public listAddToCart: Products[] = [];
  public quantity: number;
  private total: number = 0;
  private totalQtyProduct: number = 0;

  constructor() { }

  ngOnInit() {
    this.loadCart();
  }

  onSubmitForm(frmCheckOut: NgForm){
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
      this.totalQtyProduct += item.quantity;
      this.quantity += item.quantity;
      this.listAddToCart = _.uniqWith(this.items, _.isEqual);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/models/itemCart.model';

declare var $;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: ItemCart[] = []
  private total: number = 0;
  public checkCartNull: boolean = false;

  constructor(
  ) { }

  ngOnInit() {
    this.loadCart()
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        productCart: item.productCart,
        quantity: item.quantity
      });
      this.total += item.productCart.price * item.quantity;
      // console.log(this.total)
      // console.log(item);
      this.checkCartNull = true;
    }
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
    $(window)[0].$(location).get(0).reload();
  }
}

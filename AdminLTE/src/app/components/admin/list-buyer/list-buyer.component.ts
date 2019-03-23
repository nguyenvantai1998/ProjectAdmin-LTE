import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { Buyer } from 'src/app/models/Buyer.model';
@Component({
  selector: 'app-list-buyer',
  templateUrl: './list-buyer.component.html',
  styleUrls: ['./list-buyer.component.css']
})
export class ListBuyerComponent implements OnInit , OnDestroy {
  public listBuyer: Buyer= {};
  public subscription: Subscription;
  ;
  constructor(
    private checkoutService: CheckoutService,
  ) { }
  ngOnInit() {
    this.loadBuyerList();
  }
  loadBuyerList() {
    this.subscription = this.checkoutService.getListBuyer().subscribe(data => {
      this.listBuyer = data['docs'];
      console.log(this.listBuyer);
    })
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

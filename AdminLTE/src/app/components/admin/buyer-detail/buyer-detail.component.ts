import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Buyer } from 'src/app/models/Buyer.model';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-buyer-detail',
  templateUrl: './buyer-detail.component.html',
  styleUrls: ['./buyer-detail.component.css']
})
export class BuyerDetailComponent implements OnInit, OnDestroy {
  public buyerDetail: Buyer = {};
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  constructor(private checkoutService: CheckoutService,
              private activatedRouteService: ActivatedRoute) { }

  loadBuyerDetail() {
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.checkoutService.buyerDetail(id).subscribe(data => {
        this.buyerDetail = data;
        console.log(this.buyerDetail['_id']);
      })
    })
  }
  ngOnInit() {
    this.loadBuyerDetail();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

}

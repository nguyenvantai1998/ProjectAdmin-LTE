import { Component, OnInit , OnDestroy } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit, OnDestroy {
  public DetailOrder: Order = {};
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  comp = "SUCCESS";
  constructor(private orderService: OrderService,
          private activatedRouteService: ActivatedRoute) { }
  
  loadOrderDetail(){
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.orderService.getIdOrderDetail(id).subscribe(data=>{
        this.DetailOrder = data;
      })
      })
  }

  ngOnInit() {
    this.loadOrderDetail()
  }
  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }
}

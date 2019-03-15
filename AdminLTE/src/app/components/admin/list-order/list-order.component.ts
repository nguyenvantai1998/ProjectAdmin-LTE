import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit, OnDestroy {
  public listOrder: Order = {};
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  comp = "SUCCESS";
  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }
  ngOnInit() {
    this.loadOrderList();
  }
  loadOrderList() {
    this.subscription = this.orderService.getAllList().subscribe(data => {
      this.listOrder = data;
    })
  }

  onCheck(checkForm) {
    if (checkForm.valid) {
      this.subscriptionParams = this.orderService.getIdOrderDetail(checkForm.controls.IDPayment.value).subscribe((order: Order) => {
        this.listOrder = order;
        console.log(this.listOrder)
        this.subscription = this.orderService.checkOrder(this.listOrder).subscribe(data => {
          console.log(data);
          this.loadOrderList();
        })
      })
    } else {
      Swal.fire({
        type: 'error',
        title: "ID Empty !",
      })

    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

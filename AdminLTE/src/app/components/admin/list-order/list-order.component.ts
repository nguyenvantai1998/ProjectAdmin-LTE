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
  orderComplete = {"status": "success"}
  orderWait = {"status": "pending"}
  ;
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
 
  onSuccess(stt: string){
    if(stt=="SUCCESS"){
      return true;
    }else {
     return false;
    }
  }

  onCheckComplete(id: string) {
    console.log(id);
    console.log(this.listOrder);
    this.orderService.checkOrder(this.orderComplete,id).subscribe(data=>{
      console.log(data);
      this.loadOrderList();
    },error=>{
      console.log(error);
    })
  }
  onCheckPending(id: string) {
    console.log(id);
    console.log(this.listOrder);
    this.orderService.checkOrder(this.orderWait,id).subscribe(data=>{
      console.log(data);
      this.loadOrderList();
    },error=>{
      console.log(error);
    })
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

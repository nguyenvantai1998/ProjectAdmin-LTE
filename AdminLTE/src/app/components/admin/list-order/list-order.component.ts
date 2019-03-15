import { Component, OnInit, OnDestroy} from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit, OnDestroy {
  public listOrder: Order = {};
  public subscription: Subscription;
  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }
  ngOnInit() {
    this.loadOrderList();
  }
  loadOrderList(){
    this.subscription = this.orderService.getAllList().subscribe(data=>{
      this.listOrder = data;
      console.log(data);
    })
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}

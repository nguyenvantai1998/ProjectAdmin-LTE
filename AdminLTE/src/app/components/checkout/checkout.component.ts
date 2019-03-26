import { Component, OnInit } from '@angular/core';
import { Checkouts } from 'src/app/models/checkout.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public checkout: Checkouts = new Checkouts();

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(frmCheckOut: NgForm){
    // if(frmCheckOut.valid){
    //   console.log(frmCheckOut.value)
    // }
  }

}

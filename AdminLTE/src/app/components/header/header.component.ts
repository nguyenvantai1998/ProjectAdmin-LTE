import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public quantityProductByCart: number;
  

  constructor(private router: Router) { }
  
  checkLogin(){
    if(localStorage.getItem('userToken')){
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit() {
    this.checkQuantityProductByCart();
  }

  checkQuantityProductByCart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart != null){
      this.quantityProductByCart = cart.length;
    }
  }

}

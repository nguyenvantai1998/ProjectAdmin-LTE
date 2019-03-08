import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  logOut() {
    if (localStorage.getItem('userToken')) {
      localStorage.removeItem('userToken');
      this.router.navigate(['/index']);
    }
  }

}

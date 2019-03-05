import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public error: number = 0;

  constructor(public router: Router) { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    if (localStorage.get('user')) {
      this.router.navigate(['/admin']);
    }
  }

  onLogin(username: string, password: string) {
    let user = {
      username: username,
      password: password
    };
    if (username == 'admin' && password == 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/admin']);
    }
    else {
      this.error = -1;
      console.log(this.error);
    }
  }

}

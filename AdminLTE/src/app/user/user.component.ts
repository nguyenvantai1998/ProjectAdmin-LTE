import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public error: boolean = false;

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
    } else if (username == undefined && password == undefined) {
      this.error = false;
      console.log(username);
    }
    else {
      this.error = true;
      console.log(this.error);
    }
  }
  onSubmit(templateForm) {
    console.log(templateForm);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TokenParams } from './../modules/getToken/TokenParams'; //import Model token
import { AuthTokenService } from '../services/auth-token-login/auth-token.service'; //import Token Service
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public error: boolean = false;
  tokenParam: TokenParams;

  constructor(
    public router: Router,
    private authService: AuthTokenService
  ) { }

  ngOnInit() {
  }

  checkLogin() {
    if (localStorage.getItem('userToken')) {
      this.router.navigateByUrl('/admin');//nếu có tồn tại sẽ đi đến trang Manager
    }
    else {
      this.error = true; //ngược lại sẽ chặn truy cập
    }
  }

  onLogin(user: string, pass: string) {
    // SET token vào LocalStorage
    this.authService.login(user, pass).subscribe((data: any) => {
      localStorage.setItem('userToken', data.token);
      this.checkLogin();
    });
  }


  onSubmit(templateForm) {
    console.log(templateForm); //log thông giá trị form
  }
}

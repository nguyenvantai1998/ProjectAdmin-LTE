import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { template } from '@angular/core/src/render3';
import { TokenParams } from '../getToken/tokenParams'; //import Model token
  import { from } from 'rxjs';
import { AuthTokenService } from '../services/auth-token.service'; //import Token Service
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public error: boolean = false;
  tokenParam : TokenParams;

  constructor(public router: Router,
               private authService: AuthTokenService) { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
  if (localStorage.getItem('userToken')) {
  this.router.navigate(['/admin']);
  }
  }

  onLogin(user: string,pass: string) {

    // SET token vào LocalStorage
    this.authService.login(user,pass).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.token);
      console.log(data);
    });
    if(localStorage.getItem('userToken'))
    {
      this.router.navigate(['/admin']); //nếu có tồn tại sẽ đi đến trang Manager
    }
    else{
      this.error = true; //ngược lại sẽ chặn truy cập
    }
  }
  onSubmit(templateForm) {
    console.log(templateForm); //log thông giá trị form
  }
}

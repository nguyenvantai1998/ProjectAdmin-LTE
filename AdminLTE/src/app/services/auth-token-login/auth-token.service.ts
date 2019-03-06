// Service Token

import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map ,catchError } from 'rxjs/operators';
import { TokenParams } from './../../modules/getToken/TokenParams';
@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  public errorHandler:any ="loicmnr"; //thông báo lỗi custom
  public tokenAPI="http://139.162.28.184:3456/api/v1/admin/login";
  constructor(private http: HttpClient) { }
  
  //Hàm sent thông tin lên server để lấy token
  login(username:string,password:string): Observable<TokenParams>{
    var userData = "email=" + username + "&password=" +password + "&grant_type=password";
    var headersForTokenAPI = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded','No-Auth':'True'})
    return <Observable<TokenParams>> this.http.post(this.tokenAPI,userData,{headers:headersForTokenAPI})
    .pipe(
      map(res=>res),catchError(this.errorHandler)
    );
  }
  
}

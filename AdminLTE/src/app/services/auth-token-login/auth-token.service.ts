// Service Token

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TokenParams } from './../../modules/getToken/TokenParams';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from "./../../../environments/environment";


const url = `${environment.apiPV}/api/v1/admin/login`;
const header = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
});
@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  public urlLogin = url;
  public header = header;

  constructor(
    private http: HttpClient,
    private _router : Router
  ) { }

  //Hàm sent thông tin lên server để lấy token
  login(email: string, password: string): Observable<TokenParams> {
    var userData = "email=" + email + "&password=" + password + "&grant_type=password";   
    var headersForTokenAPI = this.header;
    return <Observable<TokenParams>>this.http.post(this.urlLogin, userData, { headers: headersForTokenAPI })
    .pipe(map(res => res), catchError(error => this.errorHandler(error)));
      
  }

// httpHeaders():Observable<any>{

// }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    if (error.status >= 500) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: '500 Internal Server Error, please try agian later!',
        footer: '<a href>Why do I have this issue?</a>'
      });
    } else if (error.status === 401 && error.statusText === 'UNAUTHORIZED') {
      localStorage.removeItem('userToken');
    } else if (error.status === 404) {
      this._router.navigate(['/page-not-found']);
    } else{
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Email or password is wrong!',
      });
    }

    return throwError(error);
  }
}

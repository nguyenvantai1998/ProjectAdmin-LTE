import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { environment } from '@environments/environment.prod';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
// url
const urlgetListOrder = `${environment.apiPV}/api/v1/orders/list?limit=100`;
const urlDetailOrder = `${environment.apiPV}/api/v1/orders/details`;
const urlCheckOrder = `${environment.apiPV}/api/v1/orders/check-status`;
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public headers: HttpHeaders;
  constructor(private httpClient: HttpClient) { 
    this.headers = this.setHeaders();
  }
  setHeaders(): HttpHeaders {
    const header = new HttpHeaders();
    const token: string = localStorage.getItem('userToken');
    if (!token) {
      return header.set('Content-Type', 'application/json');
    }
    return header.set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`);
  }

  //all product
  getAllList(): Observable<Order>{
    return <Observable<Order>>this.httpClient.get(urlgetListOrder, { headers: this.headers });
  }

  getIdOrderDetail(id: Order): Observable<Order> {
    return <Observable<Order>>this.httpClient.get(`${urlDetailOrder}/${id}`,{ headers: this.headers });
  }

  checkOrder(order: Order): Observable<Order> {
    return <Observable<Order>>this.httpClient.post(`${urlCheckOrder}/${order['_id']}`,order, { headers: this.headers })
    .pipe(map(rer => rer), catchError(error => this.errorHandler(error)));
  }
  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    if (error.status >= 500) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: '500 Internal Server Error, please try agian later!',
        footer: '<a href>Why do I have this issue?</a>'
      });
    } else if (error.status === 401 && error.statusText === 'UNAUTHORIZED') {
      localStorage.removeItem('userToken');
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Email or password is wrong!',
      });
    }
    return throwError(error);
  }
}

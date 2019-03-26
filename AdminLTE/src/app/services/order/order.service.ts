import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment.prod';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Order } from 'src/app/models/order.model';
// url
const urlgetListOrder = `${environment.apiPV}/api/v1/orders/list?page=1&limit=100`;
const urlDetailOrder = `${environment.apiPV}/api/v1/orders/details`;
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public headers: HttpHeaders;
  public headers2: HttpHeaders;
  constructor(private httpClient: HttpClient) { 
    this.headers = this.setHeaders();
    this.headers2 = this.setHeaders2();
  }
  setHeaders(): HttpHeaders {
    const header = new HttpHeaders();
    const token: string = localStorage.getItem('userToken');
    if (!token) {
      return header.set('Content-Type', 'application/json');
    }
    return header.set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`);
  }
  setHeaders2(): HttpHeaders {
    const header2 = new HttpHeaders();
    const token: string = localStorage.getItem('userToken');
    if (!token) {
      return header2.set('Content-Type', 'application/x-www-form-urlencoded');
    }
    return header2.set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`);
  }

  //all product
  getAllList(): Observable<Order>{
    return <Observable<Order>>this.httpClient.get(urlgetListOrder, { headers: this.headers });
  }

  getIdOrderDetail(id: string): Observable<Order> {
    return <Observable<Order>>this.httpClient.get(`${urlDetailOrder}/${id}`,{ headers: this.headers });
  }

  checkOrder(body, id: string): Observable<any> {
    const urlCheckOrder = `${environment.apiPV}/api/v1/orders/check-status/${id}`;
    // console.log(order['status']);
    return this.httpClient.post<any>(urlCheckOrder,body, { headers: this.headers2 })
    .pipe(
      map(data=>data),
      catchError(error => error)
    );
  }
}

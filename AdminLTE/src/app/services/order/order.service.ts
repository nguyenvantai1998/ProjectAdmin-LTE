import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { environment } from '@environments/environment.prod';

// url
const urlgetListOrder = `${environment.apiPV}/api/v1/orders/list?limit=100`;

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
  getAllList(): Observable<any> {
    return <Observable<any>>this.httpClient.get(urlgetListOrder, { headers: this.headers });
  }
}

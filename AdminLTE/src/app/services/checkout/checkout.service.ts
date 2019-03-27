import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment.prod';
import { Buyers } from 'src/app/models/buyers.model';
// url
const urlListBuyer= `${environment.apiPV}/api/v1/payments/buyers`;
const urlBuyerDetail = `${environment.apiPV}/api/v1/payments/buyers`;
const urlCheckout = `${environment.apiPV}/api/v1/payments/checkout`;
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
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
  getListBuyer(): Observable<Buyers>{
    return this.httpClient.get<Buyers>(urlListBuyer, { headers: this.headers });
  }
  buyerDetail(id: string): Observable<any>{
    return this.httpClient.get<any>(`${urlBuyerDetail}/${id}`, { headers: this.headers });
  }
  checkOut(body): Observable<any>{
    return this.httpClient.post<any>(urlCheckout, body ,{ headers: this.headers });
  }
}

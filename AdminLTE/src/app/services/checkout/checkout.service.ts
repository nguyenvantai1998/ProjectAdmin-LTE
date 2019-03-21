import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment.prod';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Buyer } from 'src/app/models/Buyer.model';
// url
const urlListBuyer= `${environment.apiPV}/api/v1/payments/buyers`;
const urlBuyerDetail = `${environment.apiPV}/api/v1/payments/buyers`;
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
  getListBuyer(): Observable<Buyer>{
    return this.httpClient.get<Buyer>(urlListBuyer, { headers: this.headers });
  }
  buyerDetail(id: string): Observable<any>{
    return this.httpClient.get<any>(`${urlBuyerDetail}/${id}`, { headers: this.headers });
  }
}

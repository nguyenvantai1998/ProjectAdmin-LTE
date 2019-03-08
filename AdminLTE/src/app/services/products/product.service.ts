import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/app/modules/product.model';
import { environment } from '@environments/environment.prod';

const url = `${environment.apiPV}/api/v1/products/list?`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public headers: HttpHeaders;

  constructor(
    private httpClient: HttpClient
  ) { this.headers = this.setHeaders(); }

  setHeaders(): HttpHeaders {
    const header = new HttpHeaders();
    const token: string = localStorage.getItem('userToken');
    if (!token) {
      return header.set('Content-Type', 'application/json');
    }
    return header.set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`);
  }

  getAllProduct(): Observable<Products> {
    return this.httpClient.get<Products>(url);
  }

}

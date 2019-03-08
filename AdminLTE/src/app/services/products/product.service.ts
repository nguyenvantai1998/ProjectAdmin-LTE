import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/app/modules/product.model';
import { environment } from '@environments/environment.prod';

const urlgetAll = `${environment.apiPV}/api/v1/products/list?`;
const urlAdd = `${environment.apiPV}/api/v1/products/create?`;
const urlEdit = `${environment.apiPV}/api/v1/products/update/`;
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

  getAllProduct(): Observable<Products[]> {
    return <Observable<Products[]>> this.httpClient.get(urlgetAll);
  }
  getIdProduct(_id:number):Observable<Products>{
    return <Observable<Products>> this.httpClient.get(`${urlEdit}/${_id}`, {headers: this.headers});
  }
  editProductService(product: Products): Observable<Products>{
    return <Observable<Products>> this.httpClient.put(`${urlEdit}/${product._id}`,product,{headers: this.headers});
   }
  addProductService(product: Products): Observable<Products>{
    return <Observable<Products>> this.httpClient.post(urlAdd,product,{headers: this.headers});
  }
  deleteProductService(_id: number): Observable<Products>{
    return <Observable<Products>> this.httpClient.delete(`${urlEdit}/${_id}`, {headers: this.headers});
   }
}

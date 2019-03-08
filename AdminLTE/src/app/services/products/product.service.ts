import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/product.model';
import { environment } from '@environments/environment.prod';

// url
const urlgetAll = `${environment.apiPV}/api/v1/products/list?`;
const urlAdd = `${environment.apiPV}/api/v1/products/create?`;
const urlEdit = `${environment.apiPV}/api/v1/products/update/`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public headers: HttpHeaders;

  constructor( private httpClient: HttpClient ) { 
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
  getAllProduct(): Observable<Products[]> {
    return <Observable<Products[]>> this.httpClient.get(urlgetAll);
  }

  //add product
  addProductService(product: Products): Observable<Products>{
    return <Observable<Products>> this.httpClient.post(urlAdd,product,{headers: this.headers});
  }

  //delete product
  deleteProductService(_id: string): Observable<Products>{
    return <Observable<Products>> this.httpClient.delete(`${urlEdit}/${_id}`, {headers: this.headers});
  }

  //edit product of id
  getIdProduct(_id: string):Observable<Products>{
    return <Observable<Products>> this.httpClient.get(`${urlEdit}/${_id}`, {headers: this.headers});
  }

  //edit product
  editProductService(product: Products): Observable<Products>{
    return <Observable<Products>> this.httpClient.put(`${urlEdit}/${product._id}`,product,{headers: this.headers});
  }
  
}

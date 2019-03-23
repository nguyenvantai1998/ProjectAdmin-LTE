import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/product.model';
import { environment } from '@environments/environment.prod';
import { map, catchError } from 'rxjs/operators';

// url
const urlgetAll = `${environment.apiPV}/api/v1/products/list?is_active=1&limit=1000`;
const urlgetAllDeactive = `${environment.apiPV}/api/v1/products/list?is_active=0&limit=100`;
const urlAdd = `${environment.apiPV}/api/v1/products/create`;
const urlDetail = `${environment.apiPV}/api/v1/products/details`;
const urlEdit = `${environment.apiPV}/api/v1/products/update`;
const urlDeactive = `${environment.apiPV}/api/v1/products/deactive`;
const urlActive = `${environment.apiPV}/api/v1/products/active`;
const urlImage = `${environment.apiPV}/api/v1/products`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public headers: HttpHeaders;
  public headers2: HttpHeaders;
  public headers3: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = this.setHeaders();
    this.headers2 = this.setHeaders2();
    this.headers3 = this.setHeaders3();
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
  setHeaders3(): HttpHeaders {
    const header3 = new HttpHeaders();
    const token: string = localStorage.getItem('userToken');
    if (!token) {
      return header3.set('Content-Type', 'application/x-www-form-urlencoded');
    }
    return header3.set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', `Bearer ${token}`);
  }
  //all product
  getAllProduct(): Observable<any> {
    return <Observable<any>>this.httpClient.get(urlgetAll);
  }

  //get detail one product by id
  getIdProductDetail(id: string): Observable<Products> {
    return <Observable<Products>>this.httpClient.get(`${urlDetail}/${id}`);
  }

  //all product deactive
  getAllProductDeactive(): Observable<Products> {
    return <Observable<Products>>this.httpClient.get(urlgetAllDeactive);
  }

  //get one product by id
  getIdProduct(_id: string): Observable<Products> {
    return <Observable<Products>>this.httpClient.get(`${urlDetail}/${_id}`, { headers: this.headers });
  }

  //add product
  addProductService(product: Products): Observable<Products[]> {
    return <Observable<Products[]>>this.httpClient.post(urlAdd, product, { headers: this.headers });
  }

  //edit product
  editProductService(product: Products): Observable<Products[]> {
    return <Observable<Products[]>>this.httpClient.put(`${urlEdit}/${product['_id']}`, product, { headers: this.headers });
  }

  //deactive
  deactiveProductService(product: Products): Observable<Products> {
    return <Observable<Products>>this.httpClient.put(`${urlDeactive}/${product['_id']}`, product, { headers: this.headers });
  }

  //active
  activeProductService(product: Products): Observable<Products> {
    return <Observable<Products>>this.httpClient.put(`${urlActive}/${product['_id']}`, product, { headers: this.headers });
  }

 //upload 
 Upload(fileToUpload): Observable<any> {
  const urlUpload = `${environment.apiPV}/api/v1/upload/image`;
  const _formData = new FormData();
  _formData.append('source', fileToUpload, fileToUpload.name); 
  console.log(_formData);  
  return this.httpClient.post<any>(urlUpload,_formData, { headers: this.headers3 })
} 
}

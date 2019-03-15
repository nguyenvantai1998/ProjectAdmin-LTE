import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from "./../../models/category.model";
import { environment } from '@environments/environment.prod';


const urlgetAllCategory = `${environment.apiPV}/api/v1/categories/list?`;
const urlAddCaterogy = `${environment.apiPV}/api/v1/categories/create`;
const urlDetailCategory = `${environment.apiPV}/api/v1/categories/details`;
const urlEditCategory = `${environment.apiPV}/api/v1/categories/update`;


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

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

  //all category
  getAllCategory(): Observable<any> {
    return <Observable<any>>this.httpClient.get(urlgetAllCategory);
  }

  //get detail one category by id
  getIdCategoryDetail(id: string): Observable<Category> {
    return <Observable<Category>>this.httpClient.get(`${urlDetailCategory}/${id}`, { headers: this.headers });
  }

  //add category
  addCategoryService(category: Category): Observable<Category[]> {
    return <Observable<Category[]>>this.httpClient.post(urlAddCaterogy, category, { headers: this.headers });
  }

  //edit category
  editCategoryService(product: Category): Observable<Category[]> {
    return <Observable<Category[]>>this.httpClient.put(`${urlEditCategory}/${product['_id']}`, product, { headers: this.headers });
  }

}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from "./../../models/category.model";
import { environment } from '@environments/environment.prod';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';


const urlGetActiveCategory = `${environment.apiPV}/api/v1/categories/list?`;
const urlGetDeactiveCategory = `${environment.apiPV}/api/v1/categories/list?is_active=0&limit=100`;
const urlAddCaterogy = `${environment.apiPV}/api/v1/categories/create`;
const urlDetailCategory = `${environment.apiPV}/api/v1/categories/details`;
const urlEditCategory = `${environment.apiPV}/api/v1/categories/update`;
const urlDeactiveCategory = `${environment.apiPV}/api/v1/categories/deactive`;
const urlActiveCategory = `${environment.apiPV}/api/v1/categories/active`;


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

  //active category
  getActiveCategory(): Observable<any> {
    return this.httpClient.get(urlGetActiveCategory);
  }

  //deactive category
  getDeactiveCategory(): Observable<any> {
    return this.httpClient.get(urlGetDeactiveCategory);
  }

  //get detail one category by id
  getIdCategoryDetail(id: string): Observable<Category> {
    return this.httpClient.get(`${urlDetailCategory}/${id}`, { headers: this.headers });
  }

  //add category
  addCategoryService(category: Category): Observable<Category[]> {
    return this.httpClient.post(urlAddCaterogy, category, { headers: this.headers })
      .pipe(map(rer => rer), catchError(error => this.errorHandler(error)));
  }

  //edit category
  editCategoryService(category: Category): Observable<Category[]> {
    return this.httpClient.put(`${urlEditCategory}/${category['_id']}`, category, { headers: this.headers })
      .pipe(map(rer => rer), catchError(error => this.errorHandler(error)));
  }

  //deactive
  deactiveCategoryService(category: Category): Observable<Category> {
    return <Observable<Category>>this.httpClient.put(`${urlDeactiveCategory}/${category['_id']}`, category, { headers: this.headers })
  }

  //active
  activeCategoryService(category: Category): Observable<Category[]> {
    return this.httpClient.put<Category[]>(`${urlActiveCategory}/${category['_id']}`, category, { headers: this.headers })
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
    } else if (error.status === 404) {
      console.log('page-not-found')
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

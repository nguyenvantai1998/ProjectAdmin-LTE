import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { environment } from '@environments/environment.prod';
// url
const urlgetAll = `${environment.apiPV}/api/v1/categories/list?`;
@Injectable({
  providedIn: 'root'
})
export class CategorysService {
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

  getAllCategorys(): Observable<any> {
    return <Observable<any>>this.httpClient.get(urlgetAll);
  }
}

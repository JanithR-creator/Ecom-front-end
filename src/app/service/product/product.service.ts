import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:8081/api/v1/products";

  constructor(private http: HttpClient) {
  }

  loadAllProducts(page: any, size: any, searchText: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('size', size);
    params = params.append('searchText', searchText);
    return this.http.get(this.baseUrl + '/visitor/search', {params: params});
  }
}

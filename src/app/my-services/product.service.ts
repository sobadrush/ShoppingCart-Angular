import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ProductVO } from '../my-value-objects/ProductVO';

@Injectable({
  // 1. 在 Service 自己的 Metadata 裡加上 providedIn: 'root' 的屬性
  // 2. 告訴 Angular 說：「請把我註冊在整個系統都是使用同一個實體的注射器裡」
  // 3. 使用 providedIn 後，就不需在 NgModule中注入了( 有點類似 @ComponentScan )
  // ref. https://ithelp.ithome.com.tw/articles/10207283
  providedIn: 'root'
})
export class ProductService {

  // ref. https://www.positronx.io/angular-8-httpclient-http-tutorial-build-consume-restful-api/

  private targeBasetUrl: string = `http://localhost:3000/products`;

  constructor(private httpClient: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

  // GET
  getProducts(): Observable<any> {
    return this.httpClient.get<ProductVO>(this.targeBasetUrl)
    .pipe(
      retry(1), catchError(this.errorHandler)
    );
  }

  // GET
  getProductById(prodId : Number): Observable<any> {
    return this.httpClient.get<ProductVO>(this.targeBasetUrl + `/` + prodId)
    .pipe(
      retry(1), catchError(this.errorHandler)
    );
  }

  // DELETE
  deleteProductById(prodId : Number): Observable<any> {
    return this.httpClient.delete<ProductVO>(this.targeBasetUrl + '/' + prodId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // POST
  createProduct(postData : ProductVO): Observable<any> {
    return this.httpClient.post<ProductVO>(this.targeBasetUrl, JSON.stringify(postData), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // Error-Handling
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}

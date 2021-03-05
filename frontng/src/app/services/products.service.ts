import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Products } from '../classes/products';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url = 'http://localhost:5000/products';  // URL to web api

  constructor(    private http: HttpClient,
    ) { }

    create(product: Products): Observable<any> {
      return this.http.post<Products>(this.url, product, httpOptions).pipe(
        tap((newProducts: Products) => console.log(`added production w/ id=${newProducts.id}`)),
        catchError(this.handleError<Products>('create'))
      );
    }
    update(product: Products): Observable<any> {
      return this.http.put<Products>(this.url, product, httpOptions).pipe(
        tap((newProducts: Products) => console.log(`added production w/ id=${newProducts.id}`)),
        catchError(this.handleError<Products>('create'))
      );
    }

    getProducts(): Observable<Products[]> {
      return this.http.get<Products[]>(`${this.url}`)
    }
    delete(product: Products | number): Observable<Products> {
      const id = typeof product === 'number' ? product : product.id;
      const url = `${this.url}/${id}`;
  
      return this.http.delete<Products>(url, httpOptions).pipe(
        tap(_ => console.log(`deleted product id=${id}`)),
        catchError(this.handleError<Products>('delete'))
      );
    }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

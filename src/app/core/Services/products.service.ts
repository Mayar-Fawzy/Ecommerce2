import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Environment } from '../../Environment/Environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {
 
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get(`${Environment.baseUrl}products`);
  }
  getProductsType(type:string):Observable<any> {
   return this.http.get(`${Environment.baseUrl}products/category?type=${type}`)
  }
  getProductById(id:string){
  return this.http.get(`${Environment.baseUrl}products/${id}`)
  }
  pagination(page: number): Observable<any> {
    return this.http.get(`${Environment.baseUrl}products?page=${page}`);}
 
}

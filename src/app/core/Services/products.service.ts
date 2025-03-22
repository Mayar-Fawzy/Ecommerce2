import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Environment } from '../../Environment/Environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {
 
  constructor(private http: HttpClient) { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resProduct } from './models/resProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) {}

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products?limit=10');
  }

  getProductById(){
    return this.http.get('https://fakestoreapi.com/products/1');
  }
}

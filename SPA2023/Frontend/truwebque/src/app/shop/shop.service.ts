import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './interface/cart';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) {}

  //products http
  getProducts(){
    return this.http.get('https://fakestoreapi.com/products?limit=10');
  }

  getProductById(){
    return this.http.get('https://fakestoreapi.com/products/1');
  }


  //cart http

  getCartById(id:number){
    return this.http.get<Cart>('https://fakestoreapi.com/carts/'+id);
  }
}

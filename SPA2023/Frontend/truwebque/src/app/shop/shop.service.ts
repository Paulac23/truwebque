import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, responseProd, singleProduct } from './interface/cart';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) {}

  //Get all products http
  getProducts(){
    return this.http.get('https://fakestoreapi.com/products?limit=10');
  }

  getProductById(id:number){
    return this.http.get<responseProd>('https://fakestoreapi.com/products/'+id);
  }

  //Get my product http
  getMyProducts(id:number){
    return this.http.get('https://fakestoreapi.com/products?limit=10');
  }
  getMyProductById(id:number){
    return this.http.get<responseProd>('https://fakestoreapi.com/products/'+id);
  }

 // editMyProductById(id:number){
   // return this.http.patch(''+id);
  //}

  deleteMyProductById(id:number){
    return this.http.delete('https://fakestoreapi.com/carts/'+id);
  }



  //cart http

  getCartById(id:number){
    return this.http.get<Cart>('https://fakestoreapi.com/carts/'+id);
  }

  deleteProductInCartById(id:number){
    return this.http.delete('https://fakestoreapi.com/carts/'+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, newPublish, responseProd, singleProduct } from './interface/cart';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  url:string='http://localhost:8000/api/'
  constructor(private http:HttpClient) {}

  //Get all products http
  getProducts(){
    return this.http.get(this.url+"publicacion/");
  }

  getProductById(id:number){
    return this.http.get("http://127.0.0.1:8000/api/publicacion/"+id);
  }

  addPublish(publish: any ){
    return this.http.post('http://localhost:8000/api/publicacion/', publish)
  }

  //Get my product http
  getMyProducts(id:number){
    return this.http.get('https://fakestoreapi.com/products?limit=10');
  }
  getMyProductById(id:number){
    return this.http.get<responseProd>('https://fakestoreapi.com/products/'+id);
  }
  editMyProductById(id:number, publish:any){
    return this.http.put('http://localhost:8000/api/publicacion/'+id+'/',publish)
  }



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

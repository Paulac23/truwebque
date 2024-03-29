import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, newPublish, responseProd, singleProduct } from './interface/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  url:string='http://127.0.0.1:8000';
  publicacion:string= this.url +'/api/publicacion/';
  constructor(private http:HttpClient) {}

  //Get all products http
  getProducts():Observable<any>{
    return this.http.get(this.publicacion);
  }

  getProductById(id:number):Observable<any>{
   return this.http.get(this.publicacion+id);
  }

  addPublish(publish: any ){
    return this.http.post(this.publicacion, publish)
  }

  //Get my product http
  getMyProducts(){
    return this.http.get(this.publicacion);
  }
  getMyProductById(id:number){
    return this.http.get<responseProd>(this.publicacion+id);
  }
  editMyProductById(id:number, publish:any){
    return this.http.put(this.publicacion+id+'/',publish)
  }
  deleteMyProductById(id:number){
    return this.http.delete(this.publicacion+id);
  }

}

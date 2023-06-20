import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';




const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
       Authorization: 'my-auth-token'
    })
  };

@Injectable({
    providedIn: "root",
})


export class AuthService {

    constructor( private http: HttpClient){ }

    createUser(form:any):Observable<any> {
        // Conecto desde aca la base de datos
        // esto es llamado desde el componente registro
        const URL = 'http://127.0.0.1:8000/auth/register';     
        return this.http.post(URL, form,httpOptions);
      }     
        

    getUser(): Observable<any> {
        // Desde aca conecto para traer la lista de usuarios
        // esto es llamado desde el componente
        return this.http.get("https://reqres.in/api/users");
    }

}

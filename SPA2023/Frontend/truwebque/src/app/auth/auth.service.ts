import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from "rxjs";
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
  private isUserLoggedIn = new BehaviorSubject<boolean>(false);

    constructor( private http: HttpClient){ }

    createUser(form:any) {
        // Conecto desde aca la base de datos
        // esto es llamado desde el componente
        const URL = 'http://127.0.0.1:8000/auth/register';
        return this.http.post(URL, form,httpOptions);
      }

    get isLoggedIn(): Observable<boolean>{
      return this.isUserLoggedIn.asObservable();
    }

    login(user:any): Observable<any | void> {
        return this.http.post("http://127.0.0.1:8000/auth/login",user)
        .pipe(
          map((res:any) => {
            localStorage.setItem('token',JSON.stringify(res.token));
            //localStorage.setItem('user', JSON.stringify(res.user));
            this.isUserLoggedIn.next(true);
            console.log(res)
          }))
    }

    logout():void{
      localStorage.removeItem('token');
      this.isUserLoggedIn.next(false);
      console.log("Logout");
      console.log(this.isUserLoggedIn.value);
    }

}

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from "rxjs";
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

    createUser(form:any):Observable<any> {
        // Conecto desde aca la base de datos
        // esto es llamado desde el componente
        const URL = 'http://127.0.0.1:8000/auth/register';
        return this.http.post(URL, form,httpOptions);
      }

    get isLoggedIn(): Observable<boolean>{
      return this.isUserLoggedIn.asObservable();
    }

    login(user:any): Observable<any | void> {
        let username = user.username;
        return this.http.post("http://127.0.0.1:8000/auth/login",user)
        .pipe(
          map((res:any) => {
            localStorage.setItem('token',JSON.stringify(res.token));
            localStorage.setItem('user', JSON.stringify(username));
            this.isUserLoggedIn.next(true);
          }),
          catchError((err) => this.handlerError(err))
        )
      }

    logout():void{
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.isUserLoggedIn.next(false);
    }

    private handlerError(err:any): Observable<never> {
      let errorMessage = 'An errror occured retrienving data';
      if (err) {
        errorMessage = `Error: code ${err.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }

}

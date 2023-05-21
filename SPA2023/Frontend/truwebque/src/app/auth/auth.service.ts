import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root",
})


export class AuthService {

    constructor( private http: HttpClient){ }

    getUser(): Observable<any> {
        console.log("ta corriendo");
        return this.http.get("https://reqres.in/api/users");
    }

}

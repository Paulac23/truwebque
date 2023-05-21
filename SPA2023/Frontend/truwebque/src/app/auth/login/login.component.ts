import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public users: any = [];
  show = true;


constructor(public authService: AuthService) {}

ngOnInit() {
  this.authService.getUser().subscribe(resp => {
    console.log('ta corriendo verdad?');
    this.users = resp.data;
 });


}



}

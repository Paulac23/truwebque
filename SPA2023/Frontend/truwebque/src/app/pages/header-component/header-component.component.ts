import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit
{
  constructor(public authService:AuthService ) {}



  ngOnInit() {

  }

  LogOut(){
    this.authService.logout();
  }

}

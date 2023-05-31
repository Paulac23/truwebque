import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public users: any = [];
  show = true;

  constructor(public authService: AuthService, private readonly fb: FormBuilder) {};

  loginForm!: FormGroup;

  email= new FormControl('');
  

onSubmit(): void{
    console.log ('Form ->');
  }

ngOnInit(): void {
  this.authService.getUser().subscribe(resp => {
  console.log('ta corriendo verdad?');
  this.users = resp.data;

  this.loginForm = this.initForm();

 })

}


initForm(): FormGroup{
  return this.fb.group({
    email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  })

}

}

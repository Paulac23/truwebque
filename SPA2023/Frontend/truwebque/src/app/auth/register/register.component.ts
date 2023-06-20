import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  submitted = false;

  constructor(public authService: AuthService, private registro: FormBuilder){

    this.registerForm = this.registro.group({   
      username:['', [Validators.required,Validators.pattern(/^[A-Za-z\s\a-z0-9_\.-]+$/)]],
      email: ['',[ Validators.required,Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      password:['', [Validators.required, Validators.minLength(8)]],
    }); 
  }


  ngOnInit(){
   
  }
    
  onSubmit() {
    this.submitted = true;
    // Muestra en Pantalla Que se Cargo todo OK 
    if (this.registerForm.valid) {
      this.authService.createUser(this.registerForm.value).subscribe(resp => {
        console.log(resp);
        });  
      // console.log(this.registerForm.value);
      alert("Registro OK");
      this.registerForm.reset();
    }
    else{
      alert("Completar todos los campos")
    }
  }



}


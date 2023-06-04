import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private registro: FormBuilder

  ){
    this.registerForm = this.registro.group({    
      nombre:['', [Validators.required,Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      apellido:['', [Validators.required,Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      correo: ['',[ Validators.required,Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      password:['', [Validators.required, Validators.minLength(8)]],
      provincia:['', Validators.required],
      celular:['', [Validators.required, Validators.minLength(7),Validators.pattern(/^([0-9])*$/),]],
      });
  }
 
  ngOnInit(){
    
  }


  onSubmit() {
    this.submitted = true;
    // Muestra en Pantalla Que se Cargo todo OK 
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      alert("Login OK")
    }
    else{
      alert("Completar todos los campos")
    }
  }
  
}


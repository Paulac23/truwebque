import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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
  showIncorrectCredentialsAlert = false;

  
  initForm(): FormGroup{
    
    return this.fb.group({
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]],
    })
  
  }

  validarCredenciales(): boolean {
    return true;
  }

onSubmit(): void{
    //console.log ('Form ->');  
      if (this.loginForm.valid) {
        // Realizar la lógica de autenticación
        if (this.validarCredenciales()) {
          // Credenciales válidas, continuar con la acción
          console.log('Credenciales válidas.');
        } else {
          // Credenciales incorrectas, mostrar la alerta
          this.showIncorrectCredentialsAlert = true;
        }
      } else {
        // Formulario inválido, mostrar la alerta
        this.showIncorrectCredentialsAlert = true;
      }
    
     
    
    

  }

ngOnInit(): void {

  this.authService.getUser().subscribe(resp => {
  console.log('ta corriendo verdad?');
  this.users = resp.data;

 })
 this.loginForm = this.initForm();

}




}

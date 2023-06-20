import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public users: any = [];
  show = true;

  constructor(public authService: AuthService,
     private readonly fb: FormBuilder,
     private router:Router) {};

  loginForm!: FormGroup;
  showIncorrectCredentialsAlert = false;


  initForm(): FormGroup{

    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })

  }

  validarCredenciales(): boolean {
    return false;
  }

onSubmit(): void{
    console.log ('Form : '+ this.loginForm.value.username);
    let userData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password}
    console.log(userData);
    this.authService.login(userData).subscribe({
      next:(res:any)=>{
        this.router.navigate(['shop/myProducts']);
      },
      error: (err:any) => {
        this.loginForm.reset();
        alert("Error al Iniciar sesión");
        console.log(err);
      }

    })

      /* if (this.loginForm.valid) {
        // Realizar la lógica de autenticación
        console.log('Formulario válido.');
        console.log(this.loginForm.value);
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
      } */





  }

ngOnInit(): void {

/*   this.authService.getUser().subscribe(resp => {
  this.users = resp.data;

 }) */
 this.loginForm = this.initForm();

}




}

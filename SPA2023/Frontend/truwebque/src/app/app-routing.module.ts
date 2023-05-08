import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* estos 3 los importe*/
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppComponent } from './app.component';

/* agregue estos 3 path y los importe tambien, no se si bien*/
const routes: Routes = [
  {path: "", component: AppComponent,pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

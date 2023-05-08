import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* estos 3 los importe*/
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopModule )
  },
  {
    path: '**', component:AppComponent
  },
  {path: "", component: AppComponent,pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch: "full"},

];

@NgModule({

})
export class AppRoutingModule { }

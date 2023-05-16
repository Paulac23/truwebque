import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* estos 3 los importe*/
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppComponent } from './app.component';
import { CarritoComponentComponent } from './pages/carrito-component/carrito-component.component';
import { CategoriaComponentComponent } from './pages/categoria-component/categoria-component.component';
import { HeaderComponentComponent } from './pages/header-component/header-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { IngresarComponentComponent } from './pages/ingresar-component/ingresar-component.component';
import { PreguntasFrecuentesComponentComponent } from './pages/preguntas-frecuentes-component/preguntas-frecuentes-component.component';
import { PublicacionesComponentComponent } from './pages/publicaciones-component/publicaciones-component.component';
import { QuienesSomosComponentComponent } from './pages/quienes-somos-component/quienes-somos-component.component';
import { TyCoComponentComponent } from './pages/ty-co-component/ty-co-component.component';
import { ContactoComponentComponent } from './pages/contacto-component/contacto-component.component';


const routes: Routes = [

  {path: 'categoria', component:CategoriaComponentComponent},
  {path: 'preguntasfrecuentes', component:PreguntasFrecuentesComponentComponent},
  {path: 'publicaciones', component:PublicacionesComponentComponent},
  {path: 'quienessomos', component:QuienesSomosComponentComponent},
  {path: 'tyc', component:TyCoComponentComponent},
  {path: 'header', component:HeaderComponentComponent},
  //Auth paths
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch: "full"},
  {path: 'ingresar', component:IngresarComponentComponent},
  {path: 'contacto', component:ContactoComponentComponent},

  //Shop module
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopModule )
  },
  {path: '', component:HomeComponentComponent},
  {path: '**', component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

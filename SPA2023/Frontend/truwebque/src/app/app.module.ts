import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopService } from './shop/shop.service';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { CategoriaComponentComponent } from './pages/categoria-component/categoria-component.component';
import { CarritoComponentComponent } from './pages/carrito-component/carrito-component.component';
import { IngresarComponentComponent } from './pages/ingresar-component/ingresar-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuienesSomosComponentComponent } from './pages/quienes-somos-component/quienes-somos-component.component';
import { PreguntasFrecuentesComponentComponent } from './pages/preguntas-frecuentes-component/preguntas-frecuentes-component.component';
import { ContactoComponentComponent } from './pages/contacto-component/contacto-component.component';
import { TyCoComponentComponent } from './pages/ty-co-component/ty-co-component.component';
import { PublicacionesComponentComponent } from './pages/publicaciones-component/publicaciones-component.component';
import { HeaderComponentComponent } from './pages/header-component/header-component.component';
import { FooterComponentComponent } from './pages/footer-component/footer-component.component';
import { NavbarComponentComponent } from './pages/navbar-component/navbar-component.component';
import { CarruselComponentComponent } from './pages/carrusel-component/carrusel-component.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const appRoutes:Routes=[
  {path: '', component:HomeComponentComponent},
  {path: 'categoria', component:CategoriaComponentComponent},
  {path: 'ingresar', component:IngresarComponentComponent},
  {path: 'carrito', component:CarritoComponentComponent},
  {path: 'preguntasfrecuentes', component:PreguntasFrecuentesComponentComponent},
  {path: 'publicaciones', component:PublicacionesComponentComponent},
  {path: 'quienessomos', component:QuienesSomosComponentComponent},
  {path: 'tyc', component:TyCoComponentComponent},
  {path: 'header', component:HeaderComponentComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PagesComponent,
    HomeComponentComponent,
    CategoriaComponentComponent,
    CarritoComponentComponent,
    IngresarComponentComponent,
    QuienesSomosComponentComponent,
    PreguntasFrecuentesComponentComponent,
    ContactoComponentComponent,
    TyCoComponentComponent,
    PublicacionesComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NavbarComponentComponent,
    CarruselComponentComponent,
    LoginComponent,
    RegisterComponent
  

  ],

  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

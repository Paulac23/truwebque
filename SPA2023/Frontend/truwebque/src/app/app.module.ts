import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopService } from './shop/shop.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponentComponent } from './pages/header-component/header-component.component';
import { FooterComponentComponent } from './pages/footer-component/footer-component.component';
import { CarruselComponentComponent } from './pages/carrusel-component/carrusel-component.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CategoriaComponentComponent } from './pages/categoria-component/categoria-component.component';
import { CarritoComponentComponent } from './pages/carrito-component/carrito-component.component';
import { PreguntasFrecuentesComponentComponent } from './pages/preguntas-frecuentes-component/preguntas-frecuentes-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { PublicacionesComponentComponent } from './pages/publicaciones-component/publicaciones-component.component';
import { TyCoComponentComponent } from './pages/ty-co-component/ty-co-component.component';
import { QuienesSomosComponentComponent } from './pages/quienes-somos-component/quienes-somos-component.component';
import { IngresarComponentComponent } from './pages/ingresar-component/ingresar-component.component';
import { AuthComponent } from './auth/auth.component';
import { ContactoComponentComponent } from './pages/contacto-component/contacto-component.component';
import { Routes } from '@angular/router';

const appRoutes:Routes=[
  {path: '', component:HomeComponentComponent},
  {path: 'categoria', component:CategoriaComponentComponent},
  {path: 'ingresar', component:IngresarComponentComponent},
  {path: 'carrito', component:CarritoComponentComponent},
  {path: 'preguntasfrecuentes', component:PreguntasFrecuentesComponentComponent},
  {path: 'publicaciones', component:PublicacionesComponentComponent},
  {path: 'header', component:HeaderComponentComponent},
  {path: 'tyc', component:TyCoComponentComponent},
  {path: 'quienessomos', component:QuienesSomosComponentComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
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
    CarruselComponentComponent,
  

  ],
})
export class AppModule { }

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
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
import { ShopService } from './shop/shop.service';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
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
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,

  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})

export class AppModule { }

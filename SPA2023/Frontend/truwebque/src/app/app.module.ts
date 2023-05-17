import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopService } from './shop/shop.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './pages/header-component/header-component.component';
import { FooterComponentComponent } from './pages/footer-component/footer-component.component';
import { CarruselComponentComponent } from './pages/carrusel-component/carrusel-component.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponentComponent } from './pages/home-component/home-component.component';



  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

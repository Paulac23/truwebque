
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { CategoriaComponentComponent } from './categoria-component/categoria-component.component';
import { PreguntasFrecuentesComponentComponent } from './preguntas-frecuentes-component/preguntas-frecuentes-component.component';
import { PublicacionesComponentComponent } from './publicaciones-component/publicaciones-component.component';
import { QuienesSomosComponentComponent } from './quienes-somos-component/quienes-somos-component.component';
import { TyCoComponentComponent } from './ty-co-component/ty-co-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';



const routes: Routes=[
  {
    path:'',
    children:[
      {path:'home', component:HomeComponentComponent},
      {path:'header', component:HeaderComponentComponent},
      {path: 'categoria', component:CategoriaComponentComponent},
      {path: 'preguntasfrecuentes', component:PreguntasFrecuentesComponentComponent},
      {path: 'publicaciones', component:PublicacionesComponentComponent},
      {path: 'quienessomos', component:QuienesSomosComponentComponent},
      {path: 'tyc', component:TyCoComponentComponent},
      {path: 'header', component:HeaderComponentComponent},
      {path:'footer', component:FooterComponentComponent},
      

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

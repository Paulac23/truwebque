import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopModule )
  },
  {
    path: '**', component:AppComponent
  }
];

@NgModule({

})
export class AppRoutingModule { }

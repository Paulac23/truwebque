import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {
    path:'', component:AllProductsComponent
  },
  {
    path:'product', component:ProductComponent
  },
  { path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }

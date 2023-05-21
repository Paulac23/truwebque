import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { MyProductsComponent } from './component/my-products/my-products.component';

const routes: Routes = [
  {
    path:'', component:AllProductsComponent
  },
  {
    path:'product', component:ProductComponent
  },
  { path:'cart', component:CartComponent},
  { path:'newProduct', component:ProductFormComponent},
  { path:'myProducts', component:MyProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { MyProductsComponent } from './component/my-products/my-products.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { PaymentComponent } from './component/payment/payment.component';

const routes: Routes = [
  {
    path:'', component:AllProductsComponent
  },
  {
    path:'product', component:ProductComponent
  },
  { path:'cart', component:CartComponent},
  { path:'newProduct', component:ProductFormComponent},
  { path:'myProducts', component:MyProductsComponent},
  { path:'subscribe', component:SubscribeComponent},
  { path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }

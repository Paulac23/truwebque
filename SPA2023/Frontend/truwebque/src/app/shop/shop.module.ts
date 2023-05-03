import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { HttpClientModule} from'@angular/common/http';

@NgModule({
  declarations: [
    ProductComponent,
    CartComponent,
    AllProductsComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule
  ]

})
export class ShopModule { }

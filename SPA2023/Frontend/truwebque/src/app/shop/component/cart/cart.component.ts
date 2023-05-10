import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Cart, Products, responseProd, singleProduct } from '../../interface/cart';
import { resProduct } from '../../interface/resProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  userId:number=1;
  name?:Cart;
  //products:Products[] = [];
  hasProducts:boolean=true;
  productsInCart:responseProd[]=[];

constructor(private shopService:ShopService){}

  ngOnInit() :void {
    this.shopService.getCartById(this.userId)
    .subscribe((res) => {
     this.name=res;
     console.log(this.name.products[0]['productId'])
     console.log(this.name.products)
      let products = this.name.products;
      if(products.length>1){
        this.hasProducts=false;
      }
      for (const i of products) {
        console.log(i)
        let quantity= i.quantity;
        this.shopService.getProductById(i.productId)
        .subscribe((item)=> {
          let respProduct = <responseProd>{}
          respProduct.title= item.title;
          respProduct.price=item.price;
          respProduct.quantity=quantity;
          respProduct.description=item.description;
          respProduct.image=item.image;
          this.productsInCart.push(respProduct);
        })
      }
    })
  }



pencilFill = false;
trashFill = false;

fillPencil(){
    this.pencilFill= !this.pencilFill;
  }

fillTrash(){
  this.trashFill= !this.trashFill;
}
}

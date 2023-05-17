import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Cart, responseProd } from '../../interface/cart';

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
  total:number = 0;


constructor(private shopService:ShopService){}

  ngOnInit() :void {
    this.shopService.getCartById(this.userId)
    .subscribe((res) => {
      this.name=res;
      let products = this.name.products;

      if(products.length>1){
        this.hasProducts=false;
      }

      for (const i of products) {
        console.log(i)
        let quantity= i.quantity;
        let idProduct=i.productId;
        this.shopService.getProductById(idProduct)
        .subscribe((item)=> {
          let respProduct = <responseProd>{}
          respProduct.id=idProduct
          respProduct.title= item.title;
          respProduct.price=item.price;
          respProduct.quantity=quantity;
          respProduct.description=item.description;
          respProduct.image=item.image;
          this.productsInCart.push(respProduct);
        })
      }
    })
    this.suma()
  }





  borrar(id:number ){
    const res = this.shopService.deleteProductInCartById(id)
    .subscribe((res)=>{
      console.log(res)
    });
    this.suma()

  }
suma(){
  for (const j of this.productsInCart) {
    this.total += j.price;

  }
  console.log(this.total)
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
